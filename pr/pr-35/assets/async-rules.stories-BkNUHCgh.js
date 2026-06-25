import{p as h,H as b,C as w,h as E,I as v,b as R,z as _,n as A}from"./inline-file-C7Uy8Euk.js";import{b as p}from"./iframe-BuoKl6_M.js";import{a as S}from"./autocomplete-BRgYf1qi.js";import"./preload-helper-PPVm8Dsz.js";const L=(t,e)=>new Promise((r,n)=>{if(t.aborted){n(new DOMException("Aborted","AbortError"));return}const i=setTimeout(r,e);t.addEventListener("abort",()=>{clearTimeout(i),n(new DOMException("Aborted","AbortError"))},{once:!0})}),k=t=>{let e=null,r=null,n=null;return{run:(i,o,d,s)=>new Promise((m,c)=>{n!==null&&(n.resolve(null),clearTimeout(e)),n={fn:i,values:o,index:s?.index,context:s?.context,resolve:m,reject:c},e=setTimeout(async()=>{const{fn:g,values:a,index:q,context:x,resolve:y,reject:I}=n;n=null,e=null,r=new AbortController;const T={update:d,signal:r.signal,index:q,context:x};try{y(await g(a,T))}catch(f){f instanceof DOMException&&f.name==="AbortError"?y(null):I(f)}finally{r=null}},t)}),cancel:()=>{e!==null&&(clearTimeout(e),e=null),n!==null&&(n.resolve(null),n=null),r?.abort(),r=null}}},P=p`
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
`,F={supplier:"",contactEmail:""},$=["Acme Corp","Globex","Initech"],D={"Acme Corp":"contact@acme.example",Globex:"hello@globex.example",Initech:"info@initech.example"},O=async(t,e)=>(await L(t,3e3),D[e]??""),C=[{id:"supplier",label:"Supplier (select)",input:S,options:$,mode:"select",preserveOrder:!0},{id:"contactEmail",label:"Contact email",disabled:!0}],U=()=>{const t=b({started:0,cancelled:0,resolved:0}),[,e]=w(0),r=E(()=>[async(s,{update:m,signal:c})=>{if(!s.supplier)return{contactEmail:""};t.current.started++,e(a=>a+1),m({contactEmail:"loading…"}),c.addEventListener("abort",()=>{t.current.cancelled++,e(a=>a+1)},{once:!0});const g=await O(c,s.supplier);return t.current.resolved++,e(a=>a+1),{contactEmail:g}},({supplier:s})=>[s]],[]),n=v({fields:C,initial:F,asyncRules:[r]}),{started:i,cancelled:o,resolved:d}=t.current;return p`
        ${P}
        <div class="story-wrap">
            ${R(n)}
            <p class="story-hint">
                Select a supplier, then quickly select a different one before 3 s — only
                the final selection's email appears. The first fetch is cancelled.
            </p>
            <div class="story-stats">
                <span>Started: <strong>${i}</strong></span>
                <span>Cancelled: <strong>${o}</strong></span>
                <span>Resolved: <strong>${d}</strong></span>
                <span>Processing: <strong>${n.processing}</strong></span>
            </div>
        </div>
    `};customElements.define("story-supplier-take-latest",h(U));const l=()=>p`<story-supplier-take-latest></story-supplier-take-latest>`;l.storyName="TakeLatest — supplier contact email";l.parameters={docs:{source:{language:"typescript",code:`// Form shape
type OrderForm = { supplier: string; contactEmail: string };

const INITIAL: OrderForm = { supplier: '', contactEmail: '' };

// Pass ctx.signal to fetch() so in-flight requests are cancelled when
// the runner supersedes this invocation (new supplier selected).
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
  async (current, { update, signal }) => {
    if (!current.supplier) return { contactEmail: '' };
    update({ contactEmail: 'loading…' }); // intermediate patch
    const email = await fetchContactEmail(signal, current.supplier);
    return { contactEmail: email };
  },
  ({ supplier }) => [supplier],
  // No runner specified — defaults to makeTakeLatestRunner.
];

// form.processing is true while any async rule is in flight.
// Use it to disable a save button or show a global spinner.
const form = useValidatedForm$({ fields, initial, asyncRules: [emailRule] });
// form.processing → true while fetching, false when settled`}}};const M={quantity:1,unitPrice:0,total:0,_pricingLoading:!1},N=async(t,e)=>(await L(t,1e3),e>=50?8:e>=20?9.5:e>=10?11:13.5),z=[{id:"quantity",label:"Quantity",input:_,min:1,max:100,step:"1"},{id:"unitPrice",label:"Unit price (€)",disabled:!0,suffix:(t,e)=>A(e._pricingLoading,()=>p`<cosmoz-spinner></cosmoz-spinner>`)},{id:"total",label:"Total (€)",disabled:!0,rules:[[({quantity:t,unitPrice:e})=>({total:Math.round(t*e*100)/100}),({quantity:t,unitPrice:e})=>[t,e]]]},{id:"_pricingLoading",hidden:!0}],Q=()=>{const t=b({started:0,resolved:0}),[,e]=w(0),r=E(()=>[async(s,{update:m,signal:c})=>{if(!s.quantity)return{unitPrice:0,_pricingLoading:!1};t.current.started++,e(a=>a+1),m({_pricingLoading:!0});const g=await N(c,s.quantity);return t.current.resolved++,e(a=>a+1),{unitPrice:g,_pricingLoading:!1}},({quantity:s})=>[s],()=>k(500)],[]),n=v({fields:z,initial:M,asyncRules:[r]}),{started:i,resolved:o}=t.current,d=i-o;return p`
        ${P}
        <div class="story-wrap">
            ${R(n)}
            <p class="story-hint">
                Increment the quantity — the price lookup only fires 500 ms after you
                stop. Rapid changes are debounced. Total updates instantly via a sync
                rule once the price arrives.
            </p>
            <div class="story-stats">
                <span>Started: <strong>${i}</strong></span>
                <span>Resolved: <strong>${o}</strong></span>
                <span>In flight: <strong>${d}</strong></span>
                <span>Processing: <strong>${n.processing}</strong></span>
            </div>
        </div>
    `};customElements.define("story-quote-debounce",h(Q));const u=()=>p`<story-quote-debounce></story-quote-debounce>`;u.storyName="Debounce — quantity → unit price + total";u.parameters={docs:{source:{language:"typescript",code:`// Form shape — _pricingLoading is a UI-only flag, hidden from the rendered form
type QuoteForm = {
  quantity: number;
  unitPrice: number;
  total: number;
  _pricingLoading: boolean;
};

const INITIAL: QuoteForm = { quantity: 1, unitPrice: 0, total: 0, _pricingLoading: false };

// Pass ctx.signal to fetch() so in-flight requests are cancelled when the
// debounce runner discards a superseded call.
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
// ctx.update() pushes the loading flag immediately; the final return clears it.
const pricingRule: AsyncItemRule<QuoteForm> = [
  async (current, { update, signal }) => {
    if (!current.quantity) return { unitPrice: 0, _pricingLoading: false };
    update({ _pricingLoading: true });
    const price = await fetchUnitPrice(signal, current.quantity);
    return { unitPrice: price, _pricingLoading: false };
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

// form.processing is true while any async rule is in flight.
const form = useValidatedForm$({
  fields,
  initial,
  rules: [totalRule],
  asyncRules: [pricingRule],
});
// form.processing → true while fetching, false when settled`}}};const Y={title:"Async Rules",tags:["autodocs"],parameters:{docs:{canvas:{sourceState:"shown"}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"() => html`<story-supplier-take-latest></story-supplier-take-latest>`",...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"() => html`<story-quote-debounce></story-quote-debounce>`",...u.parameters?.docs?.source}}};const B=["TakeLatest","Debounce"];export{u as Debounce,l as TakeLatest,B as __namedExportsOrder,Y as default};
