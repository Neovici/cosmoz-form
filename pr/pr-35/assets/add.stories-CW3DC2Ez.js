import{w as X,b as o,t as L,A as _}from"./iframe-BToL4zyR.js";import{o as p,n as h,s as ee,r as te,t as j,v as ae,a as se,b as ie,c as w,i as A,x as oe,d as x,l as P,e as re,f as ne,m as le,g as de,u as ce,h as O,j as ue,E as q,k as me,p as S,q as k,w as u,y,z as g,A as pe,B as C,C as T,D as ge,F as ye,G as ve}from"./inline-file-m6d7HJqd.js";import{a as I}from"./autocomplete-BXySYqg8.js";import{u as fe}from"./use-items-B-21zke5.js";import"./preload-helper-PPVm8Dsz.js";const be=({slot:e,title:t,className:a,width:s="24",height:i="24",styles:n}={})=>o`
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
    style=${p(n)}
  >
    ${h(t,()=>X`<title>${t}</title>`)}
    <path
      d="m18 10-4-4M2.5 21.5l3.384-.376c.414-.046.62-.069.814-.131a2 2 0 0 0 .485-.234c.17-.111.317-.259.61-.553L21 7a2.828 2.828 0 1 0-4-4L3.794 16.206c-.294.294-.442.442-.553.611a2 2 0 0 0-.234.485c-.062.193-.085.4-.131.814L2.5 21.5Z"
    />
  </svg>
`,D=Symbol("key"),$e=e=>{const t={...e};return Object.assign(t,{[D]:t})},he=e=>o`<cosmoz-button
		variant="destructive"
		size="sm"
		?disabled=${!e}
		@click=${e}
	>
		${oe()}
	</cosmoz-button>`,G=()=>o`<span class="remove-placeholder" aria-hidden="true"></span>`,Ie=(e,t,{update:a,remove:s,removePlaceholder:i,fields:n,context:d,touched:c=!1,...r})=>o`<div class="item" data-index=${t}>
		${[ie({...r,values:e,fields:n,context:d??{},touched:c,onChange:l=>a(t,{...A(l,e),[D]:e?.[D]??e}),invalid:!1,load:w,onReset:w,onValues:w}),h(s,l=>he(e&&l&&(()=>l(t)))),h(i,G)]}
	</div>`,De=e=>e?.[D]??e,U=({items:e,fields:t,renderItem:a=Ie,paste:s,defaults:i,keyFunction:n=De,scroller:d=!0,update:c,style:r,...l})=>o`<div class="items" @paste=${s} style=${r}>
		${ae({items:[{[D]:0},...e,...i?[$e(i)]:[]],keyFunction:n,renderItem:(m,R)=>{switch(!0){case R===0:return o`<div class="headers">
							${se({fields:t})}
							${h(l.remove!=null,G)}
						</div>`;case(i!=null&&R===e.length+1):return a(m,R-1,{...l,fields:t,remove:void 0,removePlaceholder:l.remove!=null,update:(H,Z)=>c(H,{...m,...Z})});default:return a(m,R-1,{...l,fields:t,update:c})}},scroller:d})}
	</div>`,Se=({fields:e})=>j`
	${ee}
	${te({fields:e})}
`,Re=({id:e,label:t,error:a,disabled:s,warning:i,onChange:n,value:d,title:c,description:r})=>o`<cosmoz-toggle
		class="input input-toggle"
		name=${e}
		title=${p(c)}
		?disabled=${s}
		.label=${t}
		.error=${a}
		.value=${P(d)}
		@change=${l=>n(l.detail)}
		>${[re(i),ne(r)]}</cosmoz-toggle
	>`,Ee=x(Re),Fe=x(({id:e,error:t,onChange:a,accept:s,multiple:i,value:n,values:d,autoReset:c})=>o`<div class="input input-file" name=${e}>
			<input
				class="file"
				type="file"
				name=${e}
				?multiple=${i}
				accept=${p(le(A(s,n,d)))}
				@change=${r=>{a(Array.from(r.target.files??[])),c&&(r.target.value="")}}
			/>
			${h(t,r=>o`<div class="failure">${r}</div>`)}
		</div>`),Ae=e=>e===void 0||typeof e=="object",ke=e=>x(({id:t,label:a,variant:s,error:i,warning:n,disabled:d,onChange:c,value:r})=>{if(Ae(r))return[o`<cosmoz-input
					class="input input-date-range"
					type=${e}
					variant=${p(s)}
					?data-warning=${!!n}
					name=${String(t)+"From"}
					?disabled=${d}
					?invalid=${!!i?.from}
					.errorMessage=${i?.from}
					.label=${L("From ({0})",{0:a})}
					.value=${P(r?.from)}
					.max=${p(r?.to)}
					@change=${({target:l})=>c({...r,from:l.value})}
				></cosmoz-input>`,o`<cosmoz-input
					class="input input-date-range"
					type=${e}
					variant=${p(s)}
					?data-warning=${!!n}
					name=${String(t)+"To"}
					?disabled=${d}
					?invalid=${!!i?.to}
					.errorMessage=${i?.to}
					.label=${L("To ({0})",{0:a})}
					.value=${P(r?.to)}
					.min=${p(r?.from)}
					@change=${({target:l})=>c({...r,to:l.value})}
				></cosmoz-input>`]}),K=ke("date"),Ce=e=>Number.isNaN(e)||typeof e!="number"?0:e,we=new Intl.NumberFormat(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),Oe=e=>we.format(Ce(e)),V=({value:e,values:t,field:a,error:s,context:i})=>{const{id:n,suffix:d,warning:c,label:r,variant:l,format:m=Oe}=a;return[o`<style>
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
			?invalid=${!!s}
			.errorMessage=${s}
			>${de({suffix:A(d,e,t,a,i),warning:A(c,e,t,a,i)})}</cosmoz-input
		>`]},Pe=({initial:e,rules:t,fields:a,context:s,touched:i})=>{const n=ce({fields:a}),d=O(()=>[m=>({[q]:ue(n.fields,m,s)})],[n,s]),{items:c,...r}=fe({initial:e,rules:O(()=>[...t??[],d],[t,d]),context:s,touched:i}),l=O(()=>c.some(m=>m[q]),[c]);return{...r,items:c,invalid:l}},N=()=>j`
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
`,He={title:"Add"},z=["Electronics","Clothing","Food","Books","Toys"],Te=["USD","EUR","GBP","JPY","CAD"],xe=["new","sale","popular","limited","exclusive","seasonal"],Q={name:"",price:0,sku:"",active:!0,category:"",tags:[],attachments:[],document:void 0,dropFiles:[]},J=[{id:"name",label:"Product name",hint:"Best practice: keep it under 50 characters.",input:y,validate:[u,e=>e?!1:"Name is required"]},{id:"price",label:"Price",hint:"Enter the price in euros. Must be greater than 0.",input:g,min:0,validate:[u,e=>e>0?!1:"Price must be greater than 0"]},{id:"sku",label:"SKU",hint:"Stock Keeping Unit",input:y},{id:"category",label:"Category",input:I,options:z,mode:"select",preserveOrder:!0,validate:[u,e=>e?!1:"Category is required"]},{id:"tags",label:"Tags",input:I,options:xe,preserveOrder:!0,validate:[u,e=>e.length>0?!1:"At least one tag is required"]},{id:"attachments",label:"Attachments",input:Fe,multiple:!0},{id:"document",label:"Document",input:pe},{id:"active",label:"Active",input:Ee}],Y=[[e=>e.name?{}:{name:e.name}]],Ne=()=>{const e=k({initial:Q,fields:J,rules:Y,touched:!0});return o`
        <style>
            ${N()}
        </style>
        <div class="story-stack">
            <h3 class="story-section-title">Add Product (fields only)</h3>
            ${C(e)}
        </div>
    `};customElements.define("story-add-fields",S(Ne));const v=()=>o`<story-add-fields></story-add-fields>`;v.storyName="Fields";const ze=()=>new Promise(e=>setTimeout(e,2e3)),Le=()=>{const e=k({initial:Q,fields:J,rules:Y,touched:!0}),[t,a]=T(void 0),s=()=>{if(e.invalid)return;const i=ze();a(i),i.then(()=>a(void 0))};return o`
        <style>
            ${N()}
        </style>
        <div class="story-stack">
            <h3 class="story-section-title">Add Product (with save button)</h3>
            ${C(e)}
            ${ge({save$:t,onSave:s,disabled:e.invalid,title:"Save product"})}
        </div>
    `};customElements.define("story-add-button",S(Le));const E=()=>o`<story-add-button></story-add-button>`,B={description:"Widget package",quantity:10,unitPrice:49.99,total:499.9,period:{from:"2026-01-01",to:"2026-06-30"}},_e=[{id:"description",label:"Description",input:y},{id:"quantity",label:"Quantity",input:g,min:1},{id:"unitPrice",label:"Unit price (€)",input:g,min:0},{id:"total",label:"Total (€)",input:V},{id:"period",label:"Period",input:K}],qe=[{id:"description",label:"Description",input:y,variant:"cell"},{id:"quantity",label:"Quantity",input:g,min:1,variant:"cell"},{id:"unitPrice",label:"Unit price (€)",input:g,min:0,variant:"cell"},{id:"total",label:"Total (€)",input:V,variant:"cell"},{id:"period",label:"Period",input:K,variant:"cell"}],M=[[e=>({total:e.quantity*e.unitPrice}),e=>[e.quantity,e.unitPrice]]],Ue=()=>{const e=k({initial:B,fields:_e,rules:M,touched:!0}),t=k({initial:B,fields:qe,rules:M,touched:!0});return o`
        <style>
            ${N()} .table-grid {
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
            ${C(e)}
            <h3 class="story-section-title">
                Order form — table layout (cell variant)
            </h3>
            <p class="story-label">
                Same fields rendered in a grid/table layout using
                <code>variant: 'cell'</code>.
            </p>
            <div class="table-grid">${C(t)}</div>
        </div>
    `};customElements.define("story-add-daterange",S(Ue));const f=()=>o`<story-add-daterange></story-add-daterange>`;f.storyName="Date range, read-only & cell variant";const Be={supplier:"",invoiceNumber:"",message:"",category:"",tags:[]},Me=[{id:"supplier",label:"Supplier",input:y,validate:[u]},{id:"invoiceNumber",label:"Invoice number",input:y,validate:[u]},{id:"category",label:"Category",input:I,options:z,mode:"select",preserveOrder:!0,validate:[u]},{id:"currency",label:"Currency",input:I,options:Te,preserveOrder:!0,validate:[u]},{id:"message",label:"Comment",input:ve,rows:3,validate:[u]}],We=()=>{const[e,t]=T(""),[a,s]=T(void 0);return o`
        <div class="story-stack">
            <h3 class="story-section-title">Form Dialog</h3>
            <p class="story-label">
                Click the button to open a form inside a dialog. Submitting logs the
                result below.
            </p>
            <button @click=${()=>{s({heading:"Change and reimport invoice",description:"Are you sure you want to re-import this invoice?",icon:be(),fields:Me,initial:Be,saveText:"OK",onSave:async n=>{await new Promise(d=>setTimeout(d,2e3)),t(JSON.stringify(n,null,2)),s(void 0)},onClose:()=>s(void 0)})}}>Open dialog</button>
            ${a?ye(a):_}
            ${e?o`<pre>${e}</pre>`:_}
        </div>
    `};customElements.define("story-add-form-dialog",S(We));const b=()=>o`<story-add-form-dialog></story-add-form-dialog>`;b.storyName="Form Dialog";const je=[{quantity:5,unitPrice:12.5},{quantity:2,unitPrice:29.99},{quantity:10,unitPrice:4}],F=[{id:"description",variant:"cell",label:"Description",input:I,options:z,mode:"select",preserveOrder:!0,validate:u},{id:"quantity",label:"Qty",input:g,min:1,variant:"cell"},{id:"unitPrice",label:"Unit price (€)",input:g,min:0,variant:"cell"}],W={quantity:1,unitPrice:0},Ge=()=>{const{items:e,update:t,remove:a,append:s}=Pe({initial:je,fields:F,touched:!0});return o`
        <style>
            ${Se({fields:F})} .item {
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
            ${U({items:e,fields:F,update:t,remove:a,defaults:W,touched:!0})}
            <button @click=${()=>s([{...W}])}>+ Add row</button>

            <h3 class="story-section-title">Items list (no remove)</h3>
            <p class="story-label">
                Same list without the remove button — useful for read-only or
                non-deletable rows.
            </p>
            ${U({items:e,fields:F,update:t,touched:!0})}
        </div>
    `};customElements.define("story-add-items",S(Ge));const $=()=>o`<story-add-items></story-add-items>`;$.storyName="Items list";v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"() => html`<story-add-fields></story-add-fields>`",...v.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"() => html`<story-add-button></story-add-button>`",...E.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"() => html`<story-add-daterange></story-add-daterange>`",...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"() => html`<story-add-form-dialog></story-add-form-dialog>`",...b.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"() => html`<story-add-items></story-add-items>`",...$.parameters?.docs?.source}}};const Ze=["BasicFields","WithButton","DateRangeAndReadOnly","FormDialog","Items"];export{v as BasicFields,f as DateRangeAndReadOnly,b as FormDialog,$ as Items,E as WithButton,Ze as __namedExportsOrder,He as default};
