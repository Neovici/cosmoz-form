import{s as Z,r as ee,t as W,v as te,a as ae,n as E,b as se,c as O,i as R,x as ie,d as z,o as u,l as k,e as oe,f as re,m as ne,g as le,u as de,h as P,j as ce,E as N,k as me,p as D,q as A,w as p,y as g,z as y,A as ue,B as T,C as w,D as pe,F as ge}from"./inline-file-BjfGQWU_.js";import{b as o,t as _,A as q}from"./iframe-ByytzOm3.js";import{a as x}from"./autocomplete-B5YRqHDy.js";import{u as ye}from"./use-items-BpS4eI8t.js";import"./preload-helper-PPVm8Dsz.js";const h=Symbol("key"),ve=e=>{const t={...e};return Object.assign(t,{[h]:t})},fe=e=>o`<cosmoz-button
		variant="destructive"
		size="sm"
		?disabled=${!e}
		@click=${e}
	>
		${ie()}
	</cosmoz-button>`,K=()=>o`<span class="remove-placeholder" aria-hidden="true"></span>`,be=(e,t,{update:a,remove:s,removePlaceholder:i,fields:l,context:d,touched:c=!1,...r})=>o`<div class="item" data-index=${t}>
		${[se({...r,values:e,fields:l,context:d??{},touched:c,onChange:n=>a(t,{...R(n,e),[h]:e?.[h]??e}),invalid:!1,load:O,onReset:O,onValues:O}),E(s,n=>fe(e&&n&&(()=>n(t)))),E(i,K)]}
	</div>`,$e=e=>e?.[h]??e,L=({items:e,fields:t,renderItem:a=be,paste:s,defaults:i,keyFunction:l=$e,scroller:d=!0,update:c,style:r,...n})=>o`<div class="items" @paste=${s} style=${r}>
		${te({items:[{[h]:0},...e,...i?[ve(i)]:[]],keyFunction:l,renderItem:(m,I)=>{switch(!0){case I===0:return o`<div class="headers">
							${ae({fields:t})}
							${E(n.remove!=null,K)}
						</div>`;case(i!=null&&I===e.length+1):return a(m,I-1,{...n,fields:t,remove:void 0,removePlaceholder:n.remove!=null,update:(X,Y)=>c(X,{...m,...Y})});default:return a(m,I-1,{...n,fields:t,update:c})}},scroller:d})}
	</div>`,he=({fields:e})=>W`
	${Z}
	${ee({fields:e})}
`,De=({id:e,label:t,error:a,disabled:s,warning:i,onChange:l,value:d,title:c,description:r})=>o`<cosmoz-toggle
		class="input input-toggle"
		name=${e}
		title=${u(c)}
		?disabled=${s}
		.label=${t}
		.error=${a}
		.value=${k(d)}
		@change=${n=>l(n.detail)}
		>${[oe(i),re(r)]}</cosmoz-toggle
	>`,Ie=z(De),Se=z(({id:e,error:t,onChange:a,accept:s,multiple:i,value:l,values:d,autoReset:c})=>o`<div class="input input-file" name=${e}>
			<input
				class="file"
				type="file"
				name=${e}
				?multiple=${i}
				accept=${u(ne(R(s,l,d)))}
				@change=${r=>{a(Array.from(r.target.files??[])),c&&(r.target.value="")}}
			/>
			${E(t,r=>o`<div class="failure">${r}</div>`)}
		</div>`),Fe=e=>e===void 0||typeof e=="object",Ee=e=>z(({id:t,label:a,variant:s,error:i,warning:l,disabled:d,onChange:c,value:r})=>{if(Fe(r))return[o`<cosmoz-input
					class="input input-date-range"
					type=${e}
					variant=${u(s)}
					?data-warning=${!!l}
					name=${String(t)+"From"}
					?disabled=${d}
					?invalid=${!!i?.from}
					.errorMessage=${i?.from}
					.label=${_("From ({0})",{0:a})}
					.value=${k(r?.from)}
					.max=${u(r?.to)}
					@change=${({target:n})=>c({...r,from:n.value})}
				></cosmoz-input>`,o`<cosmoz-input
					class="input input-date-range"
					type=${e}
					variant=${u(s)}
					?data-warning=${!!l}
					name=${String(t)+"To"}
					?disabled=${d}
					?invalid=${!!i?.to}
					.errorMessage=${i?.to}
					.label=${_("To ({0})",{0:a})}
					.value=${k(r?.to)}
					.min=${u(r?.from)}
					@change=${({target:n})=>c({...r,to:n.value})}
				></cosmoz-input>`]}),V=Ee("date"),Re=e=>Number.isNaN(e)||typeof e!="number"?0:e,Ae=new Intl.NumberFormat(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),Te=e=>Ae.format(Re(e)),j=({value:e,values:t,field:a,error:s,context:i})=>{const{id:l,suffix:d,warning:c,label:r,variant:n,format:m=Te}=a;return[o`<style>
			cosmoz-input[disabled] {
				pointer-events: auto;
			}
		</style>`,o`<cosmoz-input
			class="input input-common input-number"
			variant=${u(n)}
			.label=${r}
			name="${l}"
			disabled
			.value=${m(e)}
			?invalid=${!!s}
			.errorMessage=${s}
			>${le({suffix:R(d,e,t,a,i),warning:R(c,e,t,a,i)})}</cosmoz-input
		>`]},Oe=({initial:e,rules:t,fields:a,context:s,touched:i})=>{const l=de({fields:a}),d=P(()=>[m=>({[N]:ce(l.fields,m,s)})],[l,s]),{items:c,...r}=ye({initial:e,rules:P(()=>[...t??[],d],[t,d]),context:s,touched:i}),n=P(()=>c.some(m=>m[N]),[c]);return{...r,items:c,invalid:n}},C=()=>W`
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
	}

	.input-toggle {
		margin-block: calc(var(--cz-spacing) * 2);
	}

	${me}
`,Qe={title:"Add"},Q=["Electronics","Clothing","Food","Books","Toys"],Pe=["new","sale","popular","limited","exclusive","seasonal"],G={name:"",price:0,sku:"",active:!0,category:"",tags:[],attachments:[],document:void 0,dropFiles:[]},H=[{id:"name",label:"Product name",hint:"Best practice: keep it under 50 characters.",input:g,validate:[p,e=>e?!1:"Name is required"]},{id:"price",label:"Price",hint:"Enter the price in euros. Must be greater than 0.",input:y,min:0,validate:[p,e=>e>0?!1:"Price must be greater than 0"]},{id:"sku",label:"SKU",hint:"Stock Keeping Unit",input:g},{id:"category",label:"Category",input:x,options:Q,mode:"select",preserveOrder:!0,validate:[p,e=>e?!1:"Category is required"]},{id:"tags",label:"Tags",input:x,options:Pe,preserveOrder:!0,validate:[p,e=>e.length>0?!1:"At least one tag is required"]},{id:"attachments",label:"Attachments",input:Se,multiple:!0},{id:"document",label:"Document",input:ue},{id:"active",label:"Active",input:Ie}],J=[[e=>e.name?{}:{name:e.name}]],ke=()=>{const e=A({initial:G,fields:H,rules:J,touched:!0});return o`
        <style>
            ${C()}
        </style>
        <div class="story-stack">
            <h3 class="story-section-title">Add Product (fields only)</h3>
            ${T(e)}
        </div>
    `};customElements.define("story-add-fields",D(ke));const v=()=>o`<story-add-fields></story-add-fields>`;v.storyName="Fields";const we=()=>new Promise(e=>setTimeout(e,2e3)),xe=()=>{const e=A({initial:G,fields:H,rules:J,touched:!0}),[t,a]=w(void 0),s=()=>{if(e.invalid)return;const i=we();a(i),i.then(()=>a(void 0))};return o`
        <style>
            ${C()}
        </style>
        <div class="story-stack">
            <h3 class="story-section-title">Add Product (with save button)</h3>
            ${T(e)}
            ${pe({save$:t,onSave:s,disabled:e.invalid,title:"Save product"})}
        </div>
    `};customElements.define("story-add-button",D(xe));const S=()=>o`<story-add-button></story-add-button>`,U={description:"Widget package",quantity:10,unitPrice:49.99,total:499.9,period:{from:"2026-01-01",to:"2026-06-30"}},ze=[{id:"description",label:"Description",input:g},{id:"quantity",label:"Quantity",input:y,min:1},{id:"unitPrice",label:"Unit price (€)",input:y,min:0},{id:"total",label:"Total (€)",input:j},{id:"period",label:"Period",input:V}],Ce=[{id:"description",label:"Description",input:g,variant:"cell"},{id:"quantity",label:"Quantity",input:y,min:1,variant:"cell"},{id:"unitPrice",label:"Unit price (€)",input:y,min:0,variant:"cell"},{id:"total",label:"Total (€)",input:j,variant:"cell"},{id:"period",label:"Period",input:V,variant:"cell"}],B=[[e=>({total:e.quantity*e.unitPrice}),e=>[e.quantity,e.unitPrice]]],Ne=()=>{const e=A({initial:U,fields:ze,rules:B,touched:!0}),t=A({initial:U,fields:Ce,rules:B,touched:!0});return o`
        <style>
            ${C()} .table-grid {
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
    `};customElements.define("story-add-daterange",D(Ne));const f=()=>o`<story-add-daterange></story-add-daterange>`;f.storyName="Date range, read-only & cell variant";const _e={name:"",email:"",message:""},qe=[{id:"name",label:"Name",input:g,validate:[p]},{id:"email",label:"Email",input:g,validate:[p]},{id:"message",label:"Message",input:g}],Le=()=>{const[e,t]=w(""),[a,s]=w(void 0);return o`
        <div class="story-stack">
            <h3 class="story-section-title">Form Dialog</h3>
            <p class="story-label">
                Click the button to open a form inside a dialog. Submitting logs the
                result below.
            </p>
            <button @click=${()=>{s({heading:"Contact us",description:"Fill in the form to send a message.",fields:qe,initial:_e,saveText:"OK",onSave:async l=>{await new Promise(d=>setTimeout(d,2e3)),t(JSON.stringify(l,null,2)),s(void 0)},onClose:()=>s(void 0)})}}>Open dialog</button>
            ${a?ge(a):q}
            ${e?o`<pre>${e}</pre>`:q}
        </div>
    `};customElements.define("story-add-form-dialog",D(Le));const b=()=>o`<story-add-form-dialog></story-add-form-dialog>`;b.storyName="Form Dialog";const Ue=[{quantity:5,unitPrice:12.5},{quantity:2,unitPrice:29.99},{quantity:10,unitPrice:4}],F=[{id:"description",variant:"cell",label:"Description",input:x,options:Q,mode:"select",preserveOrder:!0,validate:p},{id:"quantity",label:"Qty",input:y,min:1,variant:"cell"},{id:"unitPrice",label:"Unit price (€)",input:y,min:0,variant:"cell"}],M={quantity:1,unitPrice:0},Be=()=>{const{items:e,update:t,remove:a,append:s}=Oe({initial:Ue,fields:F,touched:!0});return o`
        <style>
            ${he({fields:F})} .item {
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
            ${L({items:e,fields:F,update:t,remove:a,defaults:M,touched:!0})}
            <button @click=${()=>s([{...M}])}>+ Add row</button>

            <h3 class="story-section-title">Items list (no remove)</h3>
            <p class="story-label">
                Same list without the remove button — useful for read-only or
                non-deletable rows.
            </p>
            ${L({items:e,fields:F,update:t,touched:!0})}
        </div>
    `};customElements.define("story-add-items",D(Be));const $=()=>o`<story-add-items></story-add-items>`;$.storyName="Items list";v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"() => html`<story-add-fields></story-add-fields>`",...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"() => html`<story-add-button></story-add-button>`",...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"() => html`<story-add-daterange></story-add-daterange>`",...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"() => html`<story-add-form-dialog></story-add-form-dialog>`",...b.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"() => html`<story-add-items></story-add-items>`",...$.parameters?.docs?.source}}};const Ge=["BasicFields","WithButton","DateRangeAndReadOnly","FormDialog","Items"];export{v as BasicFields,f as DateRangeAndReadOnly,b as FormDialog,$ as Items,S as WithButton,Ge as __namedExportsOrder,Qe as default};
