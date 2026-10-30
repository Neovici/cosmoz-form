import{o as m,n as v,w as K,b as s,t as Q,v as se,a as O,i as I,m as re,l as N,c as U,u as ne,d as P,e as f,f as C,A as L}from"./iframe-Ko6GiHg7.js";import{s as le,r as de,a as ce,b as ue,i as _,c as me,d as pe,e as ge,v as ye,E as B,f as ve,u as w,g as p,t as y,n as g,h as fe,j as E,k as he,l as G,m as be}from"./inline-file-BY9pmlba.js";import{a as F}from"./autocomplete-BuZD0cVM.js";import{u as $e}from"./use-items-Bp7QfP3Q.js";import"./preload-helper-PPVm8Dsz.js";const De=({slot:e,title:t,className:o,width:a="24",height:i="24",styles:r}={})=>s`
  <svg
    slot=${m(e)}
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
    height=${i}
    style=${m(r)}
  >
    ${v(t,()=>K`<title>${t}</title>`)}
    <path
      d="m18 10-4-4M2.5 21.5l3.384-.376c.414-.046.62-.069.814-.131a2 2 0 0 0 .485-.234c.17-.111.317-.259.61-.553L21 7a2.828 2.828 0 1 0-4-4L3.794 16.206c-.294.294-.442.442-.553.611a2 2 0 0 0-.234.485c-.062.193-.085.4-.131.814L2.5 21.5Z"
    />
  </svg>
`,Y=({slot:e,title:t,className:o,width:a="24",height:i="24",styles:r}={})=>s`
  <svg
    slot=${m(e)}
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
    height=${i}
    style=${m(r)}
  >
    ${v(t,()=>K`<title>${t}</title>`)}
    <path
      d="M16 6v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.48 2 13.92 2 12.8 2h-1.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C8 3.52 8 4.08 8 5.2V6m2 5.5v5m4-5v5M3 6h18m-2 0v11.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C16.72 22 15.88 22 14.2 22H9.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C5 19.72 5 18.88 5 17.2V6"
    />
  </svg>
`,T=Symbol("key"),Se=e=>{const t={...e};return Object.assign(t,{[T]:t})},we=(e,t="Remove")=>s`<cosmoz-button
		class="remove"
		variant="tertiary"
		size="sm"
		icon-only
		?disabled=${!e}
		@click=${e}
		tooltip=${t}
		aria-label=${t}
	>
		${Y()}
	</cosmoz-button>`,H=()=>s`<cosmoz-button
		class="remove remove-placeholder"
		variant="tertiary"
		size="sm"
		icon-only
		aria-hidden="true"
		inert
	>
		${Y()}
	</cosmoz-button>`,Ee=(e,t,{update:o,remove:a,removePlaceholder:i,removeLabel:r,fields:l,context:d,touched:n=!1,...c})=>s`<div class="item" data-index=${t}>
		${[ue({...c,values:e,fields:l,context:d??{},touched:n,onChange:u=>o(t,{...I(u,e),[T]:e?.[T]??e}),invalid:!1,load:O,onReset:O,onValues:O}),v(a,u=>we(e&&u&&(()=>u(t)),I(r,e))),v(i,H)]}
	</div>`,Ie=e=>e?.[T]??e,j=({items:e,fields:t,renderItem:o=Ee,paste:a,defaults:i,keyFunction:r=Ie,scroller:l,update:d,style:n,...c})=>s`<div class="items" @paste=${a} style=${n}>
		<div class="headers">
			${ce({fields:t})}
			${v(c.remove!=null,H)}
		</div>
		<div class="rows">
			${se({items:[...e,...i?[Se(i)]:[]],keyFunction:r,renderItem:(u,x)=>i!=null&&x===e.length?o(u,x,{...c,fields:t,remove:void 0,removePlaceholder:c.remove!=null,update:(ae,ie)=>d(ae,{...u,...ie})}):o(u,x,{...c,fields:t,update:d}),scroller:!1})}
		</div>
	</div>`,Fe=({fields:e})=>Q`
	${le}
	${de({fields:e})}
`,J=_(({id:e,error:t,onChange:o,accept:a,multiple:i,value:r,values:l,autoReset:d})=>s`<div class="input input-file" name=${e}>
			<input
				class="file"
				type="file"
				name=${e}
				?multiple=${i}
				accept=${m(re(I(a,r,l)))}
				@change=${n=>{o(Array.from(n.target.files??[])),d&&(n.target.value="")}}
			/>
			${v(t,n=>s`<div class="failure">${n}</div>`)}
		</div>`),Re=({id:e,label:t,error:o,disabled:a,warning:i,onChange:r,value:l,title:d,description:n})=>s`<cosmoz-toggle
		class="input input-toggle"
		name=${e}
		title=${m(d)}
		?disabled=${a}
		.label=${t}
		.error=${o}
		.value=${N(l)}
		@change=${c=>r(c.detail)}
		>${[me(i),pe(n)]}</cosmoz-toggle
	>`,ke=_(Re),Ce=e=>e===void 0||typeof e=="object",Te=e=>_(({id:t,label:o,variant:a,error:i,warning:r,disabled:l,onChange:d,value:n})=>{if(Ce(n))return[s`<cosmoz-input
					class="input input-date-range"
					type=${e}
					variant=${m(a)}
					?data-warning=${!!r}
					name=${String(t)+"From"}
					?disabled=${l}
					?invalid=${!!i?.from}
					.errorMessage=${i?.from}
					.label=${U("From ({0})",{0:o})}
					.value=${N(n?.from)}
					.max=${m(n?.to)}
					@change=${({target:c})=>d({...n,from:c.value})}
				></cosmoz-input>`,s`<cosmoz-input
					class="input input-date-range"
					type=${e}
					variant=${m(a)}
					?data-warning=${!!r}
					name=${String(t)+"To"}
					?disabled=${l}
					?invalid=${!!i?.to}
					.errorMessage=${i?.to}
					.label=${U("To ({0})",{0:o})}
					.value=${N(n?.to)}
					.min=${m(n?.from)}
					@change=${({target:c})=>d({...n,to:c.value})}
				></cosmoz-input>`]}),X=Te("date"),xe=e=>Number.isNaN(e)||typeof e!="number"?0:e,Oe=new Intl.NumberFormat(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),Pe=e=>Oe.format(xe(e)),Z=({value:e,values:t,field:o,error:a,context:i})=>{const{id:r,suffix:l,warning:d,label:n,variant:c,format:u=Pe}=o;return[s`<style>
			cosmoz-input[disabled] {
				pointer-events: auto;
			}
		</style>`,s`<cosmoz-input
			class="input input-common input-number"
			variant=${m(c)}
			.label=${n}
			name="${r}"
			disabled
			.value=${u(e)}
			?invalid=${!!a}
			.errorMessage=${a}
			>${ge({suffix:I(l,e,t,o,i),warning:I(d,e,t,o,i)})}</cosmoz-input
		>`]},Ae=({initial:e,rules:t,fields:o,context:a,touched:i})=>{const r=ne({fields:o}),l=P(()=>[u=>({[B]:ye(r.fields,u,a)})],[r,a]),{items:d,...n}=$e({initial:e,rules:P(()=>[...t??[],l],[t,l]),context:a,touched:i}),c=P(()=>d.some(u=>u[B]),[d]);return{...n,items:d,invalid:c}},q=()=>Q`
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
`,tt={title:"Add"},M=["Electronics","Clothing","Food","Books","Toys"],ze=["USD","EUR","GBP","JPY","CAD"],Ne=["new","sale","popular","limited","exclusive","seasonal"],ee={name:"",price:0,sku:"",active:!0,category:"",tags:[],attachments:[],document:void 0,dropFiles:[]},te=[{id:"name",label:"Product name",hint:"Best practice: keep it under 50 characters.",input:y,validate:[p,e=>e?!1:"Name is required"]},{id:"price",label:"Price",hint:"Enter the price in euros. Must be greater than 0.",input:g,min:0,validate:[p,e=>e>0?!1:"Price must be greater than 0"]},{id:"sku",label:"SKU",hint:"Stock Keeping Unit",input:y},{id:"category",label:"Category",input:F,options:M,mode:"select",preserveOrder:!0,validate:[p,e=>e?!1:"Category is required"]},{id:"tags",label:"Tags",input:F,options:Ne,preserveOrder:!0,validate:[p,e=>e.length>0?!1:"At least one tag is required"]},{id:"attachments",label:"Attachments",input:J,multiple:!0},{id:"document",label:"Document",input:fe},{id:"active",label:"Active",input:ke}],oe=[[e=>e.name?{}:{name:e.name}]],Le=()=>{const e=w({initial:ee,fields:te,rules:oe,touched:!0});return s`
        <style>
            ${q()}
        </style>
        <div class="story-stack">
            <h3 class="story-section-title">Add Product (fields only)</h3>
            ${E(e)}
        </div>
    `};customElements.define("story-add-fields",f(Le));const h=()=>s`<story-add-fields></story-add-fields>`;h.storyName="Fields";const _e=()=>new Promise(e=>setTimeout(e,2e3)),qe=()=>{const e=w({initial:ee,fields:te,rules:oe,touched:!0}),[t,o]=C(void 0),a=()=>{if(e.invalid)return;const i=_e();o(i),i.then(()=>o(void 0))};return s`
        <style>
            ${q()}
        </style>
        <div class="story-stack">
            <h3 class="story-section-title">Add Product (with save button)</h3>
            ${E(e)}
            ${he({save$:t,onSave:a,disabled:e.invalid,title:"Save product"})}
        </div>
    `};customElements.define("story-add-button",f(qe));const R=()=>s`<story-add-button></story-add-button>`,A={description:"Widget package",quantity:10,unitPrice:49.99,total:499.9,period:{from:"2026-01-01",to:"2026-06-30"}},Me=[{id:"description",label:"Description",input:y},{id:"quantity",label:"Quantity",input:g,min:1},{id:"unitPrice",label:"Unit price (€)",input:g,min:0},{id:"total",label:"Total (€)",input:Z},{id:"period",label:"Period",input:X}],Ue=[{id:"description",label:"Description",input:y,variant:"cell"},{id:"quantity",label:"Quantity",input:g,min:1,variant:"cell"},{id:"unitPrice",label:"Unit price (€)",input:g,min:0,variant:"cell"},{id:"total",label:"Total (€)",input:Z,variant:"cell"},{id:"period",label:"Period",input:X,variant:"cell"}],Be=[{id:"description",label:"Description",input:y,compact:!0},{id:"quantity",label:"Quantity",input:g,min:1,compact:!0},{id:"unitPrice",label:"Unit price (€)",input:g,min:0,compact:!0}],z=[[e=>({total:e.quantity*e.unitPrice}),e=>[e.quantity,e.unitPrice]]],je=()=>{const e=w({initial:A,fields:Me,rules:z,touched:!0}),t=w({initial:A,fields:Ue,rules:z,touched:!0}),o=w({initial:A,fields:Be,rules:z,touched:!0});return s`
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
            ${E(o)}
        </div>
    `};customElements.define("story-add-daterange",f(je));const b=()=>s`<story-add-daterange></story-add-daterange>`;b.storyName="Date range, read-only & cell variant";const Ve={supplier:"",invoiceNumber:"",message:"",category:"",currency:[],tags:[]},We=[{id:"supplier",label:"Supplier",input:y,validate:[p]},{id:"invoiceNumber",label:"Invoice number",input:y,validate:[p]},{id:"category",label:"Category",input:F,options:M,mode:"select",preserveOrder:!0,validate:[p]},{id:"currency",label:"Currency",input:F,options:ze,preserveOrder:!0,validate:[p]},{id:"message",label:"Comment",input:be,rows:3,validate:[p]}],Ke=()=>{const[e,t]=C(""),[o,a]=C(void 0);return s`
        <div class="story-stack">
            <h3 class="story-section-title">Form Dialog</h3>
            <p class="story-label">
                Click the button to open a form inside a dialog. Submitting logs the
                result below.
            </p>
            <button @click=${()=>{a({heading:"Change and reimport invoice",subtitle:"Are you sure you want to re-import this invoice?",description:s`<p>
                Please review the invoice details and make any necessary changes before
                reimporting. Ensure that all required fields are filled out correctly.
            </p>`,icon:De(),fields:We,initial:Ve,saveText:"OK",onSave:async r=>{await new Promise(l=>setTimeout(l,2e3)),t(JSON.stringify(r,null,2)),a(void 0)},onClose:()=>a(void 0)})}}>Open dialog</button>
            ${o?G(o):L}
            ${e?s`<pre>${e}</pre>`:L}
        </div>
    `};customElements.define("story-add-form-dialog",f(Ke));const $=()=>s`<story-add-form-dialog></story-add-form-dialog>`;$.storyName="Form Dialog";const V=[`Row 1078: Category 'Sheeeesh' is not valid.
Expected one of: Electronics, Clothing, Food, Books, Toys.
Package size 'huge' is not valid. Expected one of: S, M, L, XL.`,"Row 1079: Category 'Sheeeesh' is not valid. Expected one of: Electronics, Clothing, Food, Books, Toys.","Row 1080: Category 'Sheeeesh' is not valid. Expected one of: Electronics, Clothing, Food, Books, Toys."],Qe=()=>{const[e,t]=C(void 0),o=a=>{t({heading:"Import products",fields:[{id:"file",label:"File",accept:".xlsx",input:J}],initial:{file:[]},saveText:"OK",onSave:async()=>{const i=V.join(" ");if(!a)throw new Error(i);const r=new Error("The file contains 3 errors");throw r.content=s`<div><b>${r.message}</b></div>
                    ${V.map(l=>s`<div>${l}</div>`)}`,r},onClose:()=>t(void 0)})};return s`
        <div class="story-stack">
            <h3 class="story-section-title">Form Dialog — long save failure</h3>
            <p class="story-label">
                The save always rejects with a long multi-row error. The failure renders
                as a capped, scrollable block above the buttons; buttons stay put. The
                rich variant shows a structured failure (short message + content).
            </p>
            <button @click=${()=>o(!1)}>Plain failure</button>
            <button @click=${()=>o(!0)}>Rich failure</button>
            ${e?G(e):L}
        </div>
    `};customElements.define("story-add-form-dialog-failure",f(Qe));const D=()=>s`<story-add-form-dialog-failure></story-add-form-dialog-failure>`;D.storyName="Form Dialog — Save Failure";const Ge=[{quantity:5,unitPrice:12.5},{quantity:2,unitPrice:29.99},{quantity:10,unitPrice:4}],k=[{id:"description",variant:"cell",label:"Description",input:F,options:M,mode:"select",preserveOrder:!0,validate:p},{id:"quantity",label:"Qty",input:g,min:1,variant:"cell"},{id:"unitPrice",label:"Unit price (€)",input:g,min:0,variant:"cell"}],W={quantity:1,unitPrice:0},Ye=()=>{const{items:e,update:t,remove:o,append:a}=Ae({initial:Ge,fields:k,touched:!0});return s`
        <style>
            ${Fe({fields:k})} .item {
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
            ${j({items:e,fields:k,update:t,remove:o,defaults:W,touched:!0})}
            <button @click=${()=>a([{...W}])}>+ Add row</button>

            <h3 class="story-section-title">Items list (no remove)</h3>
            <p class="story-label">
                Same list without the remove button — useful for read-only or
                non-deletable rows.
            </p>
            ${j({items:e,fields:k,update:t,touched:!0})}
        </div>
    `};customElements.define("story-add-items",f(Ye));const S=()=>s`<story-add-items></story-add-items>`;S.storyName="Items list";h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"() => html`<story-add-fields></story-add-fields>`",...h.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:"() => html`<story-add-button></story-add-button>`",...R.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"() => html`<story-add-daterange></story-add-daterange>`",...b.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"() => html`<story-add-form-dialog></story-add-form-dialog>`",...$.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"() => html`<story-add-form-dialog-failure></story-add-form-dialog-failure>`",...D.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"() => html`<story-add-items></story-add-items>`",...S.parameters?.docs?.source}}};const ot=["BasicFields","WithButton","DateRangeAndReadOnly","FormDialog","FormDialogFailure","Items"];export{h as BasicFields,b as DateRangeAndReadOnly,$ as FormDialog,D as FormDialogFailure,S as Items,R as WithButton,ot as __namedExportsOrder,tt as default};
