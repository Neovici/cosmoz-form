import{A as V,w as ie,b as p,r as St,D as At,E as N,n as bo,M as yo,u as K,v as de,h as Be,p as Tt,t as re}from"./iframe-DBfXMCbQ.js";import{_ as zo}from"./preload-helper-PPVm8Dsz.js";const y=t=>t??V;function _(t,e,o){return t?e(t):o?.(t)}const wo=({slot:t,title:e,className:o,width:n="24",height:s="24",styles:r}={})=>p`
  <svg
    slot=${y(t)}
    class=${`alert-circle-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${s}
    style=${y(r)}
  >
    ${_(e,()=>ie`<title>${e}</title>`)}
    <path
      d="M12 8v4m0 4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`,_o=({slot:t,title:e,className:o,width:n="24",height:s="24",styles:r}={})=>p`
  <svg
    slot=${y(t)}
    class=${`chevron-down-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${s}
    style=${y(r)}
  >
    ${_(e,()=>ie`<title>${e}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`,xo=({slot:t,title:e,className:o,width:n="24",height:s="24",styles:r}={})=>p`
  <svg
    slot=${y(t)}
    class=${`file-attachment-02-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${s}
    style=${y(r)}
  >
    ${_(e,()=>ie`<title>${e}</title>`)}
    <path
      d="M12.5 2h2.7c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 4.28 20 5.12 20 6.8v10.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2v-.7M16 13h-4.5M16 9h-3.5m3.5 8H8m-2-7V4.5a1.5 1.5 0 1 1 3 0V10a3 3 0 1 1-6 0V6"
    />
  </svg>
`,$o=({slot:t,title:e,className:o,width:n="24",height:s="24",styles:r}={})=>p`
  <svg
    slot=${y(t)}
    class=${`help-circle-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${s}
    style=${y(r)}
  >
    ${_(e,()=>ie`<title>${e}</title>`)}
    <path
      d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`,Eo=({slot:t,title:e,className:o,width:n="24",height:s="24",styles:r}={})=>p`
  <svg
    slot=${y(t)}
    class=${`info-circle-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${s}
    style=${y(r)}
  >
    ${_(e,()=>ie`<title>${e}</title>`)}
    <path
      d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`,Rt=({slot:t,title:e,className:o,width:n="24",height:s="24",styles:r}={})=>p`
  <svg
    slot=${y(t)}
    class=${`x-close-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${s}
    style=${y(r)}
  >
    ${_(e,()=>ie`<title>${e}</title>`)}
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
`;let ke,Lt=0;function tt(t){ke=t}function ot(){ke=null,Lt=0}function Co(){return Lt++}const Fe=Symbol("haunted.phase"),$e=Symbol("haunted.hook"),nt=Symbol("haunted.update"),st=Symbol("haunted.commit"),Q=Symbol("haunted.effects"),ue=Symbol("haunted.layoutEffects"),He="haunted.context";class ko{update;host;virtual;[$e];[Q];[ue];constructor(e,o){this.update=e,this.host=o,this[$e]=new Map,this[Q]=[],this[ue]=[]}run(e){tt(this);let o=e();return ot(),o}_runEffects(e){let o=this[e];tt(this);for(let n of o)n.call(this);ot()}runEffects(){this._runEffects(Q)}runLayoutEffects(){this._runEffects(ue)}teardown(){this[$e].forEach(o=>{typeof o.teardown=="function"&&o.teardown(!0)})}}const So=Promise.resolve().then.bind(Promise.resolve());function Ot(){let t=[],e;function o(){e=null;let n=t;t=[];for(var s=0,r=n.length;s<r;s++)n[s]()}return function(n){t.push(n),e==null&&(e=So(o))}}const Ao=Ot(),rt=Ot();class To{renderer;host;state;[Fe];_updateQueued;_active;constructor(e,o){this.renderer=e,this.host=o,this.state=new ko(this.update.bind(this),o),this[Fe]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(Ao(()=>{let e=this.handlePhase(nt);rt(()=>{this.handlePhase(st,e),rt(()=>{this.handlePhase(Q)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,o){switch(this[Fe]=e,e){case st:this.commit(o),this.runEffects(ue);return;case nt:return this.render();case Q:return this.runEffects(Q)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const fe=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Ro=t=>t?.map(e=>typeof e=="string"?fe(e):e),Lo=(t,...e)=>t.flatMap((o,n)=>[o,e[n]||""]).join(""),T=Lo,Oo=(t="")=>t.replace(/-+([a-z])?/g,(e,o)=>o?o.toUpperCase():"");function Mo(t){class e extends To{frag;renderResult;constructor(s,r,i){super(s,i||r),this.frag=r}commit(s){this.renderResult=t(s,this.frag)}}function o(n,s,r){const i=(r||s||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:h}=r||s||{},d=Ro(n.styleSheets||h);class g extends i{_scheduler;static get observedAttributes(){return n.observedAttributes||a||[]}constructor(){if(super(),l===!1)this._scheduler=new e(n,this);else{const b=this.attachShadow({mode:"open",...c});d&&(b.adoptedStyleSheets=d),this._scheduler=new e(n,b,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(b,f,A){if(f===A)return;let $=A===""?!0:A;Reflect.set(this,Oo(b),$)}}function u(m){let b=m,f=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return b},set(A){f&&b===A||(f=!0,b=A,this._scheduler&&this._scheduler.update())}})}const v=new Proxy(i.prototype,{getPrototypeOf(m){return m},set(m,b,f,A){let $;return b in m?($=Object.getOwnPropertyDescriptor(m,b),$&&$.set?($.set.call(A,f),!0):(Reflect.set(m,b,f,A),!0)):(typeof b=="symbol"||b[0]==="_"?$={enumerable:!0,configurable:!0,writable:!0,value:f}:$=u(f),Object.defineProperty(A,b,$),$.set&&$.set.call(A,f),!0)}});return Object.setPrototypeOf(g.prototype,v),g}return o}class G{id;state;constructor(e,o){this.id=e,this.state=o}}function Io(t,...e){let o=Co(),n=ke[$e],s=n.get(o);return s||(s=new t(o,ke,...e),n.set(o,s)),s.update(...e)}function W(t){return Io.bind(null,t)}function Mt(t){return W(class extends G{callback;lastValues;values;_teardown;constructor(e,o,n,s){super(e,o),t(o,this)}update(e,o){this.callback=e,this.values=o}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,o)=>this.lastValues[o]!==e)}})}function It(t,e){t[Q].push(e)}const x=Mt(It),Po=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,Pt=W(class extends G{Context;value;_ranEffect;_unsubscribe;constructor(t,e,o){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,It(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};Po(this.state.host).dispatchEvent(new CustomEvent(He,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:s}=e;this.value=n?s:t.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function No(t){return e=>{const o={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(He,this)}disconnectedCallback(){this.removeEventListener(He,this)}handleEvent(n){const{detail:s}=n;s.Context===o&&(s.value=this.value,s.unsubscribe=this.unsubscribe.bind(this,s.callback),this.listeners.add(s.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let s of this.listeners)s(n)}get value(){return this._value}},Consumer:t(function({render:n}){const s=Pt(o);return n(s)},{useShadowDOM:!1}),defaultValue:e};return o}}const S=W(class extends G{value;values;constructor(t,e,o,n){super(t,e),this.value=o(),this.values=n}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,o)=>this.values[o]!==e)}}),w=(t,e)=>S(()=>t,e);function Vo(t,e){t[ue].push(e)}const it=Mt(Vo),H=W(class extends G{args;constructor(t,e,o){super(t,e),this.updater=this.updater.bind(this),typeof o=="function"&&(o=o()),this.makeArgs(o)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}}),Bo=W(class extends G{reducer;currentState;constructor(t,e,o,n,s){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=s!==void 0?s(n):n}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}}),Fo=/([A-Z])/gu,ve=W(class extends G{property;eventName;constructor(t,e,o,n){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=o,this.eventName=o.replace(Fo,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updateProp(n))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}});function M(t){return S(()=>({current:t}),[])}function jo({render:t}){const e=Mo(t),o=No(e);return{component:e,createContext:o}}const j={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},ee=t=>(...e)=>({_$litDirective$:t,values:e});let be=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,n){this._$Ct=e,this._$AM=o,this._$Ci=n}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}};const pe=(t,e)=>{const o=t._$AN;if(o===void 0)return!1;for(const n of o)n._$AO?.(e,!1),pe(n,e);return!0},Se=t=>{let e,o;do{if((e=t._$AM)===void 0)break;o=e._$AN,o.delete(t),t=e}while(o?.size===0)},Nt=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(o===void 0)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),qo(e)}};function Do(t){this._$AN!==void 0?(Se(this),this._$AM=t,Nt(this)):this._$AM=t}function Ho(t,e=!1,o=0){const n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(n))for(let r=o;r<n.length;r++)pe(n[r],!1),Se(n[r]);else n!=null&&(pe(n,!1),Se(n));else pe(this,t)}const qo=t=>{t.type==j.CHILD&&(t._$AP??=Ho,t._$AQ??=Do)};class Ge extends be{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,n){super._$AT(e,o,n),Nt(this),this.isConnected=e._$AU}_$AO(e,o=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),o&&(pe(this,e),Se(this))}setValue(e){if(St(this._$Ct))this._$Ct._$AI(e,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const{component:L,createContext:Yo}=jo({render:At}),Uo=T`
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
`,Go=()=>V,Wo=L(Go,{styleSheets:[Uo]});customElements.define("cosmoz-spinner",Wo);const ae=fe(T`
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
`),Xo=T`
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
`,Zo=T`
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
		${Xo}
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
`,Ko=["variant","size","disabled","full-width","type","value"],Qo=t=>{const e=t.hasAttribute("disabled"),o=t.getAttribute("type")||"button";return x(()=>{const n=s=>{t.hasAttribute("disabled")&&s.stopImmediatePropagation()};return t.addEventListener("click",n,{capture:!0}),()=>t.removeEventListener("click",n,{capture:!0})},[]),p`
		<button type=${o} class="button" ?disabled=${e} part="button">
			<slot name="prefix"></slot>
			<slot></slot>
			<slot name="suffix"></slot>
		</button>
	`};customElements.define("cosmoz-button",L(Qo,{observedAttributes:Ko,styleSheets:[ae,Zo],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const je=new WeakMap,U=ee(class extends Ge{render(t){return V}update(t,[e]){const o=e!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),V}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let o=je.get(e);o===void 0&&(o=new WeakMap,je.set(e,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?je.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Jo=t=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}};class at extends Jo(HTMLElement){static is="cosmoz-dialog-connectable"}customElements.define(at.is,at);const ne=t=>`calc(var(--cz-spacing) * ${t})`,en=T`
	dialog:not([open]) {
		display: none;
	}

	dialog {
		position: relative;
		margin: auto;
		padding: 0;
		border: none;
		width: 550px;
		max-width: 98vw;
		max-height: 96vh;
		border-radius: var(--cz-radius-2xl);
		display: flex;
		flex-direction: column;
		background: var(--cz-color-bg-secondary);
		box-shadow: var(--cz-shadow-2xl);
		outline: none;
	}

	dialog::backdrop {
		background: color-mix(in srgb, var(--cz-color-bg-overlay) 70%, transparent);
	}

	.title {
		display: flex;
		align-items: center;
		gap: ${ne(4)};
		padding: ${ne(6)} ${ne(6)};

		& h2 {
			color: var(--cz-color-text-primary);
			font-size: var(--cz-text-lg);
			font-weight: var(--cz-font-weight-semibold);
			line-height: var(--cz-text-lg-line-height);
		}

		& .subtitle {
			font-size: var(--cz-text-sm);
			font-weight: var(--cz-font-weight-regular);
			line-height: var(--cz-text-sm-line-height);
			color: var(--cz-color-text-secondary);
		}
	}

	.divider {
		height: 1px;
		background: var(--cz-color-border-primary);
	}

	:host(:not([unmovable])) .title {
		cursor: move;
		user-select: none;
	}

	.content {
		overflow: hidden;
		display: flex;
		flex-direction: column;
		padding: ${ne(6)};
		color: var(--cz-color-text-primary);
		font-size: var(--cz-text-base);
		font-weight: var(--cz-font-weight-regular);
		line-height: var(--cz-text-base-line-height);
	}

	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: calc(var(--cz-spacing) * 10);
		height: calc(var(--cz-spacing) * 10);
		background: var(--cz-color-bg-secondary);
		border: 1px solid var(--cz-color-border-primary);
		border-radius: var(--cz-radius-md);
		color: var(--cz-color-text-secondary);
		box-shadow: var(--cz-shadow-sm);

		& svg {
			width: calc(var(--cz-spacing) * 5);
			height: calc(var(--cz-spacing) * 5);
		}
	}

	.close {
		position: absolute;
		top: ${ne(4)};
		right: ${ne(4)};
	}
`,le=W(class extends G{update(){return this.state.host}}),tn=()=>{const t=le(),e=w(()=>{t.dispatchEvent(new Event("close")),t.onClose?.()},[]);return x(()=>{const o=t.shadowRoot;if(!o)return;const n=s=>s.target.value==="cancel"&&e();return o.addEventListener("click",n),()=>{o.removeEventListener("click",n)}},[]),{close:e}},on=(t,e,o)=>{const n=t.width/3,s=t.height/3,r=Math.min(window.innerWidth-2*n,Math.max(-n,e)),i=Math.min(window.innerHeight-2*s,Math.max(-s,o));return{x:r,y:i}},nn=(t,e,o,n)=>s=>{if(!s.target.closest(e))return;const r=on,i=t.getBoundingClientRect(),a=s.clientX-i.x,l=s.clientY-i.y,c=(g,u)=>{const v=g-a,m=u-l,b=r(i,v,m);Object.assign(t.style,{inset:"auto",margin:"0",left:b.x+"px",top:b.y+"px",transform:"none"})},h=g=>c(g.clientX,g.clientY),d=g=>{document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",d)};document.addEventListener("mousemove",h),document.addEventListener("mouseup",d)},sn=()=>{const t=le(),{unmovable:e}=t;x(()=>{if(e)return;const o=t.shadowRoot;if(!o)return;const n=o.querySelector("dialog");if(!n)return;const s=nn(n,".title");return o.addEventListener("mousedown",s),()=>o.removeEventListener("mousedown",s)},[e])},rn=({title:t,subtitle:e,icon:o,content:n,closeable:s=!1,onClose:r})=>p`
		<div class="title" part="title">
			${_(o,()=>p`<div class="icon">${o}</div>`)}

			<div>
				<h2>${t}</h2>
				${_(e,()=>p`<p class="subtitle">${e}</p>`)}
			</div>

			${_(s,()=>p`
					<cosmoz-button
						variant="tertiary"
						size="sm"
						class="close"
						part="close"
						@click=${r}
					>
						${Rt({width:"20",height:"20"})}
					</cosmoz-button>
				`)}
		</div>

		<div class="divider"></div>
		<div class="content" part="content">${n}</div>
	`,We=(t,{observedAttributes:e,styles:o,...n}={})=>L(s=>{const{close:r}=tn();sn();const i=M();return p`
				${_(o,()=>p`<style>
							${o}
						</style>`)}
				<cosmoz-dialog-connectable
					@connected=${a=>{const l=a.target.querySelector("dialog");l&&!l.open&&l.showModal()}}
				>
					<dialog ${U(i)} @close=${r} part="dialog">
						${rn({title:s.heading||s.title,subtitle:s.subtitle,icon:s.icon,content:t(s),closeable:s.closeable,onClose:r})}
					</dialog>
				</cosmoz-dialog-connectable>
			`},{observedAttributes:["title","subtitle","icon","heading","unmovable","closeable",...e??[]],styleSheets:[ae,en],...n});customElements.define("cosmoz-dialog-loading",We(()=>p`
			<style>
				.content {
					flex-direction: row;
					align-items: center;
					justify-content: center;
					padding: calc(var(--cz-spacing) * 8) calc(var(--cz-spacing) * 6);
				}
				cosmoz-spinner {
					width: 32px;
					height: 32px;
					margin-right: calc(var(--cz-spacing) * 3);
				}
			</style>
			<cosmoz-spinner></cosmoz-spinner>
			<slot></slot>
		`));function an(t){return()=>t}const ln=an(),se=ln,Ae=t=>t,R=(t,...e)=>typeof t=="function"?t(...e):t;class cn{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}let dn=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};const lt=t=>!bo(t)&&typeof t.then=="function",ct=1073741823;let hn=class extends Ge{constructor(){super(...arguments),this._$Cwt=ct,this._$Cbt=[],this._$CK=new cn(this),this._$CX=new dn}render(...e){return e.find(o=>!lt(o))??N}update(e,o){const n=this._$Cbt;let s=n.length;this._$Cbt=o;const r=this._$CK,i=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<o.length&&!(a>this._$Cwt);a++){const l=o[a];if(!lt(l))return this._$Cwt=a,l;a<s&&l===n[a]||(this._$Cwt=ct,s=0,Promise.resolve(l).then(async c=>{for(;i.get();)await i.get();const h=r.deref();if(h!==void 0){const d=h._$Cbt.indexOf(l);d>-1&&d<h._$Cwt&&(h._$Cwt=d,h.setValue(c))}}))}return N}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const ge=ee(hn);const dt=(t,e,o)=>{const n=new Map;for(let s=e;s<=o;s++)n.set(t[s],s);return n},Xe=ee(class extends be{constructor(t){if(super(t),t.type!==j.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,o){let n;o===void 0?o=e:e!==void 0&&(n=e);const s=[],r=[];let i=0;for(const a of t)s[i]=n?n(a,i):i,r[i]=o(a,i),i++;return{values:r,keys:s}}render(t,e,o){return this.dt(t,e,o).values}update(t,[e,o,n]){const s=yo(t),{values:r,keys:i}=this.dt(e,o,n);if(!Array.isArray(s))return this.ut=i,r;const a=this.ut??=[],l=[];let c,h,d=0,g=s.length-1,u=0,v=r.length-1;for(;d<=g&&u<=v;)if(s[d]===null)d++;else if(s[g]===null)g--;else if(a[d]===i[u])l[u]=K(s[d],r[u]),d++,u++;else if(a[g]===i[v])l[v]=K(s[g],r[v]),g--,v--;else if(a[d]===i[v])l[v]=K(s[d],r[v]),de(t,l[v+1],s[d]),d++,v--;else if(a[g]===i[u])l[u]=K(s[g],r[u]),de(t,s[d],s[g]),g--,u++;else if(c===void 0&&(c=dt(i,u,v),h=dt(a,d,g)),c.has(a[d]))if(c.has(a[g])){const m=h.get(i[u]),b=m!==void 0?s[m]:null;if(b===null){const f=de(t,s[d]);K(f,r[u]),l[u]=f}else l[u]=K(b,r[u]),de(t,s[d],b),s[m]=null;u++}else Be(s[g]),g--;else Be(s[d]),d++;for(;u<=v;){const m=de(t,l[v+1]);K(m,r[u]),l[u++]=m}for(;d<=g;){const m=s[d++];m!==null&&Be(m)}return this.ut=i,Tt(t,l),N}}),un=t=>typeof t=="object"&&t!==null&&Symbol.iterator in t;function D(t){return t==null?[]:Array.isArray(t)?t:typeof t=="string"?[t]:un(t)?Array.from(t):[t]}const De=(t,e=Ae)=>o=>{const n=D(t).map(e);return D(o).filter(s=>!n.includes(e(s)))};function Ee(t){return t?e=>typeof e=="object"&&e!==null?e[t]:e:Ae}const pn=t=>{const e=Ee(t);return o=>typeof o=="string"?o:e(o)?.toString()||""},mn=t=>e=>{const o={};for(const n in e)t.includes(n)&&(o[n]=e[n]);return o};function ht(t,e,...o){return t?t(e,...o):e}const Te=ee(class extends be{constructor(t){if(super(t),t.type!==j.PROPERTY&&t.type!==j.ATTRIBUTE&&t.type!==j.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!St(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===N||e===V)return e;const o=t.element,n=t.name;if(t.type===j.PROPERTY){if(e===o[n])return N}else if(t.type===j.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(n))return N}else if(t.type===j.ATTRIBUTE&&o.getAttribute(n)===e+"")return N;return Tt(t),e}}),gn=T`
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
`;customElements.define("cosmoz-tooltip-content",L(()=>p`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[ae,gn]}));const qe=fe(T`
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
`),ut=(t,e,o)=>At(p`<cosmoz-tooltip-content>
			${_(e,()=>p`<strong slot="heading">${e}</strong>`)}
			${_(o,()=>p`<p slot="description">${o}</p>`)}
		</cosmoz-tooltip-content>`,t),fn=(t,e)=>{const{for:o,heading:n,description:s,placement:r="top",delay:i=300,disabled:a=!1}=e,l=M(),h=!!(n||s)&&!a;x(()=>{if(!o||!h)return;const d=t.getRootNode(),g=d.adoptedStyleSheets??[];g.includes(qe)||(d.adoptedStyleSheets=[...g,qe]);const u=document.createElement("div");u.setAttribute("popover","manual"),u.setAttribute("role","tooltip"),u.classList.add("cosmoz-tooltip-popover"),t.after(u),l.current=u,ut(u,n,s);const v=`[name="${o}"]`,m=`--tooltip-anchor-${o}`;let b;const f=C=>{a||(clearTimeout(b),C.style.anchorName=m,u.style.positionAnchor=m,u.style.positionArea=r,b=window.setTimeout(()=>u.showPopover(),i))},A=()=>{clearTimeout(b),u.hidePopover()},$=C=>{const E=C.target.closest?.(v);E&&f(E)},I=C=>{const E=C.target.closest?.(v);if(!E)return;const O=C.relatedTarget;O&&E.contains(O)||A()},F=C=>{const E=C.target.closest?.(v);E&&f(E)},B=C=>{C.target.closest?.(v)&&A()};return d.addEventListener("pointerover",$),d.addEventListener("pointerout",I),d.addEventListener("focusin",F),d.addEventListener("focusout",B),()=>{clearTimeout(b),d.removeEventListener("pointerover",$),d.removeEventListener("pointerout",I),d.removeEventListener("focusin",F),d.removeEventListener("focusout",B),u.hidePopover(),u.remove(),l.current=void 0}},[o,r,i,h]),x(()=>{!o||!l.current||ut(l.current,n,s)},[n,s,o]),x(()=>{!a||!l.current||l.current.hidePopover()},[a])},vn=t=>{const[e,o]=H(!1);return x(()=>{const n=t.current;if(!n)return;const s=()=>{o(n.assignedElements().length>0)};return s(),n.addEventListener("slotchange",s),()=>n.removeEventListener("slotchange",s)},[t.current]),e},bn=T`
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
`,yn=t=>{const{heading:e,description:o,for:n,placement:s="top",delay:r=300,disabled:i=!1}=t,a=M(),l=M(),c=M(),h=vn(c),g=!!(e||o||h)&&!i,u=w(()=>{g&&(clearTimeout(l.current),l.current=window.setTimeout(()=>{a.current?.showPopover()},r))},[r,g]);x(()=>{i&&(clearTimeout(l.current),a.current?.hidePopover())},[i]);const v=w(()=>{clearTimeout(l.current),a.current?.hidePopover()},[]);return x(()=>{if(n)return;const m=b=>{const f=b.relatedTarget;f&&t.contains(f)||v()};return t.addEventListener("pointerover",u),t.addEventListener("pointerout",m),()=>{t.removeEventListener("pointerover",u),t.removeEventListener("pointerout",m)}},[n,u,v]),fn(t,{for:n,heading:e,description:o,placement:s,delay:r,disabled:i}),n?V:g?p`
		<slot @focusin=${u} @focusout=${v}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${s}"
			${U(a)}
		>
			<cosmoz-tooltip-content>
				${_(e,()=>p`<strong slot="heading">${e}</strong>`)}
				${_(o,()=>p`<p slot="description">${o}</p>`)}
				<slot name="content" ${U(c)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:p`
			<slot></slot>
			<slot name="content" ${U(c)} hidden></slot>
		`};customElements.define("cosmoz-tooltip",L(yn,{styleSheets:[ae,qe,bn],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const Vt=(t,{hint:e,label:o,invalid:n,errorMessage:s,compact:r,required:i})=>p`
		<!-- label: hidden in compact mode -->
		${_(!r&&o,()=>p`<label for="input" part="label"
					>${o}
					${_(i,()=>p`<span class="required">*</span>`)}
				</label>`)}
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${t}
			</div>
			<!-- compact: tooltip always visible, red icon when invalid -->
			${_(r&&n&&s,()=>p`<cosmoz-tooltip
						placement="top"
						description=${s}
						delay="300"
					>
						${Eo({width:"16px",height:"16px"})}
					</cosmoz-tooltip>`)}

			<slot name="suffix"></slot>
		</div>
		<!-- hint: visible when valid, hidden when invalid or compact -->
		${_(!r&&e&&!n,()=>p`<span class="hint" part="hint">${e}</span>`)}
		<!-- error: replaces hint when invalid, hidden in compact -->
		${_(!r&&n&&s,()=>p`<span class="error" part="error">${s}</span>`)}
	`,Bt=["autocomplete","readonly","disabled","maxlength","invalid"],ce=(t,...e)=>t.flatMap((o,n)=>[o,e[n]??""]).join(""),Ft=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},jt=ce`
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
`,zn=t=>S(()=>{if(t==null)return;const e=new RegExp(t,"u");return o=>{!o.defaultPrevented&&o.data&&!e.test(o.data)&&o.preventDefault()}},[t]),wn=W(class extends G{values;constructor(t,e,o,n){super(t,e),Object.assign(e.host,o),this.values=n}update(t,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,t))}hasChanged(t=[]){return t.some((e,o)=>this.values[o]!==e)}}),_n=/([A-Z])/gu,pt=(t,e,o)=>{t[e]=o,t.dispatchEvent(new CustomEvent(e.replace(_n,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},Dt=t=>{const e=M(void 0),o=w(l=>e.current=l,[]),n=t.shadowRoot,s=w(l=>t.dispatchEvent(new Event(l.type,{bubbles:l.bubbles})),[]),r=w(l=>pt(t,"value",l.target.value),[]),i=w(l=>pt(t,"focused",l.type==="focus"),[]),a=w(()=>{const l=e.current?.checkValidity();return t.toggleAttribute("invalid",!l),l},[]);return wn({validate:a},[a]),x(()=>{const l=c=>{c.composedPath()[0]?.closest?.("input, textarea")||(c.preventDefault(),e.current?.focus())};return n.addEventListener("mousedown",l),()=>n.removeEventListener("mousedown",l)},[]),{onChange:s,onFocus:i,onInput:r,onRef:o}},xn=({placeholder:t})=>t||" ",$n=(t,e)=>e??(t==="date"?"9999-12-31":void 0),En=["type","variant","hint","compact","required","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Bt],Cn=t=>{const{type:e="text",pattern:o,allowedPattern:n,autocomplete:s,value:r,readonly:i,disabled:a,min:l,max:c,step:h,maxlength:d,required:g}=t,{onChange:u,onFocus:v,onInput:m,onRef:b}=Dt(t),f=zn(n);return t.toggleAttribute("has-value",!!r),Vt(p`
			<input
				${U(b)}
				style="--chars: ${r?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${e}
				pattern=${y(o)}
				autocomplete=${y(s)}
				placeholder=${xn({placeholder:t.placeholder})}
				?readonly=${i}
				aria-disabled=${a?"true":"false"}
				?disabled=${a}
				?required=${g}
				.value=${Te(r??"")}
				maxlength=${y(d)}
				@beforeinput=${f}
				@input=${m}
				@change=${u}
				@focus=${v}
				@blur=${v}
				min=${y(l)}
				max=${y($n(e,c))}
				step=${y(h)}
			/>
		`,t)};customElements.define("cosmoz-input",L(Cn,{observedAttributes:En,styleSheets:[fe(jt)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const mt=t=>{t.style.height="",t.style.height=`${t.scrollHeight}px`},kn=(t,e=0)=>{if(e>0){const o=t.getAttribute("rows")??"",n=t.style.height;t.style.height="",t.setAttribute("rows",e),t.style.maxHeight=t.getBoundingClientRect().height+"px",t.style.height=n,t.setAttribute("rows",o)}},Sn=t=>{const{value:e,maxRows:o}=t,n=S(()=>()=>t.shadowRoot.querySelector("#input"),[]);x(()=>kn(n(),o),[o,n]),x(()=>mt(n()),[n,e]),x(()=>{const s=n(),r=new ResizeObserver(()=>requestAnimationFrame(()=>mt(s)));return r.observe(s),()=>r.unobserve(s)},[n])},An=["rows","placeholder","label","hint","required",...Bt],Tn=t=>{const{autocomplete:e,value:o,placeholder:n,readonly:s,disabled:r,rows:i,cols:a,maxlength:l}=t,{onChange:c,onFocus:h,onInput:d,onRef:g}=Dt(t);return Sn(t),Vt(p`
			<textarea id="input" part="input"
				${U(g)}
				autocomplete=${y(e)}
				placeholder=${n||" "}
				rows=${i??1} cols=${y(a)}
				?readonly=${s} ?aria-disabled=${r} ?disabled=${r}
				.value=${Te(o??"")} maxlength=${y(l)} @input=${d}
				@change=${c} @focus=${h} @blur=${h}>`,t)};customElements.define("cosmoz-textarea",L(Tn,{observedAttributes:An,styleSheets:[fe(jt)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Rn=t=>{const{label:e,value:o,disabled:n,error:s}=t,r=w(i=>t.dispatchEvent(new CustomEvent("change",{detail:i.target.checked})),[]);return p`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${Te(!!o)}
			?disabled=${n}
			@change=${r}
		/>
		${_(e,()=>p`<label for="toggle">${e}</label>`)}
		<slot name="suffix"></slot>
		${_(s,i=>p`<div class="failure">${i}</div>`)} `},Ln=T`
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
`,On=T`
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
`;customElements.define("cosmoz-toggle",L(Rn,{styleSheets:[On,Ln],observedAttributes:["label","disabled","error"]}));const Mn=t=>{if(!t||t===1/0)return;if(typeof t=="number")return t;const e=parseFloat(t.replace(/[\s]/gu,"").replace(/^−/gu,"-").replace(/[,.]/gu,".").replace(/[.](?=.*[.])/gu,""));if(!isNaN(e))return e},In=/^[0-9.,e-]+$/u,Pn=t=>t==null||t===""||Number.isNaN(t)||Array.isArray(t)&&t.length<1,gt=t=>Pn(t)&&re("Required"),Nn=Symbol("error"),Vn=(t,e,o,n,s)=>{for(const r of D(t)){const i=r(e,o,n,s);if(i)return i}},Ht=(t,e,o)=>t.validate&&Vn(t.validate,e[t.path??t.id],e,t,o),Tr=(t,e,o)=>{const n=t.flatMap(s=>{const r=Ht(s,e,o);return r?[[s.id,r]]:[]});return n.length?Object.fromEntries(n):void 0},Bn=(t,e,o)=>{const n=t.map(s=>({...s,error:Ht(s,e,o)}));return{fields:n,invalid:n.some(({error:s})=>!!s)}},Fn=(t,e,o)=>e?Bn(t,e,o):{fields:t,invalid:!0},jn=(t,e,o,n)=>{n!=null&&Object.is(n[e],o)||t({[e]:o})},Dn=t=>Array.isArray(t)?t.some(e=>e===gt):t===gt,Re=t=>({field:e,value:o,values:n,onChange:s,context:r,...i})=>{const a=(c,h)=>(e.onChange??jn)(d=>s(d,h),e.path??e.id,ht(e.value?.[1],c,n,e,r),n);if(!R(e.hidden,o,n,e,r))return t({...e,...i,context:r,values:n,required:Dn(e.validate),label:R(e.label,o,n,e,r),placeholder:R(e.placeholder,o,n,e,r),disabled:R(e.disabled,o,n,e,r),warning:R(e.warning,o,n,e,r),prefix:R(e.prefix,o,n,e,r),suffix:R(e.suffix,o,n,e,r),value:ht(e.value?.[0],o,n,e,r),onFocus:e.onFocus?.(a,o,n,e),onChange:a})},Hn=t=>_(t,()=>p`<span slot="prefix">${t}</span>`),qn=t=>_(t,()=>p`<span slot="suffix">${t}</span>`),Yn=(t,e="suffix")=>_(t,()=>wo({slot:e,title:t,width:"22",height:"22",styles:"color: var(--cz-color-text-warning); vertical-align: middle"})),Un=(t,e="suffix")=>_(t,()=>$o({slot:e,title:t,width:"22",height:"22",styles:"color: var(--cz-color-text-primary); vertical-align: middle; cursor: help"})),qt=({prefix:t,suffix:e,warning:o,description:n})=>[Hn(t),qn(e),Yn(o),Un(n)],Yt=t=>{const{value:e,values:o,onFocus:n,onInput:s,context:r,...i}=t,{id:a,variant:l,type:c="text",label:h,placeholder:d,error:g,prefix:u,suffix:v,warning:m,allowedPattern:b,step:f,disabled:A,required:$,maxlength:I,min:F,max:B,autosize:C,noSpinner:E,autocomplete:O,title:X,description:P,hint:te}=i;return p`<cosmoz-input
		class="input input-common input-${c}"
		variant=${y(l)}
		hint=${y(te)}
		name=${a}
		type=${c}
		?autosize=${C}
		?disabled=${A}
		?required=${$}
		?invalid=${!!g}
		?no-spinner=${!!E}
		.placeholder=${d}
		.errorMessage=${g}
		.allowedPattern=${b}
		.step=${f}
		.label=${h}
		.value=${e}
		title=${y((g??X)||void 0)}
		maxlength=${y(I)}
		min=${y(R(F,e,o,i,r))}
		max=${y(R(B,e,o,i,r))}
		autocomplete=${y(O)}
		@focus=${n}
		@input=${s}
		>${qt({prefix:u,suffix:v,warning:m,description:P})}</cosmoz-input
	>`},Ut=Re(({onChange:t,...e})=>Yt({...e,onInput:o=>t(o.target.value)})),Rr=Re(({onChange:t,allowedPattern:e=In,...o})=>Yt({...o,type:"number",allowedPattern:e,onInput:n=>t(Mn(n.target.value))})),Lr=Re(({id:t,label:e,placeholder:o,error:n,suffix:s,warning:r,disabled:i,onChange:a,value:l,maxRows:c,rows:h,maxlength:d})=>p`<cosmoz-textarea
			class="input input-textarea"
			name=${t}
			?disabled=${i}
			?invalid=${!!n}
			.placeholder=${o}
			.errorMessage=${n}
			.label=${e}
			.value=${l}
			.rows=${h}
			.maxRows=${c}
			maxlength=${y(d)}
			@input=${g=>a(g.target.value)}
			>${qt({suffix:s,warning:r})}</cosmoz-textarea
		>`),Gn=({field:t,values:e,...o})=>{const n=(o.touched&&(e?.[Nn]?.[t.id]??t.error))??!1,s=e?.[t.path??t.id];return(t.input??Ut)({...o,error:n,value:s,field:t,values:e})},Gt=({fields:t,...e})=>Xe(t??[],({id:o})=>o,o=>Gn({field:o,fields:t,...e})),Wn=({fields:t,selector:e=""})=>(t??[]).map(({id:o,styles:n})=>n?`${e}[name="${String(o)}"] { ${Object.entries(n).map(([s,r])=>`${s}:${r}`).join(";")} }`:"").join(`
`),Or=({fields:t})=>Xe(t??[],({id:e})=>e,e=>{const o=R(e.header??e.label,void 0,{},e);return p`<div class="header" name="${e.id}" title="${o}">
				${o}
			</div>`});class Le extends Event{constructor(e){super(Le.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}Le.eventName="rangeChanged";class Oe extends Event{constructor(e){super(Oe.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}Oe.eventName="visibilityChanged";class Me extends Event{constructor(){super(Me.eventName,{bubbles:!1})}}Me.eventName="unpinned";class Xn{constructor(e){this._element=null;const o=e??window;this._node=o,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class Zn extends Xn{constructor(e,o){super(o),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const n=this._node;this._originalScrollTo=n.scrollTo,this._originalScrollBy=n.scrollBy,this._originalScroll=n.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,o){const n=typeof e=="number"&&typeof o=="number"?{left:e,top:o}:e;this._scrollTo(n)}scrollBy(e,o){const n=typeof e=="number"&&typeof o=="number"?{left:e,top:o}:e;n.top!==void 0&&(n.top+=this.scrollTop),n.left!==void 0&&(n.left+=this.scrollLeft),this._scrollTo(n)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,o=null,n=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=o,this._end=n):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:o,left:n}=e;return o=o===void 0?void 0:Math.max(0,Math.min(o,this.maxScrollTop)),n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollLeft)),this._destination!==null&&n===this._destination.left&&o===this._destination.top?!1:(this.__destination={top:o,left:n,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,o,n){return this._scrollTo(e,o,n),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:o}=this;let{top:n,left:s}=this._destination;n=Math.min(n||0,this.maxScrollTop),s=Math.min(s||0,this.maxScrollLeft);const r=Math.abs(n-e),i=Math.abs(s-o);r<1&&i<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let ft=typeof window<"u"?window.ResizeObserver:void 0;const Ye=Symbol("virtualizerRef"),_e="virtualizer-sizer";let vt;class Kn{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);const o=e.layout||{};this._layoutInitialized=this._initLayout(o)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new ft(()=>this._hostElementSizeChanged()),this._childrenRO=new ft(this._childrenSizeChanged.bind(this))}_initHostElement(e){const o=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),o[Ye]=this}connected(){this._initObservers();const e=this._isScroller;this._clippingAncestors=es(this._hostElement,e),this._scrollerController=new Zn(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const o=this._hostElement.style;o.display=o.display||"block",o.position=o.position||"relative",o.contain=o.contain||"size layout",this._isScroller&&(o.overflow=o.overflow||"auto",o.minHeight=o.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let o=e.querySelector(`[${_e}]`);o||(o=document.createElement("div"),o.setAttribute(_e,""),e.appendChild(o)),Object.assign(o.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),o.textContent="&nbsp;",o.setAttribute(_e,""),this._sizer=o}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;const o=e.type||vt;if(typeof o=="function"&&this._layout instanceof o){const n={...e};return delete n.type,this._layout.config=n,!0}return!1}async _initLayout(e){let o,n;if(typeof e.type=="function"){n=e.type;const s={...e};delete s.type,o=s}else o=e;n===void 0&&(vt=n=(await zo(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new n(s=>this._handleLayoutMessage(s),o),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),o=e-this._benchmarkStart,s=performance.getEntriesByName("uv-virtualizing","measure").filter(r=>r.startTime>=this._benchmarkStart&&r.startTime<e).reduce((r,i)=>r+i.duration,0);return this._benchmarkStart=null,{timeElapsed:o,virtualizationTime:s}}return null}_measureChildren(){const e={},o=this._children,n=this._measureChildOverride||this._measureChild;for(let s=0;s<o.length;s++){const r=o[s],i=this._first+s;(this._itemsChanged||this._toBeMeasured.has(r))&&(e[i]=n.call(this,r,this._items[i]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:o,height:n}=e.getBoundingClientRect();return Object.assign({width:o,height:n},Qn(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;const{_rangeChanged:o,_itemsChanged:n}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(o||n)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(e){console.warn("Error measuring performance data: ",e)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){e.type==="scroll"?(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",e)}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new Me)}get _children(){const e=[];let o=this._hostElement.firstElementChild;for(;o;)o.hasAttribute(_e)||e.push(o),o=o.nextElementSibling;return e}_updateView(){const e=this._hostElement,o=this._scrollerController?.element,n=this._layout;if(e&&o&&n){let s,r,i,a;const l=e.getBoundingClientRect();s=0,r=0,i=window.innerHeight,a=window.innerWidth;const c=this._clippingAncestors.map(f=>f.getBoundingClientRect());c.unshift(l);for(const f of c)s=Math.max(s,f.top),r=Math.max(r,f.left),i=Math.min(i,f.bottom),a=Math.min(a,f.right);const h=o.getBoundingClientRect(),d={left:l.left-h.left,top:l.top-h.top},g={width:o.scrollWidth,height:o.scrollHeight},u=s-l.top+e.scrollTop,v=r-l.left+e.scrollLeft,m=Math.max(0,i-s),b=Math.max(0,a-r);n.viewportSize={width:b,height:m},n.viewportScroll={top:u,left:v},n.totalScrollSize=g,n.offsetWithinScroller=d}}_sizeHostElement(e){const n=e&&e.width!==null?Math.min(82e5,e.width):0,s=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${n}px, ${s}px)`;else{const r=this._hostElement.style;r.minWidth=n?`${n}px`:"100%",r.minHeight=s?`${s}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:o,left:n,width:s,height:r,xOffset:i,yOffset:a},l)=>{const c=this._children[l-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${n}px, ${o}px)`,s!==void 0&&(c.style.width=s+"px"),r!==void 0&&(c.style.height=r+"px"),c.style.left=i===void 0?null:i+"px",c.style.top=a===void 0?null:a+"px")})}async _adjustRange(e){const{_first:o,_last:n,_firstVisible:s,_lastVisible:r}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==o||this._last!==n,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==s||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:o}=this._scrollerController,{top:n,left:s}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-n,left:o-s})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(o={})=>this._scrollElementIntoView({...o,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const o=this._layout.getScrollIntoViewCoordinates(e),{behavior:n}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(o,{behavior:n}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:o}=this._scrollIntoViewTarget||{};o&&e?.has(o)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new Le({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new Oe({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,o)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=o})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(const o of e)this._toBeMeasured.set(o.target,o.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function Qn(t){const e=window.getComputedStyle(t);return{marginTop:xe(e.marginTop),marginRight:xe(e.marginRight),marginBottom:xe(e.marginBottom),marginLeft:xe(e.marginLeft)}}function xe(t){const e=t?parseFloat(t):NaN;return Number.isNaN(e)?0:e}function bt(t){if(t.assignedSlot!==null)return t.assignedSlot;if(t.parentElement!==null)return t.parentElement;const e=t.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function Jn(t,e=!1){const o=[];let n=e?t:bt(t);for(;n!==null;)o.push(n),n=bt(n);return o}function es(t,e=!1){let o=!1;return Jn(t,e).filter(n=>{if(o)return!1;const s=getComputedStyle(n);return o=s.position==="fixed",s.overflow!=="visible"})}const ts=t=>t,os=(t,e)=>p`${e}: ${JSON.stringify(t,null,2)}`;class ns extends Ge{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(o,n)=>os(o,n+this._first),this._keyFunction=(o,n)=>ts(o,n+this._first),this._items=[],e.type!==j.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const o=[];if(this._first>=0&&this._last>=this._first)for(let n=this._first;n<=this._last;n++)o.push(this._items[n]);return Xe(o,this._keyFunction,this._renderItem)}update(e,[o]){this._setFunctions(o);const n=this._items!==o.items;return this._items=o.items||[],this._virtualizer?this._updateVirtualizerConfig(e,o):this._initialize(e,o),n?N:this.render()}async _updateVirtualizerConfig(e,o){if(!await this._virtualizer.updateLayoutConfig(o.layout||{})){const s=e.parentNode;this._makeVirtualizer(s,o)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:o,keyFunction:n}=e;o&&(this._renderItem=(s,r)=>o(s,r+this._first)),n&&(this._keyFunction=(s,r)=>n(s,r+this._first))}_makeVirtualizer(e,o){this._virtualizer&&this._virtualizer.disconnected();const{layout:n,scroller:s,items:r}=o;this._virtualizer=new Kn({hostElement:e,layout:n,scroller:s}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(e,o){const n=e.parentNode;n&&n.nodeType===1&&(n.addEventListener("rangeChanged",s=>{this._first=s.first,this._last=s.last,this.setValue(this.render())}),this._makeVirtualizer(n,o))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const ss=ee(ns),Mr=ce`
	.headers {
		display: flex;
		border-bottom: solid 1px var(--cz-color-border-primary);
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		font-weight: var(--cz-font-weight-regular);
		color: var(--cz-color-text-secondary);
		padding-block: calc(var(--cz-spacing) * 2.5);
		width: 100%;
	}
	.header {
		flex: auto;
		margin-inline: var(--cz-spacing);
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
		margin: var(--cz-spacing);
	}

	.input-basic {
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		border-bottom: 2px solid var(--cz-color-border-primary);
		margin: var(--cz-spacing);
	}
	cosmoz-button {
		margin-inline: var(--cz-spacing);
	}
	/* Empty stand-in matching the remove button's footprint, so rows without a
	   remove button (the header row and the add row) keep their columns aligned
	   with the removable rows. */
	.remove-placeholder {
		flex: none;
		width: 36px;
		margin: 0 8px;
	}
`,rs=()=>V,is=(t,e)=>Promise.resolve(t).then(e,e),Ir=({error:t,...e})=>[Gt(e),_(t,o=>p`<div class="failure">${o.message}</div>`)],as=t=>ge(t?.then(rs,e=>p`<div class="failure">${e.message}</div>`),V),ls=({save$:t,progress:e,...o})=>{const n=({onSave:s,onClick:r=s,title:i,disabled:a,progress:l,content:c=V,slot:h})=>p` <cosmoz-button
			class="button save"
			slot=${y(h)}
			?disabled=${a}
			?data-progress=${l}
			@click=${d=>(d.stopPropagation(),r())}
		>
			${c} ${i}
		</cosmoz-button>`;return ge(is(t,()=>n(o)),n({...o,disabled:!0,progress:!0,content:p`<cosmoz-spinner></cosmoz-spinner> ${_(e,s=>s.join("/"))}`}))},cs=ce`
	.file::-webkit-file-upload-button,
	.file::file-selector-button {
		background: var(--cz-color-bg-overlay);
		color: var(--cz-color-text-on-brand);
		box-sizing: border-box;
		cursor: pointer;
		outline: none;
		flex: none;
		border: none;
		padding-inline: calc(var(--cz-spacing) * 4);
		border-radius: var(--cz-radius-md);
		min-height: 40px;
		min-width: 78px;
		font-family: inherit;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-medium);
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.file::-webkit-file-upload-button:hover,
	.file::file-selector-button:hover {
		opacity: 0.8;
	}

	.buttons {
		display: flex;
		justify-content: flex-end;
		padding-block: calc(var(--cz-spacing) * 5.5);
		gap: calc(var(--cz-spacing) * 2);

		& cosmoz-button {
			flex: 1;
		}
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
`,ds=()=>{let t=null;return{run:async(e,o,n,s)=>{t?.abort(),t=new AbortController;const r={update:n,signal:t.signal,index:s?.index,context:s?.context};try{return await e(o,r)}catch(i){if(i instanceof DOMException&&i.name==="AbortError")return null;throw i}},cancel:()=>{t?.abort(),t=null}}},hs=(t,e)=>t.length!==e.length||t.some((o,n)=>!Object.is(o,e[n])),us=t=>{console.error("[cosmoz-form] async rule error:",t)},ps=(t,e,o)=>{const n=us,s=M(new Map),r=M(new Map),i=M(0),[a,l]=H(!1);return x(()=>()=>{for(const c of s.current.values())c.cancel()},[]),x(()=>{if(!e?.length)return;const c=t.context;for(const h of e){const[d,g,u=ds]=h;s.current.has(h)||s.current.set(h,u());const v=g(t.values,void 0,c),m=r.current.get(h);if(m!=null&&!hs(v,m))continue;r.current.set(h,v);const b=s.current.get(h);i.current++,i.current===1&&l(!0),b.run(d,t.values,f=>t.onChange(f,!1),{context:c}).then(f=>{f!==null&&t.onChange(f,!1)}).catch(f=>n(f,h)).finally(()=>{i.current--,i.current===0&&l(!1)})}},[t.values,t.context]),{...t,processing:a}},Ue=Symbol("touched");function Ce(t,e=!0){if(t==null)return;const o=t;return e?o[Ue]=!0:delete o[Ue],t}const Wt=t=>Ce(t,!1),yt=t=>!!t?.[Ue],ms=(t,e)=>!e||t.some((o,n)=>!Object.is(e[n],o)),he=({oldItem:t,newItem:e,rules:o,index:n,oldIndex:s=n,context:r,oldContext:i=r})=>o?o.reduce((a,[l,c])=>t&&c&&!ms(c(a,n,r),c(t,s,i))?a:{...a,...l(a,t,n,s,r)},e):e,gs=(t,e,o,n,s)=>{const[,r]=t,i=M(void 0);return x(()=>{const a=i.current;i.current=n,a!==void 0&&e(([l,c])=>[l,Ce(he({oldItem:c,newItem:c,rules:o,context:n,oldContext:a}),yt(c))])},[n]),{values:r,context:n??{},onReset:w(()=>e(([a])=>[a,a]),[e]),onValues:w((a,l=!0)=>e(([c,h])=>[c,Ce(he({oldItem:h,newItem:R(a,h),rules:o,context:n}),l)]),[o,e,n]),onChange:w((a,l=!0)=>e(([c,h])=>[c,Ce(he({oldItem:h,newItem:{...h,...R(a,h)},rules:o,context:n}),l)]),[o,e,n]),load:w((a,l)=>{if(!a){e([a,a]);return}const c=Wt(he({oldItem:void 0,newItem:a,rules:l??o,context:n}));e([c,c])},[o,e,n]),touched:S(()=>yt(r)||(s??!1),[r,s])}},fs=(t,e,o)=>Wt(he({oldItem:void 0,newItem:t,rules:e,context:o})),Xt=(t,e=[])=>{const o=t.filter(n=>n?.rules!=null).flatMap(n=>n?.rules);return[...e,...o]},vs=(t,e,{fields:o,rules:n,context:s,touched:r})=>{const i=S(()=>R(o)??[],[o]),a=S(()=>Xt(i,n),[i,n]),l=gs(t,e,a,s,r),{values:c}=l;return{...S(()=>Fn(i,c,s),[i,c,s]),...l}},bs=t=>{const[e,o]=H(()=>{const n=R(t.fields)??[],s=Xt(n,t.rules),r=fs(t.initial,s,t.context);return[r,r]});return vs(e,o,t)};function ys({fields:t,initial:e,rules:o,asyncRules:n,context:s,onSave:r,allowEmpty:i}){const a=bs({fields:t,initial:e,rules:o,context:s}),{processing:l}=ps(a,n),{values:c,invalid:h}=a,[d,g]=H(),[u,v]=H(),m=c==null||c===e,b=a.fields?.length>0&&!(m&&i)&&(m||h);return{...a,save$:d,onSave:w(()=>g(r?.(c,e,v)),[r,c,e]),disabled:b,processing:l,progress:u}}const zs=ce`
	.description {
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		color: var(--cz-color-text-secondary);
		margin-block: calc(var(--cz-spacing) * 4);
	}
	.description * {
		line-height: normal;
	}
	.form {
		display: flex;
		flex-direction: column;
	}

	.failure {
		color: var(--cz-color-text-error);
		align-self: center;
		flex: 1;
	}
`,Zt=t=>{const{auto:e,uncancelable:o,hideCancelButton:n,saveText:s=re("OK")}=t,{onSave:r,disabled:i,save$:a,progress:l,...c}=ys(t);return x(()=>{e&&r()},[e]),p` <style>
			${cs} ${Wn(c)}${zs}
		</style>
		<div class="form" part="form">${Gt(c)}</div>
		<div class="buttons">
			${as(a)}
			${ls({save$:a,onSave:r,disabled:i,title:s,progress:l})}
			${_(!n,()=>p`<cosmoz-button
						class="button"
						variant="secondary"
						value="cancel"
						?disabled=${o}
					>
						${re("Cancel")}
					</cosmoz-button>`)}
		</div>`};customElements.define("cosmoz-form-dialog",We(Zt,{observedAttributes:["allow-empty"]}));customElements.define("cosmoz-form-dialog-next",We(Zt,{observedAttributes:["allow-empty"]}));const Pr=t=>t?p`<cosmoz-form-dialog
		name=${y(t.name)}
		?allow-empty=${t.allowEmpty}
		.title=${t.heading}
		.subtitle=${t.description}
		.icon=${t.icon}
		.description=${t.description}
		.fields=${t.fields}
		.initial=${t.initial}
		.rules=${t.rules}
		.onClose=${t.onClose}
		.onSave=${t.onSave}
		.auto=${t.auto}
		.uncancelable=${t.uncancelable}
		.hideCancelButton=${t.hideCancelButton}
		.saveText=${t.saveText}
	></cosmoz-form-dialog>`:V;const ws={},zt=ee(class extends be{constructor(){super(...arguments),this.ot=ws}render(t,e){return e()}update(t,[e,o]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((n,s)=>n===this.ot[s]))return N}else if(this.ot===e)return N;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,o)}}),_s=({host:t,popoverRef:e,disabled:o,openOnHover:n,openOnFocus:s,open:r,close:i})=>{const a=M(),l=()=>clearTimeout(a.current),c=()=>{clearTimeout(a.current),a.current=setTimeout(()=>{const d=e.current;n&&(t.matches(":hover")||d?.matches(":hover"))||t.matches(":focus-within")||d?.matches(":focus-within")||i()},100)},h=()=>{o||(l(),r())};return x(()=>{if(!(!n||o))return t.addEventListener("pointerenter",h),t.addEventListener("pointerleave",c),()=>{l(),t.removeEventListener("pointerenter",h),t.removeEventListener("pointerleave",c)}},[n,o,t]),x(()=>{if(!(!s||o))return t.addEventListener("focusin",h),t.addEventListener("focusout",c),()=>{l(),t.removeEventListener("focusin",h),t.removeEventListener("focusout",c)}},[s,o,t]),{scheduleClose:c,cancelClose:l}},xs=t=>{if(t.newState!=="open")return;const n=t.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const s of n){const r=s.matches("[autofocus]")?s:s.querySelector("[autofocus]");if(r instanceof HTMLElement){r.focus();break}}},$s=T`
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
`,Es=t=>{const{placement:e="bottom span-right",disabled:o,openOnHover:n,openOnFocus:s}=t,r=M(),[i,a]=ve("opened",!1),l=w(()=>{o||(a(!0),r.current?.showPopover())},[o]),c=w(()=>{a(!1),r.current?.hidePopover()},[]),h=w(()=>{if(o)return;r.current?.matches(":popover-open")?c():l()},[o]);x(()=>{const m=r.current;m&&(i?m.showPopover():m.hidePopover())},[i]),x(()=>{t.toggleAttribute("opened",!!i)},[i]);const{scheduleClose:d,cancelClose:g}=_s({host:t,popoverRef:r,disabled:o,openOnHover:n,openOnFocus:s,open:l,close:c}),u=s?l:h,v=w(m=>{xs(m),a(m.newState==="open"),t.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:m.newState,oldState:m.oldState,composed:!0}))},[]);return p`
		<slot name="button" @click=${u}></slot>
		<div
			popover
			style="position-area: ${e}"
			@toggle=${v}
			@select=${c}
			@focusout=${d}
			@focusin=${g}
			${U(m=>m&&(r.current=m))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",L(Es,{styleSheets:[$s],observedAttributes:["placement","disabled","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Cs=(t,e)=>{if(!t||!e)return;const o=Object.keys(e);return Object.fromEntries(Object.keys(t).flatMap(n=>o.includes(n)?[]:[[n,void 0]]))};class ks extends be{_props;render(e){return N}update(e,[o]){return this._props!==o&&Object.assign(e.element,Cs(this._props,o),this._props=o),N}}const Ss=ee(ks),As=t=>{const e=le(),o=S(()=>new CSSStyleSheet,[]);x(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,o]},[]),x(()=>{o.replaceSync(t)},[t])},Ts="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",Rs=T`
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
		background: url("${Ts}") var(--cz-color-bg-brand-solid) no-repeat 50%;
	}

	[virtualizer-sizer]:not(.sizer) {
		line-height: 1;
	}
`,Ls=({index:t,itemHeight:e,auto:o})=>T`
	${_(!o,()=>T`
			.item {
				line-height: ${e}px;
				height: ${e}px;
			}
		`)}
	.item[data-index='${t||"0"}'] {
		background: rgb(
			from var(--cz-color-bg-brand-solid) r g b / calc(alpha * 0.15)
		);
	}
	.item[data-index='${t||"0"}'][part~='error'] {
		background: var(--cz-color-bg-error);
	}
`,Os=t=>{const e=t==="auto",[o,n]=H(e?40:t);return[o,s=>e?n(s):void 0]},Kt=Yo(()=>se);customElements.define("cosmoz-keybinding-provider",Kt.Provider);const Ze=t=>{const e=S(()=>({}),[]);return S(()=>Object.assign(e,t),[e,...Object.values(t)])},me=(t,e)=>{const o=Pt(Kt),n=Ze(t);x(()=>o(n),e)},Ms=Symbol("listbox.navigate.up"),Is=Symbol("listbox.navigate.down"),Ps=Symbol("listbox.select"),Ns=({onUp:t,onDown:e,onEnter:o})=>{const n=le();me({activity:Ms,callback:t,element:()=>n},[]),me({activity:Is,callback:e,element:()=>n},[]),me({activity:Ps,callback:o,element:()=>n},[])},Vs=({items:t,onSelect:e,defaultIndex:o=0})=>{const[n,s]=H({index:o}),{index:r}=n,{length:i}=t;return x(()=>{s({index:n.index<0?o:Math.min(n.index,t.length-1),scroll:!0})},[t,o]),Ns({onUp:w(()=>s(a=>({index:a.index>0?a.index-1:i-1,scroll:!0})),[i]),onDown:w(()=>s(a=>({index:a.index<i-1?a.index+1:0,scroll:!0})),[i]),onEnter:w(()=>r>-1&&r<i&&e?.(t[r],r),[r,t,e])}),{position:n,highlight:w(a=>s({index:a}),[]),select:w(a=>e?.(a),[e])}},Bs=(t,e)=>e?o=>o!=null&&D(t).find(n=>n[e]===o[e]):o=>o!=null&&D(t).includes(o),Fs=(t,e)=>{if(!e||!t)return t;const o=t.toLowerCase().indexOf(e.toLowerCase());if(o<0)return t;const n=o+e.length;return[t.slice(0,o),p`<mark>${t.slice(o,n)}</mark>`,t.slice(n)]},js=(t=Ae)=>(e,o,{highlight:n,select:s,textual:r=Ae,query:i,isSelected:a})=>{const l=r(e),c=Fs(l,i),h=t(c,e,o);return p`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${a(e)}
				data-index=${o}
				@mouseenter=${()=>n(o)}
				@click=${()=>s(e)}
				@mousedown=${d=>d.preventDefault()}
				title=${l}
			>
				${h}
			</div>
			<div class="sizer" virtualizer-sizer>${h}</div>`},Ds=({itemRenderer:t=js(),...e})=>{const o=Ze(e);return w((n,s)=>t(n,s,o),[o,t])},Hs=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],qs=({value:t,valueProperty:e,items:o,onSelect:n,defaultIndex:s,query:r,textual:i,itemRenderer:a,itemHeight:l=40,itemLimit:c=5})=>{const h=S(()=>Bs(t,e),[t,e]),d=S(()=>o.slice(),[o,h]),{position:g,highlight:u,select:v}=Vs({items:d,onSelect:n,defaultIndex:isNaN(s)?void 0:Number(s)}),[m,b]=Os(l);return{position:g,items:d,height:Math.min(c,d.length)*m,highlight:u,select:v,itemHeight:m,setItemHeight:b,renderItem:Ds({itemRenderer:a,items:d,position:g,highlight:u,select:v,textual:i,query:r,isSelected:h})}},wt=se,Ys=t=>{const e=M(void 0),{position:o,items:n,renderItem:s,height:r,itemHeight:i,setItemHeight:a}=qs(t);return x(()=>{const l=e.current?.[Ye];l&&l.layoutComplete.then(()=>{t.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:h}=l._layout._metricsCache;return a(c+h*2)},wt)},[n]),x(()=>{if(!o.scroll)return;const l=e.current?.[Ye];if(l){if(!l?._layout){l.layoutComplete.then(()=>l.element(o.index)?.scrollIntoView({block:"nearest"}),wt);return}l.element(o.index)?.scrollIntoView({block:"nearest"})}},[o]),As(Ls({...o,itemHeight:i,auto:t.itemHeight==="auto"})),p`<div
			class="items"
			style="min-height: ${r}px"
			${U(l=>e.current=l)}
		>
			<div virtualizer-sizer></div>
			${ss({items:n,renderItem:s,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",L(Ys,{styleSheets:[Ft(Rs)]}));const Us=({multi:t,...e},o)=>p`<cosmoz-listbox
		part="listbox"
		?multi=${t}
		...=${Ss(mn(Hs)(e))}
		>${o}</cosmoz-listbox
	>`,z=t=>`calc(var(--cz-spacing) * ${t})`,Gs=T`
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
		gap: ${z(1.5)};
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
		padding: ${z(.5)} ${z(2)};
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
		padding: ${z(.5)} ${z(2)};
	}

	:host([type='modern']) .badge {
		box-shadow: var(--cz-shadow-xs);
	}

	/* =========================================
	 * SIZE VARIANTS
	 * ========================================= */

	/* --- Pill sizes --- */
	:host([size='sm']) .badge {
		padding: ${z(.5)} ${z(2)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${z(1)};
	}

	:host([size='lg']) .badge {
		padding: ${z(1)} ${z(3)};
	}

	/* --- Badge sizes --- */
	:host([type='color'][size='sm']) .badge,
	:host([type='modern'][size='sm']) .badge {
		padding: ${z(.5)} ${z(1.5)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${z(1)};
	}

	:host([type='color'][size='lg']) .badge,
	:host([type='modern'][size='lg']) .badge {
		padding: ${z(1)} ${z(2.5)};
		border-radius: var(--cz-radius-md);
	}

	/* =========================================
	 * DOT INDICATOR
	 * ========================================= */
	.dot {
		width: ${z(2)};
		height: ${z(2)};
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
		padding: ${z(.5)} ${z(2.5)} ${z(.5)} ${z(2)};
	}

	:host([dot][size='sm']) .badge {
		padding: ${z(.5)} ${z(2)} ${z(.5)} ${z(1.5)};
	}

	:host([dot][size='lg']) .badge {
		padding: ${z(1)} ${z(3)} ${z(1)} ${z(2.5)};
	}

	/* Badge + dot: symmetric padding (same as base badge) */
	:host([dot][type='color']) .badge,
	:host([dot][type='modern']) .badge {
		padding: ${z(.5)} ${z(2)};
	}

	:host([dot][type='color'][size='sm']) .badge,
	:host([dot][type='modern'][size='sm']) .badge {
		padding: ${z(.5)} ${z(1.5)};
	}

	:host([dot][type='color'][size='lg']) .badge,
	:host([dot][type='modern'][size='lg']) .badge {
		padding: ${z(1)} ${z(2.5)};
	}

	/* =========================================
	 * ICON-ONLY TYPE
	 * ========================================= */
	:host([type='icon']) .badge {
		padding: ${z(2)};
		gap: 0;
	}

	:host([type='icon'][size='sm']) .badge {
		padding: ${z(1.5)};
	}

	:host([type='icon'][size='lg']) .badge {
		padding: ${z(2.5)};
	}

	:host([type='icon']) .dot,
	:host([type='icon']) slot[name='prefix'],
	:host([type='icon']) slot[name='suffix'] {
		display: none;
	}

	:host([type='icon']) ::slotted(svg) {
		width: ${z(3)};
		height: ${z(3)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		display: block;
		width: ${z(3)};
		height: ${z(3)};
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
`,Ws=()=>p`<span class="badge" part="badge" role="status">
		<span class="dot" part="dot"></span>
		<slot name="prefix"></slot>
		<span class="content"><slot></slot></span>
		<slot name="suffix"></slot>
	</span>`;customElements.define("cosmoz-badge",L(Ws,{styleSheets:[ae,Gs]}));const Y=t=>`calc(var(--cz-spacing) * ${t})`,Xs=T`
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
		width: ${Y(2.5)};
		height: ${Y(2.5)};
	}

	:host([size='md']) .close svg,
	:host(:not([size])) .close svg {
		width: ${Y(3)};
		height: ${Y(3)};
	}

	:host([size='lg']) .close svg {
		width: ${Y(3.5)};
		height: ${Y(3.5)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		width: ${Y(3.5)};
		height: ${Y(3.5)};
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
`,Zs=t=>{const{color:e,size:o,disabled:n,removable:s}=t,r=()=>{n||t.dispatchEvent(new CustomEvent("remove"))};return p`<cosmoz-badge
		color=${y(e)}
		size=${y(o)}
		?disabled=${n}
		type="color"
	>
		<slot name="prefix" slot="prefix"></slot>
		<slot></slot>
		<slot name="suffix" slot="suffix"></slot>
		${_(s,()=>p` <button
					slot="suffix"
					class="close"
					aria-label="Remove"
					@mousedown=${i=>i.preventDefault()}
					@click=${r}
				>
					${Rt()}
				</button>`)}
	</cosmoz-badge>`};customElements.define("cosmoz-tag",L(Zs,{observedAttributes:["color","size","disabled","removable"],styleSheets:[ae,Xs]}));const Ks=({content:t,onClear:e,disabled:o,className:n="chip",hidden:s,slot:r})=>p`<cosmoz-tag
		class=${y(n)}
		slot=${y(r)}
		exportparts="chip-text, chip-clear"
		?disabled=${o}
		?hidden=${s}
		?removable=${!!e&&!o}
		@remove=${e}
		title=${y(typeof t=="string"?t:void 0)}
		>${t}</cosmoz-tag
	>`,Qs=({value:t,min:e=0,onDeselect:o,textual:n,disabled:s,chipRenderer:r=Ks})=>[...t.filter(Boolean).map(i=>r({item:i,content:n(i),onClear:t.length>e&&(()=>o(i)),disabled:s,slot:"control"})),r({item:null,content:p`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],Js=T`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",L(()=>V,{styleSheets:[Js]}));const Qt=ce`
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
`,Ke=(t,e=()=>({}))=>{const o={type:t,toString(){return t}};return Object.assign((...s)=>Object.assign(e(...s),o),o)},_t=t=>t.type||t.toString(),xt=t=>Array.isArray(t)?t:[t],er=(t,e)=>{const o=xt(e),n=(o.every(Array.isArray)?o:[o]).map(([s,r])=>({actions:xt(s).map(_t),handle:r}));return(s=t,r)=>{const i=n.find(a=>a.actions.includes(_t(r)));return i?i.handle(s,r):s}},J={pending:"pending",rejected:"rejected",resolved:"resolved"},Jt={error:void 0,result:void 0,state:J.pending},eo=Ke(J.pending),to=Ke(J.resolved,t=>({result:t})),oo=Ke(J.rejected,t=>({error:t})),tr=er(Jt,[[eo,()=>({error:void 0,result:void 0,state:J.pending})],[to,(t,{result:e})=>({error:void 0,result:e,state:J.resolved})],[oo,(t,{error:e})=>({error:e,result:void 0,state:J.rejected})]]),or=t=>{const[{error:e,result:o,state:n},s]=Bo(tr,Jt);return x(()=>{if(!t)return;let r=!1;return s(eo()),t.then(i=>!r&&s(to(i)),i=>!r&&s(oo(i))),()=>{r=!0}},[t]),[o,e,n]},nr=Symbol("autocomplete.deselect.last"),sr=Symbol("autocomplete.search.when.selected"),$t=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),rr=(t,e,o)=>{if(!e)return t;const n=$t(e.toLowerCase()),s=[];for(const r of t){const a=$t(o(r).toLowerCase()).indexOf(n);a<0||s.push({item:r,index:a})}return s.sort((r,i)=>r.index-i.index).map(({item:r})=>r)},ir=t=>t===!1||t==null?[]:t,ar=(t,e,o)=>t.dispatchEvent(new CustomEvent(e,{detail:o})),Et=[],lr=t=>(...e)=>{let o;const n=()=>{o&&cancelAnimationFrame(o)};return n(),o=requestAnimationFrame(()=>{o=void 0,t(...e)}),n},cr=(t,e,o)=>w(n=>{e?.(n),t.dispatchEvent(new CustomEvent(o,{detail:n}))},[e]),dr=({value:t,text:e,mode:o,onChange:n,onText:s,onSelect:r,limit:i,min:a,source:l,textProperty:c,textual:h,valueProperty:d,keepOpened:g,keepQuery:u,preserveOrder:v,defaultIndex:m,externalSearch:b,disabled:f,lazyOpen:A})=>{const $=i!=null?Number(i):void 0,I=a!=null?Number(a):void 0,F=o==="select",B=S(()=>(h??pn)(c),[h,c]),C=le(),[E,O]=ve("opened",!1),X=!e,P=S(()=>e?.trim(),[e]),te=cr(C,s,"text"),Ie=w(k=>{n?.(k,()=>O(!1));const oe=F?k[0]:k;ar(C,"value",oe)},[n]),[Pe,ao]=H([]),ye=!!(A&&!P),ze=S(()=>ye?Promise.resolve([]):Promise.resolve(typeof l=="function"?l({query:P,active:E}):l).then(ir),[l,E,P,ye]),Z=S(()=>D(t),[t]);x(()=>ze.then(ao),[ze]),me({activity:nr,callback:()=>{const k=D(Z);k.length>(I??0)&&Ie(k.slice(0,-1))},check:()=>!f&&X&&C.matches(":focus-within"),element:()=>C},[]),me({activity:sr,callback:k=>{const oe=D(Z),Ne=$===1;oe.length>0&&Ne&&k.key.length===1&&Ie(oe.slice(0,-1))},allowDefault:!0,check:()=>!f&&X&&C.matches(":focus-within"),element:()=>C},[$]),x(()=>{!E&&!u&&te("")},[E,u]),x(()=>{C.toggleAttribute("opened",!!E)},[E]);const q=Ze({onText:te,onChange:Ie,value:Z,limit:$,min:I,keepQuery:u,keepOpened:g,setOpened:O,onSelect:r,valueProperty:d}),[,,lo]=or(ze);return{limit:$,opened:E,query:P,textual:B,value:Z,source$:ze,loading:lo==="pending",items:S(()=>{if(!E||ye)return Et;const k=v?Pe:[...Z,...De(Z,Ee(d))(Pe)];return b?k:rr(k,P,B)},[Pe,E,P,B,X,Z,v,d,b,ye]),onToggle:w(k=>{f||O(k.newState==="open")},[f]),onText:w(k=>{f||(te(k.target.value),O(!0))},[f,te,e,O]),onSelect:w(k=>{if(f)return;q.onSelect?.(k,q);const{onChange:oe,onText:Ne,limit:co,min:ho,value:uo,keepQuery:po,keepOpened:mo,setOpened:go,valueProperty:fo}=q;po||Ne(""),mo||go(!1);const we=D(uo),Ve=Ee(fo),et=we.some(vo=>Ve(vo)===Ve(k));et&&we.length===ho||oe((et?De(k,Ve)(we):[...we,k]).slice(-co))},[f,q]),onDeselect:w(k=>{f||q.onChange(De(k,Ee(q.valueProperty))(q.value))},[f,q]),defaultIndex:P!==void 0&&P?.length>0?0:m}},hr=t=>{const e=t.shadowRoot.querySelectorAll(".chip"),o=t.shadowRoot.querySelector(".badge");if(!o)return;o.hidden=!0;for(const a of e)a.hidden=!1;const s=t.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let r;for(r=0;r<e.length;r++){const l=e[r].getBoundingClientRect();if(!(l.x+l.width<=s.x+s.width-24))break}const i=e.length-r;for(o.querySelector("span").textContent="+"+i.toString(),o.hidden=i<1;r<e.length;r++)e[r].hidden=!0},ur=({value:t,opened:e,wrap:o,limit:n})=>{const s=le(),r=!(o||n===1),i=S(()=>lr(()=>hr(s)),[]),[a,l]=H(0);it(()=>{if(!r)return;const c=s.shadowRoot.querySelector("cosmoz-input"),h=new ResizeObserver(d=>{l(d[0].contentRect.width)});return h.observe(c),()=>h.disconnect()},[r]),it(()=>r?i():void 0,[r,a,e,t])},pr=["input","control","label","line","error","wrap"].map(t=>`${t}: input-${t}`).join(),mr=({opened:t,isSingle:e,showSingle:o,hasResultsOrQuery:n})=>!t||e&&!o?!1:n,gr=t=>{const{variant:e,opened:o,invalid:n,errorMessage:s,hint:r,label:i,placeholder:a,required:l,disabled:c,textual:h,text:d,onText:g,onToggle:u,onDeselect:v,value:m,limit:b,min:f,showSingle:A,items:$,source$:I,loading:F,chipRenderer:B,mode:C}=t,E=b===1,O=E&&m?.[0]!=null,X=F||$.length>0||d!=null&&d.length>0;return p`<cosmoz-dropdown-next
			open-on-focus
			?disabled=${c}
			.opened=${o}
			@dropdown-toggle=${u}
			part="dropdown"
		>
			<cosmoz-input
				slot="button"
				id="input"
				part="input"
				.label=${i}
				.placeholder=${O?void 0:a}
				hint=${y(r)}
				variant=${y(e)}
				?readonly=${O}
				?disabled=${c}
				?required=${l}
				?invalid=${zt([I,n],()=>ge(I.then(()=>n,()=>!0),n))}
				.errorMessage=${zt([I,s],()=>ge(I.then(()=>s,P=>P.message),s))}
				.value=${Te(d)}
				@value-changed=${g}
				autocomplete="off"
				exportparts=${pr}
				?data-one=${E}
				?data-single=${O}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix">
					${_(C==="select",()=>_o({styles:"margin-right: calc(var(--cz-spacing) * 2);color: var(--cz-color-text-secondary);",width:"16",height:"16"}))}
				</slot>
				${Qs({value:m,min:f,onDeselect:v,textual:h,disabled:c,chipRenderer:B})}
			</cosmoz-input>

			${_(mr({opened:o,isSingle:O,showSingle:A,hasResultsOrQuery:X}),()=>Us({...t,items:$,multi:!E},_(F,()=>p`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>_(d!=null&&d.length>0&&$.length===0,()=>p`<slot name="no-result">
											<span class="no-result">${re("No results found")}</span>
										</slot>`))))}
		</cosmoz-dropdown-next>`},Qe=t=>{const e={...t,...dr(t)};return ur(e),gr(e)},Je=["variant","disabled","invalid","required","hint","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open","mode"],fr=t=>{const{onChange:e,onText:o,mode:n,...s}=t,r=n==="select",[i,a]=ve("value");return x(()=>{t.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),Qe({...s,...r&&{limit:1,min:1,showSingle:!0},mode:n,value:i,onChange:w((l,...c)=>{a(r?l[0]:l),e?.(l,...c)},[e,r]),onText:w(l=>{t.text=l,o?.(l)},[o])})},no=[Ft(Qt)],so={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",L(Qe,{observedAttributes:Je,styleSheets:no,shadowRootInit:so}));customElements.define("cosmoz-autocomplete",L(fr,{observedAttributes:Je,styleSheets:no,shadowRootInit:so}));const vr="data:image/svg+xml,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 2.5L8.5 8.5M8.5 2.5L2.5 8.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E",br=T`
	cosmoz-listbox::part(error)::before {
		border-color: var(--cz-color-border-error);
		/* prettier-ignore */
		background: url("${vr}") var(--cz-color-border-error) no-repeat 50%;
	}

	cosmoz-listbox::part(error):hover {
		background: var(--cz-color-bg-error);
	}
`,Ct=t=>({item:t,excluded:!1}),ro=t=>t.item,yr=t=>{const[e,o]=ve(t),n=w(s=>o(r=>{const i=R(s,r?.map(ro));if(!i)return;if(!r)return i.map(Ct);const a=r.reduce((c,h)=>i.includes(h.item)?[...c,h]:h.excluded?c:[...c,{...h,excluded:!0}],[]),l=i.filter(c=>!r.some(h=>h.item===c)).map(Ct);return[...a,...l]}),[]);return{value:e,setExcludingValue:n,setValue:o}},zr=(t,e)=>t?.some(o=>o.item===e&&o.excluded),io=(t,e)=>e&&zr(t,e)?"error":"gray",wr=t=>(e,o,{highlight:n,select:s,textual:r,isSelected:i})=>{const a=r(e);return p`<div
				class="item"
				role="option"
				part="option ${io(t,e)}"
				?aria-selected=${i(e)}
				data-index=${o}
				@mouseenter=${()=>n(o)}
				@click=${()=>s(e)}
				@mousedown=${l=>l.preventDefault()}
			>
				${a}
			</div>
			<div class="sizer" virtualizer-sizer>${a}</div>`},_r=(t,e)=>({item:o,content:n,disabled:s,hidden:r,className:i="chip",slot:a})=>p`<cosmoz-tag
			class=${y(i)}
			slot=${y(a)}
			exportparts="chip-text, chip-clear"
			color=${io(t,o)}
			?disabled=${s}
			?hidden=${r}
			?removable=${!!o}
			@remove=${()=>e(o)}
			title=${y(typeof n=="string"?n:void 0)}
		>
			${n}
		</cosmoz-tag>`,xr=t=>{const{value:e,setValue:o,setExcludingValue:n}=yr("value"),[s,r]=ve("text"),i=w(a=>o(l=>l?.filter(c=>c.item!==a)),[]);return Qe({...t,value:S(()=>e?.map(ro),[e]),onChange:w(a=>{n(a)},[]),text:s,onText:w(a=>{r(a)},[]),itemRenderer:S(()=>wr(e),[e]),chipRenderer:S(()=>_r(e,i),[e,i])})},$r={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-excluding",L(xr,{observedAttributes:Je,styleSheets:[Qt,br],shadowRootInit:$r}));ce`
	.input-inline-file {
		position: relative;
		margin-bottom: calc(var(--cz-spacing) * 4);
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
`;const kt=t=>t?Array.isArray(t)?t.length===1?t[0].name:re("{0} files",{0:t.length}):t.name:re("Choose file"),Nr=Re(({id:t,label:e,value:o,values:n,onChange:s,accept:r,multiple:i,disabled:a})=>p`<div class="input input-inline-file" name=${t}>
			${Ut({value:kt(o),field:{label:e,disabled:a,prefix:xo({styles:"vertical-align: middle;"}),id:t},error:!1,invalid:!1,load:se,onChange:se,onReset:se,onValues:se,touched:!1,values:n,context:{}})}

			<input
				class="file"
				type="file"
				name=${t}
				title=${kt(o)}
				?multiple=${i}
				?disabled=${y(a)}
				accept=${y(ge(R(r,o,n)))}
				@change=${l=>s(i?Array.from(l.target.files):l.target.files[0])}
			/>
		</div>`);export{Nr as A,Ir as B,H as C,ls as D,Nn as E,Pr as F,Lr as G,M as H,ys as I,zt as J,Xe as K,he as L,x as M,Ce as N,yt as O,w as P,Or as a,Gt as b,se as c,Re as d,Yn as e,Un as f,qt as g,S as h,R as i,Tr as j,cs as k,Te as l,ge as m,_ as n,y as o,L as p,bs as q,Wn as r,Mr as s,ce as t,Ze as u,ss as v,gt as w,Rt as x,Ut as y,Rr as z};
