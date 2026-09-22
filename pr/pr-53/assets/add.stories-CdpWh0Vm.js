import{o as p,n as w,w as ie,b as o,t as G,v as re,a as N,i as C,x as ne,m as le,l as L,c as q,u as de,d as z,e as v,f as x,A as _}from"./iframe-D4l-EhgF.js";import{s as ce,r as ue,a as me,b as pe,i as U,c as ge,d as ye,e as ve,v as fe,E as B,f as he,u as E,g as u,t as g,n as y,h as be,j as F,k as Q,l as $e,m as H}from"./inline-file-CwhkYTSH.js";import{a as f}from"./autocomplete-CKed5fgI.js";import{u as Ie}from"./use-items-Bbv_1_XO.js";import"./preload-helper-PPVm8Dsz.js";const De=({slot:e,title:t,className:a,width:s="24",height:i="24",styles:r}={})=>o`
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
    width=${s}
    height=${i}
    style=${p(r)}
  >
    ${w(t,()=>ie`<title>${t}</title>`)}
    <path
      d="m18 10-4-4M2.5 21.5l3.384-.376c.414-.046.62-.069.814-.131a2 2 0 0 0 .485-.234c.17-.111.317-.259.61-.553L21 7a2.828 2.828 0 1 0-4-4L3.794 16.206c-.294.294-.442.442-.553.611a2 2 0 0 0-.234.485c-.062.193-.085.4-.131.814L2.5 21.5Z"
    />
  </svg>
`,R=Symbol("key"),Se=e=>{const t={...e};return Object.assign(t,{[R]:t})},we=e=>o`<cosmoz-button
		variant="destructive"
		size="sm"
		?disabled=${!e}
		@click=${e}
	>
		${ne()}
	</cosmoz-button>`,J=()=>o`<span class="remove-placeholder" aria-hidden="true"></span>`,Ee=(e,t,{update:a,remove:s,removePlaceholder:i,fields:r,context:l,touched:c=!1,...n})=>o`<div class="item" data-index=${t}>
		${[pe({...n,values:e,fields:r,context:l??{},touched:c,onChange:d=>a(t,{...C(d,e),[R]:e?.[R]??e}),invalid:!1,load:N,onReset:N,onValues:N}),w(s,d=>we(e&&d&&(()=>d(t)))),w(i,J)]}
	</div>`,Fe=e=>e?.[R]??e,M=({items:e,fields:t,renderItem:a=Ee,paste:s,defaults:i,keyFunction:r=Fe,scroller:l=!0,update:c,style:n,...d})=>o`<div class="items" @paste=${s} style=${n}>
		${re({items:[{[R]:0},...e,...i?[Se(i)]:[]],keyFunction:r,renderItem:(m,k)=>{switch(!0){case k===0:return o`<div class="headers">
							${me({fields:t})}
							${w(d.remove!=null,J)}
						</div>`;case(i!=null&&k===e.length+1):return a(m,k-1,{...d,fields:t,remove:void 0,removePlaceholder:d.remove!=null,update:(ae,se)=>c(ae,{...m,...se})});default:return a(m,k-1,{...d,fields:t,update:c})}},scroller:l})}
	</div>`,Re=({fields:e})=>G`
	${ce}
	${ue({fields:e})}
`,Y=U(({id:e,error:t,onChange:a,accept:s,multiple:i,value:r,values:l,autoReset:c})=>o`<div class="input input-file" name=${e}>
			<input
				class="file"
				type="file"
				name=${e}
				?multiple=${i}
				accept=${p(le(C(s,r,l)))}
				@change=${n=>{a(Array.from(n.target.files??[])),c&&(n.target.value="")}}
			/>
			${w(t,n=>o`<div class="failure">${n}</div>`)}
		</div>`),ke=({id:e,label:t,error:a,disabled:s,warning:i,onChange:r,value:l,title:c,description:n})=>o`<cosmoz-toggle
		class="input input-toggle"
		name=${e}
		title=${p(c)}
		?disabled=${s}
		.label=${t}
		.error=${a}
		.value=${L(l)}
		@change=${d=>r(d.detail)}
		>${[ge(i),ye(n)]}</cosmoz-toggle
	>`,Pe=U(ke),Te=e=>e===void 0||typeof e=="object",Ce=e=>U(({id:t,label:a,variant:s,error:i,warning:r,disabled:l,onChange:c,value:n})=>{if(Te(n))return[o`<cosmoz-input
					class="input input-date-range"
					type=${e}
					variant=${p(s)}
					?data-warning=${!!r}
					name=${String(t)+"From"}
					?disabled=${l}
					?invalid=${!!i?.from}
					.errorMessage=${i?.from}
					.label=${q("From ({0})",{0:a})}
					.value=${L(n?.from)}
					.max=${p(n?.to)}
					@change=${({target:d})=>c({...n,from:d.value})}
				></cosmoz-input>`,o`<cosmoz-input
					class="input input-date-range"
					type=${e}
					variant=${p(s)}
					?data-warning=${!!r}
					name=${String(t)+"To"}
					?disabled=${l}
					?invalid=${!!i?.to}
					.errorMessage=${i?.to}
					.label=${q("To ({0})",{0:a})}
					.value=${L(n?.to)}
					.min=${p(n?.from)}
					@change=${({target:d})=>c({...n,to:d.value})}
				></cosmoz-input>`]}),X=Ce("date"),xe=e=>Number.isNaN(e)||typeof e!="number"?0:e,Oe=new Intl.NumberFormat(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),Ae=e=>Oe.format(xe(e)),Z=({value:e,values:t,field:a,error:s,context:i})=>{const{id:r,suffix:l,warning:c,label:n,variant:d,format:m=Ae}=a;return[o`<style>
			cosmoz-input[disabled] {
				pointer-events: auto;
			}
		</style>`,o`<cosmoz-input
			class="input input-common input-number"
			variant=${p(d)}
			.label=${n}
			name="${r}"
			disabled
			.value=${m(e)}
			?invalid=${!!s}
			.errorMessage=${s}
			>${ve({suffix:C(l,e,t,a,i),warning:C(c,e,t,a,i)})}</cosmoz-input
		>`]},Ne=({initial:e,rules:t,fields:a,context:s,touched:i})=>{const r=de({fields:a}),l=z(()=>[m=>({[B]:fe(r.fields,m,s)})],[r,s]),{items:c,...n}=Ie({initial:e,rules:z(()=>[...t??[],l],[t,l]),context:s,touched:i}),d=z(()=>c.some(m=>m[B]),[c]);return{...n,items:c,invalid:d}},O=()=>G`
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

	${he}
`,st={title:"Add"},A=["Electronics","Clothing","Food","Books","Toys"],ze=["USD","EUR","GBP","JPY","CAD"],Le=["new","sale","popular","limited","exclusive","seasonal"],ee={name:"",price:0,sku:"",active:!0,category:"",tags:[],attachments:[],document:void 0,dropFiles:[]},te=[{id:"name",label:"Product name",hint:"Best practice: keep it under 50 characters.",input:g,validate:[u,e=>e?!1:"Name is required"]},{id:"price",label:"Price",hint:"Enter the price in euros. Must be greater than 0.",input:y,min:0,validate:[u,e=>e>0?!1:"Price must be greater than 0"]},{id:"sku",label:"SKU",hint:"Stock Keeping Unit",input:g},{id:"category",label:"Category",input:f,options:A,mode:"select",preserveOrder:!0,validate:[u,e=>e?!1:"Category is required"]},{id:"tags",label:"Tags",input:f,options:Le,preserveOrder:!0,validate:[u,e=>e.length>0?!1:"At least one tag is required"]},{id:"attachments",label:"Attachments",input:Y,multiple:!0},{id:"document",label:"Document",input:be},{id:"active",label:"Active",input:Pe}],oe=[[e=>e.name?{}:{name:e.name}]],_e=()=>{const e=E({initial:ee,fields:te,rules:oe,touched:!0});return o`
        <style>
            ${O()}
        </style>
        <div class="story-stack">
            <h3 class="story-section-title">Add Product (fields only)</h3>
            ${F(e)}
        </div>
    `};customElements.define("story-add-fields",v(_e));const h=()=>o`<story-add-fields></story-add-fields>`;h.storyName="Fields";const Ue={code:"",category:"",details:""},qe=[{id:"code",label:"Compact code",placeholder:"Compact input",input:g,compact:!0},{id:"category",label:"Inline category",hint:"Hints now pass through autocomplete fields.",input:f,options:A,mode:"select",variant:"inline"},{id:"details",label:"Compact details",placeholder:"Compact textarea",hint:"This hint is passed to cosmoz-textarea.",input:Q,compact:!0,rows:2}],Be=()=>{const e=E({initial:Ue,fields:qe});return o`
        <style>
            ${O()}
        </style>
        <div class="story-stack">
            <h3 class="story-section-title">Input props</h3>
            <p class="story-label">
                Shows newer cosmoz-input/autocomplete props exposed by field configs:
                <code>compact</code>, <code>hint</code>, and
                <code>variant: 'inline'</code>.
            </p>
            ${F(e)}
        </div>
    `};customElements.define("story-add-input-props",v(Be));const b=()=>o`<story-add-input-props></story-add-input-props>`;b.storyName="Input props";const Me=()=>new Promise(e=>setTimeout(e,2e3)),je=()=>{const e=E({initial:ee,fields:te,rules:oe,touched:!0}),[t,a]=x(void 0),s=()=>{if(e.invalid)return;const i=Me();a(i),i.then(()=>a(void 0))};return o`
        <style>
            ${O()}
        </style>
        <div class="story-stack">
            <h3 class="story-section-title">Add Product (with save button)</h3>
            ${F(e)}
            ${$e({save$:t,onSave:s,disabled:e.invalid,title:"Save product"})}
        </div>
    `};customElements.define("story-add-button",v(je));const P=()=>o`<story-add-button></story-add-button>`,j={description:"Widget package",quantity:10,unitPrice:49.99,total:499.9,period:{from:"2026-01-01",to:"2026-06-30"}},We=[{id:"description",label:"Description",input:g},{id:"quantity",label:"Quantity",input:y,min:1},{id:"unitPrice",label:"Unit price (€)",input:y,min:0},{id:"total",label:"Total (€)",input:Z},{id:"period",label:"Period",input:X}],Ke=[{id:"description",label:"Description",input:g,variant:"cell"},{id:"quantity",label:"Quantity",input:y,min:1,variant:"cell"},{id:"unitPrice",label:"Unit price (€)",input:y,min:0,variant:"cell"},{id:"total",label:"Total (€)",input:Z,variant:"cell"},{id:"period",label:"Period",input:X,variant:"cell"}],W=[[e=>({total:e.quantity*e.unitPrice}),e=>[e.quantity,e.unitPrice]]],Ve=()=>{const e=E({initial:j,fields:We,rules:W,touched:!0}),t=E({initial:j,fields:Ke,rules:W,touched:!0});return o`
        <style>
            ${O()} .table-grid {
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
            ${F(e)}
            <h3 class="story-section-title">
                Order form — table layout (cell variant)
            </h3>
            <p class="story-label">
                Same fields rendered in a grid/table layout using
                <code>variant: 'cell'</code>.
            </p>
            <div class="table-grid">${F(t)}</div>
        </div>
    `};customElements.define("story-add-daterange",v(Ve));const $=()=>o`<story-add-daterange></story-add-daterange>`;$.storyName="Date range, read-only & cell variant";const Ge={supplier:"",invoiceNumber:"",message:"",category:"",currency:[],tags:[]},Qe=[{id:"supplier",label:"Supplier",input:g,validate:[u]},{id:"invoiceNumber",label:"Invoice number",input:g,validate:[u]},{id:"category",label:"Category",input:f,options:A,mode:"select",preserveOrder:!0,validate:[u]},{id:"currency",label:"Currency",input:f,options:ze,preserveOrder:!0,validate:[u]},{id:"message",label:"Comment",input:Q,rows:3,validate:[u]}],He=()=>{const[e,t]=x(""),[a,s]=x(void 0);return o`
        <div class="story-stack">
            <h3 class="story-section-title">Form Dialog</h3>
            <p class="story-label">
                Click the button to open a form inside a dialog. Submitting logs the
                result below.
            </p>
            <button @click=${()=>{s({heading:"Change and reimport invoice",subtitle:"Are you sure you want to re-import this invoice?",description:o`<p>
                Please review the invoice details and make any necessary changes before
                reimporting. Ensure that all required fields are filled out correctly.
            </p>`,icon:De(),fields:Qe,initial:Ge,saveText:"OK",onSave:async r=>{await new Promise(l=>setTimeout(l,2e3)),t(JSON.stringify(r,null,2)),s(void 0)},onClose:()=>s(void 0)})}}>Open dialog</button>
            ${a?H(a):_}
            ${e?o`<pre>${e}</pre>`:_}
        </div>
    `};customElements.define("story-add-form-dialog",v(He));const I=()=>o`<story-add-form-dialog></story-add-form-dialog>`;I.storyName="Form Dialog";const K=[`Row 1078: Category 'Sheeeesh' is not valid.
Expected one of: Electronics, Clothing, Food, Books, Toys.
Package size 'huge' is not valid. Expected one of: S, M, L, XL.`,"Row 1079: Category 'Sheeeesh' is not valid. Expected one of: Electronics, Clothing, Food, Books, Toys.","Row 1080: Category 'Sheeeesh' is not valid. Expected one of: Electronics, Clothing, Food, Books, Toys."],Je=()=>{const[e,t]=x(void 0),a=s=>{t({heading:"Import products",fields:[{id:"file",label:"File",accept:".xlsx",input:Y}],initial:{file:[]},saveText:"OK",onSave:async()=>{const i=K.join(" ");if(!s)throw new Error(i);const r=new Error("The file contains 3 errors");throw r.content=o`<div><b>${r.message}</b></div>
                    ${K.map(l=>o`<div>${l}</div>`)}`,r},onClose:()=>t(void 0)})};return o`
        <div class="story-stack">
            <h3 class="story-section-title">Form Dialog — long save failure</h3>
            <p class="story-label">
                The save always rejects with a long multi-row error. The failure renders
                as a capped, scrollable block above the buttons; buttons stay put. The
                rich variant shows a structured failure (short message + content).
            </p>
            <button @click=${()=>a(!1)}>Plain failure</button>
            <button @click=${()=>a(!0)}>Rich failure</button>
            ${e?H(e):_}
        </div>
    `};customElements.define("story-add-form-dialog-failure",v(Je));const D=()=>o`<story-add-form-dialog-failure></story-add-form-dialog-failure>`;D.storyName="Form Dialog — Save Failure";const Ye=[{quantity:5,unitPrice:12.5},{quantity:2,unitPrice:29.99},{quantity:10,unitPrice:4}],T=[{id:"description",variant:"cell",label:"Description",input:f,options:A,mode:"select",preserveOrder:!0,validate:u},{id:"quantity",label:"Qty",input:y,min:1,variant:"cell"},{id:"unitPrice",label:"Unit price (€)",input:y,min:0,variant:"cell"}],V={quantity:1,unitPrice:0},Xe=()=>{const{items:e,update:t,remove:a,append:s}=Ne({initial:Ye,fields:T,touched:!0});return o`
        <style>
            ${Re({fields:T})} .item {
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
            ${M({items:e,fields:T,update:t,remove:a,defaults:V,touched:!0})}
            <button @click=${()=>s([{...V}])}>+ Add row</button>

            <h3 class="story-section-title">Items list (no remove)</h3>
            <p class="story-label">
                Same list without the remove button — useful for read-only or
                non-deletable rows.
            </p>
            ${M({items:e,fields:T,update:t,touched:!0})}
        </div>
    `};customElements.define("story-add-items",v(Xe));const S=()=>o`<story-add-items></story-add-items>`;S.storyName="Items list";h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"() => html`<story-add-fields></story-add-fields>`",...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"() => html`<story-add-input-props></story-add-input-props>`",...b.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:"() => html`<story-add-button></story-add-button>`",...P.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"() => html`<story-add-daterange></story-add-daterange>`",...$.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:"() => html`<story-add-form-dialog></story-add-form-dialog>`",...I.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"() => html`<story-add-form-dialog-failure></story-add-form-dialog-failure>`",...D.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"() => html`<story-add-items></story-add-items>`",...S.parameters?.docs?.source}}};const it=["BasicFields","InputProps","WithButton","DateRangeAndReadOnly","FormDialog","FormDialogFailure","Items"];export{h as BasicFields,$ as DateRangeAndReadOnly,I as FormDialog,D as FormDialogFailure,b as InputProps,S as Items,P as WithButton,it as __namedExportsOrder,st as default};
