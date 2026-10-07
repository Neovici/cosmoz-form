import{o as u,n as v,w as Q,b as i,t as G,v as re,a as O,i as T,m as ne,l as N,c as U,u as le,d as P,e as h,f as x,A as L}from"./iframe-0okq6bPr.js";import{s as de,r as ce,a as ue,b as me,i as _,c as pe,d as ge,e as ye,v as ve,E as B,f as fe,u as E,g as m,t as y,n as g,h as he,j as I,k as be,l as Y,m as $e}from"./inline-file-O0MaFWhY.js";import{a as R}from"./autocomplete-DfvRRHrZ.js";import{u as De}from"./use-items-D0W007YM.js";import"./preload-helper-PPVm8Dsz.js";const we=({slot:e,title:t,className:o,width:a="24",height:s="24",styles:r}={})=>i`
  <svg
    slot=${u(e)}
    class=${`edit-02-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${a}
    height=${s}
    style=${u(r)}
  >
    ${v(t,()=>Q`<title>${t}</title>`)}
    <path
      d="m18 10-4-4M2.5 21.5l3.384-.376c.414-.046.62-.069.814-.131a2 2 0 0 0 .485-.234c.17-.111.317-.259.61-.553L21 7a2.828 2.828 0 1 0-4-4L3.794 16.206c-.294.294-.442.442-.553.611a2 2 0 0 0-.234.485c-.062.193-.085.4-.131.814L2.5 21.5Z"
    />
  </svg>
`,H=({slot:e,title:t,className:o,width:a="24",height:s="24",styles:r}={})=>i`
  <svg
    slot=${u(e)}
    class=${`trash-01-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${a}
    height=${s}
    style=${u(r)}
  >
    ${v(t,()=>Q`<title>${t}</title>`)}
    <path
      d="M16 6v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.48 2 13.92 2 12.8 2h-1.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C8 3.52 8 4.08 8 5.2V6m2 5.5v5m4-5v5M3 6h18m-2 0v11.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C16.72 22 15.88 22 14.2 22H9.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C5 19.72 5 18.88 5 17.2V6"
    />
  </svg>
`,f=Symbol("key"),Se=e=>{const t={...e};return Object.assign(t,{[f]:t})},j=new WeakMap,Ee=(e,t)=>{const o=j.get(e);if(o&&!t.some(s=>s[f]===o))return o;const a=Se(e);return j.set(e,a),a},Ie=e=>i`<cosmoz-button
		class="remove"
		variant="tertiary"
		size="sm"
		?disabled=${!e}
		@click=${e}
	>
		${H()}
	</cosmoz-button>`,J=()=>i`<cosmoz-button
		class="remove remove-placeholder"
		variant="tertiary"
		size="sm"
		aria-hidden="true"
		inert
	>
		${H()}
	</cosmoz-button>`,Re=(e,t,{update:o,remove:a,removePlaceholder:s,fields:r,context:l,touched:c=!1,...n})=>i`<div class="item" data-index=${t}>
		${[me({...n,values:e,fields:r,context:l??{},touched:c,onChange:d=>o(t,{...T(d,e),[f]:e?.[f]??e}),invalid:!1,load:O,onReset:O,onValues:O}),v(a,d=>Ie(e&&d&&(()=>d(t)))),v(s,J)]}
	</div>`,ke=e=>e?.[f]??e,W=({items:e,fields:t,renderItem:o=Re,paste:a,defaults:s,keyFunction:r=ke,scroller:l=!0,update:c,style:n,...d})=>i`<div class="items" @paste=${a} style=${n}>
		${re({items:[{[f]:0},...e,...s?[Ee(s,e)]:[]],keyFunction:r,renderItem:(p,k)=>{switch(!0){case k===0:return i`<div class="headers">
							${ue({fields:t})}
							${v(d.remove!=null,J)}
						</div>`;case(s!=null&&k===e.length+1):return o(p,k-1,{...d,fields:t,remove:void 0,removePlaceholder:d.remove!=null,update:(se,ie)=>c(se,{...p,...ie})});default:return o(p,k-1,{...d,fields:t,update:c})}},scroller:l})}
	</div>`,Fe=({fields:e})=>G`
	${de}
	${ce({fields:e})}
`,X=_(({id:e,error:t,onChange:o,accept:a,multiple:s,value:r,values:l,autoReset:c})=>i`<div class="input input-file" name=${e}>
			<input
				class="file"
				type="file"
				name=${e}
				?multiple=${s}
				accept=${u(ne(T(a,r,l)))}
				@change=${n=>{o(Array.from(n.target.files??[])),c&&(n.target.value="")}}
			/>
			${v(t,n=>i`<div class="failure">${n}</div>`)}
		</div>`),Ce=({id:e,label:t,error:o,disabled:a,warning:s,onChange:r,value:l,title:c,description:n})=>i`<cosmoz-toggle
		class="input input-toggle"
		name=${e}
		title=${u(c)}
		?disabled=${a}
		.label=${t}
		.error=${o}
		.value=${N(l)}
		@change=${d=>r(d.detail)}
		>${[pe(s),ge(n)]}</cosmoz-toggle
	>`,Te=_(Ce),xe=e=>e===void 0||typeof e=="object",Oe=e=>_(({id:t,label:o,variant:a,error:s,warning:r,disabled:l,onChange:c,value:n})=>{if(xe(n))return[i`<cosmoz-input
					class="input input-date-range"
					type=${e}
					variant=${u(a)}
					?data-warning=${!!r}
					name=${String(t)+"From"}
					?disabled=${l}
					?invalid=${!!s?.from}
					.errorMessage=${s?.from}
					.label=${U("From ({0})",{0:o})}
					.value=${N(n?.from)}
					.max=${u(n?.to)}
					@change=${({target:d})=>c({...n,from:d.value})}
				></cosmoz-input>`,i`<cosmoz-input
					class="input input-date-range"
					type=${e}
					variant=${u(a)}
					?data-warning=${!!r}
					name=${String(t)+"To"}
					?disabled=${l}
					?invalid=${!!s?.to}
					.errorMessage=${s?.to}
					.label=${U("To ({0})",{0:o})}
					.value=${N(n?.to)}
					.min=${u(n?.from)}
					@change=${({target:d})=>c({...n,to:d.value})}
				></cosmoz-input>`]}),Z=Oe("date"),Pe=e=>Number.isNaN(e)||typeof e!="number"?0:e,Ae=new Intl.NumberFormat(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),ze=e=>Ae.format(Pe(e)),ee=({value:e,values:t,field:o,error:a,context:s})=>{const{id:r,suffix:l,warning:c,label:n,variant:d,format:p=ze}=o;return[i`<style>
			cosmoz-input[disabled] {
				pointer-events: auto;
			}
		</style>`,i`<cosmoz-input
			class="input input-common input-number"
			variant=${u(d)}
			.label=${n}
			name="${r}"
			disabled
			.value=${p(e)}
			?invalid=${!!a}
			.errorMessage=${a}
			>${ye({suffix:T(l,e,t,o,s),warning:T(c,e,t,o,s)})}</cosmoz-input
		>`]},Ne=({initial:e,rules:t,fields:o,context:a,touched:s})=>{const r=le({fields:o}),l=P(()=>[p=>({[B]:ve(r.fields,p,a)})],[r,a]),{items:c,...n}=De({initial:e,rules:P(()=>[...t??[],l],[t,l]),context:a,touched:s}),d=P(()=>c.some(p=>p[B]),[c]);return{...n,items:c,invalid:d}},M=()=>G`
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

	${fe}
`,at={title:"Add"},q=["Electronics","Clothing","Food","Books","Toys"],Le=["USD","EUR","GBP","JPY","CAD"],_e=["new","sale","popular","limited","exclusive","seasonal"],te={name:"",price:0,sku:"",active:!0,category:"",tags:[],attachments:[],document:void 0,dropFiles:[]},oe=[{id:"name",label:"Product name",hint:"Best practice: keep it under 50 characters.",input:y,validate:[m,e=>e?!1:"Name is required"]},{id:"price",label:"Price",hint:"Enter the price in euros. Must be greater than 0.",input:g,min:0,validate:[m,e=>e>0?!1:"Price must be greater than 0"]},{id:"sku",label:"SKU",hint:"Stock Keeping Unit",input:y},{id:"category",label:"Category",input:R,options:q,mode:"select",preserveOrder:!0,validate:[m,e=>e?!1:"Category is required"]},{id:"tags",label:"Tags",input:R,options:_e,preserveOrder:!0,validate:[m,e=>e.length>0?!1:"At least one tag is required"]},{id:"attachments",label:"Attachments",input:X,multiple:!0},{id:"document",label:"Document",input:he},{id:"active",label:"Active",input:Te}],ae=[[e=>e.name?{}:{name:e.name}]],Me=()=>{const e=E({initial:te,fields:oe,rules:ae,touched:!0});return i`
        <style>
            ${M()}
        </style>
        <div class="story-stack">
            <h3 class="story-section-title">Add Product (fields only)</h3>
            ${I(e)}
        </div>
    `};customElements.define("story-add-fields",h(Me));const b=()=>i`<story-add-fields></story-add-fields>`;b.storyName="Fields";const qe=()=>new Promise(e=>setTimeout(e,2e3)),Ue=()=>{const e=E({initial:te,fields:oe,rules:ae,touched:!0}),[t,o]=x(void 0),a=()=>{if(e.invalid)return;const s=qe();o(s),s.then(()=>o(void 0))};return i`
        <style>
            ${M()}
        </style>
        <div class="story-stack">
            <h3 class="story-section-title">Add Product (with save button)</h3>
            ${I(e)}
            ${be({save$:t,onSave:a,disabled:e.invalid,title:"Save product"})}
        </div>
    `};customElements.define("story-add-button",h(Ue));const F=()=>i`<story-add-button></story-add-button>`,A={description:"Widget package",quantity:10,unitPrice:49.99,total:499.9,period:{from:"2026-01-01",to:"2026-06-30"}},Be=[{id:"description",label:"Description",input:y},{id:"quantity",label:"Quantity",input:g,min:1},{id:"unitPrice",label:"Unit price (€)",input:g,min:0},{id:"total",label:"Total (€)",input:ee},{id:"period",label:"Period",input:Z}],je=[{id:"description",label:"Description",input:y,variant:"cell"},{id:"quantity",label:"Quantity",input:g,min:1,variant:"cell"},{id:"unitPrice",label:"Unit price (€)",input:g,min:0,variant:"cell"},{id:"total",label:"Total (€)",input:ee,variant:"cell"},{id:"period",label:"Period",input:Z,variant:"cell"}],We=[{id:"description",label:"Description",input:y,compact:!0},{id:"quantity",label:"Quantity",input:g,min:1,compact:!0},{id:"unitPrice",label:"Unit price (€)",input:g,min:0,compact:!0}],z=[[e=>({total:e.quantity*e.unitPrice}),e=>[e.quantity,e.unitPrice]]],Ve=()=>{const e=E({initial:A,fields:Be,rules:z,touched:!0}),t=E({initial:A,fields:je,rules:z,touched:!0}),o=E({initial:A,fields:We,rules:z,touched:!0});return i`
        <style>
            ${M()} .table-grid {
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
            ${I(e)}
            <h3 class="story-section-title">
                Order form — table layout (cell variant)
            </h3>
            <p class="story-label">
                Same fields rendered in a grid/table layout using
                <code>variant: 'cell'</code>.
            </p>
            <div class="table-grid">${I(t)}</div>
            <h3 class="story-section-title">Order form — compact fields</h3>
            <p class="story-label">
                Same editable fields rendered with <code>compact: true</code>.
            </p>
            ${I(o)}
        </div>
    `};customElements.define("story-add-daterange",h(Ve));const $=()=>i`<story-add-daterange></story-add-daterange>`;$.storyName="Date range, read-only & cell variant";const Ke={supplier:"",invoiceNumber:"",message:"",category:"",currency:[],tags:[]},Qe=[{id:"supplier",label:"Supplier",input:y,validate:[m]},{id:"invoiceNumber",label:"Invoice number",input:y,validate:[m]},{id:"category",label:"Category",input:R,options:q,mode:"select",preserveOrder:!0,validate:[m]},{id:"currency",label:"Currency",input:R,options:Le,preserveOrder:!0,validate:[m]},{id:"message",label:"Comment",input:$e,rows:3,validate:[m]}],Ge=()=>{const[e,t]=x(""),[o,a]=x(void 0);return i`
        <div class="story-stack">
            <h3 class="story-section-title">Form Dialog</h3>
            <p class="story-label">
                Click the button to open a form inside a dialog. Submitting logs the
                result below.
            </p>
            <button @click=${()=>{a({heading:"Change and reimport invoice",subtitle:"Are you sure you want to re-import this invoice?",description:i`<p>
                Please review the invoice details and make any necessary changes before
                reimporting. Ensure that all required fields are filled out correctly.
            </p>`,icon:we(),fields:Qe,initial:Ke,saveText:"OK",onSave:async r=>{await new Promise(l=>setTimeout(l,2e3)),t(JSON.stringify(r,null,2)),a(void 0)},onClose:()=>a(void 0)})}}>Open dialog</button>
            ${o?Y(o):L}
            ${e?i`<pre>${e}</pre>`:L}
        </div>
    `};customElements.define("story-add-form-dialog",h(Ge));const D=()=>i`<story-add-form-dialog></story-add-form-dialog>`;D.storyName="Form Dialog";const V=[`Row 1078: Category 'Sheeeesh' is not valid.
Expected one of: Electronics, Clothing, Food, Books, Toys.
Package size 'huge' is not valid. Expected one of: S, M, L, XL.`,"Row 1079: Category 'Sheeeesh' is not valid. Expected one of: Electronics, Clothing, Food, Books, Toys.","Row 1080: Category 'Sheeeesh' is not valid. Expected one of: Electronics, Clothing, Food, Books, Toys."],Ye=()=>{const[e,t]=x(void 0),o=a=>{t({heading:"Import products",fields:[{id:"file",label:"File",accept:".xlsx",input:X}],initial:{file:[]},saveText:"OK",onSave:async()=>{const s=V.join(" ");if(!a)throw new Error(s);const r=new Error("The file contains 3 errors");throw r.content=i`<div><b>${r.message}</b></div>
                    ${V.map(l=>i`<div>${l}</div>`)}`,r},onClose:()=>t(void 0)})};return i`
        <div class="story-stack">
            <h3 class="story-section-title">Form Dialog — long save failure</h3>
            <p class="story-label">
                The save always rejects with a long multi-row error. The failure renders
                as a capped, scrollable block above the buttons; buttons stay put. The
                rich variant shows a structured failure (short message + content).
            </p>
            <button @click=${()=>o(!1)}>Plain failure</button>
            <button @click=${()=>o(!0)}>Rich failure</button>
            ${e?Y(e):L}
        </div>
    `};customElements.define("story-add-form-dialog-failure",h(Ye));const w=()=>i`<story-add-form-dialog-failure></story-add-form-dialog-failure>`;w.storyName="Form Dialog — Save Failure";const He=[{quantity:5,unitPrice:12.5},{quantity:2,unitPrice:29.99},{quantity:10,unitPrice:4}],C=[{id:"description",variant:"cell",label:"Description",input:R,options:q,mode:"select",preserveOrder:!0,validate:m},{id:"quantity",label:"Qty",input:g,min:1,variant:"cell"},{id:"unitPrice",label:"Unit price (€)",input:g,min:0,variant:"cell"}],K={quantity:1,unitPrice:0},Je=()=>{const{items:e,update:t,remove:o,append:a}=Ne({initial:He,fields:C,touched:!0});return i`
        <style>
            ${Fe({fields:C})} .item {
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
            ${W({items:e,fields:C,update:t,remove:o,defaults:K,touched:!0})}
            <button @click=${()=>a([{...K}])}>+ Add row</button>

            <h3 class="story-section-title">Items list (no remove)</h3>
            <p class="story-label">
                Same list without the remove button — useful for read-only or
                non-deletable rows.
            </p>
            ${W({items:e,fields:C,update:t,touched:!0})}
        </div>
    `};customElements.define("story-add-items",h(Je));const S=()=>i`<story-add-items></story-add-items>`;S.storyName="Items list";b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"() => html`<story-add-fields></story-add-fields>`",...b.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:"() => html`<story-add-button></story-add-button>`",...F.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"() => html`<story-add-daterange></story-add-daterange>`",...$.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"() => html`<story-add-form-dialog></story-add-form-dialog>`",...D.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:"() => html`<story-add-form-dialog-failure></story-add-form-dialog-failure>`",...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"() => html`<story-add-items></story-add-items>`",...S.parameters?.docs?.source}}};const st=["BasicFields","WithButton","DateRangeAndReadOnly","FormDialog","FormDialogFailure","Items"];export{b as BasicFields,$ as DateRangeAndReadOnly,D as FormDialog,w as FormDialogFailure,S as Items,F as WithButton,st as __namedExportsOrder,at as default};
