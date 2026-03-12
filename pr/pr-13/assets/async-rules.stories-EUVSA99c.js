import{e as j,i as G,a as H,o as $,l as V,r as Y,b as B,c as E,u as L,d as R,f as A,g as _,h as P,n as J}from"./inline-file-CWDYnTCN.js";import{E as v,b as d,A as K}from"./iframe-T9RfQnO5.js";import"./preload-helper-PPVm8Dsz.js";const W={},X=j(class extends G{constructor(){super(...arguments),this.ot=W}render(t,e){return e()}update(t,[e,n]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((r,i)=>r===this.ot[i]))return v}else if(this.ot===e)return v;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,n)}}),Z=H(({id:t,label:e,noLabelFloat:n,alwaysFloatLabel:r,error:i,warning:o,suffix:l,disabled:a,onChange:c,options:s,limit:u,min:y,textProperty:g,valueProperty:q,value:h,values:b,itemRenderer:w,keepOpened:x,keepQuery:S,placeholder:F,wrap:D,showSingle:O,preserveOrder:C,title:M,textual:z,description:N,externalSearch:Q,...U})=>d`<cosmoz-autocomplete
			class="input input-autocomplete"
			?data-warning=${!!o}
			name=${t}
			?disabled=${a}
			?wrap=${D}
			?no-label-float=${n}
			?always-float-label=${r}
			?invalid=${!!i}
			?keep-opened=${!!x}
			?keep-query=${!!S}
			?show-single=${!!O}
			?preserve-order=${!!C}
			.placeholder=${F}
			.itemRenderer=${$(w)}
			.errorMessage=${i}
			.label=${e}
			.value=${V(h)}
			.source=${X([s,h,b],()=>typeof s=="function"?f=>s({...U,...f,value:h,values:b}):s)}
			.textProperty=${g}
			.valueProperty=${q}
			.limit=${u}
			.min=${y}
			.title=${$(M)}
			.textual=${z}
			.onChange=${f=>c(u===1?f?.[0]:f)}
			?external-search=${Q}
			>${Y({suffix:l,warning:o,description:N})}</cosmoz-autocomplete
		>`),T=t=>({_tag:"loading",patch:t}),I=(t,...e)=>({_tag:"call",fn:t,args:e}),ee=t=>{let e=null,n=null,r=null;return{run:(i,o,l)=>new Promise((a,c)=>{r!==null&&(r.gen.return(void 0),r.resolve(null),clearTimeout(e)),r={gen:i,resolve:a,reject:c},e=setTimeout(async()=>{const{gen:s,resolve:u,reject:y}=r;r=null,e=null,n=new AbortController;try{u(await B(s,n.signal,o,l))}catch(g){g instanceof DOMException&&g.name==="AbortError"?u(null):y(g)}finally{n=null}},t)}),cancel:()=>{e!==null&&(clearTimeout(e),e=null),r!==null&&(r.gen.return(void 0),r.resolve(null),r=null),n?.abort(),n=null}}},k=d`
    <style>
        .story-wrap {
            font-family: sans-serif;
            max-width: 420px;
            padding: 1rem;
        }
        .story-hint {
            color: #555;
            font-size: 0.85rem;
            margin-top: 0.5rem;
        }
        .story-stats {
            background: #f0f4ff;
            border-radius: 6px;
            display: flex;
            font-size: 0.8rem;
            gap: 1.5rem;
            margin-top: 1rem;
            padding: 0.6rem 0.9rem;
        }
        .story-stats span {
            color: #333;
        }
        .story-stats strong {
            color: #1a56db;
        }
    </style>
`,te={supplier:"",contactEmail:""},re=["Acme Corp","Globex","Initech"],ne={"Acme Corp":"contact@acme.example",Globex:"hello@globex.example",Initech:"info@initech.example"},se=async(t,e)=>(await new Promise((n,r)=>{const i=setTimeout(n,3e3);t.addEventListener("abort",()=>{clearTimeout(i),r(new DOMException("Aborted","AbortError"))})}),ne[e]??""),ie=[{id:"supplier",label:"Supplier",input:Z,options:re,limit:1,showSingle:!0,preserveOrder:!0},{id:"contactEmail",label:"Contact email",disabled:!0}],ae=()=>{const t=L({started:0,cancelled:0,resolved:0}),[,e]=R(0),n=A(()=>[async function*(a){if(!a.supplier)return{contactEmail:""};t.current.started++,e(s=>s+1),yield T({contactEmail:"loading…"});const c=yield I((s,u)=>(s.addEventListener("abort",()=>{t.current.cancelled++,e(y=>y+1)},{once:!0}),se(s,u)),a.supplier);return t.current.resolved++,e(s=>s+1),{contactEmail:c}},({supplier:a})=>[a]],[]),r=_({fields:ie,initial:te,asyncRules:[n]}),{started:i,cancelled:o,resolved:l}=t.current;return d`
        ${k}
        <div class="story-wrap">
            ${P(r)}
            <p class="story-hint">
                Select a supplier, then quickly select a different one before 3 s — only
                the final selection's email appears. The first fetch is cancelled.
            </p>
            <div class="story-stats">
                <span>Started: <strong>${i}</strong></span>
                <span>Cancelled: <strong>${o}</strong></span>
                <span>Resolved: <strong>${l}</strong></span>
            </div>
        </div>
    `};customElements.define("story-supplier-take-latest",E(ae));const p=()=>d`<story-supplier-take-latest></story-supplier-take-latest>`;p.storyName="TakeLatest — supplier contact email";p.parameters={docs:{source:{language:"typescript",code:`// Form shape
type OrderForm = { supplier: string; contactEmail: string };

const INITIAL: OrderForm = { supplier: '', contactEmail: '' };

// Async rule — fetches contact email for the selected supplier.
// Switching supplier mid-flight cancels the previous fetch;
// only the final selection's result appears (takeLates / switchMap).
const emailRule: AsyncItemRule<OrderForm> = [
  async function* (current) {
    if (!current.supplier) return { contactEmail: '' };
    yield loading<OrderForm>({ contactEmail: 'loading…' });
    const email = yield call(fetchContactEmail, current.supplier);
    return { contactEmail: email as string };
  },
  ({ supplier }) => [supplier],
  // No runner specified — defaults to makeTakeLatestRunner.
];`}}};const oe={quantity:1,unitPrice:0,total:0,_pricingLoading:!1},le=async(t,e)=>(await new Promise((n,r)=>{const i=setTimeout(n,1e3);t.addEventListener("abort",()=>{clearTimeout(i),r(new DOMException("Aborted","AbortError"))})}),e>=50?8:e>=20?9.5:e>=10?11:13.5),ce=[{id:"quantity",label:"Quantity",input:J,min:1,max:100,step:"1"},{id:"unitPrice",label:"Unit price (€)",disabled:!0,suffix:(t,e)=>e._pricingLoading?d`<cosmoz-spinner></cosmoz-spinner>`:K},{id:"total",label:"Total (€)",disabled:!0,rules:[[({quantity:t,unitPrice:e})=>({total:Math.round(t*e*100)/100}),({quantity:t,unitPrice:e})=>[t,e]]]},{id:"_pricingLoading",hidden:!0}],ue=()=>{const t=L({started:0,resolved:0}),[,e]=R(0),n=A(()=>[async function*(a){if(!a.quantity)return{unitPrice:0,_pricingLoading:!1};t.current.started++,e(s=>s+1),yield T({_pricingLoading:!0});const c=yield I(le,a.quantity);return t.current.resolved++,e(s=>s+1),{unitPrice:c,_pricingLoading:!1}},({quantity:a})=>[a],()=>ee(500)],[]),r=_({fields:ce,initial:oe,asyncRules:[n]}),{started:i,resolved:o}=t.current,l=i-o;return d`
        ${k}
        <div class="story-wrap">
            ${P(r)}
            <p class="story-hint">
                Increment the quantity — the price lookup only fires 500 ms after you
                stop. Rapid changes are debounced. Total updates instantly via a sync
                rule once the price arrives.
            </p>
            <div class="story-stats">
                <span>Started: <strong>${i}</strong></span>
                <span>Resolved: <strong>${o}</strong></span>
                <span>In flight: <strong>${l}</strong></span>
            </div>
        </div>
    `};customElements.define("story-quote-debounce",E(ue));const m=()=>d`<story-quote-debounce></story-quote-debounce>`;m.storyName="Debounce — quantity → unit price + total";m.parameters={docs:{source:{language:"typescript",code:`// Form shape — _pricingLoading is a UI-only flag, hidden from the rendered form
type QuoteForm = {
  quantity: number;
  unitPrice: number;
  total: number;
  _pricingLoading: boolean;
};

const INITIAL: QuoteForm = { quantity: 1, unitPrice: 0, total: 0, _pricingLoading: false };

// Sync rule — total updates instantly whenever quantity or unitPrice changes
const totalRule: ItemRule<QuoteForm> = [
  ({ quantity, unitPrice }) => ({
    total: Math.round(quantity * unitPrice * 100) / 100,
  }),
  ({ quantity, unitPrice }) => [quantity, unitPrice],
];

// Async rule — unit price is fetched 500 ms after quantity stops changing.
// Rapid spinner clicks are debounced; only the final value triggers a lookup.
// _pricingLoading drives the spinner suffix on the unitPrice field.
const pricingRule: AsyncItemRule<QuoteForm> = [
  async function* (current) {
    if (!current.quantity) return { unitPrice: 0, _pricingLoading: false };
    yield loading<QuoteForm>({ _pricingLoading: true });
    const price = yield call(fetchUnitPrice, current.quantity);
    return { unitPrice: price as number, _pricingLoading: false };
  },
  ({ quantity }) => [quantity],
  () => makeDebounceRunner(500),
];

// Field definition for unitPrice — shows a spinner while loading
const unitPriceField = {
  id: 'unitPrice',
  label: 'Unit price (€)',
  disabled: true,
  suffix: (_, values) =>
    values._pricingLoading ? html\`<cosmoz-spinner></cosmoz-spinner>\` : nothing,
};`}}};const ye={title:"Async Rules",tags:["autodocs"],parameters:{docs:{canvas:{sourceState:"shown"}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"() => html`<story-supplier-take-latest></story-supplier-take-latest>`",...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"() => html`<story-quote-debounce></story-quote-debounce>`",...m.parameters?.docs?.source}}};const ge=["TakeLatest","Debounce"];export{m as Debounce,p as TakeLatest,ge as __namedExportsOrder,ye as default};
