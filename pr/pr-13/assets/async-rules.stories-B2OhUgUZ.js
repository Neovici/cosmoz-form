import{e as z,i as j,a as G,o as $,l as H,r as V,b as Y,c as v,u as R,d as A,f as T,g as k,h as q,n as B}from"./inline-file-BL0WbXwi.js";import{E,b as m}from"./iframe-B8Wq90eE.js";import"./preload-helper-PPVm8Dsz.js";const J={},K=z(class extends j{constructor(){super(...arguments),this.ot=J}render(t,e){return e()}update(t,[e,n]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((r,a)=>r===this.ot[a]))return E}else if(this.ot===e)return E;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,n)}}),W=G(({id:t,label:e,noLabelFloat:n,alwaysFloatLabel:r,error:a,warning:i,suffix:l,disabled:o,onChange:c,options:s,limit:u,min:y,textProperty:f,valueProperty:w,value:h,values:b,itemRenderer:x,keepOpened:S,keepQuery:L,placeholder:D,wrap:F,showSingle:O,preserveOrder:C,title:_,textual:M,description:N,externalSearch:Q,...U})=>m`<cosmoz-autocomplete
			class="input input-autocomplete"
			?data-warning=${!!i}
			name=${t}
			?disabled=${o}
			?wrap=${F}
			?no-label-float=${n}
			?always-float-label=${r}
			?invalid=${!!a}
			?keep-opened=${!!S}
			?keep-query=${!!L}
			?show-single=${!!O}
			?preserve-order=${!!C}
			.placeholder=${D}
			.itemRenderer=${$(x)}
			.errorMessage=${a}
			.label=${e}
			.value=${H(h)}
			.source=${K([s,h,b],()=>typeof s=="function"?g=>s({...U,...g,value:h,values:b}):s)}
			.textProperty=${f}
			.valueProperty=${w}
			.limit=${u}
			.min=${y}
			.title=${$(_)}
			.textual=${M}
			.onChange=${g=>c(u===1?g?.[0]:g)}
			?external-search=${Q}
			>${V({suffix:l,warning:i,description:N})}</cosmoz-autocomplete
		>`),X=t=>({_tag:"loading",patch:t}),I=(t,...e)=>({_tag:"call",fn:t,args:e}),Z=t=>{let e=null,n=null,r=null;return{run:(a,i,l)=>new Promise((o,c)=>{r!==null&&(r.gen.return(void 0),r.resolve(null),clearTimeout(e)),r={gen:a,resolve:o,reject:c},e=setTimeout(async()=>{const{gen:s,resolve:u,reject:y}=r;r=null,e=null,n=new AbortController;try{u(await Y(s,n.signal,i,l))}catch(f){f instanceof DOMException&&f.name==="AbortError"?u(null):y(f)}finally{n=null}},t)}),cancel:()=>{e!==null&&(clearTimeout(e),e=null),r!==null&&(r.gen.return(void 0),r.resolve(null),r=null),n?.abort(),n=null}}},P=m`
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
`,ee={supplier:"",contactEmail:""},te=["Acme Corp","Globex","Initech"],re={"Acme Corp":"contact@acme.example",Globex:"hello@globex.example",Initech:"info@initech.example"},ne=async(t,e)=>(await new Promise((n,r)=>{const a=setTimeout(n,3e3);t.addEventListener("abort",()=>{clearTimeout(a),r(new DOMException("Aborted","AbortError"))})}),re[e]??""),se=[{id:"supplier",label:"Supplier",input:W,options:te,limit:1,showSingle:!0,preserveOrder:!0},{id:"contactEmail",label:"Contact email",disabled:!0}],ae=()=>{const t=R({started:0,cancelled:0,resolved:0}),[,e]=A(0),n=T(()=>[async function*(o){if(!o.supplier)return{contactEmail:""};t.current.started++,e(s=>s+1),yield X({contactEmail:"loading…"});const c=yield I((s,u)=>(s.addEventListener("abort",()=>{t.current.cancelled++,e(y=>y+1)},{once:!0}),ne(s,u)),o.supplier);return t.current.resolved++,e(s=>s+1),{contactEmail:c}},({supplier:o})=>[o]],[]),r=k({fields:se,initial:ee,asyncRules:[n]}),{started:a,cancelled:i,resolved:l}=t.current;return m`
        ${P}
        <div class="story-wrap">
            ${q(r)}
            <p class="story-hint">
                Select a supplier, then quickly select a different one before 3 s — only
                the final selection's email appears. The first fetch is cancelled.
            </p>
            <div class="story-stats">
                <span>Started: <strong>${a}</strong></span>
                <span>Cancelled: <strong>${i}</strong></span>
                <span>Resolved: <strong>${l}</strong></span>
            </div>
        </div>
    `};customElements.define("story-supplier-take-latest",v(ae));const p=()=>m`<story-supplier-take-latest></story-supplier-take-latest>`;p.storyName="TakeLatest — supplier contact email";p.parameters={docs:{source:{code:`// Form shape
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
];`}}};const oe={quantity:1,unitPrice:0,total:0},ie=async(t,e)=>(await new Promise((n,r)=>{const a=setTimeout(n,1e3);t.addEventListener("abort",()=>{clearTimeout(a),r(new DOMException("Aborted","AbortError"))})}),e>=50?8:e>=20?9.5:e>=10?11:13.5),le=[{id:"quantity",label:"Quantity",input:B,min:1,max:100,step:"1"},{id:"unitPrice",label:"Unit price (€)",disabled:!0},{id:"total",label:"Total (€)",disabled:!0,rules:[[({quantity:t,unitPrice:e})=>({total:Math.round(t*e*100)/100}),({quantity:t,unitPrice:e})=>[t,e]]]}],ce=()=>{const t=R({started:0,resolved:0}),[,e]=A(0),n=T(()=>[async function*(o){if(!o.quantity)return{unitPrice:0};t.current.started++,e(s=>s+1);const c=yield I(ie,o.quantity);return t.current.resolved++,e(s=>s+1),{unitPrice:c}},({quantity:o})=>[o],()=>Z(500)],[]),r=k({fields:le,initial:oe,asyncRules:[n]}),{started:a,resolved:i}=t.current,l=a-i;return m`
        ${P}
        <div class="story-wrap">
            ${q(r)}
            <p class="story-hint">
                Increment the quantity — the price lookup only fires 500 ms after you
                stop. Rapid changes are debounced. Total updates instantly via a sync
                rule once the price arrives.
            </p>
            <div class="story-stats">
                <span>Started: <strong>${a}</strong></span>
                <span>Resolved: <strong>${i}</strong></span>
                <span>In flight: <strong>${l}</strong></span>
            </div>
        </div>
    `};customElements.define("story-quote-debounce",v(ce));const d=()=>m`<story-quote-debounce></story-quote-debounce>`;d.storyName="Debounce — quantity → unit price + total";d.parameters={docs:{source:{code:`// Form shape
type QuoteForm = { quantity: number; unitPrice: number; total: number };

const INITIAL: QuoteForm = { quantity: 1, unitPrice: 0, total: 0 };

// Sync rule — total updates instantly whenever quantity or unitPrice changes
const totalRule: ItemRule<QuoteForm> = [
  ({ quantity, unitPrice }) => ({
    total: Math.round(quantity * unitPrice * 100) / 100,
  }),
  ({ quantity, unitPrice }) => [quantity, unitPrice],
];

// Async rule — unit price is fetched 500 ms after quantity stops changing.
// Rapid spinner clicks are debounced; only the final value triggers a lookup.
const pricingRule: AsyncItemRule<QuoteForm> = [
  async function* (current) {
    if (!current.quantity) return { unitPrice: 0 };
    const price = yield call(fetchUnitPrice, current.quantity);
    return { unitPrice: price as number };
  },
  ({ quantity }) => [quantity],
  () => makeDebounceRunner(500),
];`}}};const me={title:"Async Rules",tags:["autodocs"],parameters:{docs:{canvas:{sourceState:"shown"}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"() => html`<story-supplier-take-latest></story-supplier-take-latest>`",...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"() => html`<story-quote-debounce></story-quote-debounce>`",...d.parameters?.docs?.source}}};const ye=["TakeLatest","Debounce"];export{d as Debounce,p as TakeLatest,ye as __namedExportsOrder,me as default};
