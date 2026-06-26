import{o as h,n as v,w as T,b as u,q as I,e as D,A as M,r as X,k as y,s as W,p as k,g as E,y as be,x as pe,c as A,z as ve,i as b,j as Z,t as L,m as N,f as B,d as S,a as R}from"./iframe-9g9OU6Q5.js";const me=({slot:e,title:o,className:t,width:r="24",height:n="24",styles:a}={})=>u`
  <svg
    slot=${h(e)}
    class=${`alert-circle-icon ${t??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${n}
    style=${h(a)}
  >
    ${v(o,()=>T`<title>${o}</title>`)}
    <path
      d="M12 8v4m0 4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`,fe=({slot:e,title:o,className:t,width:r="24",height:n="24",styles:a}={})=>u`
  <svg
    slot=${h(e)}
    class=${`file-attachment-02-icon ${t??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${n}
    style=${h(a)}
  >
    ${v(o,()=>T`<title>${o}</title>`)}
    <path
      d="M12.5 2h2.7c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 4.28 20 5.12 20 6.8v10.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2v-.7M16 13h-4.5M16 9h-3.5m3.5 8H8m-2-7V4.5a1.5 1.5 0 1 1 3 0V10a3 3 0 1 1-6 0V6"
    />
  </svg>
`,ze=({slot:e,title:o,className:t,width:r="24",height:n="24",styles:a}={})=>u`
  <svg
    slot=${h(e)}
    class=${`help-circle-icon ${t??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${n}
    style=${h(a)}
  >
    ${v(o,()=>T`<title>${o}</title>`)}
    <path
      d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`,xe=I`
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
`,$e=()=>M,we=D($e,{styleSheets:[xe]});customElements.define("cosmoz-spinner",we);const ye=I`
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
`,ke=I`
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
		${ye}
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
`,Ce=["variant","size","disabled","full-width","type","value"],Ee=e=>{const o=e.hasAttribute("disabled"),t=e.getAttribute("type")||"button";return y(()=>{const r=n=>{e.hasAttribute("disabled")&&n.stopImmediatePropagation()};return e.addEventListener("click",r,{capture:!0}),()=>e.removeEventListener("click",r,{capture:!0})},[]),u`
		<button type=${t} class="button" ?disabled=${o} part="button">
			<slot name="prefix"></slot>
			<slot></slot>
			<slot name="suffix"></slot>
		</button>
	`};customElements.define("cosmoz-button",D(Ee,{observedAttributes:Ce,styleSheets:[X,ke],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Ae=e=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}};class q extends Ae(HTMLElement){static is="cosmoz-dialog-connectable"}customElements.define(q.is,q);const w=e=>`calc(var(--cz-spacing) * ${e})`,Me=I`
	dialog:not([open]) {
		display: none;
	}

	:host {
		--cz-scrollbar-width: calc(var(--cz-spacing) * 2);
		--cz-padding-block: ${w(4)};
		--cz-padding-inline: ${w(4)};
		@media screen and (min-width: 640px) {
			--cz-padding-block: ${w(10)};
			--cz-padding-inline: ${w(10)};
		}
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
		gap: ${w(4)};
		padding: var(--cz-padding-block)
			calc(var(--cz-padding-inline) + var(--cz-scrollbar-width));

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
		color: var(--cz-color-text-primary);
		font-size: var(--cz-text-base);
		font-weight: var(--cz-font-weight-regular);
		line-height: var(--cz-text-base-line-height);
	}

	.body {
		overflow-y: auto;
		scrollbar-gutter: stable both-edges;
		padding: var(--cz-padding-block);
		flex: 1;
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
		top: ${w(4)};
		right: ${w(4)};
	}

	/* Width of the entire scroll bar */
	::-webkit-scrollbar {
		width: var(--cz-scrollbar-width);
	}

	/* Background/track of the scroll bar */
	::-webkit-scrollbar-track {
		background: var(--cz-color-gray-300);
	}

	/* The draggable scroll handle/thumb */
	::-webkit-scrollbar-thumb {
		background: var(--cz-color-gray-500);
		border-radius: var(--cz-radius-2xl);
	}

	/* The handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: var(--cz-color-gray-400);
	}
`,Re=()=>{const e=W(),o=k(()=>{e.dispatchEvent(new Event("close")),e.onClose?.()},[]);return y(()=>{const t=e.shadowRoot;if(!t)return;const r=n=>n.target.value==="cancel"&&o();return t.addEventListener("click",r),()=>{t.removeEventListener("click",r)}},[]),{close:o}},Se=(e,o,t)=>{const r=e.width/3,n=e.height/3,a=Math.min(window.innerWidth-2*r,Math.max(-r,o)),s=Math.min(window.innerHeight-2*n,Math.max(-n,t));return{x:a,y:s}},Fe=(e,o,t,r)=>n=>{if(!n.target.closest(o))return;const a=Se,s=e.getBoundingClientRect(),i=n.clientX-s.x,l=n.clientY-s.y,c=(g,$)=>{const f=g-i,m=$-l,z=a(s,f,m);Object.assign(e.style,{inset:"auto",margin:"0",left:z.x+"px",top:z.y+"px",transform:"none"})},d=g=>c(g.clientX,g.clientY),p=g=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",p)};document.addEventListener("mousemove",d),document.addEventListener("mouseup",p)},Be=()=>{const e=W(),{unmovable:o}=e;y(()=>{if(o)return;const t=e.shadowRoot;if(!t)return;const r=t.querySelector("dialog");if(!r)return;const n=Fe(r,".title");return t.addEventListener("mousedown",n),()=>t.removeEventListener("mousedown",n)},[o])},Ie=({title:e,subtitle:o,icon:t,content:r,closeable:n=!1,onClose:a})=>u`
		<div class="title" part="title">
			${v(t,()=>u`<div class="icon">${t}</div>`)}

			<div>
				<h2>${e}</h2>
				${v(o,()=>u`<p class="subtitle">${o}</p>`)}
			</div>

			${v(n,()=>u`
					<cosmoz-button
						variant="tertiary"
						size="sm"
						class="close"
						part="close"
						@click=${a}
					>
						${pe({width:"20",height:"20"})}
					</cosmoz-button>
				`)}
		</div>

		<div class="divider"></div>
		<div class="content" part="content">
			<div class="body">${r}</div>
		</div>
	`,V=(e,{observedAttributes:o,styles:t,...r}={})=>D(n=>{const{close:a}=Re();Be();const s=E();return u`
				${v(t,()=>u`<style>
							${t}
						</style>`)}
				<cosmoz-dialog-connectable
					@connected=${i=>{const l=i.target.querySelector("dialog");l&&!l.open&&l.showModal()}}
				>
					<dialog ${be(s)} @close=${a} part="dialog">
						${Ie({title:n.heading||n.title,subtitle:n.subtitle,icon:n.icon,content:e(n),closeable:n.closeable,onClose:a})}
					</dialog>
				</cosmoz-dialog-connectable>
			`},{observedAttributes:["title","subtitle","icon","heading","unmovable","closeable",...o??[]],styleSheets:[X,Me],...r});customElements.define("cosmoz-dialog-loading",V(()=>u`
			<style>
				.content {
					flex-direction: row;
					align-items: center;
					justify-content: center;
					gap: calc(var(--cz-spacing) * 3);
				}
				cosmoz-spinner {
					width: 32px;
					height: 32px;
				}
			</style>
			<cosmoz-spinner></cosmoz-spinner>
			<slot></slot>
		`));function P(e,o,...t){return e?e(o,...t):o}const Le=e=>{if(!e||e===1/0)return;if(typeof e=="number")return e;const o=parseFloat(e.replace(/[\s]/gu,"").replace(/^−/gu,"-").replace(/[,.]/gu,".").replace(/[.](?=.*[.])/gu,""));if(!isNaN(o))return o},je=/^[0-9.,e-]+$/u,Oe=e=>e==null||e===""||Number.isNaN(e)||Array.isArray(e)&&e.length<1,Y=e=>Oe(e)&&A("Required"),Te=Symbol("error"),De=(e,o,t,r,n)=>{for(const a of ve(e)){const s=a(o,t,r,n);if(s)return s}},K=(e,o,t)=>e.validate&&De(e.validate,o[e.path??e.id],o,e,t),go=(e,o,t)=>{const r=e.flatMap(n=>{const a=K(n,o,t);return a?[[n.id,a]]:[]});return r.length?Object.fromEntries(r):void 0},Ne=(e,o,t)=>{const r=e.map(n=>({...n,error:K(n,o,t)}));return{fields:r,invalid:r.some(({error:n})=>!!n)}},Ve=(e,o,t)=>o?Ne(e,o,t):{fields:e,invalid:!0},qe=(e,o,t,r)=>{r!=null&&Object.is(r[o],t)||e({[o]:t})},Pe=e=>Array.isArray(e)?e.some(o=>o===Y):e===Y,j=e=>({field:o,value:t,values:r,onChange:n,context:a,...s})=>{const i=(c,d)=>(o.onChange??qe)(p=>n(p,d),o.path??o.id,P(o.value?.[1],c,r,o,a),r);if(!b(o.hidden,t,r,o,a))return e({...o,...s,context:a,values:r,required:Pe(o.validate),label:b(o.label,t,r,o,a),placeholder:b(o.placeholder,t,r,o,a),disabled:b(o.disabled,t,r,o,a),warning:b(o.warning,t,r,o,a),prefix:b(o.prefix,t,r,o,a),suffix:b(o.suffix,t,r,o,a),value:P(o.value?.[0],t,r,o,a),onFocus:o.onFocus?.(i,t,r,o),onChange:i})},Ye=e=>v(e,()=>u`<span slot="prefix">${e}</span>`),He=e=>v(e,()=>u`<span slot="suffix">${e}</span>`),Ue=(e,o="suffix")=>v(e,()=>me({slot:o,title:e,width:"22",height:"22",styles:"color: var(--cz-color-text-warning); vertical-align: middle"})),Xe=(e,o="suffix")=>v(e,()=>ze({slot:o,title:e,width:"22",height:"22",styles:"color: var(--cz-color-text-primary); vertical-align: middle; cursor: help"})),G=({prefix:e,suffix:o,warning:t,description:r})=>[Ye(e),He(o),Ue(t),Xe(r)],J=e=>{const{value:o,values:t,onFocus:r,onInput:n,context:a,...s}=e,{id:i,variant:l,type:c="text",label:d,placeholder:p,error:g,prefix:$,suffix:f,warning:m,allowedPattern:z,step:x,disabled:re,required:ne,maxlength:ae,min:ie,max:se,autosize:ce,noSpinner:le,autocomplete:de,title:ue,description:he,hint:ge}=s;return u`<cosmoz-input
		class="input input-common input-${c}"
		variant=${h(l)}
		hint=${h(ge)}
		name=${i}
		type=${c}
		?autosize=${ce}
		?disabled=${re}
		?required=${ne}
		?invalid=${!!g}
		?no-spinner=${!!le}
		.placeholder=${p}
		.errorMessage=${g}
		.allowedPattern=${z}
		.step=${x}
		.label=${d}
		.value=${o}
		title=${h((g??ue)||void 0)}
		maxlength=${h(ae)}
		min=${h(b(ie,o,t,s,a))}
		max=${h(b(se,o,t,s,a))}
		autocomplete=${h(de)}
		@focus=${r}
		@input=${n}
		>${G({prefix:$,suffix:f,warning:m,description:he})}</cosmoz-input
	>`},Q=j(({onChange:e,...o})=>J({...o,onInput:t=>e(t.target.value)})),bo=j(({onChange:e,allowedPattern:o=je,...t})=>J({...t,type:"number",allowedPattern:o,onInput:r=>e(Le(r.target.value))})),po=j(({id:e,label:o,placeholder:t,error:r,suffix:n,warning:a,disabled:s,onChange:i,value:l,maxRows:c,rows:d,maxlength:p})=>u`<cosmoz-textarea
			class="input input-textarea"
			name=${e}
			?disabled=${s}
			?invalid=${!!r}
			.placeholder=${t}
			.errorMessage=${r}
			.label=${o}
			.value=${l}
			.rows=${d}
			.maxRows=${c}
			maxlength=${h(p)}
			@input=${g=>i(g.target.value)}
			>${G({suffix:n,warning:a})}</cosmoz-textarea
		>`),We=({field:e,values:o,...t})=>{const r=(t.touched&&(o?.[Te]?.[e.id]??e.error))??!1,n=o?.[e.path??e.id];return(e.input??Q)({...t,error:r,value:n,field:e,values:o})},_=({fields:e,...o})=>Z(e??[],({id:t})=>t,t=>We({field:t,fields:e,...o})),Ze=({fields:e,selector:o=""})=>(e??[]).map(({id:t,styles:r})=>r?`${o}[name="${String(t)}"] { ${Object.entries(r).map(([n,a])=>`${n}:${a}`).join(";")} }`:"").join(`
`),vo=({fields:e})=>Z(e??[],({id:o})=>o,o=>{const t=b(o.header??o.label,void 0,{},o);return u`<div class="header" name="${o.id}" title="${t}">
				${t}
			</div>`}),mo=L`
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
`,Ke=()=>M,Ge=(e,o)=>Promise.resolve(e).then(o,o),fo=({error:e,...o})=>[_(o),v(e,t=>u`<div class="failure">${t.message}</div>`)],Je=e=>N(e?.then(Ke,o=>u`<div class="failure">${o.message}</div>`),M),Qe=({save$:e,progress:o,...t})=>{const r=({onSave:n,onClick:a=n,title:s,disabled:i,progress:l,content:c=M,slot:d})=>u` <cosmoz-button
			class="button save"
			slot=${h(d)}
			?disabled=${i}
			?data-progress=${l}
			@click=${p=>(p.stopPropagation(),a())}
		>
			${c} ${s}
		</cosmoz-button>`;return N(Ge(e,()=>r(t)),r({...t,disabled:!0,progress:!0,content:u`<cosmoz-spinner></cosmoz-spinner> ${v(o,n=>n.join("/"))}`}))},_e=L`
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
		padding-block: 0 calc(var(--cz-spacing) * 5.5);
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
`,eo=()=>{let e=null;return{run:async(o,t,r,n)=>{e?.abort(),e=new AbortController;const a={update:r,signal:e.signal,index:n?.index,context:n?.context};try{return await o(t,a)}catch(s){if(s instanceof DOMException&&s.name==="AbortError")return null;throw s}},cancel:()=>{e?.abort(),e=null}}},oo=(e,o)=>e.length!==o.length||e.some((t,r)=>!Object.is(t,o[r])),to=e=>{console.error("[cosmoz-form] async rule error:",e)},ro=(e,o,t)=>{const r=to,n=E(new Map),a=E(new Map),s=E(0),[i,l]=B(!1);return y(()=>()=>{for(const c of n.current.values())c.cancel()},[]),y(()=>{if(!o?.length)return;const c=e.context;for(const d of o){const[p,g,$=eo]=d;n.current.has(d)||n.current.set(d,$());const f=g(e.values,void 0,c),m=a.current.get(d);if(m!=null&&!oo(f,m))continue;a.current.set(d,f);const z=n.current.get(d);s.current++,s.current===1&&l(!0),z.run(p,e.values,x=>e.onChange(x,!1),{context:c}).then(x=>{x!==null&&e.onChange(x,!1)}).catch(x=>r(x,d)).finally(()=>{s.current--,s.current===0&&l(!1)})}},[e.values,e.context]),{...e,processing:i}},O=Symbol("touched");function F(e,o=!0){if(e==null)return;const t=e;return o?t[O]=!0:delete t[O],e}const ee=e=>F(e,!1),H=e=>!!e?.[O],no=(e,o)=>!o||e.some((t,r)=>!Object.is(o[r],t)),C=({oldItem:e,newItem:o,rules:t,index:r,oldIndex:n=r,context:a,oldContext:s=a})=>t?t.reduce((i,[l,c])=>e&&c&&!no(c(i,r,a),c(e,n,s))?i:{...i,...l(i,e,r,n,a)},o):o,ao=(e,o,t,r,n)=>{const[,a]=e,s=E(void 0);return y(()=>{const i=s.current;s.current=r,i!==void 0&&o(([l,c])=>[l,F(C({oldItem:c,newItem:c,rules:t,context:r,oldContext:i}),H(c))])},[r]),{values:a,context:r??{},onReset:k(()=>o(([i])=>[i,i]),[o]),onValues:k((i,l=!0)=>o(([c,d])=>[c,F(C({oldItem:d,newItem:b(i,d),rules:t,context:r}),l)]),[t,o,r]),onChange:k((i,l=!0)=>o(([c,d])=>[c,F(C({oldItem:d,newItem:{...d,...b(i,d)},rules:t,context:r}),l)]),[t,o,r]),load:k((i,l)=>{if(!i){o([i,i]);return}const c=ee(C({oldItem:void 0,newItem:i,rules:l??t,context:r}));o([c,c])},[t,o,r]),touched:S(()=>H(a)||(n??!1),[a,n])}},io=(e,o,t)=>ee(C({oldItem:void 0,newItem:e,rules:o,context:t})),oe=(e,o=[])=>{const t=e.filter(r=>r?.rules!=null).flatMap(r=>r?.rules);return[...o,...t]},so=(e,o,{fields:t,rules:r,context:n,touched:a})=>{const s=S(()=>b(t)??[],[t]),i=S(()=>oe(s,r),[s,r]),l=ao(e,o,i,n,a),{values:c}=l;return{...S(()=>Ve(s,c,n),[s,c,n]),...l}},co=e=>{const[o,t]=B(()=>{const r=b(e.fields)??[],n=oe(r,e.rules),a=io(e.initial,n,e.context);return[a,a]});return so(o,t,e)};function lo({fields:e,initial:o,rules:t,asyncRules:r,context:n,onSave:a,allowEmpty:s}){const i=co({fields:e,initial:o,rules:t,context:n}),{processing:l}=ro(i,r),{values:c,invalid:d}=i,[p,g]=B(),[$,f]=B(),m=c==null||c===o,z=i.fields?.length>0&&!(m&&s)&&(m||d);return{...i,save$:p,onSave:k(()=>g(a?.(c,o,f)),[a,c,o]),disabled:z,processing:l,progress:$}}const uo=L`
	:host::part(content) {
		padding: 0;
	}

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
`,te=e=>{const{auto:o,uncancelable:t,hideCancelButton:r,saveText:n=A("OK")}=e,{onSave:a,disabled:s,save$:i,progress:l,...c}=lo(e);return y(()=>{o&&a()},[o]),u` <style>
			${_e} ${Ze(c)}${uo}
		</style>
		<div class="form" part="form">${_(c)}</div>
		<div class="buttons">
			${Je(i)}
			${Qe({save$:i,onSave:a,disabled:s,title:n,progress:l})}
			${v(!r,()=>u`<cosmoz-button
						class="button"
						variant="secondary"
						value="cancel"
						?disabled=${t}
					>
						${A("Cancel")}
					</cosmoz-button>`)}
		</div>`};customElements.define("cosmoz-form-dialog",V(te,{observedAttributes:["allow-empty"]}));customElements.define("cosmoz-form-dialog-next",V(te,{observedAttributes:["allow-empty"]}));const zo=e=>e?u`<cosmoz-form-dialog
		name=${h(e.name)}
		?allow-empty=${e.allowEmpty}
		.title=${e.heading}
		.subtitle=${e.description}
		.icon=${e.icon}
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
	></cosmoz-form-dialog>`:M;L`
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
`;const U=e=>e?Array.isArray(e)?e.length===1?e[0].name:A("{0} files",{0:e.length}):e.name:A("Choose file"),xo=j(({id:e,label:o,value:t,values:r,onChange:n,accept:a,multiple:s,disabled:i})=>u`<div class="input input-inline-file" name=${e}>
			${Q({value:U(t),field:{label:o,disabled:i,prefix:fe({styles:"vertical-align: middle;"}),id:e},error:!1,invalid:!1,load:R,onChange:R,onReset:R,onValues:R,touched:!1,values:r,context:{}})}

			<input
				class="file"
				type="file"
				name=${e}
				title=${U(t)}
				?multiple=${s}
				?disabled=${h(i)}
				accept=${h(N(b(a,t,r)))}
				@change=${l=>n(s?Array.from(l.target.files):l.target.files[0])}
			/>
		</div>`);export{Te as E,vo as a,_ as b,Ue as c,Xe as d,G as e,_e as f,Y as g,xo as h,j as i,fo as j,Qe as k,zo as l,po as m,bo as n,lo as o,C as p,F as q,Ze as r,mo as s,Q as t,co as u,go as v,H as w};
