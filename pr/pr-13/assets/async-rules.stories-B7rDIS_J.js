import{e as j,i as G,a as H,o as $,l as V,r as Y,b as B,c as v,u as R,d as A,f as T,g as k,h as P,n as J}from"./inline-file-M5CKLxOJ.js";import{E,b as d}from"./iframe-BoVVgfYm.js";import"./preload-helper-PPVm8Dsz.js";const K={},W=j(class extends G{constructor(){super(...arguments),this.ot=K}render(t,e){return e()}update(t,[e,n]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((r,s)=>r===this.ot[s]))return E}else if(this.ot===e)return E;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,n)}}),X=H(({id:t,label:e,noLabelFloat:n,alwaysFloatLabel:r,error:s,warning:a,suffix:o,disabled:i,onChange:c,options:l,limit:m,min:g,textProperty:y,valueProperty:x,value:h,values:b,itemRenderer:L,keepOpened:S,keepQuery:D,placeholder:F,wrap:O,showSingle:_,preserveOrder:C,title:M,textual:N,description:Q,externalSearch:U,...z})=>d`<cosmoz-autocomplete
			class="input input-autocomplete"
			?data-warning=${!!a}
			name=${t}
			?disabled=${i}
			?wrap=${O}
			?no-label-float=${n}
			?always-float-label=${r}
			?invalid=${!!s}
			?keep-opened=${!!S}
			?keep-query=${!!D}
			?show-single=${!!_}
			?preserve-order=${!!C}
			.placeholder=${F}
			.itemRenderer=${$(L)}
			.errorMessage=${s}
			.label=${e}
			.value=${V(h)}
			.source=${W([l,h,b],()=>typeof l=="function"?f=>l({...z,...f,value:h,values:b}):l)}
			.textProperty=${y}
			.valueProperty=${x}
			.limit=${m}
			.min=${g}
			.title=${$(M)}
			.textual=${N}
			.onChange=${f=>c(m===1?f?.[0]:f)}
			?external-search=${U}
			>${Y({suffix:o,warning:a,description:Q})}</cosmoz-autocomplete
		>`),q=t=>({_tag:"loading",patch:t}),I=(t,...e)=>({_tag:"call",fn:t,args:e}),Z=t=>{let e=null,n=null,r=null;return{run:(s,a,o)=>new Promise((i,c)=>{r!==null&&(r.gen.return(void 0),r.resolve(null),clearTimeout(e)),r={gen:s,resolve:i,reject:c},e=setTimeout(async()=>{const{gen:l,resolve:m,reject:g}=r;r=null,e=null,n=new AbortController;try{m(await B(l,n.signal,a,o))}catch(y){y instanceof DOMException&&y.name==="AbortError"?m(null):g(y)}finally{n=null}},t)}),cancel:()=>{e!==null&&(clearTimeout(e),e=null),r!==null&&(r.gen.return(void 0),r.resolve(null),r=null),n?.abort(),n=null}}},w=d`
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
`,ee={supplier:"",contactEmail:""},te=["Acme Corp","Globex","Initech"],re={"Acme Corp":"contact@acme.example",Globex:"hello@globex.example",Initech:"info@initech.example"},ne=async(t,e)=>(await new Promise((n,r)=>{const s=setTimeout(n,3e3);t.addEventListener("abort",()=>{clearTimeout(s),r(new DOMException("Aborted","AbortError"))})}),re[e]??""),se=[{id:"supplier",label:"Supplier",input:X,options:te,limit:1,showSingle:!0,preserveOrder:!0},{id:"contactEmail",label:"Contact email",disabled:!0}],ae=()=>{const t=R({started:0,resolved:0}),[,e]=A(0),n=T(()=>[async function*(i){if(!i.supplier)return{contactEmail:""};t.current.started++,e(l=>l+1),yield q({contactEmail:"loading…"});const c=yield I(ne,i.supplier);return t.current.resolved++,e(l=>l+1),{contactEmail:c}},({supplier:i})=>[i]],[]),r=k({fields:se,initial:ee,asyncRules:[n]}),{started:s,resolved:a}=t.current,o=s-a;return d`
        ${w}
        <div class="story-wrap">
            ${P(r)}
            <p class="story-hint">
                Select a supplier, then quickly select a different one before 3 s — only
                the final selection's email appears. The first fetch is cancelled.
            </p>
            <div class="story-stats">
                <span>Fetches started: <strong>${s}</strong></span>
                <span>Resolved: <strong>${a}</strong></span>
                <span>In flight: <strong>${o}</strong></span>
            </div>
        </div>
    `};customElements.define("story-supplier-take-latest",v(ae));const u=()=>d`<story-supplier-take-latest></story-supplier-take-latest>`;u.storyName="TakeLatest — supplier contact email";u.parameters={docs:{source:{code:`// Form shape
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
];`}}};const oe={quantity:1,unitPrice:0,total:0},ie=async(t,e)=>(await new Promise((n,r)=>{const s=setTimeout(n,1e3);t.addEventListener("abort",()=>{clearTimeout(s),r(new DOMException("Aborted","AbortError"))})}),e>=50?8:e>=20?9.5:e>=10?11:13.5),le=[{id:"quantity",label:"Quantity",input:J,min:1,max:100,step:"1"},{id:"unitPrice",label:"Unit price (€)",disabled:!0},{id:"total",label:"Total (€)",disabled:!0,rules:[[({quantity:t,unitPrice:e})=>({total:Math.round(t*e*100)/100}),({quantity:t,unitPrice:e})=>[t,e]]]}],ce=()=>{const t=R({started:0,resolved:0}),[,e]=A(0),n=T(()=>[async function*(o){if(!o.quantity)return{unitPrice:0};t.current.started++,e(c=>c+1),yield q({unitPrice:0});const i=yield I(ie,o.quantity);return t.current.resolved++,e(c=>c+1),{unitPrice:i}},({quantity:o})=>[o],()=>Z(500)],[]),r=k({fields:le,initial:oe,asyncRules:[n]}),{started:s,resolved:a}=t.current;return d`
        ${w}
        <div class="story-wrap">
            ${P(r)}
            <p class="story-hint">
                Increment the quantity — the price lookup only fires 500 ms after you
                stop. Rapid changes are debounced. Total updates instantly via a sync
                rule once the price arrives.
            </p>
            <div class="story-stats">
                <span>Lookups started: <strong>${s}</strong></span>
                <span>Resolved: <strong>${a}</strong></span>
                <span
                    >Debounced away:
                    <strong
                        >${s-a>1?s-a-1:0}</strong
                    ></span
                >
            </div>
        </div>
    `};customElements.define("story-quote-debounce",v(ce));const p=()=>d`<story-quote-debounce></story-quote-debounce>`;p.storyName="Debounce — quantity → unit price + total";p.parameters={docs:{source:{code:`// Form shape
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
    yield loading<QuoteForm>({ unitPrice: 0 });
    const price = yield call(fetchUnitPrice, current.quantity);
    return { unitPrice: price as number };
  },
  ({ quantity }) => [quantity],
  () => makeDebounceRunner(500),
];`}}};const me={title:"Async Rules",parameters:{docs:{canvas:{sourceState:"shown"}}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"() => html`<story-supplier-take-latest></story-supplier-take-latest>`",...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"() => html`<story-quote-debounce></story-quote-debounce>`",...p.parameters?.docs?.source}}};const ye=["TakeLatest","Debounce"];export{p as Debounce,u as TakeLatest,ye as __namedExportsOrder,me as default};
