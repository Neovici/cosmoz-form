import{o as p,n as D,w as ae,b as o,t as W,v as ie,a as A,i as k,x as oe,m as se,l as P,c as q,u as re,d as C,e as v,f as x,A as N}from"./iframe-Bhov1nSn.js";import{s as ne,r as le,a as de,b as ce,i as z,c as ue,d as me,e as pe,v as ge,E as M,f as ye,u as O,g as u,t as y,n as g,h as ve,j as T,k as fe,l as V,m as he}from"./inline-file-DPR0Okgk.js";import{a as I}from"./autocomplete-CLSsFSR5.js";import{u as be}from"./use-items-BovyeDIq.js";import"./preload-helper-PPVm8Dsz.js";const $e=({slot:e,title:t,className:a,width:i="24",height:s="24",styles:n}={})=>o`
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
    width=${i}
    height=${s}
    style=${p(n)}
  >
    ${D(t,()=>ae`<title>${t}</title>`)}
    <path
      d="m18 10-4-4M2.5 21.5l3.384-.376c.414-.046.62-.069.814-.131a2 2 0 0 0 .485-.234c.17-.111.317-.259.61-.553L21 7a2.828 2.828 0 1 0-4-4L3.794 16.206c-.294.294-.442.442-.553.611a2 2 0 0 0-.234.485c-.062.193-.085.4-.131.814L2.5 21.5Z"
    />
  </svg>
`,w=Symbol("key"),Se=e=>{const t={...e};return Object.assign(t,{[w]:t})},De=e=>o`<cosmoz-button
		variant="destructive"
		size="sm"
		?disabled=${!e}
		@click=${e}
	>
		${oe()}
	</cosmoz-button>`,G=()=>o`<span class="remove-placeholder" aria-hidden="true"></span>`,Ie=(e,t,{update:a,remove:i,removePlaceholder:s,fields:n,context:d,touched:c=!1,...r})=>o`<div class="item" data-index=${t}>
		${[ce({...r,values:e,fields:n,context:d??{},touched:c,onChange:l=>a(t,{...k(l,e),[w]:e?.[w]??e}),invalid:!1,load:A,onReset:A,onValues:A}),D(i,l=>De(e&&l&&(()=>l(t)))),D(s,G)]}
	</div>`,we=e=>e?.[w]??e,U=({items:e,fields:t,renderItem:a=Ie,paste:i,defaults:s,keyFunction:n=we,scroller:d=!0,update:c,style:r,...l})=>o`<div class="items" @paste=${i} style=${r}>
		${ie({items:[{[w]:0},...e,...s?[Se(s)]:[]],keyFunction:n,renderItem:(m,F)=>{switch(!0){case F===0:return o`<div class="headers">
							${de({fields:t})}
							${D(l.remove!=null,G)}
						</div>`;case(s!=null&&F===e.length+1):return a(m,F-1,{...l,fields:t,remove:void 0,removePlaceholder:l.remove!=null,update:(ee,te)=>c(ee,{...m,...te})});default:return a(m,F-1,{...l,fields:t,update:c})}},scroller:d})}
	</div>`,Fe=({fields:e})=>W`
	${ne}
	${le({fields:e})}
`,Q=z(({id:e,error:t,onChange:a,accept:i,multiple:s,value:n,values:d,autoReset:c})=>o`<div class="input input-file" name=${e}>
			<input
				class="file"
				type="file"
				name=${e}
				?multiple=${s}
				accept=${p(se(k(i,n,d)))}
				@change=${r=>{a(Array.from(r.target.files??[])),c&&(r.target.value="")}}
			/>
			${D(t,r=>o`<div class="failure">${r}</div>`)}
		</div>`),Re=({id:e,label:t,error:a,disabled:i,warning:s,onChange:n,value:d,title:c,description:r})=>o`<cosmoz-toggle
		class="input input-toggle"
		name=${e}
		title=${p(c)}
		?disabled=${i}
		.label=${t}
		.error=${a}
		.value=${P(d)}
		@change=${l=>n(l.detail)}
		>${[ue(s),me(r)]}</cosmoz-toggle
	>`,Ee=z(Re),ke=e=>e===void 0||typeof e=="object",xe=e=>z(({id:t,label:a,variant:i,error:s,warning:n,disabled:d,onChange:c,value:r})=>{if(ke(r))return[o`<cosmoz-input
					class="input input-date-range"
					type=${e}
					variant=${p(i)}
					?data-warning=${!!n}
					name=${String(t)+"From"}
					?disabled=${d}
					?invalid=${!!s?.from}
					.errorMessage=${s?.from}
					.label=${q("From ({0})",{0:a})}
					.value=${P(r?.from)}
					.max=${p(r?.to)}
					@change=${({target:l})=>c({...r,from:l.value})}
				></cosmoz-input>`,o`<cosmoz-input
					class="input input-date-range"
					type=${e}
					variant=${p(i)}
					?data-warning=${!!n}
					name=${String(t)+"To"}
					?disabled=${d}
					?invalid=${!!s?.to}
					.errorMessage=${s?.to}
					.label=${q("To ({0})",{0:a})}
					.value=${P(r?.to)}
					.min=${p(r?.from)}
					@change=${({target:l})=>c({...r,to:l.value})}
				></cosmoz-input>`]}),J=xe("date"),Oe=e=>Number.isNaN(e)||typeof e!="number"?0:e,Te=new Intl.NumberFormat(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),Ae=e=>Te.format(Oe(e)),Y=({value:e,values:t,field:a,error:i,context:s})=>{const{id:n,suffix:d,warning:c,label:r,variant:l,format:m=Ae}=a;return[o`<style>
			cosmoz-input[disabled] {
				pointer-events: auto;
			}
		</style>`,o`<cosmoz-input
			class="input input-common input-number"
			variant=${p(l)}
			.label=${r}
			name="${n}"
			disabled
			.value=${m(e)}
			?invalid=${!!i}
			.errorMessage=${i}
			>${pe({suffix:k(d,e,t,a,s),warning:k(c,e,t,a,s)})}</cosmoz-input
		>`]},Ce=({initial:e,rules:t,fields:a,context:i,touched:s})=>{const n=re({fields:a}),d=C(()=>[m=>({[M]:ge(n.fields,m,i)})],[n,i]),{items:c,...r}=be({initial:e,rules:C(()=>[...t??[],d],[t,d]),context:i,touched:s}),l=C(()=>c.some(m=>m[M]),[c]);return{...r,items:c,invalid:l}},L=()=>W`
	:host {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.failure {
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		margin: calc(var(--cz-spacing) * 2) 0;
		color: var(--cz-color-text-error);
		white-space: pre-wrap;
		word-break: break-word;
		max-height: 40vh;
		overflow-y: auto;
	}

	.input-toggle {
		margin-block: calc(var(--cz-spacing) * 2);
	}

	${ye}
`,et={title:"Add"},_=["Electronics","Clothing","Food","Books","Toys"],Pe=["USD","EUR","GBP","JPY","CAD"],Ne=["new","sale","popular","limited","exclusive","seasonal"],H={name:"",price:0,sku:"",active:!0,category:"",tags:[],attachments:[],document:void 0,dropFiles:[]},Z=[{id:"name",label:"Product name",hint:"Best practice: keep it under 50 characters.",input:y,validate:[u,e=>e?!1:"Name is required"]},{id:"price",label:"Price",hint:"Enter the price in euros. Must be greater than 0.",input:g,min:0,validate:[u,e=>e>0?!1:"Price must be greater than 0"]},{id:"sku",label:"SKU",hint:"Stock Keeping Unit",input:y},{id:"category",label:"Category",input:I,options:_,mode:"select",preserveOrder:!0,validate:[u,e=>e?!1:"Category is required"]},{id:"tags",label:"Tags",input:I,options:Ne,preserveOrder:!0,validate:[u,e=>e.length>0?!1:"At least one tag is required"]},{id:"attachments",label:"Attachments",input:Q,multiple:!0},{id:"document",label:"Document",input:ve},{id:"active",label:"Active",input:Ee}],X=[[e=>e.name?{}:{name:e.name}]],ze=()=>{const e=O({initial:H,fields:Z,rules:X,touched:!0});return o`
        <style>
            ${L()}
        </style>
        <div class="story-stack">
            <h3 class="story-section-title">Add Product (fields only)</h3>
            ${T(e)}
        </div>
    `};customElements.define("story-add-fields",v(ze));const f=()=>o`<story-add-fields></story-add-fields>`;f.storyName="Fields";const Le=()=>new Promise(e=>setTimeout(e,2e3)),_e=()=>{const e=O({initial:H,fields:Z,rules:X,touched:!0}),[t,a]=x(void 0),i=()=>{if(e.invalid)return;const s=Le();a(s),s.then(()=>a(void 0))};return o`
        <style>
            ${L()}
        </style>
        <div class="story-stack">
            <h3 class="story-section-title">Add Product (with save button)</h3>
            ${T(e)}
            ${fe({save$:t,onSave:i,disabled:e.invalid,title:"Save product"})}
        </div>
    `};customElements.define("story-add-button",v(_e));const R=()=>o`<story-add-button></story-add-button>`,B={description:"Widget package",quantity:10,unitPrice:49.99,total:499.9,period:{from:"2026-01-01",to:"2026-06-30"}},qe=[{id:"description",label:"Description",input:y},{id:"quantity",label:"Quantity",input:g,min:1},{id:"unitPrice",label:"Unit price (€)",input:g,min:0},{id:"total",label:"Total (€)",input:Y},{id:"period",label:"Period",input:J}],Me=[{id:"description",label:"Description",input:y,variant:"cell"},{id:"quantity",label:"Quantity",input:g,min:1,variant:"cell"},{id:"unitPrice",label:"Unit price (€)",input:g,min:0,variant:"cell"},{id:"total",label:"Total (€)",input:Y,variant:"cell"},{id:"period",label:"Period",input:J,variant:"cell"}],K=[[e=>({total:e.quantity*e.unitPrice}),e=>[e.quantity,e.unitPrice]]],Ue=()=>{const e=O({initial:B,fields:qe,rules:K,touched:!0}),t=O({initial:B,fields:Me,rules:K,touched:!0});return o`
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
            ${T(e)}
            <h3 class="story-section-title">
                Order form — table layout (cell variant)
            </h3>
            <p class="story-label">
                Same fields rendered in a grid/table layout using
                <code>variant: 'cell'</code>.
            </p>
            <div class="table-grid">${T(t)}</div>
        </div>
    `};customElements.define("story-add-daterange",v(Ue));const h=()=>o`<story-add-daterange></story-add-daterange>`;h.storyName="Date range, read-only & cell variant";const Be={supplier:"",invoiceNumber:"",message:"",category:"",currency:[],tags:[]},Ke=[{id:"supplier",label:"Supplier",input:y,validate:[u]},{id:"invoiceNumber",label:"Invoice number",input:y,validate:[u]},{id:"category",label:"Category",input:I,options:_,mode:"select",preserveOrder:!0,validate:[u]},{id:"currency",label:"Currency",input:I,options:Pe,preserveOrder:!0,validate:[u]},{id:"message",label:"Comment",input:he,rows:3,validate:[u]}],je=()=>{const[e,t]=x(""),[a,i]=x(void 0);return o`
        <div class="story-stack">
            <h3 class="story-section-title">Form Dialog</h3>
            <p class="story-label">
                Click the button to open a form inside a dialog. Submitting logs the
                result below.
            </p>
            <button @click=${()=>{i({heading:"Change and reimport invoice",subtitle:"Are you sure you want to re-import this invoice?",description:o`<p>
                Please review the invoice details and make any necessary changes before
                reimporting. Ensure that all required fields are filled out correctly.
            </p>`,icon:$e(),fields:Ke,initial:Be,saveText:"OK",onSave:async n=>{await new Promise(d=>setTimeout(d,2e3)),t(JSON.stringify(n,null,2)),i(void 0)},onClose:()=>i(void 0)})}}>Open dialog</button>
            ${a?V(a):N}
            ${e?o`<pre>${e}</pre>`:N}
        </div>
    `};customElements.define("story-add-form-dialog",v(je));const b=()=>o`<story-add-form-dialog></story-add-form-dialog>`;b.storyName="Form Dialog";const We=["Row 1078: Store profile 'Sheeeesh' is not valid. Expected one of: Nära, Supermarket, Kvantum, Maxi.","Row 1078: Default order package size 'huge' is not valid. Expected one of: Small, Medium, Large, MaxiSpecial.","Row 1079: Store profile 'Sheeeesh' is not valid. Expected one of: Nära, Supermarket, Kvantum, Maxi.","Row 1080: Store profile 'Sheeeesh' is not valid. Expected one of: Nära, Supermarket, Kvantum, Maxi."],Ve=()=>{const[e,t]=x(void 0);return o`
        <div class="story-stack">
            <h3 class="story-section-title">Form Dialog — long save failure</h3>
            <p class="story-label">
                The save always rejects with a long multi-row error. The failure renders
                as a capped, scrollable block above the buttons; buttons stay put.
            </p>
            <button @click=${()=>{t({heading:"Load new recipient list",fields:[{id:"file",label:"File",accept:".xlsx",input:Q}],initial:{file:[]},saveText:"OK",onSave:async()=>{throw new Error(We.join(" "))},onClose:()=>t(void 0)})}}>Open dialog</button>
            ${e?V(e):N}
        </div>
    `};customElements.define("story-add-form-dialog-failure",v(Ve));const $=()=>o`<story-add-form-dialog-failure></story-add-form-dialog-failure>`;$.storyName="Form Dialog — Save Failure";const Ge=[{quantity:5,unitPrice:12.5},{quantity:2,unitPrice:29.99},{quantity:10,unitPrice:4}],E=[{id:"description",variant:"cell",label:"Description",input:I,options:_,mode:"select",preserveOrder:!0,validate:u},{id:"quantity",label:"Qty",input:g,min:1,variant:"cell"},{id:"unitPrice",label:"Unit price (€)",input:g,min:0,variant:"cell"}],j={quantity:1,unitPrice:0},Qe=()=>{const{items:e,update:t,remove:a,append:i}=Ce({initial:Ge,fields:E,touched:!0});return o`
        <style>
            ${Fe({fields:E})} .item {
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
            ${U({items:e,fields:E,update:t,remove:a,defaults:j,touched:!0})}
            <button @click=${()=>i([{...j}])}>+ Add row</button>

            <h3 class="story-section-title">Items list (no remove)</h3>
            <p class="story-label">
                Same list without the remove button — useful for read-only or
                non-deletable rows.
            </p>
            ${U({items:e,fields:E,update:t,touched:!0})}
        </div>
    `};customElements.define("story-add-items",v(Qe));const S=()=>o`<story-add-items></story-add-items>`;S.storyName="Items list";f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"() => html`<story-add-fields></story-add-fields>`",...f.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:"() => html`<story-add-button></story-add-button>`",...R.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"() => html`<story-add-daterange></story-add-daterange>`",...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"() => html`<story-add-form-dialog></story-add-form-dialog>`",...b.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"() => html`<story-add-form-dialog-failure></story-add-form-dialog-failure>`",...$.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"() => html`<story-add-items></story-add-items>`",...S.parameters?.docs?.source}}};const tt=["BasicFields","WithButton","DateRangeAndReadOnly","FormDialog","FormDialogFailure","Items"];export{f as BasicFields,h as DateRangeAndReadOnly,b as FormDialog,$ as FormDialogFailure,S as Items,R as WithButton,tt as __namedExportsOrder,et as default};
