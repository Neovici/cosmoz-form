import{o as p,n as S,w as oe,b as s,t as V,v as se,a as O,i as k,x as ie,m as re,l as A,c as q,u as ne,d as P,e as v,f as T,A as z}from"./iframe-CCpZ0Tnk.js";import{s as le,r as de,a as ce,b as ue,i as N,c as me,d as pe,e as ge,v as ye,E as U,f as ve,u as C,g as u,t as y,n as g,h as fe,j as x,k as he,l as G,m as be}from"./inline-file-By3UPWDD.js";import{a as I}from"./autocomplete-lr-4Q0Vp.js";import{u as $e}from"./use-items-BAHA5SqZ.js";import"./preload-helper-PPVm8Dsz.js";const De=({slot:e,title:t,className:a,width:o="24",height:i="24",styles:r}={})=>s`
  <svg
    slot=${p(e)}
    class=${`edit-02-icon ${a??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${o}
    height=${i}
    style=${p(r)}
  >
    ${S(t,()=>oe`<title>${t}</title>`)}
    <path
      d="m18 10-4-4M2.5 21.5l3.384-.376c.414-.046.62-.069.814-.131a2 2 0 0 0 .485-.234c.17-.111.317-.259.61-.553L21 7a2.828 2.828 0 1 0-4-4L3.794 16.206c-.294.294-.442.442-.553.611a2 2 0 0 0-.234.485c-.062.193-.085.4-.131.814L2.5 21.5Z"
    />
  </svg>
`,E=Symbol("key"),Se=e=>{const t={...e};return Object.assign(t,{[E]:t})},Ie=e=>s`<cosmoz-button
		variant="destructive"
		size="sm"
		?disabled=${!e}
		@click=${e}
	>
		${ie()}
	</cosmoz-button>`,Q=()=>s`<span class="remove-placeholder" aria-hidden="true"></span>`,Ee=(e,t,{update:a,remove:o,removePlaceholder:i,fields:r,context:l,touched:c=!1,...n})=>s`<div class="item" data-index=${t}>
		${[ue({...n,values:e,fields:r,context:l??{},touched:c,onChange:d=>a(t,{...k(d,e),[E]:e?.[E]??e}),invalid:!1,load:O,onReset:O,onValues:O}),S(o,d=>Ie(e&&d&&(()=>d(t)))),S(i,Q)]}
	</div>`,Fe=e=>e?.[E]??e,B=({items:e,fields:t,renderItem:a=Ee,paste:o,defaults:i,keyFunction:r=Fe,scroller:l=!0,update:c,style:n,...d})=>s`<div class="items" @paste=${o} style=${n}>
		${se({items:[{[E]:0},...e,...i?[Se(i)]:[]],keyFunction:r,renderItem:(m,F)=>{switch(!0){case F===0:return s`<div class="headers">
							${ce({fields:t})}
							${S(d.remove!=null,Q)}
						</div>`;case(i!=null&&F===e.length+1):return a(m,F-1,{...d,fields:t,remove:void 0,removePlaceholder:d.remove!=null,update:(te,ae)=>c(te,{...m,...ae})});default:return a(m,F-1,{...d,fields:t,update:c})}},scroller:l})}
	</div>`,we=({fields:e})=>V`
	${le}
	${de({fields:e})}
`,J=N(({id:e,error:t,onChange:a,accept:o,multiple:i,value:r,values:l,autoReset:c})=>s`<div class="input input-file" name=${e}>
			<input
				class="file"
				type="file"
				name=${e}
				?multiple=${i}
				accept=${p(re(k(o,r,l)))}
				@change=${n=>{a(Array.from(n.target.files??[])),c&&(n.target.value="")}}
			/>
			${S(t,n=>s`<div class="failure">${n}</div>`)}
		</div>`),Re=({id:e,label:t,error:a,disabled:o,warning:i,onChange:r,value:l,title:c,description:n})=>s`<cosmoz-toggle
		class="input input-toggle"
		name=${e}
		title=${p(c)}
		?disabled=${o}
		.label=${t}
		.error=${a}
		.value=${A(l)}
		@change=${d=>r(d.detail)}
		>${[me(i),pe(n)]}</cosmoz-toggle
	>`,ke=N(Re),Te=e=>e===void 0||typeof e=="object",Ce=e=>N(({id:t,label:a,variant:o,error:i,warning:r,disabled:l,onChange:c,value:n})=>{if(Te(n))return[s`<cosmoz-input
					class="input input-date-range"
					type=${e}
					variant=${p(o)}
					?data-warning=${!!r}
					name=${String(t)+"From"}
					?disabled=${l}
					?invalid=${!!i?.from}
					.errorMessage=${i?.from}
					.label=${q("From ({0})",{0:a})}
					.value=${A(n?.from)}
					.max=${p(n?.to)}
					@change=${({target:d})=>c({...n,from:d.value})}
				></cosmoz-input>`,s`<cosmoz-input
					class="input input-date-range"
					type=${e}
					variant=${p(o)}
					?data-warning=${!!r}
					name=${String(t)+"To"}
					?disabled=${l}
					?invalid=${!!i?.to}
					.errorMessage=${i?.to}
					.label=${q("To ({0})",{0:a})}
					.value=${A(n?.to)}
					.min=${p(n?.from)}
					@change=${({target:d})=>c({...n,to:d.value})}
				></cosmoz-input>`]}),Y=Ce("date"),xe=e=>Number.isNaN(e)||typeof e!="number"?0:e,Oe=new Intl.NumberFormat(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),Pe=e=>Oe.format(xe(e)),H=({value:e,values:t,field:a,error:o,context:i})=>{const{id:r,suffix:l,warning:c,label:n,variant:d,format:m=Pe}=a;return[s`<style>
			cosmoz-input[disabled] {
				pointer-events: auto;
			}
		</style>`,s`<cosmoz-input
			class="input input-common input-number"
			variant=${p(d)}
			.label=${n}
			name="${r}"
			disabled
			.value=${m(e)}
			?invalid=${!!o}
			.errorMessage=${o}
			>${ge({suffix:k(l,e,t,a,i),warning:k(c,e,t,a,i)})}</cosmoz-input
		>`]},Ae=({initial:e,rules:t,fields:a,context:o,touched:i})=>{const r=ne({fields:a}),l=P(()=>[m=>({[U]:ye(r.fields,m,o)})],[r,o]),{items:c,...n}=$e({initial:e,rules:P(()=>[...t??[],l],[t,l]),context:o,touched:i}),d=P(()=>c.some(m=>m[U]),[c]);return{...n,items:c,invalid:d}},L=()=>V`
	:host {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.failure {
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		margin: calc(var(--cz-spacing) * 2) 0;
		padding: calc(var(--cz-spacing) * 3);
		color: var(--cz-color-text-error);
		background: var(--cz-color-bg-error);
		border: 1px solid var(--cz-color-border-error-subtle);
		border-radius: var(--cz-radius-lg);
		white-space: pre-wrap;
		word-break: break-word;
		max-height: 40vh;
		overflow-y: auto;
	}

	.input-toggle {
		margin-block: calc(var(--cz-spacing) * 2);
	}

	${ve}
`,et={title:"Add"},_=["Electronics","Clothing","Food","Books","Toys"],ze=["USD","EUR","GBP","JPY","CAD"],Ne=["new","sale","popular","limited","exclusive","seasonal"],X={name:"",price:0,sku:"",active:!0,category:"",tags:[],attachments:[],document:void 0,dropFiles:[]},Z=[{id:"name",label:"Product name",hint:"Best practice: keep it under 50 characters.",input:y,validate:[u,e=>e?!1:"Name is required"]},{id:"price",label:"Price",hint:"Enter the price in euros. Must be greater than 0.",input:g,min:0,validate:[u,e=>e>0?!1:"Price must be greater than 0"]},{id:"sku",label:"SKU",hint:"Stock Keeping Unit",input:y},{id:"category",label:"Category",input:I,options:_,mode:"select",preserveOrder:!0,validate:[u,e=>e?!1:"Category is required"]},{id:"tags",label:"Tags",input:I,options:Ne,preserveOrder:!0,validate:[u,e=>e.length>0?!1:"At least one tag is required"]},{id:"attachments",label:"Attachments",input:J,multiple:!0},{id:"document",label:"Document",input:fe},{id:"active",label:"Active",input:ke}],ee=[[e=>e.name?{}:{name:e.name}]],Le=()=>{const e=C({initial:X,fields:Z,rules:ee,touched:!0});return s`
        <style>
            ${L()}
        </style>
        <div class="story-stack">
            <h3 class="story-section-title">Add Product (fields only)</h3>
            ${x(e)}
        </div>
    `};customElements.define("story-add-fields",v(Le));const f=()=>s`<story-add-fields></story-add-fields>`;f.storyName="Fields";const _e=()=>new Promise(e=>setTimeout(e,2e3)),qe=()=>{const e=C({initial:X,fields:Z,rules:ee,touched:!0}),[t,a]=T(void 0),o=()=>{if(e.invalid)return;const i=_e();a(i),i.then(()=>a(void 0))};return s`
        <style>
            ${L()}
        </style>
        <div class="story-stack">
            <h3 class="story-section-title">Add Product (with save button)</h3>
            ${x(e)}
            ${he({save$:t,onSave:o,disabled:e.invalid,title:"Save product"})}
        </div>
    `};customElements.define("story-add-button",v(qe));const w=()=>s`<story-add-button></story-add-button>`,M={description:"Widget package",quantity:10,unitPrice:49.99,total:499.9,period:{from:"2026-01-01",to:"2026-06-30"}},Ue=[{id:"description",label:"Description",input:y},{id:"quantity",label:"Quantity",input:g,min:1},{id:"unitPrice",label:"Unit price (€)",input:g,min:0},{id:"total",label:"Total (€)",input:H},{id:"period",label:"Period",input:Y}],Be=[{id:"description",label:"Description",input:y,variant:"cell"},{id:"quantity",label:"Quantity",input:g,min:1,variant:"cell"},{id:"unitPrice",label:"Unit price (€)",input:g,min:0,variant:"cell"},{id:"total",label:"Total (€)",input:H,variant:"cell"},{id:"period",label:"Period",input:Y,variant:"cell"}],j=[[e=>({total:e.quantity*e.unitPrice}),e=>[e.quantity,e.unitPrice]]],Me=()=>{const e=C({initial:M,fields:Ue,rules:j,touched:!0}),t=C({initial:M,fields:Be,rules:j,touched:!0});return s`
        <style>
            ${L()} .table-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                align-items: end;
                border: 1px solid #dde3ef;
                border-radius: 8px;
                max-width: 480px;
                padding: 12px;
            }
        </style>
        <div class="story-stack">
            <h3 class="story-section-title">
                Order form — date range &amp; computed total
            </h3>
            <p class="story-label">
                Change quantity or unit price — the total recalculates automatically
                (read-only). The period uses a date range input.
            </p>
            ${x(e)}
            <h3 class="story-section-title">
                Order form — table layout (cell variant)
            </h3>
            <p class="story-label">
                Same fields rendered in a grid/table layout using
                <code>variant: 'cell'</code>.
            </p>
            <div class="table-grid">${x(t)}</div>
        </div>
    `};customElements.define("story-add-daterange",v(Me));const h=()=>s`<story-add-daterange></story-add-daterange>`;h.storyName="Date range, read-only & cell variant";const je={supplier:"",invoiceNumber:"",message:"",category:"",currency:[],tags:[]},We=[{id:"supplier",label:"Supplier",input:y,validate:[u]},{id:"invoiceNumber",label:"Invoice number",input:y,validate:[u]},{id:"category",label:"Category",input:I,options:_,mode:"select",preserveOrder:!0,validate:[u]},{id:"currency",label:"Currency",input:I,options:ze,preserveOrder:!0,validate:[u]},{id:"message",label:"Comment",input:be,rows:3,validate:[u]}],Ke=()=>{const[e,t]=T(""),[a,o]=T(void 0);return s`
        <div class="story-stack">
            <h3 class="story-section-title">Form Dialog</h3>
            <p class="story-label">
                Click the button to open a form inside a dialog. Submitting logs the
                result below.
            </p>
            <button @click=${()=>{o({heading:"Change and reimport invoice",subtitle:"Are you sure you want to re-import this invoice?",description:s`<p>
                Please review the invoice details and make any necessary changes before
                reimporting. Ensure that all required fields are filled out correctly.
            </p>`,icon:De(),fields:We,initial:je,saveText:"OK",onSave:async r=>{await new Promise(l=>setTimeout(l,2e3)),t(JSON.stringify(r,null,2)),o(void 0)},onClose:()=>o(void 0)})}}>Open dialog</button>
            ${a?G(a):z}
            ${e?s`<pre>${e}</pre>`:z}
        </div>
    `};customElements.define("story-add-form-dialog",v(Ke));const b=()=>s`<story-add-form-dialog></story-add-form-dialog>`;b.storyName="Form Dialog";const W=[`Row 1078: Category 'Sheeeesh' is not valid.
Expected one of: Electronics, Clothing, Food, Books, Toys.
Package size 'huge' is not valid. Expected one of: S, M, L, XL.`,"Row 1079: Category 'Sheeeesh' is not valid. Expected one of: Electronics, Clothing, Food, Books, Toys.","Row 1080: Category 'Sheeeesh' is not valid. Expected one of: Electronics, Clothing, Food, Books, Toys."],Ve=()=>{const[e,t]=T(void 0),a=o=>{t({heading:"Import products",fields:[{id:"file",label:"File",accept:".xlsx",input:J}],initial:{file:[]},saveText:"OK",onSave:async()=>{const i=W.join(" ");if(!o)throw new Error(i);const r=new Error("The file contains 3 errors");throw r.content=s`<div><b>${r.message}</b></div>
                    ${W.map(l=>s`<div>${l}</div>`)}`,r},onClose:()=>t(void 0)})};return s`
        <div class="story-stack">
            <h3 class="story-section-title">Form Dialog — long save failure</h3>
            <p class="story-label">
                The save always rejects with a long multi-row error. The failure renders
                as a capped, scrollable block above the buttons; buttons stay put. The
                rich variant shows a structured failure (short message + content).
            </p>
            <button @click=${()=>a(!1)}>Plain failure</button>
            <button @click=${()=>a(!0)}>Rich failure</button>
            ${e?G(e):z}
        </div>
    `};customElements.define("story-add-form-dialog-failure",v(Ve));const $=()=>s`<story-add-form-dialog-failure></story-add-form-dialog-failure>`;$.storyName="Form Dialog — Save Failure";const Ge=[{quantity:5,unitPrice:12.5},{quantity:2,unitPrice:29.99},{quantity:10,unitPrice:4}],R=[{id:"description",variant:"cell",label:"Description",input:I,options:_,mode:"select",preserveOrder:!0,validate:u},{id:"quantity",label:"Qty",input:g,min:1,variant:"cell"},{id:"unitPrice",label:"Unit price (€)",input:g,min:0,variant:"cell"}],K={quantity:1,unitPrice:0},Qe=()=>{const{items:e,update:t,remove:a,append:o}=Ae({initial:Ge,fields:R,touched:!0});return s`
        <style>
            ${we({fields:R})} .item {
                display: flex;
                align-items: center;
            }
        </style>
        <div class="story-stack">
            <h3 class="story-section-title">Items list (renderItems)</h3>
            <p class="story-label">
                A repeating list of items with headers, inline editing, remove buttons,
                and a "defaults" row for adding new items. Uses
                <code>renderItems</code> + <code>useValidatedItems</code>.
            </p>
            ${B({items:e,fields:R,update:t,remove:a,defaults:K,touched:!0})}
            <button @click=${()=>o([{...K}])}>+ Add row</button>

            <h3 class="story-section-title">Items list (no remove)</h3>
            <p class="story-label">
                Same list without the remove button — useful for read-only or
                non-deletable rows.
            </p>
            ${B({items:e,fields:R,update:t,touched:!0})}
        </div>
    `};customElements.define("story-add-items",v(Qe));const D=()=>s`<story-add-items></story-add-items>`;D.storyName="Items list";f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"() => html`<story-add-fields></story-add-fields>`",...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:"() => html`<story-add-button></story-add-button>`",...w.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"() => html`<story-add-daterange></story-add-daterange>`",...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"() => html`<story-add-form-dialog></story-add-form-dialog>`",...b.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"() => html`<story-add-form-dialog-failure></story-add-form-dialog-failure>`",...$.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"() => html`<story-add-items></story-add-items>`",...D.parameters?.docs?.source}}};const tt=["BasicFields","WithButton","DateRangeAndReadOnly","FormDialog","FormDialogFailure","Items"];export{f as BasicFields,h as DateRangeAndReadOnly,b as FormDialog,$ as FormDialogFailure,D as Items,w as WithButton,tt as __namedExportsOrder,et as default};
