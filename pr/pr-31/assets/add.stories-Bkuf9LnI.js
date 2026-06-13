import{o as m,n as O,s as Y,r as Z,t as W,v as X,a as ee,b as te,c as k,i as E,d as C,l as w,e as se,f as ae,m as ie,g as oe,u as re,h as T,j as ne,E as z,k as le,p as D,q as A,w as g,x as p,y,z as de,A as R,B as x,C as ce,D as ue}from"./inline-file-CzSz4ls3.js";import{w as me,b as r,t as N,A as _}from"./iframe-B_L-J53H.js";import{a as q}from"./autocomplete-C_Dhz5H5.js";import{u as pe}from"./use-items-hLYxL_3s.js";import"./preload-helper-PPVm8Dsz.js";const ge=({slot:e,title:t,className:s,width:a="24",height:i="24",styles:n}={})=>r`
  <svg
    slot=${m(e)}
    class=${`x-circle-icon ${s??""}`}
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
    style=${m(n)}
  >
    ${O(t,()=>me`<title>${t}</title>`)}
    <path
      d="m15 9-6 6m0-6 6 6m7-3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`,h=Symbol("key"),ye=e=>{const t={...e};return Object.assign(t,{[h]:t})},fe=e=>r`<cosmoz-button
		variant="destructive"
		size="sm"
		?disabled=${!e}
		@click=${e}
	>
		${ge()}
	</cosmoz-button>`,ve=(e,t,{update:s,remove:a,fields:i,context:n,touched:l=!1,...d})=>r`<div class="item" data-index=${t}>
		${[te({...d,values:e,fields:i,context:n??{},touched:l,onChange:o=>s(t,{...E(o,e),[h]:e?.[h]??e}),invalid:!1,load:k,onReset:k,onValues:k}),O(a,o=>fe(e&&o&&(()=>o(t))))]}
	</div>`,$e=e=>e?.[h]??e,L=({items:e,fields:t,renderItem:s=ve,paste:a,defaults:i,keyFunction:n=$e,scroller:l=!0,update:d,style:o,...c})=>r`<div class="items" @paste=${a} style=${o}>
		${X({items:[{[h]:0},...e,...i?[ye(i)]:[]],keyFunction:n,renderItem:(u,I)=>{switch(!0){case I===0:return r`<div class="headers">
							${ee({fields:t})}
						</div>`;case(i!=null&&I===e.length+1):return s(u,I-1,{...c,fields:t,remove:void 0,update:(H,J)=>d(H,{...u,...J})});default:return s(u,I-1,{...c,fields:t,update:d})}},scroller:l})}
	</div>`,be=({fields:e})=>W`
	${Y}
	${Z({fields:e})}
`,he=({id:e,label:t,error:s,disabled:a,warning:i,onChange:n,value:l,title:d,description:o})=>r`<cosmoz-toggle
		class="input input-toggle"
		name=${e}
		title=${m(d)}
		?disabled=${a}
		.label=${t}
		.error=${s}
		.value=${w(l)}
		@change=${c=>n(c.detail)}
		>${[se(i),ae(o)]}</cosmoz-toggle
	>`,De=C(he),Ie=C(({id:e,error:t,onChange:s,accept:a,multiple:i,value:n,values:l,autoReset:d})=>r`<div class="input input-file" name=${e}>
			<input
				class="file"
				type="file"
				name=${e}
				?multiple=${i}
				accept=${m(ie(E(a,n,l)))}
				@change=${o=>{s(Array.from(o.target.files??[])),d&&(o.target.value="")}}
			/>
			${O(t,o=>r`<div class="failure">${o}</div>`)}
		</div>`),Se=e=>e===void 0||typeof e=="object",Fe=e=>C(({id:t,label:s,variant:a,error:i,warning:n,disabled:l,onChange:d,value:o})=>{if(Se(o))return[r`<cosmoz-input
					class="input input-date-range"
					type=${e}
					variant=${m(a)}
					?data-warning=${!!n}
					name=${String(t)+"From"}
					?disabled=${l}
					?invalid=${!!i?.from}
					.errorMessage=${i?.from}
					.label=${N("From ({0})",{0:s})}
					.value=${w(o?.from)}
					.max=${m(o?.to)}
					@change=${({target:c})=>d({...o,from:c.value})}
				></cosmoz-input>`,r`<cosmoz-input
					class="input input-date-range"
					type=${e}
					variant=${m(a)}
					?data-warning=${!!n}
					name=${String(t)+"To"}
					?disabled=${l}
					?invalid=${!!i?.to}
					.errorMessage=${i?.to}
					.label=${N("To ({0})",{0:s})}
					.value=${w(o?.to)}
					.min=${m(o?.from)}
					@change=${({target:c})=>d({...o,to:c.value})}
				></cosmoz-input>`]}),j=Fe("date"),Ee=e=>Number.isNaN(e)||typeof e!="number"?0:e,Ae=new Intl.NumberFormat(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),Re=e=>Ae.format(Ee(e)),K=({value:e,values:t,field:s,error:a,context:i})=>{const{id:n,suffix:l,warning:d,label:o,variant:c,format:u=Re}=s;return[r`<style>
			cosmoz-input[disabled] {
				pointer-events: auto;
			}
		</style>`,r`<cosmoz-input
			class="input input-common input-number"
			variant=${m(c)}
			.label=${o}
			name="${n}"
			disabled
			.value=${u(e)}
			?invalid=${!!a}
			.errorMessage=${a}
			>${oe({suffix:E(l,e,t,s,i),warning:E(d,e,t,s,i)})}</cosmoz-input
		>`]},ke=({initial:e,rules:t,fields:s,context:a,touched:i})=>{const n=re({fields:s}),l=T(()=>[u=>({[z]:ne(n.fields,u,a)})],[n,a]),{items:d,...o}=pe({initial:e,rules:T(()=>[...t??[],l],[t,l]),context:a,touched:i}),c=T(()=>d.some(u=>u[z]),[d]);return{...o,items:d,invalid:c}},P=()=>W`
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

	${le}
`,Ge={title:"Add"},Te=["Electronics","Clothing","Food","Books","Toys"],we=["new","sale","popular","limited","exclusive","seasonal"],V={name:"",price:0,sku:"",active:!0,category:"",tags:[],attachments:[],document:void 0,dropFiles:[]},G=[{id:"name",label:"Product name",hint:"Best practice: keep it under 50 characters.",input:p,validate:[g,e=>e?!1:"Name is required"]},{id:"price",label:"Price",hint:"Enter the price in euros. Must be greater than 0.",input:y,min:0,validate:[g,e=>e>0?!1:"Price must be greater than 0"]},{id:"sku",label:"SKU",hint:"Stock Keeping Unit",input:p},{id:"category",label:"Category",input:q,options:Te,mode:"select",preserveOrder:!0,validate:[g,e=>e?!1:"Category is required"]},{id:"tags",label:"Tags",input:q,options:we,preserveOrder:!0,validate:[g,e=>e.length>0?!1:"At least one tag is required"]},{id:"attachments",label:"Attachments",input:Ie,multiple:!0},{id:"document",label:"Document",input:de},{id:"active",label:"Active",input:De}],Q=[[e=>e.name?{}:{name:e.name}]],xe=()=>{const e=A({initial:V,fields:G,rules:Q,touched:!0});return r`
        <style>
            ${P()}
        </style>
        <div class="story-stack">
            <h3 class="story-section-title">Add Product (fields only)</h3>
            ${R(e)}
        </div>
    `};customElements.define("story-add-fields",D(xe));const f=()=>r`<story-add-fields></story-add-fields>`;f.storyName="Fields";const Oe=()=>new Promise(e=>setTimeout(e,2e3)),Ce=()=>{const e=A({initial:V,fields:G,rules:Q,touched:!0}),[t,s]=x(void 0),a=()=>{if(e.invalid)return;const i=Oe();s(i),i.then(()=>s(void 0))};return r`
        <style>
            ${P()}
        </style>
        <div class="story-stack">
            <h3 class="story-section-title">Add Product (with save button)</h3>
            ${R(e)}
            ${ce({save$:t,onSave:a,disabled:e.invalid,title:"Save product"})}
        </div>
    `};customElements.define("story-add-button",D(Ce));const S=()=>r`<story-add-button></story-add-button>`,U={description:"Widget package",quantity:10,unitPrice:49.99,total:499.9,period:{from:"2026-01-01",to:"2026-06-30"}},Pe=[{id:"description",label:"Description",input:p},{id:"quantity",label:"Quantity",input:y,min:1},{id:"unitPrice",label:"Unit price (€)",input:y,min:0},{id:"total",label:"Total (€)",input:K},{id:"period",label:"Period",input:j}],ze=[{id:"description",label:"Description",input:p,variant:"cell"},{id:"quantity",label:"Quantity",input:y,min:1,variant:"cell"},{id:"unitPrice",label:"Unit price (€)",input:y,min:0,variant:"cell"},{id:"total",label:"Total (€)",input:K,variant:"cell"},{id:"period",label:"Period",input:j,variant:"cell"}],B=[[e=>({total:e.quantity*e.unitPrice}),e=>[e.quantity,e.unitPrice]]],Ne=()=>{const e=A({initial:U,fields:Pe,rules:B,touched:!0}),t=A({initial:U,fields:ze,rules:B,touched:!0});return r`
        <style>
            ${P()} .table-grid {
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
            ${R(e)}
            <h3 class="story-section-title">
                Order form — table layout (cell variant)
            </h3>
            <p class="story-label">
                Same fields rendered in a grid/table layout using
                <code>variant: 'cell'</code>.
            </p>
            <div class="table-grid">${R(t)}</div>
        </div>
    `};customElements.define("story-add-daterange",D(Ne));const v=()=>r`<story-add-daterange></story-add-daterange>`;v.storyName="Date range, read-only & cell variant";const _e={name:"",email:"",message:""},qe=[{id:"name",label:"Name",input:p,validate:[g]},{id:"email",label:"Email",input:p,validate:[g]},{id:"message",label:"Message",input:p}],Le=()=>{const[e,t]=x(""),[s,a]=x(void 0);return r`
        <div class="story-stack">
            <h3 class="story-section-title">Form Dialog</h3>
            <p class="story-label">
                Click the button to open a form inside a dialog. Submitting logs the
                result below.
            </p>
            <button @click=${()=>{a({heading:"Contact us",description:"Fill in the form to send a message.",fields:qe,initial:_e,saveText:"OK",onSave:async n=>{await new Promise(l=>setTimeout(l,2e3)),t(JSON.stringify(n,null,2)),a(void 0)},onClose:()=>a(void 0)})}}>Open dialog</button>
            ${s?ue(s):_}
            ${e?r`<pre>${e}</pre>`:_}
        </div>
    `};customElements.define("story-add-form-dialog",D(Le));const $=()=>r`<story-add-form-dialog></story-add-form-dialog>`;$.storyName="Form Dialog";const Ue=[{description:"Widget A",quantity:5,unitPrice:12.5},{description:"Widget B",quantity:2,unitPrice:29.99},{description:"Gadget C",quantity:10,unitPrice:4}],F=[{id:"description",label:"Description",input:p,validate:[g],variant:"cell"},{id:"quantity",label:"Qty",input:y,min:1,variant:"cell"},{id:"unitPrice",label:"Unit price (€)",input:y,min:0,variant:"cell"}],M={description:"",quantity:1,unitPrice:0},Be=()=>{const{items:e,update:t,remove:s,append:a}=ke({initial:Ue,fields:F,touched:!0});return r`
        <style>
            ${be({fields:F})} .item {
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
            ${L({items:e,fields:F,update:t,remove:s,defaults:M,touched:!0})}
            <button @click=${()=>a([{...M}])}>+ Add row</button>

            <h3 class="story-section-title">Items list (no remove)</h3>
            <p class="story-label">
                Same list without the remove button — useful for read-only or
                non-deletable rows.
            </p>
            ${L({items:e,fields:F,update:t,touched:!0})}
        </div>
    `};customElements.define("story-add-items",D(Be));const b=()=>r`<story-add-items></story-add-items>`;b.storyName="Items list";f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"() => html`<story-add-fields></story-add-fields>`",...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"() => html`<story-add-button></story-add-button>`",...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"() => html`<story-add-daterange></story-add-daterange>`",...v.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"() => html`<story-add-form-dialog></story-add-form-dialog>`",...$.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"() => html`<story-add-items></story-add-items>`",...b.parameters?.docs?.source}}};const Qe=["BasicFields","WithButton","DateRangeAndReadOnly","FormDialog","Items"];export{f as BasicFields,v as DateRangeAndReadOnly,$ as FormDialog,b as Items,S as WithButton,Qe as __namedExportsOrder,Ge as default};
