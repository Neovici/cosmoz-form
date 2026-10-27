import{o as u,n as v,w as W,b as i,t as K,v as se,a as O,i as T,m as re,l as N,c as U,u as ne,d as P,e as f,f as x,A as L}from"./iframe-ChxFEeuG.js";import{s as le,r as de,a as ce,b as ue,i as _,c as me,d as pe,e as ge,v as ye,E as Q,f as ve,u as w,g as m,t as y,n as p,h as fe,j as E,k as he,l as G,m as be}from"./inline-file-DSe4aPbI.js";import{a as I}from"./autocomplete-DWEuN0MQ.js";import{u as $e}from"./use-items-CgUYitMS.js";import"./preload-helper-PPVm8Dsz.js";const De=({slot:e,title:t,className:a,width:o="24",height:s="24",styles:r}={})=>i`
  <svg
    slot=${u(e)}
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
    height=${s}
    style=${u(r)}
  >
    ${v(t,()=>W`<title>${t}</title>`)}
    <path
      d="m18 10-4-4M2.5 21.5l3.384-.376c.414-.046.62-.069.814-.131a2 2 0 0 0 .485-.234c.17-.111.317-.259.61-.553L21 7a2.828 2.828 0 1 0-4-4L3.794 16.206c-.294.294-.442.442-.553.611a2 2 0 0 0-.234.485c-.062.193-.085.4-.131.814L2.5 21.5Z"
    />
  </svg>
`,Y=({slot:e,title:t,className:a,width:o="24",height:s="24",styles:r}={})=>i`
  <svg
    slot=${u(e)}
    class=${`trash-01-icon ${a??""}`}
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
    style=${u(r)}
  >
    ${v(t,()=>W`<title>${t}</title>`)}
    <path
      d="M16 6v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.48 2 13.92 2 12.8 2h-1.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C8 3.52 8 4.08 8 5.2V6m2 5.5v5m4-5v5M3 6h18m-2 0v11.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C16.72 22 15.88 22 14.2 22H9.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C5 19.72 5 18.88 5 17.2V6"
    />
  </svg>
`,F=Symbol("key"),Se=e=>{const t={...e};return Object.assign(t,{[F]:t})},we=e=>i`<cosmoz-button
		class="remove"
		variant="tertiary"
		size="sm"
		?disabled=${!e}
		@click=${e}
	>
		${Y()}
	</cosmoz-button>`,H=()=>i`<cosmoz-button
		class="remove remove-placeholder"
		variant="tertiary"
		size="sm"
		aria-hidden="true"
		inert
	>
		${Y()}
	</cosmoz-button>`,Ee=(e,t,{update:a,remove:o,removePlaceholder:s,fields:r,context:l,touched:c=!1,...n})=>i`<div class="item" data-index=${t}>
		${[ue({...n,values:e,fields:r,context:l??{},touched:c,onChange:d=>a(t,{...T(d,e),[F]:e?.[F]??e}),invalid:!1,load:O,onReset:O,onValues:O}),v(o,d=>we(e&&d&&(()=>d(t)))),v(s,H)]}
	</div>`,Ie=e=>e?.[F]??e,B=({items:e,fields:t,renderItem:a=Ee,paste:o,defaults:s,keyFunction:r=Ie,scroller:l=!0,update:c,style:n,...d})=>i`<div class="items" @paste=${o} style=${n}>
		${se({items:[{[F]:0},...e,...s?[Se(s)]:[]],keyFunction:r,renderItem:(g,R)=>{switch(!0){case R===0:return i`<div class="headers">
							${ce({fields:t})}
							${v(d.remove!=null,H)}
						</div>`;case(s!=null&&R===e.length+1):return a(g,R-1,{...d,fields:t,remove:void 0,removePlaceholder:d.remove!=null,update:(oe,ie)=>c(oe,{...g,...ie})});default:return a(g,R-1,{...d,fields:t,update:c})}},scroller:l})}
	</div>`,Fe=({fields:e})=>K`
	${le}
	${de({fields:e})}
`,J=_(({id:e,error:t,onChange:a,accept:o,multiple:s,value:r,values:l,autoReset:c})=>i`<div class="input input-file" name=${e}>
			<input
				class="file"
				type="file"
				name=${e}
				?multiple=${s}
				accept=${u(re(T(o,r,l)))}
				@change=${n=>{a(Array.from(n.target.files??[])),c&&(n.target.value="")}}
			/>
			${v(t,n=>i`<div class="failure">${n}</div>`)}
		</div>`),Re=({id:e,label:t,error:a,disabled:o,warning:s,onChange:r,value:l,title:c,description:n})=>i`<cosmoz-toggle
		class="input input-toggle"
		name=${e}
		title=${u(c)}
		?disabled=${o}
		.label=${t}
		.error=${a}
		.value=${N(l)}
		@change=${d=>r(d.detail)}
		>${[me(s),pe(n)]}</cosmoz-toggle
	>`,ke=_(Re),Ce=e=>e===void 0||typeof e=="object",Te=e=>_(({id:t,label:a,variant:o,error:s,warning:r,disabled:l,onChange:c,value:n})=>{if(Ce(n))return[i`<cosmoz-input
					class="input input-date-range"
					type=${e}
					variant=${u(o)}
					?data-warning=${!!r}
					name=${String(t)+"From"}
					?disabled=${l}
					?invalid=${!!s?.from}
					.errorMessage=${s?.from}
					.label=${U("From ({0})",{0:a})}
					.value=${N(n?.from)}
					.max=${u(n?.to)}
					@change=${({target:d})=>c({...n,from:d.value})}
				></cosmoz-input>`,i`<cosmoz-input
					class="input input-date-range"
					type=${e}
					variant=${u(o)}
					?data-warning=${!!r}
					name=${String(t)+"To"}
					?disabled=${l}
					?invalid=${!!s?.to}
					.errorMessage=${s?.to}
					.label=${U("To ({0})",{0:a})}
					.value=${N(n?.to)}
					.min=${u(n?.from)}
					@change=${({target:d})=>c({...n,to:d.value})}
				></cosmoz-input>`]}),X=Te("date"),xe=e=>Number.isNaN(e)||typeof e!="number"?0:e,Oe=new Intl.NumberFormat(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),Pe=e=>Oe.format(xe(e)),Z=({value:e,values:t,field:a,error:o,context:s})=>{const{id:r,suffix:l,warning:c,label:n,variant:d,format:g=Pe}=a;return[i`<style>
			cosmoz-input[disabled] {
				pointer-events: auto;
			}
		</style>`,i`<cosmoz-input
			class="input input-common input-number"
			variant=${u(d)}
			.label=${n}
			name="${r}"
			disabled
			.value=${g(e)}
			?invalid=${!!o}
			.errorMessage=${o}
			>${ge({suffix:T(l,e,t,a,s),warning:T(c,e,t,a,s)})}</cosmoz-input
		>`]},Ae=(e,t)=>[a=>({[Q]:ye(e,a,t)})],ze=({initial:e,rules:t,fields:a,context:o,touched:s})=>{const r=ne({fields:a}),l=P(()=>Ae(r.fields,o),[r,o]),{items:c,...n}=$e({initial:e,rules:P(()=>[...t??[],l],[t,l]),context:o,touched:s}),d=P(()=>c.some(g=>g[Q]),[c]);return{...n,items:c,invalid:d}},q=()=>K`
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
`,at={title:"Add"},M=["Electronics","Clothing","Food","Books","Toys"],Ne=["USD","EUR","GBP","JPY","CAD"],Le=["new","sale","popular","limited","exclusive","seasonal"],ee={name:"",price:0,sku:"",active:!0,category:"",tags:[],attachments:[],document:void 0,dropFiles:[]},te=[{id:"name",label:"Product name",hint:"Best practice: keep it under 50 characters.",input:y,validate:[m,e=>e?!1:"Name is required"]},{id:"price",label:"Price",hint:"Enter the price in euros. Must be greater than 0.",input:p,min:0,validate:[m,e=>e>0?!1:"Price must be greater than 0"]},{id:"sku",label:"SKU",hint:"Stock Keeping Unit",input:y},{id:"category",label:"Category",input:I,options:M,mode:"select",preserveOrder:!0,validate:[m,e=>e?!1:"Category is required"]},{id:"tags",label:"Tags",input:I,options:Le,preserveOrder:!0,validate:[m,e=>e.length>0?!1:"At least one tag is required"]},{id:"attachments",label:"Attachments",input:J,multiple:!0},{id:"document",label:"Document",input:fe},{id:"active",label:"Active",input:ke}],ae=[[e=>e.name?{}:{name:e.name}]],_e=()=>{const e=w({initial:ee,fields:te,rules:ae,touched:!0});return i`
        <style>
            ${q()}
        </style>
        <div class="story-stack">
            <h3 class="story-section-title">Add Product (fields only)</h3>
            ${E(e)}
        </div>
    `};customElements.define("story-add-fields",f(_e));const h=()=>i`<story-add-fields></story-add-fields>`;h.storyName="Fields";const qe=()=>new Promise(e=>setTimeout(e,2e3)),Me=()=>{const e=w({initial:ee,fields:te,rules:ae,touched:!0}),[t,a]=x(void 0),o=()=>{if(e.invalid)return;const s=qe();a(s),s.then(()=>a(void 0))};return i`
        <style>
            ${q()}
        </style>
        <div class="story-stack">
            <h3 class="story-section-title">Add Product (with save button)</h3>
            ${E(e)}
            ${he({save$:t,onSave:o,disabled:e.invalid,title:"Save product"})}
        </div>
    `};customElements.define("story-add-button",f(Me));const k=()=>i`<story-add-button></story-add-button>`,A={description:"Widget package",quantity:10,unitPrice:49.99,total:499.9,period:{from:"2026-01-01",to:"2026-06-30"}},Ue=[{id:"description",label:"Description",input:y},{id:"quantity",label:"Quantity",input:p,min:1},{id:"unitPrice",label:"Unit price (€)",input:p,min:0},{id:"total",label:"Total (€)",input:Z},{id:"period",label:"Period",input:X}],Be=[{id:"description",label:"Description",input:y,variant:"cell"},{id:"quantity",label:"Quantity",input:p,min:1,variant:"cell"},{id:"unitPrice",label:"Unit price (€)",input:p,min:0,variant:"cell"},{id:"total",label:"Total (€)",input:Z,variant:"cell"},{id:"period",label:"Period",input:X,variant:"cell"}],je=[{id:"description",label:"Description",input:y,compact:!0},{id:"quantity",label:"Quantity",input:p,min:1,compact:!0},{id:"unitPrice",label:"Unit price (€)",input:p,min:0,compact:!0}],z=[[e=>({total:e.quantity*e.unitPrice}),e=>[e.quantity,e.unitPrice]]],Ve=()=>{const e=w({initial:A,fields:Ue,rules:z,touched:!0}),t=w({initial:A,fields:Be,rules:z,touched:!0}),a=w({initial:A,fields:je,rules:z,touched:!0});return i`
        <style>
            ${q()} .table-grid {
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
            ${E(e)}
            <h3 class="story-section-title">
                Order form — table layout (cell variant)
            </h3>
            <p class="story-label">
                Same fields rendered in a grid/table layout using
                <code>variant: 'cell'</code>.
            </p>
            <div class="table-grid">${E(t)}</div>
            <h3 class="story-section-title">Order form — compact fields</h3>
            <p class="story-label">
                Same editable fields rendered with <code>compact: true</code>.
            </p>
            ${E(a)}
        </div>
    `};customElements.define("story-add-daterange",f(Ve));const b=()=>i`<story-add-daterange></story-add-daterange>`;b.storyName="Date range, read-only & cell variant";const We={supplier:"",invoiceNumber:"",message:"",category:"",currency:[],tags:[]},Ke=[{id:"supplier",label:"Supplier",input:y,validate:[m]},{id:"invoiceNumber",label:"Invoice number",input:y,validate:[m]},{id:"category",label:"Category",input:I,options:M,mode:"select",preserveOrder:!0,validate:[m]},{id:"currency",label:"Currency",input:I,options:Ne,preserveOrder:!0,validate:[m]},{id:"message",label:"Comment",input:be,rows:3,validate:[m]}],Qe=()=>{const[e,t]=x(""),[a,o]=x(void 0);return i`
        <div class="story-stack">
            <h3 class="story-section-title">Form Dialog</h3>
            <p class="story-label">
                Click the button to open a form inside a dialog. Submitting logs the
                result below.
            </p>
            <button @click=${()=>{o({heading:"Change and reimport invoice",subtitle:"Are you sure you want to re-import this invoice?",description:i`<p>
                Please review the invoice details and make any necessary changes before
                reimporting. Ensure that all required fields are filled out correctly.
            </p>`,icon:De(),fields:Ke,initial:We,saveText:"OK",onSave:async r=>{await new Promise(l=>setTimeout(l,2e3)),t(JSON.stringify(r,null,2)),o(void 0)},onClose:()=>o(void 0)})}}>Open dialog</button>
            ${a?G(a):L}
            ${e?i`<pre>${e}</pre>`:L}
        </div>
    `};customElements.define("story-add-form-dialog",f(Qe));const $=()=>i`<story-add-form-dialog></story-add-form-dialog>`;$.storyName="Form Dialog";const j=[`Row 1078: Category 'Sheeeesh' is not valid.
Expected one of: Electronics, Clothing, Food, Books, Toys.
Package size 'huge' is not valid. Expected one of: S, M, L, XL.`,"Row 1079: Category 'Sheeeesh' is not valid. Expected one of: Electronics, Clothing, Food, Books, Toys.","Row 1080: Category 'Sheeeesh' is not valid. Expected one of: Electronics, Clothing, Food, Books, Toys."],Ge=()=>{const[e,t]=x(void 0),a=o=>{t({heading:"Import products",fields:[{id:"file",label:"File",accept:".xlsx",input:J}],initial:{file:[]},saveText:"OK",onSave:async()=>{const s=j.join(" ");if(!o)throw new Error(s);const r=new Error("The file contains 3 errors");throw r.content=i`<div><b>${r.message}</b></div>
                    ${j.map(l=>i`<div>${l}</div>`)}`,r},onClose:()=>t(void 0)})};return i`
        <div class="story-stack">
            <h3 class="story-section-title">Form Dialog — long save failure</h3>
            <p class="story-label">
                The save always rejects with a long multi-row error. The failure renders
                as a capped, scrollable block above the buttons; buttons stay put. The
                rich variant shows a structured failure (short message + content).
            </p>
            <button @click=${()=>a(!1)}>Plain failure</button>
            <button @click=${()=>a(!0)}>Rich failure</button>
            ${e?G(e):L}
        </div>
    `};customElements.define("story-add-form-dialog-failure",f(Ge));const D=()=>i`<story-add-form-dialog-failure></story-add-form-dialog-failure>`;D.storyName="Form Dialog — Save Failure";const Ye=[{quantity:5,unitPrice:12.5},{quantity:2,unitPrice:29.99},{quantity:10,unitPrice:4}],C=[{id:"description",variant:"cell",label:"Description",input:I,options:M,mode:"select",preserveOrder:!0,validate:m},{id:"quantity",label:"Qty",input:p,min:1,variant:"cell"},{id:"unitPrice",label:"Unit price (€)",input:p,min:0,variant:"cell"}],V={quantity:1,unitPrice:0},He=()=>{const{items:e,update:t,remove:a,append:o}=ze({initial:Ye,fields:C,touched:!0});return i`
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
            ${B({items:e,fields:C,update:t,remove:a,defaults:V,touched:!0})}
            <button @click=${()=>o([{...V}])}>+ Add row</button>

            <h3 class="story-section-title">Items list (no remove)</h3>
            <p class="story-label">
                Same list without the remove button — useful for read-only or
                non-deletable rows.
            </p>
            ${B({items:e,fields:C,update:t,touched:!0})}
        </div>
    `};customElements.define("story-add-items",f(He));const S=()=>i`<story-add-items></story-add-items>`;S.storyName="Items list";h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"() => html`<story-add-fields></story-add-fields>`",...h.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"() => html`<story-add-button></story-add-button>`",...k.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"() => html`<story-add-daterange></story-add-daterange>`",...b.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"() => html`<story-add-form-dialog></story-add-form-dialog>`",...$.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"() => html`<story-add-form-dialog-failure></story-add-form-dialog-failure>`",...D.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"() => html`<story-add-items></story-add-items>`",...S.parameters?.docs?.source}}};const ot=["BasicFields","WithButton","DateRangeAndReadOnly","FormDialog","FormDialogFailure","Items"];export{h as BasicFields,b as DateRangeAndReadOnly,$ as FormDialog,D as FormDialogFailure,S as Items,k as WithButton,ot as __namedExportsOrder,at as default};
