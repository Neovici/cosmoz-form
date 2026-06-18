import{r as $e,D as Ee,A as V,b as m,w as et,E as B,n as uo,M as po,u as K,v as at,h as It,p as Ce,t as rt}from"./iframe-B3sRQIBC.js";import{_ as mo}from"./preload-helper-PPVm8Dsz.js";let Ct,ke=0;function Jt(e){Ct=e}function te(){Ct=null,ke=0}function fo(){return ke++}const Pt=Symbol("haunted.phase"),xt=Symbol("haunted.hook"),ee=Symbol("haunted.update"),oe=Symbol("haunted.commit"),Q=Symbol("haunted.effects"),ct=Symbol("haunted.layoutEffects"),Vt="haunted.context";class go{update;host;virtual;[xt];[Q];[ct];constructor(t,o){this.update=t,this.host=o,this[xt]=new Map,this[Q]=[],this[ct]=[]}run(t){Jt(this);let o=t();return te(),o}_runEffects(t){let o=this[t];Jt(this);for(let n of o)n.call(this);te()}runEffects(){this._runEffects(Q)}runLayoutEffects(){this._runEffects(ct)}teardown(){this[xt].forEach(o=>{typeof o.teardown=="function"&&o.teardown(!0)})}}const vo=Promise.resolve().then.bind(Promise.resolve());function Se(){let e=[],t;function o(){t=null;let n=e;e=[];for(var s=0,r=n.length;s<r;s++)n[s]()}return function(n){e.push(n),t==null&&(t=vo(o))}}const bo=Se(),ne=Se();class yo{renderer;host;state;[Pt];_updateQueued;_active;constructor(t,o){this.renderer=t,this.host=o,this.state=new go(this.update.bind(this),o),this[Pt]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(bo(()=>{let t=this.handlePhase(ee);ne(()=>{this.handlePhase(oe,t),ne(()=>{this.handlePhase(Q)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(t,o){switch(this[Pt]=t,t){case oe:this.commit(o),this.runEffects(ct);return;case ee:return this.render();case Q:return this.runEffects(Q)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const pt=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},wo=e=>e?.map(t=>typeof t=="string"?pt(t):t),_o=(e,...t)=>e.flatMap((o,n)=>[o,t[n]||""]).join(""),R=_o,zo=(e="")=>e.replace(/-+([a-z])?/g,(t,o)=>o?o.toUpperCase():"");function xo(e){class t extends yo{frag;renderResult;constructor(s,r,i){super(s,i||r),this.frag=r}commit(s){this.renderResult=e(s,this.frag)}}function o(n,s,r){const i=(r||s||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:d}=r||s||{},h=wo(n.styleSheets||d);class f extends i{_scheduler;static get observedAttributes(){return n.observedAttributes||a||[]}constructor(){if(super(),l===!1)this._scheduler=new t(n,this);else{const g=this.attachShadow({mode:"open",...c});h&&(g.adoptedStyleSheets=h),this._scheduler=new t(n,g,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(g,w,$){if(w===$)return;let E=$===""?!0:$;Reflect.set(this,zo(g),E)}}function u(p){let g=p,w=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return g},set($){w&&g===$||(w=!0,g=$,this._scheduler&&this._scheduler.update())}})}const v=new Proxy(i.prototype,{getPrototypeOf(p){return p},set(p,g,w,$){let E;return g in p?(E=Object.getOwnPropertyDescriptor(p,g),E&&E.set?(E.set.call($,w),!0):(Reflect.set(p,g,w,$),!0)):(typeof g=="symbol"||g[0]==="_"?E={enumerable:!0,configurable:!0,writable:!0,value:w}:E=u(w),Object.defineProperty($,g,E),E.set&&E.set.call($,w),!0)}});return Object.setPrototypeOf(f.prototype,v),f}return o}class U{id;state;constructor(t,o){this.id=t,this.state=o}}function $o(e,...t){let o=fo(),n=Ct[xt],s=n.get(o);return s||(s=new e(o,Ct,...t),n.set(o,s)),s.update(...t)}function G(e){return $o.bind(null,e)}function Ae(e){return G(class extends U{callback;lastValues;values;_teardown;constructor(t,o,n,s){super(t,o),e(o,this)}update(t,o){this.callback=t,this.values=o}call(){const t=!this.values||this.hasChanged();this.lastValues=this.values,t&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(t){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),t&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((t,o)=>this.lastValues[o]!==t)}})}function Te(e,t){e[Q].push(t)}const x=Ae(Te),Eo=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,Re=G(class extends U{Context;value;_ranEffect;_unsubscribe;constructor(e,t,o){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Te(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const t={Context:e,callback:this._updater};Eo(this.state.host).dispatchEvent(new CustomEvent(Vt,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:s}=t;this.value=n?s:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function Co(e){return t=>{const o={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(Vt,this)}disconnectedCallback(){this.removeEventListener(Vt,this)}handleEvent(n){const{detail:s}=n;s.Context===o&&(s.value=this.value,s.unsubscribe=this.unsubscribe.bind(this,s.callback),this.listeners.add(s.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let s of this.listeners)s(n)}get value(){return this._value}},Consumer:e(function({render:n}){const s=Re(o);return n(s)},{useShadowDOM:!1}),defaultValue:t};return o}}const C=G(class extends U{value;values;constructor(e,t,o,n){super(e,t),this.value=o(),this.values=n}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((t,o)=>this.values[o]!==t)}}),_=(e,t)=>C(()=>e,t);function ko(e,t){e[ct].push(t)}const Ft=Ae(ko),j=G(class extends U{args;constructor(e,t,o){super(e,t),this.updater=this.updater.bind(this),typeof o=="function"&&(o=o()),this.makeArgs(o)}update(){return this.args}updater(e){const[t]=this.args;typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}}),So=G(class extends U{reducer;currentState;constructor(e,t,o,n,s){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=s!==void 0?s(n):n}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}}),Ao=/([A-Z])/gu,mt=G(class extends U{property;eventName;constructor(e,t,o,n){if(super(e,t),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=o,this.eventName=o.replace(Ao,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updateProp(n))}update(e,t){return[this.state.host[this.property],this.updater]}updater(e){const t=this.state.host[this.property];typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&this.updateProp(e)}updateProp(e){this.notify(e).defaultPrevented||(this.state.host[this.property]=e)}notify(e){const t=new CustomEvent(this.eventName,{detail:{value:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(t),t}});function N(e){return C(()=>({current:e}),[])}function To({render:e}){const t=xo(e),o=Co(t);return{component:t,createContext:o}}const F={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},ot=e=>(...t)=>({_$litDirective$:e,values:t});let ft=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,n){this._$Ct=t,this._$AM=o,this._$Ci=n}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}};const dt=(e,t)=>{const o=e._$AN;if(o===void 0)return!1;for(const n of o)n._$AO?.(t,!1),dt(n,t);return!0},kt=e=>{let t,o;do{if((t=e._$AM)===void 0)break;o=t._$AN,o.delete(e),e=t}while(o?.size===0)},Le=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(o===void 0)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),Oo(t)}};function Ro(e){this._$AN!==void 0?(kt(this),this._$AM=e,Le(this)):this._$AM=e}function Lo(e,t=!1,o=0){const n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(n))for(let r=o;r<n.length;r++)dt(n[r],!1),kt(n[r]);else n!=null&&(dt(n,!1),kt(n));else dt(this,e)}const Oo=e=>{e.type==F.CHILD&&(e._$AP??=Lo,e._$AQ??=Ro)};class qt extends ft{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,o,n){super._$AT(t,o,n),Le(this),this.isConnected=t._$AU}_$AO(t,o=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),o&&(dt(this,t),kt(this))}setValue(t){if($e(this._$Ct))this._$Ct._$AI(t,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=t,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const{component:M,createContext:Mo}=To({render:Ee}),Io=R`
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
`,Po=()=>V,Bo=M(Po,{styleSheets:[Io]});customElements.define("cosmoz-spinner",Bo);const gt=pt(R`
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
`),No=R`
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
`,Vo=R`
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
		${No}
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
`,Fo=["variant","size","disabled","full-width","type","value"],Do=e=>{const t=e.hasAttribute("disabled"),o=e.getAttribute("type")||"button";return x(()=>{const n=s=>{e.hasAttribute("disabled")&&s.stopImmediatePropagation()};return e.addEventListener("click",n,{capture:!0}),()=>e.removeEventListener("click",n,{capture:!0})},[]),m`
		<button type=${o} class="button" ?disabled=${t} part="button">
			<slot name="prefix"></slot>
			<slot></slot>
			<slot name="suffix"></slot>
		</button>
	`};customElements.define("cosmoz-button",M(Do,{observedAttributes:Fo,styleSheets:[gt,Vo],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const b=e=>e??V;function z(e,t,o){return e?t(e):o?.(e)}const jo=({slot:e,title:t,className:o,width:n="24",height:s="24",styles:r}={})=>m`
	<svg
		slot=${b(e)}
		class=${`clear-icon ${o??""}`}
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		width=${n}
		height=${s}
		style=${b(r)}
	>
		${z(t,()=>et`<title>${t}</title>`)}
		<path
			d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
		/>
	</svg>
`,W=G(class extends U{update(){return this.state.host}}),nt=(e,...t)=>e.flatMap((o,n)=>[o,t[n]??""]).join(""),Oe=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},Ho=nt`
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
`,qo=()=>{const e=W(),t=_(()=>{e.dispatchEvent(new Event("close")),e.onClose?.()},[]);return x(()=>{const o=i=>{i.preventDefault(),t()},n=e.shadowRoot,s=i=>i.target.value==="cancel"&&o(i),r=i=>!i.defaultPrevented&&i.key==="Escape"&&o(i);return n.addEventListener("click",s),document.addEventListener("keydown",r,!0),()=>{n.removeEventListener("click",s),document.removeEventListener("keydown",r,!0)}},[]),{close:t}},Yo=()=>{const e=W(),{manualFocus:t}=e;Ft(()=>{!t&&!e.matches(":focus-within")&&(e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex"))},[t])},Uo=(e,t,o)=>{const n=e.width/3,s=e.height/3,r=Math.min(window.innerWidth-2*n,Math.max(-n,t)),i=Math.min(window.innerHeight-2*s,Math.max(-s,o));return{x:r,y:i}},Go=(e,t,o,n)=>s=>{if(!s.target.closest(t))return;const r=Uo,i=e.getBoundingClientRect(),a=s.clientX-i.x,l=s.clientY-i.y,c=(f,u)=>{const v=f-a,p=u-l,g=r(i,v,p);Object.assign(e.style,{left:g.x+"px",top:g.y+"px",transform:"initial"})},d=f=>c(f.clientX,f.clientY),h=f=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",h)};document.addEventListener("mousemove",d),document.addEventListener("mouseup",h)},Wo=()=>{const e=W(),{unmovable:t}=e;x(()=>{if(t)return;const o=e.shadowRoot;if(!o)return;const n=Go(e,".title");return o.addEventListener("mousedown",n),()=>o.removeEventListener("mousedown",n)},[t])},Xo=()=>{qo(),Wo(),Yo()},Zo=({title:e,content:t,styles:o,closeable:n=!1})=>{const s=W();return m`
		<style>
			${Ho}${o}
		</style>
		<div class="title" part="title">
			${e}
			${z(n,()=>m`
					<button
						class="close"
						@click=${()=>{s.dispatchEvent(new Event("close")),s.onClose?.()}}
					>
						${jo()}
					</button>
				`)}
		</div>
		<div class="content" part="content">${t}</div>
	`},Yt=(e,{observedAttributes:t,styles:o,...n}={})=>M(s=>(Xo(),Zo({title:s.heading||s.title,content:e(s),styles:o,closeable:s.closeable})),{observedAttributes:["title","heading","manual-focus","unmovable","closeable",...t??[]],...n});customElements.define("cosmoz-dialog-loading",Yt(()=>m`
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
		`));function Ko(e){return()=>e}const Qo=Ko(),st=Qo,St=e=>e,O=(e,...t)=>typeof e=="function"?e(...t):e;class Jo{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}let tn=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}};const se=e=>!uo(e)&&typeof e.then=="function",re=1073741823;let en=class extends qt{constructor(){super(...arguments),this._$Cwt=re,this._$Cbt=[],this._$CK=new Jo(this),this._$CX=new tn}render(...t){return t.find(o=>!se(o))??B}update(t,o){const n=this._$Cbt;let s=n.length;this._$Cbt=o;const r=this._$CK,i=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<o.length&&!(a>this._$Cwt);a++){const l=o[a];if(!se(l))return this._$Cwt=a,l;a<s&&l===n[a]||(this._$Cwt=re,s=0,Promise.resolve(l).then(async c=>{for(;i.get();)await i.get();const d=r.deref();if(d!==void 0){const h=d._$Cbt.indexOf(l);h>-1&&h<d._$Cwt&&(d._$Cwt=h,d.setValue(c))}}))}return B}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const ut=ot(en);const ie=(e,t,o)=>{const n=new Map;for(let s=t;s<=o;s++)n.set(e[s],s);return n},Ut=ot(class extends ft{constructor(e){if(super(e),e.type!==F.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let n;o===void 0?o=t:t!==void 0&&(n=t);const s=[],r=[];let i=0;for(const a of e)s[i]=n?n(a,i):i,r[i]=o(a,i),i++;return{values:r,keys:s}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,n]){const s=po(e),{values:r,keys:i}=this.dt(t,o,n);if(!Array.isArray(s))return this.ut=i,r;const a=this.ut??=[],l=[];let c,d,h=0,f=s.length-1,u=0,v=r.length-1;for(;h<=f&&u<=v;)if(s[h]===null)h++;else if(s[f]===null)f--;else if(a[h]===i[u])l[u]=K(s[h],r[u]),h++,u++;else if(a[f]===i[v])l[v]=K(s[f],r[v]),f--,v--;else if(a[h]===i[v])l[v]=K(s[h],r[v]),at(e,l[v+1],s[h]),h++,v--;else if(a[f]===i[u])l[u]=K(s[f],r[u]),at(e,s[h],s[f]),f--,u++;else if(c===void 0&&(c=ie(i,u,v),d=ie(a,h,f)),c.has(a[h]))if(c.has(a[f])){const p=d.get(i[u]),g=p!==void 0?s[p]:null;if(g===null){const w=at(e,s[h]);K(w,r[u]),l[u]=w}else l[u]=K(g,r[u]),at(e,s[h],g),s[p]=null;u++}else It(s[f]),f--;else It(s[h]),h++;for(;u<=v;){const p=at(e,l[v+1]);K(p,r[u]),l[u++]=p}for(;h<=f;){const p=s[h++];p!==null&&It(p)}return this.ut=i,Ce(e,l),B}}),on=e=>typeof e=="object"&&e!==null&&Symbol.iterator in e;function D(e){return e==null?[]:Array.isArray(e)?e:typeof e=="string"?[e]:on(e)?Array.from(e):[e]}const Bt=(e,t=St)=>o=>{const n=D(e).map(t);return D(o).filter(s=>!n.includes(t(s)))};function $t(e){return e?t=>typeof t=="object"&&t!==null?t[e]:t:St}const nn=e=>{const t=$t(e);return o=>typeof o=="string"?o:t(o)?.toString()||""},sn=e=>t=>{const o={};for(const n in t)e.includes(n)&&(o[n]=t[n]);return o};function ae(e,t,...o){return e?e(t,...o):t}const At=ot(class extends ft{constructor(e){if(super(e),e.type!==F.PROPERTY&&e.type!==F.ATTRIBUTE&&e.type!==F.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!$e(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===B||t===V)return t;const o=e.element,n=e.name;if(e.type===F.PROPERTY){if(t===o[n])return B}else if(e.type===F.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(n))return B}else if(e.type===F.ATTRIBUTE&&o.getAttribute(n)===t+"")return B;return Ce(e),t}}),Nt=new WeakMap,J=ot(class extends qt{render(e){return V}update(e,[t]){const o=t!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),V}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let o=Nt.get(t);o===void 0&&(o=new WeakMap,Nt.set(t,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Nt.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),rn=({slot:e,title:t,className:o,width:n="24",height:s="24",styles:r}={})=>m`
  <svg
    slot=${b(e)}
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
    style=${b(r)}
  >
    ${z(t,()=>et`<title>${t}</title>`)}
    <path
      d="M12 8v4m0 4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`,an=({slot:e,title:t,className:o,width:n="24",height:s="24",styles:r}={})=>m`
  <svg
    slot=${b(e)}
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
    style=${b(r)}
  >
    ${z(t,()=>et`<title>${t}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`,ln=({slot:e,title:t,className:o,width:n="24",height:s="24",styles:r}={})=>m`
  <svg
    slot=${b(e)}
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
    style=${b(r)}
  >
    ${z(t,()=>et`<title>${t}</title>`)}
    <path
      d="M12.5 2h2.7c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 4.28 20 5.12 20 6.8v10.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2v-.7M16 13h-4.5M16 9h-3.5m3.5 8H8m-2-7V4.5a1.5 1.5 0 1 1 3 0V10a3 3 0 1 1-6 0V6"
    />
  </svg>
`,cn=({slot:e,title:t,className:o,width:n="24",height:s="24",styles:r}={})=>m`
  <svg
    slot=${b(e)}
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
    style=${b(r)}
  >
    ${z(t,()=>et`<title>${t}</title>`)}
    <path
      d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`,dn=({slot:e,title:t,className:o,width:n="24",height:s="24",styles:r}={})=>m`
  <svg
    slot=${b(e)}
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
    style=${b(r)}
  >
    ${z(t,()=>et`<title>${t}</title>`)}
    <path
      d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`,hn=({slot:e,title:t,className:o,width:n="24",height:s="24",styles:r}={})=>m`
  <svg
    slot=${b(e)}
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
    style=${b(r)}
  >
    ${z(t,()=>et`<title>${t}</title>`)}
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
`,un=R`
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
`;customElements.define("cosmoz-tooltip-content",M(()=>m`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[gt,un]}));const Dt=pt(R`
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
`),le=(e,t,o)=>Ee(m`<cosmoz-tooltip-content>
			${z(t,()=>m`<strong slot="heading">${t}</strong>`)}
			${z(o,()=>m`<p slot="description">${o}</p>`)}
		</cosmoz-tooltip-content>`,e),pn=(e,t)=>{const{for:o,heading:n,description:s,placement:r="top",delay:i=300,disabled:a=!1}=t,l=N(),d=!!(n||s)&&!a;x(()=>{if(!o||!d)return;const h=e.getRootNode(),f=h.adoptedStyleSheets??[];f.includes(Dt)||(h.adoptedStyleSheets=[...f,Dt]);const u=document.createElement("div");u.setAttribute("popover","manual"),u.setAttribute("role","tooltip"),u.classList.add("cosmoz-tooltip-popover"),e.after(u),l.current=u,le(u,n,s);const v=`[name="${o}"]`,p=`--tooltip-anchor-${o}`;let g;const w=S=>{a||(clearTimeout(g),S.style.anchorName=p,u.style.positionAnchor=p,u.style.positionArea=r,g=window.setTimeout(()=>u.showPopover(),i))},$=()=>{clearTimeout(g),u.hidePopover()},E=S=>{const A=S.target.closest?.(v);A&&w(A)},P=S=>{const A=S.target.closest?.(v);if(!A)return;const T=S.relatedTarget;T&&A.contains(T)||$()},I=S=>{const A=S.target.closest?.(v);A&&w(A)},L=S=>{S.target.closest?.(v)&&$()};return h.addEventListener("pointerover",E),h.addEventListener("pointerout",P),h.addEventListener("focusin",I),h.addEventListener("focusout",L),()=>{clearTimeout(g),h.removeEventListener("pointerover",E),h.removeEventListener("pointerout",P),h.removeEventListener("focusin",I),h.removeEventListener("focusout",L),u.hidePopover(),u.remove(),l.current=void 0}},[o,r,i,d]),x(()=>{!o||!l.current||le(l.current,n,s)},[n,s,o]),x(()=>{!a||!l.current||l.current.hidePopover()},[a])},mn=e=>{const[t,o]=j(!1);return x(()=>{const n=e.current;if(!n)return;const s=()=>{o(n.assignedElements().length>0)};return s(),n.addEventListener("slotchange",s),()=>n.removeEventListener("slotchange",s)},[e.current]),t},fn=R`
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
`,gn=e=>{const{heading:t,description:o,for:n,placement:s="top",delay:r=300,disabled:i=!1}=e,a=N(),l=N(),c=N(),d=mn(c),f=!!(t||o||d)&&!i,u=_(()=>{f&&(clearTimeout(l.current),l.current=window.setTimeout(()=>{a.current?.showPopover()},r))},[r,f]);x(()=>{i&&(clearTimeout(l.current),a.current?.hidePopover())},[i]);const v=_(()=>{clearTimeout(l.current),a.current?.hidePopover()},[]);return x(()=>{if(n)return;const p=g=>{const w=g.relatedTarget;w&&e.contains(w)||v()};return e.addEventListener("pointerover",u),e.addEventListener("pointerout",p),()=>{e.removeEventListener("pointerover",u),e.removeEventListener("pointerout",p)}},[n,u,v]),pn(e,{for:n,heading:t,description:o,placement:s,delay:r,disabled:i}),n?V:f?m`
		<slot @focusin=${u} @focusout=${v}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${s}"
			${J(a)}
		>
			<cosmoz-tooltip-content>
				${z(t,()=>m`<strong slot="heading">${t}</strong>`)}
				${z(o,()=>m`<p slot="description">${o}</p>`)}
				<slot name="content" ${J(c)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:m`
			<slot></slot>
			<slot name="content" ${J(c)} hidden></slot>
		`};customElements.define("cosmoz-tooltip",M(gn,{styleSheets:[gt,Dt,fn],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const Me=(e,{hint:t,label:o,invalid:n,errorMessage:s,compact:r,required:i})=>m`
		<!-- label: hidden in compact mode -->
		${z(!r&&o,()=>m`<label for="input" part="label"
					>${o}
					${z(i,()=>m`<span class="required">*</span>`)}
				</label>`)}
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
			</div>
			<!-- compact: tooltip always visible, red icon when invalid -->
			${z(r&&n&&s,()=>m`<cosmoz-tooltip
						placement="top"
						description=${s}
						delay="300"
					>
						${dn({width:"16px",height:"16px"})}
					</cosmoz-tooltip>`)}

			<slot name="suffix"></slot>
		</div>
		<!-- hint: visible when valid, hidden when invalid or compact -->
		${z(!r&&t&&!n,()=>m`<span class="hint" part="hint">${t}</span>`)}
		<!-- error: replaces hint when invalid, hidden in compact -->
		${z(!r&&n&&s,()=>m`<span class="error" part="error">${s}</span>`)}
	`,Ie=["autocomplete","readonly","disabled","maxlength","invalid"],Pe=nt`
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
`,vn=e=>C(()=>{if(e==null)return;const t=new RegExp(e,"u");return o=>{!o.defaultPrevented&&o.data&&!t.test(o.data)&&o.preventDefault()}},[e]),bn=G(class extends U{values;constructor(e,t,o,n){super(e,t),Object.assign(t.host,o),this.values=n}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,o)=>this.values[o]!==t)}}),yn=/([A-Z])/gu,ce=(e,t,o)=>{e[t]=o,e.dispatchEvent(new CustomEvent(t.replace(yn,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},Be=e=>{const t=N(void 0),o=_(l=>t.current=l,[]),n=e.shadowRoot,s=_(l=>e.dispatchEvent(new Event(l.type,{bubbles:l.bubbles})),[]),r=_(l=>ce(e,"value",l.target.value),[]),i=_(l=>ce(e,"focused",l.type==="focus"),[]),a=_(()=>{const l=t.current?.checkValidity();return e.toggleAttribute("invalid",!l),l},[]);return bn({validate:a},[a]),x(()=>{const l=c=>{c.composedPath()[0]?.closest?.("input, textarea")||(c.preventDefault(),t.current?.focus())};return n.addEventListener("mousedown",l),()=>n.removeEventListener("mousedown",l)},[]),{onChange:s,onFocus:i,onInput:r,onRef:o}},wn=({placeholder:e})=>e||" ",_n=(e,t)=>t??(e==="date"?"9999-12-31":void 0),zn=["type","variant","hint","compact","required","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Ie],xn=e=>{const{type:t="text",pattern:o,allowedPattern:n,autocomplete:s,value:r,readonly:i,disabled:a,min:l,max:c,step:d,maxlength:h,required:f}=e,{onChange:u,onFocus:v,onInput:p,onRef:g}=Be(e),w=vn(n);return e.toggleAttribute("has-value",!!r),Me(m`
			<input
				${J(g)}
				style="--chars: ${r?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${b(o)}
				autocomplete=${b(s)}
				placeholder=${wn({placeholder:e.placeholder})}
				?readonly=${i}
				aria-disabled=${a?"true":"false"}
				?disabled=${a}
				?required=${f}
				.value=${At(r??"")}
				maxlength=${b(h)}
				@beforeinput=${w}
				@input=${p}
				@change=${u}
				@focus=${v}
				@blur=${v}
				min=${b(l)}
				max=${b(_n(t,c))}
				step=${b(d)}
			/>
		`,e)};customElements.define("cosmoz-input",M(xn,{observedAttributes:zn,styleSheets:[pt(Pe)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const de=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},$n=(e,t=0)=>{if(t>0){const o=e.getAttribute("rows")??"",n=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=n,e.setAttribute("rows",o)}},En=e=>{const{value:t,maxRows:o}=e,n=C(()=>()=>e.shadowRoot.querySelector("#input"),[]);x(()=>$n(n(),o),[o,n]),x(()=>de(n()),[n,t]),x(()=>{const s=n(),r=new ResizeObserver(()=>requestAnimationFrame(()=>de(s)));return r.observe(s),()=>r.unobserve(s)},[n])},Cn=["rows","placeholder","label","hint","required",...Ie],kn=e=>{const{autocomplete:t,value:o,placeholder:n,readonly:s,disabled:r,rows:i,cols:a,maxlength:l}=e,{onChange:c,onFocus:d,onInput:h,onRef:f}=Be(e);return En(e),Me(m`
			<textarea id="input" part="input"
				${J(f)}
				autocomplete=${b(t)}
				placeholder=${n||" "}
				rows=${i??1} cols=${b(a)}
				?readonly=${s} ?aria-disabled=${r} ?disabled=${r}
				.value=${At(o??"")} maxlength=${b(l)} @input=${h}
				@change=${c} @focus=${d} @blur=${d}>`,e)};customElements.define("cosmoz-textarea",M(kn,{observedAttributes:Cn,styleSheets:[pt(Pe)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Sn=e=>{const{label:t,value:o,disabled:n,error:s}=e,r=_(i=>e.dispatchEvent(new CustomEvent("change",{detail:i.target.checked})),[]);return m`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${At(!!o)}
			?disabled=${n}
			@change=${r}
		/>
		${z(t,()=>m`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${z(s,i=>m`<div class="failure">${i}</div>`)} `},An=R`
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
`,Tn=R`
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
`;customElements.define("cosmoz-toggle",M(Sn,{styleSheets:[Tn,An],observedAttributes:["label","disabled","error"]}));const Rn=e=>{if(!e||e===1/0)return;if(typeof e=="number")return e;const t=parseFloat(e.replace(/[\s]/gu,"").replace(/^−/gu,"-").replace(/[,.]/gu,".").replace(/[.](?=.*[.])/gu,""));if(!isNaN(t))return t},Ln=/^[0-9.,e-]+$/u,On=e=>e==null||e===""||Number.isNaN(e)||Array.isArray(e)&&e.length<1,he=e=>On(e)&&rt("Required"),Mn=Symbol("error"),In=(e,t,o,n,s)=>{for(const r of D(e)){const i=r(t,o,n,s);if(i)return i}},Ne=(e,t,o)=>e.validate&&In(e.validate,t[e.path??e.id],t,e,o),Sr=(e,t,o)=>{const n=e.flatMap(s=>{const r=Ne(s,t,o);return r?[[s.id,r]]:[]});return n.length?Object.fromEntries(n):void 0},Pn=(e,t,o)=>{const n=e.map(s=>({...s,error:Ne(s,t,o)}));return{fields:n,invalid:n.some(({error:s})=>!!s)}},Bn=(e,t,o)=>t?Pn(e,t,o):{fields:e,invalid:!0},Nn=(e,t,o,n)=>{n!=null&&Object.is(n[t],o)||e({[t]:o})},Vn=e=>Array.isArray(e)?e.some(t=>t===he):e===he,Gt=e=>({field:t,value:o,values:n,onChange:s,context:r,...i})=>{const a=(c,d)=>(t.onChange??Nn)(h=>s(h,d),t.path??t.id,ae(t.value?.[1],c,n,t,r),n);if(!O(t.hidden,o,n,t,r))return e({...t,...i,context:r,values:n,required:Vn(t.validate),label:O(t.label,o,n,t,r),placeholder:O(t.placeholder,o,n,t,r),disabled:O(t.disabled,o,n,t,r),warning:O(t.warning,o,n,t,r),prefix:O(t.prefix,o,n,t,r),suffix:O(t.suffix,o,n,t,r),value:ae(t.value?.[0],o,n,t,r),onFocus:t.onFocus?.(a,o,n,t),onChange:a})},Fn=e=>z(e,()=>m`<span slot="prefix">${e}</span>`),Dn=e=>z(e,()=>m`<span slot="suffix">${e}</span>`),jn=(e,t="suffix")=>z(e,()=>rn({slot:t,title:e,width:"22",height:"22",styles:"color: var(--cz-color-text-warning); vertical-align: middle"})),Hn=(e,t="suffix")=>z(e,()=>cn({slot:t,title:e,width:"22",height:"22",styles:"color: var(--cz-color-text-primary); vertical-align: middle; cursor: help"})),qn=({prefix:e,suffix:t,warning:o,description:n})=>[Fn(e),Dn(t),jn(o),Hn(n)],Ve=e=>{const{value:t,values:o,onFocus:n,onInput:s,context:r,...i}=e,{id:a,variant:l,type:c="text",label:d,placeholder:h,error:f,prefix:u,suffix:v,warning:p,allowedPattern:g,step:w,disabled:$,required:E,maxlength:P,min:I,max:L,autosize:S,noSpinner:A,autocomplete:T,title:H,description:X,hint:it}=i;return m`<cosmoz-input
		class="input input-common input-${c}"
		variant=${b(l)}
		hint=${b(it)}
		name=${a}
		type=${c}
		?autosize=${S}
		?disabled=${$}
		?required=${E}
		?invalid=${!!f}
		?no-spinner=${!!A}
		.placeholder=${h}
		.errorMessage=${f}
		.allowedPattern=${g}
		.step=${w}
		.label=${d}
		.value=${t}
		title=${b((f??H)||void 0)}
		maxlength=${b(P)}
		min=${b(O(I,t,o,i,r))}
		max=${b(O(L,t,o,i,r))}
		autocomplete=${b(T)}
		@focus=${n}
		@input=${s}
		>${qn({prefix:u,suffix:v,warning:p,description:X})}</cosmoz-input
	>`},Fe=Gt(({onChange:e,...t})=>Ve({...t,onInput:o=>e(o.target.value)})),Ar=Gt(({onChange:e,allowedPattern:t=Ln,...o})=>Ve({...o,type:"number",allowedPattern:t,onInput:n=>e(Rn(n.target.value))})),Yn=({field:e,values:t,...o})=>{const n=(o.touched&&(t?.[Mn]?.[e.id]??e.error))??!1,s=t?.[e.path??e.id];return(e.input??Fe)({...o,error:n,value:s,field:e,values:t})},De=({fields:e,...t})=>Ut(e??[],({id:o})=>o,o=>Yn({field:o,fields:e,...t})),Un=({fields:e,selector:t=""})=>(e??[]).map(({id:o,styles:n})=>n?`${t}[name="${String(o)}"] { ${Object.entries(n).map(([s,r])=>`${s}:${r}`).join(";")} }`:"").join(`
`),Tr=({fields:e})=>Ut(e??[],({id:t})=>t,t=>{const o=O(t.header??t.label,void 0,{},t);return m`<div class="header" name="${t.id}" title="${o}">
				${o}
			</div>`});class Tt extends Event{constructor(t){super(Tt.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}Tt.eventName="rangeChanged";class Rt extends Event{constructor(t){super(Rt.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}Rt.eventName="visibilityChanged";class Lt extends Event{constructor(){super(Lt.eventName,{bubbles:!1})}}Lt.eventName="unpinned";class Gn{constructor(t){this._element=null;const o=t??window;this._node=o,t&&(this._element=t)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class Wn extends Gn{constructor(t,o){super(o),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const n=this._node;this._originalScrollTo=n.scrollTo,this._originalScrollBy=n.scrollBy,this._originalScroll=n.scroll,this._attach(t)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(t,o){const n=typeof t=="number"&&typeof o=="number"?{left:t,top:o}:t;this._scrollTo(n)}scrollBy(t,o){const n=typeof t=="number"&&typeof o=="number"?{left:t,top:o}:t;n.top!==void 0&&(n.top+=this.scrollTop),n.left!==void 0&&(n.left+=this.scrollLeft),this._scrollTo(n)}_nativeScrollTo(t){this._originalScrollTo.bind(this._element||window)(t)}_scrollTo(t,o=null,n=null){this._end!==null&&this._end(),t.behavior==="smooth"?(this._setDestination(t),this._retarget=o,this._end=n):this._resetScrollState(),this._nativeScrollTo(t)}_setDestination(t){let{top:o,left:n}=t;return o=o===void 0?void 0:Math.max(0,Math.min(o,this.maxScrollTop)),n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollLeft)),this._destination!==null&&n===this._destination.left&&o===this._destination.top?!1:(this.__destination={top:o,left:n,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(t){this._destination&&this._setDestination(t)&&this._nativeScrollTo(this._destination)}managedScrollTo(t,o,n){return this._scrollTo(t,o,n),this._updateManagedScrollTo}correctScrollError(t){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(t),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:t,scrollLeft:o}=this;let{top:n,left:s}=this._destination;n=Math.min(n||0,this.maxScrollTop),s=Math.min(s||0,this.maxScrollLeft);const r=Math.abs(n-t),i=Math.abs(s-o);r<1&&i<1&&(this._end&&this._end(),this._resetScrollState())}}detach(t){return this._clients.delete(t),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(t){this._clients.add(t),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let ue=typeof window<"u"?window.ResizeObserver:void 0;const jt=Symbol("virtualizerRef"),_t="virtualizer-sizer";let pe;class Xn{constructor(t){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!t)throw new Error("Virtualizer constructor requires a configuration object");if(t.hostElement)this._init(t);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(t){Array.isArray(t)&&t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}_init(t){this._isScroller=!!t.scroller,this._initHostElement(t);const o=t.layout||{};this._layoutInitialized=this._initLayout(o)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new ue(()=>this._hostElementSizeChanged()),this._childrenRO=new ue(this._childrenSizeChanged.bind(this))}_initHostElement(t){const o=this._hostElement=t.hostElement;this._applyVirtualizerStyles(),o[jt]=this}connected(){this._initObservers();const t=this._isScroller;this._clippingAncestors=Qn(this._hostElement,t),this._scrollerController=new Wn(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(t=>{t.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(t),this._hostElementRO.observe(t)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(t=>this._childrenRO.observe(t)),this._scrollEventListeners.forEach(t=>t.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(t=>t.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const o=this._hostElement.style;o.display=o.display||"block",o.position=o.position||"relative",o.contain=o.contain||"size layout",this._isScroller&&(o.overflow=o.overflow||"auto",o.minHeight=o.minHeight||"150px")}_getSizer(){const t=this._hostElement;if(!this._sizer){let o=t.querySelector(`[${_t}]`);o||(o=document.createElement("div"),o.setAttribute(_t,""),t.appendChild(o)),Object.assign(o.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),o.textContent="&nbsp;",o.setAttribute(_t,""),this._sizer=o}return this._sizer}async updateLayoutConfig(t){await this._layoutInitialized;const o=t.type||pe;if(typeof o=="function"&&this._layout instanceof o){const n={...t};return delete n.type,this._layout.config=n,!0}return!1}async _initLayout(t){let o,n;if(typeof t.type=="function"){n=t.type;const s={...t};delete s.type,o=s}else o=t;n===void 0&&(pe=n=(await mo(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new n(s=>this._handleLayoutMessage(s),o),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const t=window.performance.now(),o=t-this._benchmarkStart,s=performance.getEntriesByName("uv-virtualizing","measure").filter(r=>r.startTime>=this._benchmarkStart&&r.startTime<t).reduce((r,i)=>r+i.duration,0);return this._benchmarkStart=null,{timeElapsed:o,virtualizationTime:s}}return null}_measureChildren(){const t={},o=this._children,n=this._measureChildOverride||this._measureChild;for(let s=0;s<o.length;s++){const r=o[s],i=this._first+s;(this._itemsChanged||this._toBeMeasured.has(r))&&(t[i]=n.call(this,r,this._items[i]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){const{width:o,height:n}=t.getBoundingClientRect();return Object.assign({width:o,height:n},Zn(t))}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(t){this._scrollSize=t.scrollSize,this._adjustRange(t.range),this._childrenPos=t.childPositions,this._scrollError=t.scrollError||null;const{_rangeChanged:o,_itemsChanged:n}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(o||n)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(t=>this._childrenRO.observe(t)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(t){t.type==="scroll"?(t.currentTarget===window||this._clippingAncestors.includes(t.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",t)}_handleLayoutMessage(t){t.type==="stateChanged"?this._updateDOM(t):t.type==="visibilityChanged"?(this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._notifyVisibility()):t.type==="unpinned"&&this._hostElement.dispatchEvent(new Lt)}get _children(){const t=[];let o=this._hostElement.firstElementChild;for(;o;)o.hasAttribute(_t)||t.push(o),o=o.nextElementSibling;return t}_updateView(){const t=this._hostElement,o=this._scrollerController?.element,n=this._layout;if(t&&o&&n){let s,r,i,a;const l=t.getBoundingClientRect();s=0,r=0,i=window.innerHeight,a=window.innerWidth;const c=this._clippingAncestors.map(w=>w.getBoundingClientRect());c.unshift(l);for(const w of c)s=Math.max(s,w.top),r=Math.max(r,w.left),i=Math.min(i,w.bottom),a=Math.min(a,w.right);const d=o.getBoundingClientRect(),h={left:l.left-d.left,top:l.top-d.top},f={width:o.scrollWidth,height:o.scrollHeight},u=s-l.top+t.scrollTop,v=r-l.left+t.scrollLeft,p=Math.max(0,i-s),g=Math.max(0,a-r);n.viewportSize={width:g,height:p},n.viewportScroll={top:u,left:v},n.totalScrollSize=f,n.offsetWithinScroller=h}}_sizeHostElement(t){const n=t&&t.width!==null?Math.min(82e5,t.width):0,s=t&&t.height!==null?Math.min(82e5,t.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${n}px, ${s}px)`;else{const r=this._hostElement.style;r.minWidth=n?`${n}px`:"100%",r.minHeight=s?`${s}px`:"100%"}}_positionChildren(t){t&&t.forEach(({top:o,left:n,width:s,height:r,xOffset:i,yOffset:a},l)=>{const c=this._children[l-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${n}px, ${o}px)`,s!==void 0&&(c.style.width=s+"px"),r!==void 0&&(c.style.height=r+"px"),c.style.left=i===void 0?null:i+"px",c.style.top=a===void 0?null:a+"px")})}async _adjustRange(t){const{_first:o,_last:n,_firstVisible:s,_lastVisible:r}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==o||this._last!==n,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==s||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){const{scrollTop:t,scrollLeft:o}=this._scrollerController,{top:n,left:s}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:t-n,left:o-s})}}element(t){return t===1/0&&(t=this._items.length-1),this._items?.[t]===void 0?void 0:{scrollIntoView:(o={})=>this._scrollElementIntoView({...o,index:t})}}_scrollElementIntoView(t){if(t.index>=this._first&&t.index<=this._last)this._children[t.index-this._first].scrollIntoView(t);else if(t.index=Math.min(t.index,this._items.length-1),t.behavior==="smooth"){const o=this._layout.getScrollIntoViewCoordinates(t),{behavior:n}=t;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(o,{behavior:n}),()=>this._layout.getScrollIntoViewCoordinates(t),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=t}else this._layout.pin=t}_checkScrollIntoViewTarget(t){const{index:o}=this._scrollIntoViewTarget||{};o&&t?.has(o)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new Tt({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new Rt({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((t,o)=>{this._layoutCompleteResolver=t,this._layoutCompleteRejecter=o})),this._layoutCompletePromise}_rejectLayoutCompletePromise(t){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(t),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(t){if(this._layout?.measureChildren){for(const o of t)this._toBeMeasured.set(o.target,o.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function Zn(e){const t=window.getComputedStyle(e);return{marginTop:zt(t.marginTop),marginRight:zt(t.marginRight),marginBottom:zt(t.marginBottom),marginLeft:zt(t.marginLeft)}}function zt(e){const t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}function me(e){if(e.assignedSlot!==null)return e.assignedSlot;if(e.parentElement!==null)return e.parentElement;const t=e.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function Kn(e,t=!1){const o=[];let n=t?e:me(e);for(;n!==null;)o.push(n),n=me(n);return o}function Qn(e,t=!1){let o=!1;return Kn(e,t).filter(n=>{if(o)return!1;const s=getComputedStyle(n);return o=s.position==="fixed",s.overflow!=="visible"})}const Jn=e=>e,ts=(e,t)=>m`${t}: ${JSON.stringify(e,null,2)}`;class es extends qt{constructor(t){if(super(t),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(o,n)=>ts(o,n+this._first),this._keyFunction=(o,n)=>Jn(o,n+this._first),this._items=[],t.type!==F.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(t){t&&this._setFunctions(t);const o=[];if(this._first>=0&&this._last>=this._first)for(let n=this._first;n<=this._last;n++)o.push(this._items[n]);return Ut(o,this._keyFunction,this._renderItem)}update(t,[o]){this._setFunctions(o);const n=this._items!==o.items;return this._items=o.items||[],this._virtualizer?this._updateVirtualizerConfig(t,o):this._initialize(t,o),n?B:this.render()}async _updateVirtualizerConfig(t,o){if(!await this._virtualizer.updateLayoutConfig(o.layout||{})){const s=t.parentNode;this._makeVirtualizer(s,o)}this._virtualizer.items=this._items}_setFunctions(t){const{renderItem:o,keyFunction:n}=t;o&&(this._renderItem=(s,r)=>o(s,r+this._first)),n&&(this._keyFunction=(s,r)=>n(s,r+this._first))}_makeVirtualizer(t,o){this._virtualizer&&this._virtualizer.disconnected();const{layout:n,scroller:s,items:r}=o;this._virtualizer=new Xn({hostElement:t,layout:n,scroller:s}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(t,o){const n=t.parentNode;n&&n.nodeType===1&&(n.addEventListener("rangeChanged",s=>{this._first=s.first,this._last=s.last,this.setValue(this.render())}),this._makeVirtualizer(n,o))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const os=ot(es),Rr=nt`
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
`,ns=()=>V,ss=(e,t)=>Promise.resolve(e).then(t,t),Lr=({error:e,...t})=>[De(t),z(e,o=>m`<div class="failure">${o.message}</div>`)],rs=e=>ut(e?.then(ns,t=>m`<div class="failure">${t.message}</div>`),V),is=({save$:e,progress:t,...o})=>{const n=({onSave:s,onClick:r=s,title:i,disabled:a,progress:l,content:c=V,slot:d})=>m` <cosmoz-button
			class="button save"
			slot=${b(d)}
			?disabled=${a}
			?data-progress=${l}
			@click=${h=>(h.stopPropagation(),r())}
		>
			${c} ${i}
		</cosmoz-button>`;return ut(ss(e,()=>n(o)),n({...o,disabled:!0,progress:!0,content:m`<cosmoz-spinner></cosmoz-spinner> ${z(t,s=>s.join("/"))}`}))},as=nt`
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
		padding-inline: calc(var(--cz-spacing) * 6);
		padding-block: calc(var(--cz-spacing) * 5.5);
		gap: var(--cz-spacing);

		& cosmoz-button {
			min-width: calc(var(--cz-spacing) * 20);
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
`,ls=()=>{let e=null;return{run:async(t,o,n,s)=>{e?.abort(),e=new AbortController;const r={update:n,signal:e.signal,index:s?.index,context:s?.context};try{return await t(o,r)}catch(i){if(i instanceof DOMException&&i.name==="AbortError")return null;throw i}},cancel:()=>{e?.abort(),e=null}}},cs=(e,t)=>e.length!==t.length||e.some((o,n)=>!Object.is(o,t[n])),ds=e=>{console.error("[cosmoz-form] async rule error:",e)},hs=(e,t,o)=>{const n=ds,s=N(new Map),r=N(new Map),i=N(0),[a,l]=j(!1);return x(()=>()=>{for(const c of s.current.values())c.cancel()},[]),x(()=>{if(!t?.length)return;const c=e.context;for(const d of t){const[h,f,u=ls]=d;s.current.has(d)||s.current.set(d,u());const v=f(e.values,void 0,c),p=r.current.get(d);if(p!=null&&!cs(v,p))continue;r.current.set(d,v);const g=s.current.get(d);i.current++,i.current===1&&l(!0),g.run(h,e.values,w=>e.onChange(w,!1),{context:c}).then(w=>{w!==null&&e.onChange(w,!1)}).catch(w=>n(w,d)).finally(()=>{i.current--,i.current===0&&l(!1)})}},[e.values,e.context]),{...e,processing:a}},Ht=Symbol("touched");function Et(e,t=!0){if(e==null)return;const o=e;return t?o[Ht]=!0:delete o[Ht],e}const je=e=>Et(e,!1),fe=e=>!!e?.[Ht],us=(e,t)=>!t||e.some((o,n)=>!Object.is(t[n],o)),lt=({oldItem:e,newItem:t,rules:o,index:n,oldIndex:s=n,context:r,oldContext:i=r})=>o?o.reduce((a,[l,c])=>e&&c&&!us(c(a,n,r),c(e,s,i))?a:{...a,...l(a,e,n,s,r)},t):t,ps=(e,t,o,n,s)=>{const[,r]=e,i=N(void 0);return x(()=>{const a=i.current;i.current=n,a!==void 0&&t(([l,c])=>[l,Et(lt({oldItem:c,newItem:c,rules:o,context:n,oldContext:a}),fe(c))])},[n]),{values:r,context:n??{},onReset:_(()=>t(([a])=>[a,a]),[t]),onValues:_((a,l=!0)=>t(([c,d])=>[c,Et(lt({oldItem:d,newItem:O(a,d),rules:o,context:n}),l)]),[o,t,n]),onChange:_((a,l=!0)=>t(([c,d])=>[c,Et(lt({oldItem:d,newItem:{...d,...O(a,d)},rules:o,context:n}),l)]),[o,t,n]),load:_((a,l)=>{if(!a){t([a,a]);return}const c=je(lt({oldItem:void 0,newItem:a,rules:l??o,context:n}));t([c,c])},[o,t,n]),touched:C(()=>fe(r)||(s??!1),[r,s])}},ms=(e,t,o)=>je(lt({oldItem:void 0,newItem:e,rules:t,context:o})),He=(e,t=[])=>{const o=e.filter(n=>n?.rules!=null).flatMap(n=>n?.rules);return[...t,...o]},fs=(e,t,{fields:o,rules:n,context:s,touched:r})=>{const i=C(()=>O(o)??[],[o]),a=C(()=>He(i,n),[i,n]),l=ps(e,t,a,s,r),{values:c}=l;return{...C(()=>Bn(i,c,s),[i,c,s]),...l}},gs=e=>{const[t,o]=j(()=>{const n=O(e.fields)??[],s=He(n,e.rules),r=ms(e.initial,s,e.context);return[r,r]});return fs(t,o,e)};function vs({fields:e,initial:t,rules:o,asyncRules:n,context:s,onSave:r,allowEmpty:i}){const a=gs({fields:e,initial:t,rules:o,context:s}),{processing:l}=hs(a,n),{values:c,invalid:d}=a,[h,f]=j(),[u,v]=j(),p=c==null||c===t,g=a.fields?.length>0&&!(p&&i)&&(p||d);return{...a,save$:h,onSave:_(()=>f(r?.(c,t,v)),[r,c,t]),disabled:g,processing:l,progress:u}}const bs=nt`
	:host {
		--padding: calc(var(--cz-spacing) * 6);
	}
	.description {
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		color: var(--cz-color-text-secondary);
		padding-inline: var(--padding);
		margin-block: calc(var(--cz-spacing) * 4);
	}
	.description * {
		line-height: normal;
	}
	.form {
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		padding-inline: var(--padding);
	}

	.failure {
		color: var(--cz-color-text-error);
		align-self: center;
		flex: 1;
	}
`,qe=e=>{const{description:t,auto:o,uncancelable:n,hideCancelButton:s,saveText:r=rt("OK")}=e,{onSave:i,disabled:a,save$:l,progress:c,...d}=vs(e);return x(()=>{o&&i()},[o]),m` <style>
			${as} ${Un(d)}${bs}
		</style>
		${z(t,()=>m`<p class="description">${t}</p>`)}
		<div class="form" part="form">${De(d)}</div>
		<div class="buttons">
			${rs(l)}
			${is({save$:l,onSave:i,disabled:a,title:r,progress:c})}
			${z(!s,()=>m`<cosmoz-button
						class="button"
						variant="secondary"
						value="cancel"
						?disabled=${n}
					>
						${rt("Cancel")}
					</cosmoz-button>`)}
		</div>`};customElements.define("cosmoz-form-dialog",Yt(qe,{observedAttributes:["allow-empty"]}));customElements.define("cosmoz-form-dialog-next",Yt(qe,{observedAttributes:["allow-empty"]}));const Or=e=>e?m`<cosmoz-form-dialog
		name=${b(e.name)}
		?allow-empty=${e.allowEmpty}
		.heading=${e.heading}
		.description=${e.description}
		.fields=${e.fields}
		.initial=${e.initial}
		.rules=${e.rules}
		.onClose=${e.onClose}
		.onSave=${e.onSave}
		.auto=${e.auto}
		.uncancelable=${e.uncancelable}
		.hideCancelButton=${e.hideCancelButton}
		.saveText=${e.saveText}
	></cosmoz-form-dialog>`:V;const ys={},ge=ot(class extends ft{constructor(){super(...arguments),this.ot=ys}render(e,t){return t()}update(e,[t,o]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((n,s)=>n===this.ot[s]))return B}else if(this.ot===t)return B;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,o)}}),ws=({host:e,popoverRef:t,disabled:o,openOnHover:n,openOnFocus:s,open:r,close:i})=>{const a=N(),l=()=>clearTimeout(a.current),c=()=>{clearTimeout(a.current),a.current=setTimeout(()=>{const h=t.current;n&&(e.matches(":hover")||h?.matches(":hover"))||e.matches(":focus-within")||h?.matches(":focus-within")||i()},100)},d=()=>{o||(l(),r())};return x(()=>{if(!(!n||o))return e.addEventListener("pointerenter",d),e.addEventListener("pointerleave",c),()=>{l(),e.removeEventListener("pointerenter",d),e.removeEventListener("pointerleave",c)}},[n,o,e]),x(()=>{if(!(!s||o))return e.addEventListener("focusin",d),e.addEventListener("focusout",c),()=>{l(),e.removeEventListener("focusin",d),e.removeEventListener("focusout",c)}},[s,o,e]),{scheduleClose:c,cancelClose:l}},_s=e=>{if(e.newState!=="open")return;const n=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const s of n){const r=s.matches("[autofocus]")?s:s.querySelector("[autofocus]");if(r instanceof HTMLElement){r.focus();break}}},zs=R`
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
`,xs=e=>{const{placement:t="bottom span-right",disabled:o,openOnHover:n,openOnFocus:s}=e,r=N(),[i,a]=mt("opened",!1),l=_(()=>{o||(a(!0),r.current?.showPopover())},[o]),c=_(()=>{a(!1),r.current?.hidePopover()},[]),d=_(()=>{if(o)return;r.current?.matches(":popover-open")?c():l()},[o]);x(()=>{const p=r.current;p&&(i?p.showPopover():p.hidePopover())},[i]),x(()=>{e.toggleAttribute("opened",!!i)},[i]);const{scheduleClose:h,cancelClose:f}=ws({host:e,popoverRef:r,disabled:o,openOnHover:n,openOnFocus:s,open:l,close:c}),u=s?l:d,v=_(p=>{_s(p),a(p.newState==="open"),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:p.newState,oldState:p.oldState,composed:!0}))},[]);return m`
		<slot name="button" @click=${u}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${v}
			@select=${c}
			@focusout=${h}
			@focusin=${f}
			${J(p=>p&&(r.current=p))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",M(xs,{styleSheets:[zs],observedAttributes:["placement","disabled","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const $s=(e,t)=>{if(!e||!t)return;const o=Object.keys(t);return Object.fromEntries(Object.keys(e).flatMap(n=>o.includes(n)?[]:[[n,void 0]]))};class Es extends ft{_props;render(t){return B}update(t,[o]){return this._props!==o&&Object.assign(t.element,$s(this._props,o),this._props=o),B}}const Cs=ot(Es),ks=e=>{const t=W(),o=C(()=>new CSSStyleSheet,[]);x(()=>{t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,o]},[]),x(()=>{o.replaceSync(e)},[e])},Ss="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",As=R`
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
		background: url("${Ss}") var(--cz-color-bg-brand-solid) no-repeat 50%;
	}

	[virtualizer-sizer]:not(.sizer) {
		line-height: 1;
	}
`,Ts=({index:e,itemHeight:t,auto:o})=>R`
	${z(!o,()=>R`
			.item {
				line-height: ${t}px;
				height: ${t}px;
			}
		`)}
	.item[data-index='${e||"0"}'] {
		background: rgb(
			from var(--cz-color-bg-brand-solid) r g b / calc(alpha * 0.15)
		);
	}
	.item[data-index='${e||"0"}'][part~='error'] {
		background: var(--cz-color-bg-error);
	}
`,Rs=e=>{const t=e==="auto",[o,n]=j(t?40:e);return[o,s=>t?n(s):void 0]},Ye=Mo(()=>st);customElements.define("cosmoz-keybinding-provider",Ye.Provider);const Wt=e=>{const t=C(()=>({}),[]);return C(()=>Object.assign(t,e),[t,...Object.values(e)])},ht=(e,t)=>{const o=Re(Ye),n=Wt(e);x(()=>o(n),t)},Ls=Symbol("listbox.navigate.up"),Os=Symbol("listbox.navigate.down"),Ms=Symbol("listbox.select"),Is=({onUp:e,onDown:t,onEnter:o})=>{const n=W();ht({activity:Ls,callback:e,element:()=>n},[]),ht({activity:Os,callback:t,element:()=>n},[]),ht({activity:Ms,callback:o,element:()=>n},[])},Ps=({items:e,onSelect:t,defaultIndex:o=0})=>{const[n,s]=j({index:o}),{index:r}=n,{length:i}=e;return x(()=>{s({index:n.index<0?o:Math.min(n.index,e.length-1),scroll:!0})},[e,o]),Is({onUp:_(()=>s(a=>({index:a.index>0?a.index-1:i-1,scroll:!0})),[i]),onDown:_(()=>s(a=>({index:a.index<i-1?a.index+1:0,scroll:!0})),[i]),onEnter:_(()=>r>-1&&r<i&&t?.(e[r],r),[r,e,t])}),{position:n,highlight:_(a=>s({index:a}),[]),select:_(a=>t?.(a),[t])}},Bs=(e,t)=>t?o=>o!=null&&D(e).find(n=>n[t]===o[t]):o=>o!=null&&D(e).includes(o),Ns=(e,t)=>{if(!t||!e)return e;const o=e.toLowerCase().indexOf(t.toLowerCase());if(o<0)return e;const n=o+t.length;return[e.slice(0,o),m`<mark>${e.slice(o,n)}</mark>`,e.slice(n)]},Vs=(e=St)=>(t,o,{highlight:n,select:s,textual:r=St,query:i,isSelected:a})=>{const l=r(t),c=Ns(l,i),d=e(c,t,o);return m`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${a(t)}
				data-index=${o}
				@mouseenter=${()=>n(o)}
				@click=${()=>s(t)}
				@mousedown=${h=>h.preventDefault()}
				title=${l}
			>
				${d}
			</div>
			<div class="sizer" virtualizer-sizer>${d}</div>`},Fs=({itemRenderer:e=Vs(),...t})=>{const o=Wt(t);return _((n,s)=>e(n,s,o),[o,e])},Ds=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],js=({value:e,valueProperty:t,items:o,onSelect:n,defaultIndex:s,query:r,textual:i,itemRenderer:a,itemHeight:l=40,itemLimit:c=5})=>{const d=C(()=>Bs(e,t),[e,t]),h=C(()=>o.slice(),[o,d]),{position:f,highlight:u,select:v}=Ps({items:h,onSelect:n,defaultIndex:isNaN(s)?void 0:Number(s)}),[p,g]=Rs(l);return{position:f,items:h,height:Math.min(c,h.length)*p,highlight:u,select:v,itemHeight:p,setItemHeight:g,renderItem:Fs({itemRenderer:a,items:h,position:f,highlight:u,select:v,textual:i,query:r,isSelected:d})}},ve=st,Hs=e=>{const t=N(void 0),{position:o,items:n,renderItem:s,height:r,itemHeight:i,setItemHeight:a}=js(e);return x(()=>{const l=t.current?.[jt];l&&l.layoutComplete.then(()=>{e.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:d}=l._layout._metricsCache;return a(c+d*2)},ve)},[n]),x(()=>{if(!o.scroll)return;const l=t.current?.[jt];if(l){if(!l?._layout){l.layoutComplete.then(()=>l.element(o.index)?.scrollIntoView({block:"nearest"}),ve);return}l.element(o.index)?.scrollIntoView({block:"nearest"})}},[o]),ks(Ts({...o,itemHeight:i,auto:e.itemHeight==="auto"})),m`<div
			class="items"
			style="min-height: ${r}px"
			${J(l=>t.current=l)}
		>
			<div virtualizer-sizer></div>
			${os({items:n,renderItem:s,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",M(Hs,{styleSheets:[Oe(As)]}));const qs=({multi:e,...t},o)=>m`<cosmoz-listbox
		part="listbox"
		?multi=${e}
		...=${Cs(sn(Ds)(t))}
		>${o}</cosmoz-listbox
	>`,y=e=>`calc(var(--cz-spacing) * ${e})`,Ys=R`
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
		gap: ${y(1.5)};
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
		padding: ${y(.5)} ${y(2)};
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
		padding: ${y(.5)} ${y(2)};
	}

	:host([type='modern']) .badge {
		box-shadow: var(--cz-shadow-xs);
	}

	/* =========================================
	 * SIZE VARIANTS
	 * ========================================= */

	/* --- Pill sizes --- */
	:host([size='sm']) .badge {
		padding: ${y(.5)} ${y(2)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${y(1)};
	}

	:host([size='lg']) .badge {
		padding: ${y(1)} ${y(3)};
	}

	/* --- Badge sizes --- */
	:host([type='color'][size='sm']) .badge,
	:host([type='modern'][size='sm']) .badge {
		padding: ${y(.5)} ${y(1.5)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${y(1)};
	}

	:host([type='color'][size='lg']) .badge,
	:host([type='modern'][size='lg']) .badge {
		padding: ${y(1)} ${y(2.5)};
		border-radius: var(--cz-radius-md);
	}

	/* =========================================
	 * DOT INDICATOR
	 * ========================================= */
	.dot {
		width: ${y(2)};
		height: ${y(2)};
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
		padding: ${y(.5)} ${y(2.5)} ${y(.5)} ${y(2)};
	}

	:host([dot][size='sm']) .badge {
		padding: ${y(.5)} ${y(2)} ${y(.5)} ${y(1.5)};
	}

	:host([dot][size='lg']) .badge {
		padding: ${y(1)} ${y(3)} ${y(1)} ${y(2.5)};
	}

	/* Badge + dot: symmetric padding (same as base badge) */
	:host([dot][type='color']) .badge,
	:host([dot][type='modern']) .badge {
		padding: ${y(.5)} ${y(2)};
	}

	:host([dot][type='color'][size='sm']) .badge,
	:host([dot][type='modern'][size='sm']) .badge {
		padding: ${y(.5)} ${y(1.5)};
	}

	:host([dot][type='color'][size='lg']) .badge,
	:host([dot][type='modern'][size='lg']) .badge {
		padding: ${y(1)} ${y(2.5)};
	}

	/* =========================================
	 * ICON-ONLY TYPE
	 * ========================================= */
	:host([type='icon']) .badge {
		padding: ${y(2)};
		gap: 0;
	}

	:host([type='icon'][size='sm']) .badge {
		padding: ${y(1.5)};
	}

	:host([type='icon'][size='lg']) .badge {
		padding: ${y(2.5)};
	}

	:host([type='icon']) .dot,
	:host([type='icon']) slot[name='prefix'],
	:host([type='icon']) slot[name='suffix'] {
		display: none;
	}

	:host([type='icon']) ::slotted(svg) {
		width: ${y(3)};
		height: ${y(3)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		display: block;
		width: ${y(3)};
		height: ${y(3)};
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
`,Us=()=>m`<span class="badge" part="badge" role="status">
		<span class="dot" part="dot"></span>
		<slot name="prefix"></slot>
		<span class="content"><slot></slot></span>
		<slot name="suffix"></slot>
	</span>`;customElements.define("cosmoz-badge",M(Us,{styleSheets:[gt,Ys]}));const Y=e=>`calc(var(--cz-spacing) * ${e})`,Gs=R`
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
`,Ws=e=>{const{color:t,size:o,disabled:n,removable:s}=e,r=()=>{n||e.dispatchEvent(new CustomEvent("remove"))};return m`<cosmoz-badge
		color=${b(t)}
		size=${b(o)}
		?disabled=${n}
		type="color"
	>
		<slot name="prefix" slot="prefix"></slot>
		<slot></slot>
		<slot name="suffix" slot="suffix"></slot>
		${z(s,()=>m` <button
					slot="suffix"
					class="close"
					aria-label="Remove"
					@mousedown=${i=>i.preventDefault()}
					@click=${r}
				>
					${hn()}
				</button>`)}
	</cosmoz-badge>`};customElements.define("cosmoz-tag",M(Ws,{observedAttributes:["color","size","disabled","removable"],styleSheets:[gt,Gs]}));const Xs=({content:e,onClear:t,disabled:o,className:n="chip",hidden:s,slot:r})=>m`<cosmoz-tag
		class=${b(n)}
		slot=${b(r)}
		exportparts="chip-text, chip-clear"
		?disabled=${o}
		?hidden=${s}
		?removable=${!!t&&!o}
		@remove=${t}
		title=${b(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-tag
	>`,Zs=({value:e,min:t=0,onDeselect:o,textual:n,disabled:s,chipRenderer:r=Xs})=>[...e.filter(Boolean).map(i=>r({item:i,content:n(i),onClear:e.length>t&&(()=>o(i)),disabled:s,slot:"control"})),r({item:null,content:m`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],Ks=R`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",M(()=>V,{styleSheets:[Ks]}));const Ue=nt`
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
`,Xt=(e,t=()=>({}))=>{const o={type:e,toString(){return e}};return Object.assign((...s)=>Object.assign(t(...s),o),o)},be=e=>e.type||e.toString(),ye=e=>Array.isArray(e)?e:[e],Qs=(e,t)=>{const o=ye(t),n=(o.every(Array.isArray)?o:[o]).map(([s,r])=>({actions:ye(s).map(be),handle:r}));return(s=e,r)=>{const i=n.find(a=>a.actions.includes(be(r)));return i?i.handle(s,r):s}},tt={pending:"pending",rejected:"rejected",resolved:"resolved"},Ge={error:void 0,result:void 0,state:tt.pending},We=Xt(tt.pending),Xe=Xt(tt.resolved,e=>({result:e})),Ze=Xt(tt.rejected,e=>({error:e})),Js=Qs(Ge,[[We,()=>({error:void 0,result:void 0,state:tt.pending})],[Xe,(e,{result:t})=>({error:void 0,result:t,state:tt.resolved})],[Ze,(e,{error:t})=>({error:t,result:void 0,state:tt.rejected})]]),tr=e=>{const[{error:t,result:o,state:n},s]=So(Js,Ge);return x(()=>{if(!e)return;let r=!1;return s(We()),e.then(i=>!r&&s(Xe(i)),i=>!r&&s(Ze(i))),()=>{r=!0}},[e]),[o,t,n]},er=Symbol("autocomplete.deselect.last"),or=Symbol("autocomplete.search.when.selected"),we=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),nr=(e,t,o)=>{if(!t)return e;const n=we(t.toLowerCase()),s=[];for(const r of e){const a=we(o(r).toLowerCase()).indexOf(n);a<0||s.push({item:r,index:a})}return s.sort((r,i)=>r.index-i.index).map(({item:r})=>r)},sr=e=>e===!1||e==null?[]:e,rr=(e,t,o)=>e.dispatchEvent(new CustomEvent(t,{detail:o})),_e=[],ir=e=>(...t)=>{let o;const n=()=>{o&&cancelAnimationFrame(o)};return n(),o=requestAnimationFrame(()=>{o=void 0,e(...t)}),n},ar=(e,t,o)=>_(n=>{t?.(n),e.dispatchEvent(new CustomEvent(o,{detail:n}))},[t]),lr=({value:e,text:t,onChange:o,onText:n,onSelect:s,limit:r,min:i,source:a,textProperty:l,textual:c,valueProperty:d,keepOpened:h,keepQuery:f,preserveOrder:u,defaultIndex:v,externalSearch:p,disabled:g,lazyOpen:w})=>{const $=r!=null?Number(r):void 0,E=i!=null?Number(i):void 0,P=C(()=>(c??nn)(l),[c,l]),I=W(),[L,S]=mt("opened",!1),A=!t,T=C(()=>t?.trim(),[t]),H=ar(I,n,"text"),X=_(k=>{o?.(k,()=>S(!1)),rr(I,"value",k)},[o]),[it,eo]=j([]),vt=!!(w&&!T),bt=C(()=>vt?Promise.resolve([]):Promise.resolve(typeof a=="function"?a({query:T,active:L}):a).then(sr),[a,L,T,vt]),Z=C(()=>D(e),[e]);x(()=>bt.then(eo),[bt]),ht({activity:er,callback:()=>{const k=D(Z);k.length>(E??0)&&X(k.slice(0,-1))},check:()=>!g&&A&&I.matches(":focus-within"),element:()=>I},[]),ht({activity:or,callback:k=>{const yt=D(Z),Ot=$===1;yt.length>0&&Ot&&k.key.length===1&&X(yt.slice(0,-1))},allowDefault:!0,check:()=>!g&&A&&I.matches(":focus-within"),element:()=>I},[$]),x(()=>{!L&&!f&&H("")},[L,f]),x(()=>{I.toggleAttribute("opened",!!L)},[L]);const q=Wt({onText:H,onChange:X,value:Z,limit:$,min:E,keepQuery:f,keepOpened:h,setOpened:S,onSelect:s,valueProperty:d}),[,,oo]=tr(bt);return{limit:$,opened:L,query:T,textual:P,value:Z,source$:bt,loading:oo==="pending",items:C(()=>{if(!L||vt)return _e;const k=u?it:[...Z,...Bt(Z,$t(d))(it)];return p?k:nr(k,T,P)},[it,L,T,P,A,Z,u,d,p,vt]),onToggle:_(k=>{g||S(k.newState==="open")},[g]),onText:_(k=>{g||(H(k.target.value),S(!0))},[g,H,t,S]),onSelect:_(k=>{if(g)return;q.onSelect?.(k,q);const{onChange:yt,onText:Ot,limit:no,min:so,value:ro,keepQuery:io,keepOpened:ao,setOpened:lo,valueProperty:co}=q;io||Ot(""),ao||lo(!1);const wt=D(ro),Mt=$t(co),Qt=wt.some(ho=>Mt(ho)===Mt(k));Qt&&wt.length===so||yt((Qt?Bt(k,Mt)(wt):[...wt,k]).slice(-no))},[g,q]),onDeselect:_(k=>{g||q.onChange(Bt(k,$t(q.valueProperty))(q.value))},[g,q]),defaultIndex:T!==void 0&&T?.length>0?0:v}},cr=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),o=e.shadowRoot.querySelector(".badge");if(!o)return;o.hidden=!0;for(const a of t)a.hidden=!1;const s=e.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let r;for(r=0;r<t.length;r++){const l=t[r].getBoundingClientRect();if(!(l.x+l.width<=s.x+s.width-24))break}const i=t.length-r;for(o.querySelector("span").textContent="+"+i.toString(),o.hidden=i<1;r<t.length;r++)t[r].hidden=!0},dr=({value:e,opened:t,wrap:o,limit:n})=>{const s=W(),r=!(o||n===1),i=C(()=>ir(()=>cr(s)),[]),[a,l]=j(0);Ft(()=>{if(!r)return;const c=s.shadowRoot.querySelector("cosmoz-input"),d=new ResizeObserver(h=>{l(h[0].contentRect.width)});return d.observe(c),()=>d.disconnect()},[r]),Ft(()=>r?i():void 0,[r,a,t,e])},hr=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),ur=({opened:e,isSingle:t,showSingle:o,hasResultsOrQuery:n})=>!e||t&&!o?!1:n,pr=e=>{const{variant:t,opened:o,invalid:n,errorMessage:s,hint:r,label:i,placeholder:a,required:l,disabled:c,textual:d,text:h,onText:f,onToggle:u,onDeselect:v,value:p,limit:g,min:w,showSingle:$,items:E,source$:P,loading:I,chipRenderer:L,mode:S}=e,A=g===1,T=A&&p?.[0]!=null,H=I||E.length>0||h!=null&&h.length>0;return m`<cosmoz-dropdown-next
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
				.placeholder=${T?void 0:a}
				hint=${b(r)}
				variant=${b(t)}
				?readonly=${T}
				?disabled=${c}
				?required=${l}
				?invalid=${ge([P,n],()=>ut(P.then(()=>n,()=>!0),n))}
				.errorMessage=${ge([P,s],()=>ut(P.then(()=>s,X=>X.message),s))}
				.value=${At(h)}
				@value-changed=${f}
				autocomplete="off"
				exportparts=${hr}
				?data-one=${A}
				?data-single=${T}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix">
					${z(S==="select",()=>an({styles:"margin-right: calc(var(--cz-spacing) * 2);color: var(--cz-color-text-secondary);",width:"16",height:"16"}))}
				</slot>
				${Zs({value:p,min:w,onDeselect:v,textual:d,disabled:c,chipRenderer:L})}
			</cosmoz-input>

			${z(ur({opened:o,isSingle:T,showSingle:$,hasResultsOrQuery:H}),()=>qs({...e,items:E,multi:!A},z(I,()=>m`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>z(h!=null&&h.length>0&&E.length===0,()=>m`<slot name="no-result">
											<span class="no-result">${rt("No results found")}</span>
										</slot>`))))}
		</cosmoz-dropdown-next>`},Zt=e=>{const t={...e,...lr(e)};return dr(t),pr(t)},Kt=["variant","disabled","invalid","required","hint","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap","lazy-open","mode"],mr=e=>{const{onChange:t,onText:o,mode:n,...s}=e,r=n==="select",[i,a]=mt("value");return x(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),Zt({...s,...r&&{limit:1,min:1,showSingle:!0},mode:n,value:i,onChange:_((l,...c)=>{a(l),t?.(l,...c)},[t]),onText:_(l=>{e.text=l,o?.(l)},[o])})},Ke=[Oe(Ue)],Qe={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-ui",M(Zt,{observedAttributes:Kt,styleSheets:Ke,shadowRootInit:Qe}));customElements.define("cosmoz-autocomplete",M(mr,{observedAttributes:Kt,styleSheets:Ke,shadowRootInit:Qe}));const fr="data:image/svg+xml,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 2.5L8.5 8.5M8.5 2.5L2.5 8.5' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E",gr=R`
	cosmoz-listbox::part(error)::before {
		border-color: var(--cz-color-border-error);
		/* prettier-ignore */
		background: url("${fr}") var(--cz-color-border-error) no-repeat 50%;
	}

	cosmoz-listbox::part(error):hover {
		background: var(--cz-color-bg-error);
	}
`,ze=e=>({item:e,excluded:!1}),Je=e=>e.item,vr=e=>{const[t,o]=mt(e),n=_(s=>o(r=>{const i=O(s,r?.map(Je));if(!i)return;if(!r)return i.map(ze);const a=r.reduce((c,d)=>i.includes(d.item)?[...c,d]:d.excluded?c:[...c,{...d,excluded:!0}],[]),l=i.filter(c=>!r.some(d=>d.item===c)).map(ze);return[...a,...l]}),[]);return{value:t,setExcludingValue:n,setValue:o}},br=(e,t)=>e?.some(o=>o.item===t&&o.excluded),to=(e,t)=>t&&br(e,t)?"error":"gray",yr=e=>(t,o,{highlight:n,select:s,textual:r,isSelected:i})=>{const a=r(t);return m`<div
				class="item"
				role="option"
				part="option ${to(e,t)}"
				?aria-selected=${i(t)}
				data-index=${o}
				@mouseenter=${()=>n(o)}
				@click=${()=>s(t)}
				@mousedown=${l=>l.preventDefault()}
			>
				${a}
			</div>
			<div class="sizer" virtualizer-sizer>${a}</div>`},wr=(e,t)=>({item:o,content:n,disabled:s,hidden:r,className:i="chip",slot:a})=>m`<cosmoz-tag
			class=${b(i)}
			slot=${b(a)}
			exportparts="chip-text, chip-clear"
			color=${to(e,o)}
			?disabled=${s}
			?hidden=${r}
			?removable=${!!o}
			@remove=${()=>t(o)}
			title=${b(typeof n=="string"?n:void 0)}
		>
			${n}
		</cosmoz-tag>`,_r=e=>{const{value:t,setValue:o,setExcludingValue:n}=vr("value"),[s,r]=mt("text"),i=_(a=>o(l=>l?.filter(c=>c.item!==a)),[]);return Zt({...e,value:C(()=>t?.map(Je),[t]),onChange:_(a=>{n(a)},[]),text:s,onText:_(a=>{r(a)},[]),itemRenderer:C(()=>yr(t),[t]),chipRenderer:C(()=>wr(t,i),[t,i])})},zr={mode:"open",delegatesFocus:!0};customElements.define("cosmoz-autocomplete-excluding",M(_r,{observedAttributes:Kt,styleSheets:[Ue,gr],shadowRootInit:zr}));nt`
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
`;const xe=e=>e?Array.isArray(e)?e.length===1?e[0].name:rt("{0} files",{0:e.length}):e.name:rt("Choose file"),Mr=Gt(({id:e,label:t,value:o,values:n,onChange:s,accept:r,multiple:i,disabled:a})=>m`<div class="input input-inline-file" name=${e}>
			${Fe({value:xe(o),field:{label:t,disabled:a,prefix:ln({styles:"vertical-align: middle;"}),id:e},error:!1,invalid:!1,load:st,onChange:st,onReset:st,onValues:st,touched:!1,values:n,context:{}})}

			<input
				class="file"
				type="file"
				name=${e}
				title=${xe(o)}
				?multiple=${i}
				?disabled=${b(a)}
				accept=${b(ut(O(r,o,n)))}
				@change=${l=>s(i?Array.from(l.target.files):l.target.files[0])}
			/>
		</div>`);export{Mr as A,Lr as B,j as C,is as D,Mn as E,Or as F,N as G,vs as H,ge as I,Ut as J,lt as K,x as L,Et as M,fe as N,_ as O,Tr as a,De as b,st as c,Gt as d,jn as e,Hn as f,qn as g,C as h,O as i,Sr as j,as as k,At as l,ut as m,z as n,b as o,M as p,gs as q,Un as r,Rr as s,nt as t,Wt as u,os as v,he as w,hn as x,Fe as y,Ar as z};
