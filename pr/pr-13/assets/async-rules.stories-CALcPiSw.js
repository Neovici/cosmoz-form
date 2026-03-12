import{e as j,i as V,a as G,o as $,l as H,r as Y,b as B,c as w,u as E,d as P,f as R,g as L,h as A,n as J,j as K}from"./inline-file-_4gBtQ0O.js";import{E as v,b as p}from"./iframe-DIRe3mfz.js";import"./preload-helper-PPVm8Dsz.js";const W={},X=j(class extends V{constructor(){super(...arguments),this.ot=W}render(t,e){return e()}update(t,[e,r]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((n,a)=>n===this.ot[a]))return v}else if(this.ot===e)return v;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,r)}}),Z=G(({id:t,label:e,noLabelFloat:r,alwaysFloatLabel:n,error:a,warning:o,suffix:l,disabled:i,onChange:c,options:s,limit:u,min:g,textProperty:f,valueProperty:I,value:h,values:b,itemRenderer:S,keepOpened:k,keepQuery:x,placeholder:F,wrap:D,showSingle:O,preserveOrder:C,title:U,textual:M,description:z,externalSearch:N,...Q})=>p`<cosmoz-autocomplete
			class="input input-autocomplete"
			?data-warning=${!!o}
			name=${t}
			?disabled=${i}
			?wrap=${D}
			?no-label-float=${r}
			?always-float-label=${n}
			?invalid=${!!a}
			?keep-opened=${!!k}
			?keep-query=${!!x}
			?show-single=${!!O}
			?preserve-order=${!!C}
			.placeholder=${F}
			.itemRenderer=${$(S)}
			.errorMessage=${a}
			.label=${e}
			.value=${H(h)}
			.source=${X([s,h,b],()=>typeof s=="function"?y=>s({...Q,...y,value:h,values:b}):s)}
			.textProperty=${f}
			.valueProperty=${I}
			.limit=${u}
			.min=${g}
			.title=${$(U)}
			.textual=${M}
			.onChange=${y=>c(u===1?y?.[0]:y)}
			?external-search=${N}
			>${Y({suffix:l,warning:o,description:z})}</cosmoz-autocomplete
		>`),q=t=>({_tag:"loading",patch:t}),T=(t,...e)=>({_tag:"call",fn:t,args:e}),ee=t=>{let e=null,r=null,n=null;return{run:(a,o,l)=>new Promise((i,c)=>{n!==null&&(n.gen.return(void 0),n.resolve(null),clearTimeout(e)),n={gen:a,resolve:i,reject:c},e=setTimeout(async()=>{const{gen:s,resolve:u,reject:g}=n;n=null,e=null,r=new AbortController;try{u(await B(s,r.signal,o,l))}catch(f){f instanceof DOMException&&f.name==="AbortError"?u(null):g(f)}finally{r=null}},t)}),cancel:()=>{e!==null&&(clearTimeout(e),e=null),n!==null&&(n.gen.return(void 0),n.resolve(null),n=null),r?.abort(),r=null}}},_=p`
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
`,te={supplier:"",contactEmail:""},ne=["Acme Corp","Globex","Initech"],re={"Acme Corp":"contact@acme.example",Globex:"hello@globex.example",Initech:"info@initech.example"},se=async(t,e)=>(await new Promise((r,n)=>{const a=setTimeout(r,3e3);t.addEventListener("abort",()=>{clearTimeout(a),n(new DOMException("Aborted","AbortError"))})}),re[e]??""),ae=[{id:"supplier",label:"Supplier",input:Z,options:ne,limit:1,showSingle:!0,preserveOrder:!0},{id:"contactEmail",label:"Contact email",disabled:!0}],ie=()=>{const t=E({started:0,cancelled:0,resolved:0}),[,e]=P(0),r=R(()=>[async function*(i){if(!i.supplier)return{contactEmail:""};t.current.started++,e(s=>s+1),yield q({contactEmail:"loading…"});const c=yield T((s,u)=>(s.addEventListener("abort",()=>{t.current.cancelled++,e(g=>g+1)},{once:!0}),se(s,u)),i.supplier);return t.current.resolved++,e(s=>s+1),{contactEmail:c}},({supplier:i})=>[i]],[]),n=L({fields:ae,initial:te,asyncRules:[r]}),{started:a,cancelled:o,resolved:l}=t.current;return p`
        ${_}
        <div class="story-wrap">
            ${A(n)}
            <p class="story-hint">
                Select a supplier, then quickly select a different one before 3 s — only
                the final selection's email appears. The first fetch is cancelled.
            </p>
            <div class="story-stats">
                <span>Started: <strong>${a}</strong></span>
                <span>Cancelled: <strong>${o}</strong></span>
                <span>Resolved: <strong>${l}</strong></span>
                <span>Processing: <strong>${n.processing}</strong></span>
            </div>
        </div>
    `};customElements.define("story-supplier-take-latest",w(ie));const d=()=>p`<story-supplier-take-latest></story-supplier-take-latest>`;d.storyName="TakeLatest — supplier contact email";d.parameters={docs:{source:{language:"typescript",code:`// Form shape
type OrderForm = { supplier: string; contactEmail: string };

const INITIAL: OrderForm = { supplier: '', contactEmail: '' };

// The AbortSignal is passed automatically by call() as the first argument.
// Pass it to fetch() to cancel in-flight requests when the saga is superseded.
const fetchContactEmail = async (
  signal: AbortSignal,
  supplier: string,
): Promise<string> => {
  const res = await fetch(
    \`/api/contacts?supplier=\${encodeURIComponent(supplier)}\`,
    { signal },
  );
  const data = await res.json();
  return data.email;
};

// Async rule — fetches contact email for the selected supplier.
// Switching supplier mid-flight cancels the previous fetch;
// only the final selection's result appears (takeLatest / switchMap).
const emailRule: AsyncItemRule<OrderForm> = [
  async function* (current) {
    if (!current.supplier) return { contactEmail: '' };
    yield loading<OrderForm>({ contactEmail: 'loading…' });
    const email = yield call(fetchContactEmail, current.supplier);
    return { contactEmail: email as string };
  },
  ({ supplier }) => [supplier],
  // No runner specified — defaults to makeTakeLatestRunner.
];

// form.processing is true while any async saga is in flight.
// Use it to disable a save button or show a global spinner.
const form = useValidatedForm$({ fields, initial, asyncRules: [emailRule] });
// form.processing → true while fetching, false when settled`}}};const oe={quantity:1,unitPrice:0,total:0,_pricingLoading:!1},le=async(t,e)=>(await new Promise((r,n)=>{const a=setTimeout(r,1e3);t.addEventListener("abort",()=>{clearTimeout(a),n(new DOMException("Aborted","AbortError"))})}),e>=50?8:e>=20?9.5:e>=10?11:13.5),ce=[{id:"quantity",label:"Quantity",input:J,min:1,max:100,step:"1"},{id:"unitPrice",label:"Unit price (€)",disabled:!0,suffix:(t,e)=>K(e._pricingLoading,()=>p`<cosmoz-spinner></cosmoz-spinner>`)},{id:"total",label:"Total (€)",disabled:!0,rules:[[({quantity:t,unitPrice:e})=>({total:Math.round(t*e*100)/100}),({quantity:t,unitPrice:e})=>[t,e]]]},{id:"_pricingLoading",hidden:!0}],ue=()=>{const t=E({started:0,resolved:0}),[,e]=P(0),r=R(()=>[async function*(i){if(!i.quantity)return{unitPrice:0,_pricingLoading:!1};t.current.started++,e(s=>s+1),yield q({_pricingLoading:!0});const c=yield T(le,i.quantity);return t.current.resolved++,e(s=>s+1),{unitPrice:c,_pricingLoading:!1}},({quantity:i})=>[i],()=>ee(500)],[]),n=L({fields:ce,initial:oe,asyncRules:[r]}),{started:a,resolved:o}=t.current,l=a-o;return p`
        ${_}
        <div class="story-wrap">
            ${A(n)}
            <p class="story-hint">
                Increment the quantity — the price lookup only fires 500 ms after you
                stop. Rapid changes are debounced. Total updates instantly via a sync
                rule once the price arrives.
            </p>
            <div class="story-stats">
                <span>Started: <strong>${a}</strong></span>
                <span>Resolved: <strong>${o}</strong></span>
                <span>In flight: <strong>${l}</strong></span>
                <span>Processing: <strong>${n.processing}</strong></span>
            </div>
        </div>
    `};customElements.define("story-quote-debounce",w(ue));const m=()=>p`<story-quote-debounce></story-quote-debounce>`;m.storyName="Debounce — quantity → unit price + total";m.parameters={docs:{source:{language:"typescript",code:`// Form shape — _pricingLoading is a UI-only flag, hidden from the rendered form
type QuoteForm = {
  quantity: number;
  unitPrice: number;
  total: number;
  _pricingLoading: boolean;
};

const INITIAL: QuoteForm = { quantity: 1, unitPrice: 0, total: 0, _pricingLoading: false };

// The AbortSignal is passed automatically by call() as the first argument.
// Pass it to fetch() to cancel in-flight requests when the debounce runner
// discards a superseded saga.
const fetchUnitPrice = async (
  signal: AbortSignal,
  quantity: number,
): Promise<number> => {
  const res = await fetch(\`/api/pricing?quantity=\${quantity}\`, { signal });
  const data = await res.json();
  return data.unitPrice;
};

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
    when(values._pricingLoading, () => html\`<cosmoz-spinner></cosmoz-spinner>\`),
};

// form.processing is true while any async saga is in flight.
const form = useValidatedForm$({ fields, initial, asyncRules: [pricingRule] });
// form.processing → true while fetching, false when settled`}}};const ge={title:"Async Rules",tags:["autodocs"],parameters:{docs:{canvas:{sourceState:"shown"}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"() => html`<story-supplier-take-latest></story-supplier-take-latest>`",...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"() => html`<story-quote-debounce></story-quote-debounce>`",...m.parameters?.docs?.source}}};const fe=["TakeLatest","Debounce"];export{m as Debounce,d as TakeLatest,fe as __namedExportsOrder,ge as default};
