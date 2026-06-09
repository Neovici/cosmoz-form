import{i as S,o as u,l as z,r as I,a as P,n as A,m as O,b as v,t as k,c as W,d as M,e as j,f as b,u as x,g as h,h as D,j as y,k as G,p as F,q as N,s as K,v as Q}from"./inline-file-OCQuMC8N.js";import{b as a}from"./iframe-BDuZ46Q0.js";import{a as R}from"./autocomplete-LfxN8RHQ.js";import"./preload-helper-PPVm8Dsz.js";const H=({id:e,label:t,error:r,disabled:o,warning:i,onChange:n,value:d,title:l,description:s})=>a`<cosmoz-toggle
		class="input input-toggle"
		name=${e}
		title=${u(l)}
		?disabled=${o}
		.label=${t}
		.error=${r}
		.value=${z(d)}
		@change=${c=>n(c.detail)}
		>${[I(i),P(s)]}</cosmoz-toggle
	>`,V=S(H),J=S(({id:e,error:t,onChange:r,accept:o,multiple:i,value:n,values:d,autoReset:l})=>a`<div class="input input-file" name=${e}>
			<input
				class="file"
				type="file"
				name=${e}
				?multiple=${i}
				accept=${u(O(v(o,n,d)))}
				@change=${s=>{r(Array.from(s.target.files??[])),l&&(s.target.value="")}}
			/>
			${A(t,s=>a`<div class="failure">${s}</div>`)}
		</div>`),X=S(({id:e,value:t,values:r,error:o,onChange:i,multiple:n,accept:d})=>a`<div class="input">
			<cz-file-drop
				name=${e}
				.multiple=${n}
				.accept=${O(v(d,t,r))}
				@change=${({detail:l})=>i(l)}
			></cz-file-drop>
			${A(o,()=>a`<div class="failure">${o}</div>`)}
		</div>`),Y=e=>e===void 0||typeof e=="object",Z=e=>S(({id:t,label:r,variant:o,error:i,warning:n,disabled:d,onChange:l,value:s})=>{if(Y(s))return[a`<cosmoz-input
					class="input input-date-range"
					type=${e}
					variant=${u(o)}
					?data-warning=${!!n}
					name=${String(t)+"From"}
					?disabled=${d}
					?invalid=${!!i?.from}
					.errorMessage=${i?.from}
					.label=${k("From ({0})",{0:r})}
					.value=${z(s?.from)}
					.max=${u(s?.to)}
					@change=${({target:c})=>l({...s,from:c.value})}
				></cosmoz-input>`,a`<cosmoz-input
					class="input input-date-range"
					type=${e}
					variant=${u(o)}
					?data-warning=${!!n}
					name=${String(t)+"To"}
					?disabled=${d}
					?invalid=${!!i?.to}
					.errorMessage=${i?.to}
					.label=${k("To ({0})",{0:r})}
					.value=${z(s?.to)}
					.min=${u(s?.from)}
					@change=${({target:c})=>l({...s,to:c.value})}
				></cosmoz-input>`]}),_=Z("date"),ee=e=>Number.isNaN(e)||typeof e!="number"?0:e,te=new Intl.NumberFormat(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),ae=e=>te.format(ee(e)),C=({value:e,values:t,field:r,error:o,context:i})=>{const{id:n,suffix:d,warning:l,label:s,variant:c,format:B=ae}=r;return[a`<style>
			cosmoz-input[disabled] {
				pointer-events: auto;
			}
		</style>`,a`<cosmoz-input
			class="input input-common input-number"
			variant=${u(c)}
			.label=${s}
			name="${n}"
			disabled
			.value=${B(e)}
			?invalid=${!!o}
			.errorMessage=${o}
			>${W({suffix:v(d,e,t,r,i),warning:v(l,e,t,r,i)})}</cosmoz-input
		>`]},w=()=>j`
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

	${M}
`,he={title:"Add"},ie=["Electronics","Clothing","Food","Books","Toys"],re=["new","sale","popular","limited","exclusive","seasonal"],q={name:"",price:0,sku:"",active:!0,category:"",tags:[],attachments:[],document:void 0,dropFiles:[]},L=[{id:"name",label:"Product name",hint:"Best practice: keep it under 50 characters.",input:D,validate:[h,e=>e?!1:"Name is required"]},{id:"price",label:"Price",hint:"Enter the price in euros. Must be greater than 0.",input:y,min:0,validate:[h,e=>e>0?!1:"Price must be greater than 0"]},{id:"sku",label:"SKU",hint:"Stock Keeping Unit",input:D},{id:"category",label:"Category",input:R,options:ie,mode:"select",preserveOrder:!0,validate:[h,e=>e?!1:"Category is required"]},{id:"tags",label:"Tags",input:R,options:re,preserveOrder:!0,validate:[h,e=>e.length>0?!1:"At least one tag is required"]},{id:"active",label:"Active",input:V},{id:"attachments",label:"Attachments",input:J,multiple:!0},{id:"document",label:"Document",input:G},{id:"dropFiles",label:"Drop files",input:X,multiple:!0}],U=[[e=>e.name?{}:{name:e.name}]],oe=()=>{const e=x({initial:q,fields:L,rules:U,touched:!0});return a`
        <style>
            :host {
                display: block;
                max-width: 420px;
                padding: 1rem;
                font-family: sans-serif;
            }
            ${w()}
        </style>
        <h3>Add Product (fields only)</h3>
        ${F(e)}
    `};customElements.define("story-add-fields",b(oe));const m=()=>a`<story-add-fields></story-add-fields>`;m.storyName="Fields";const se=()=>new Promise(e=>setTimeout(e,2e3)),ne=()=>{const e=x({initial:q,fields:L,rules:U,touched:!0}),[t,r]=N(void 0),o=()=>{if(e.invalid)return;const i=se();r(i),i.then(()=>r(void 0))};return a`
        <style>
            :host {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                max-width: 420px;
                padding: 1rem;
                font-family: sans-serif;
            }
            ${w()}
        </style>
        <h3>Add Product (with save button)</h3>
        ${F(e)}
        ${K({save$:t,onSave:o,disabled:e.invalid,title:"Save product"})}
    `};customElements.define("story-add-button",b(ne));const $=()=>a`<story-add-button></story-add-button>`,T={description:"Widget package",quantity:10,unitPrice:49.99,total:499.9,period:{from:"2026-01-01",to:"2026-06-30"}},de=[{id:"description",label:"Description",input:D},{id:"quantity",label:"Quantity",input:y,min:1},{id:"unitPrice",label:"Unit price (€)",input:y,min:0},{id:"total",label:"Total (€)",input:C},{id:"period",label:"Period",input:_}],le=[{id:"description",label:"Description",input:D,variant:"cell"},{id:"quantity",label:"Quantity",input:y,min:1,variant:"cell"},{id:"unitPrice",label:"Unit price (€)",input:y,min:0,variant:"cell"},{id:"total",label:"Total (€)",input:C,variant:"cell"},{id:"period",label:"Period",input:_,variant:"cell"}],E=[[e=>({total:e.quantity*e.unitPrice}),e=>[e.quantity,e.unitPrice]]],ce=()=>{const e=x({initial:T,fields:de,rules:E,touched:!0}),t=x({initial:T,fields:le,rules:E,touched:!0});return a`
        <style>
            :host {
                display: block;
                max-width: 680px;
                padding: 1rem;
                font-family: sans-serif;
            }
            ${w()} .table-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                align-items: end;
                border: 1px solid #dde3ef;
                border-radius: 8px;
                padding: 12px;
            }
        </style>
        <h3>Order form — date range &amp; computed total</h3>
        <p style="font-size: 0.85rem; color: #555;">
            Change quantity or unit price — the total recalculates automatically
            (read-only). The period uses a date range input.
        </p>
        ${F(e)}
        <h3>Order form — table layout (cell variant)</h3>
        <p style="font-size: 0.85rem; color: #555;">
            Same fields rendered in a grid/table layout using
            <code>variant: 'cell'</code>.
        </p>
        <div class="table-grid">${F(t)}</div>
    `};customElements.define("story-add-daterange",b(ce));const p=()=>a`<story-add-daterange></story-add-daterange>`;p.storyName="Date range & read-only number";const ue=()=>a`
    <style>
        :host {
            display: block;
            max-width: 480px;
            padding: 1rem;
            font-family: sans-serif;
        }
        .icon-row {
            display: flex;
            align-items: center;
            gap: 12px;
            margin: 12px 0;
            padding: 8px 12px;
            border: 1px solid #dde3ef;
            border-radius: 6px;
        }
        .icon-row span {
            font-size: 0.85rem;
            color: #333;
        }
    </style>
    <h3>Icons used in form inputs</h3>
    <p style="font-size: 0.85rem; color: #555;">
        These are the icons rendered by <code>renderWarning</code> and
        <code>renderDescription</code> in <code>src/inputs/render.ts</code>.
    </p>
    <div class="icon-row">
        ${I("Warning icon")}

        <span><strong>warningIcon</strong> — shown when a field has a warning</span>
    </div>

    <div class="icon-row">
        ${P("Help icon")}

        <span><strong>helpOutlineIcon</strong> — shown for field descriptions</span>
    </div>

    </div>
`;customElements.define("story-add-icons",b(ue));const g=()=>a`<story-add-icons></story-add-icons>`;g.storyName="Icons";const me=()=>new Promise((e,t)=>setTimeout(()=>t(new Error("Network error: could not save")),1500)),pe=()=>{const[e,t]=N(void 0),r=()=>{t(me())},o=()=>{t(new Promise(i=>setTimeout(i,1500)))};return a`
        <style>
            :host {
                display: block;
                max-width: 480px;
                padding: 1rem;
                font-family: sans-serif;
            }
            ${w()} button {
                background: #1a56db;
                border: none;
                border-radius: 4px;
                color: #fff;
                cursor: pointer;
                font-size: 14px;
                padding: 8px 16px;
                margin-right: 8px;
            }
            button.fail {
                background: #dc2626;
            }
        </style>
        <h3>renderFailure$ demo</h3>
        <p style="font-size: 0.85rem; color: #555;">
            Click "Trigger failing save" to see the error message rendered by
            <code>renderFailure$</code>. Click "Trigger success" to see it resolve
            without error.
        </p>
        <button class="fail" @click=${r}>Trigger failing save</button>
        <button @click=${o}>Trigger success</button>
        <div style="margin-top: 12px;">${Q(e)}</div>
    `};customElements.define("story-add-failure",b(pe));const f=()=>a`<story-add-failure></story-add-failure>`;f.storyName="Render Failure";m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"() => html`<story-add-fields></story-add-fields>`",...m.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"() => html`<story-add-button></story-add-button>`",...$.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"() => html`<story-add-daterange></story-add-daterange>`",...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"() => html`<story-add-icons></story-add-icons>`",...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"() => html`<story-add-failure></story-add-failure>`",...f.parameters?.docs?.source}}};const $e=["BasicFields","WithButton","DateRangeAndReadOnly","Icons","Failure"];export{m as BasicFields,p as DateRangeAndReadOnly,f as Failure,g as Icons,$ as WithButton,$e as __namedExportsOrder,he as default};
