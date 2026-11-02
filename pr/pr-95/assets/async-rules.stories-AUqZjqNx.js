import{o as b,b as w,n as _}from"./inline-file-CXK6w1x6.js";import{b as m,e as v,g as E,f as R,d as L,n as A}from"./iframe-JEK7V0gR.js";import{a as S}from"./autocomplete-BlCoyuoF.js";import"./preload-helper-PPVm8Dsz.js";const P=(t,e)=>new Promise((s,n)=>{if(t.aborted){n(new DOMException("Aborted","AbortError"));return}const i=setTimeout(s,e);t.addEventListener("abort",()=>{clearTimeout(i),n(new DOMException("Aborted","AbortError"))},{once:!0})}),F=t=>{let e=null,s=null,n=null;return{run:(i,l,g,r)=>new Promise((f,c)=>{s?.abort(),s=null,n!==null&&(n.resolve(null),clearTimeout(e)),n={fn:i,values:l,index:r?.index,context:r?.context,resolve:f,reject:c},e=setTimeout(async()=>{const{fn:h,values:a,index:x,context:T,resolve:y,reject:k}=n;n=null,e=null;const u=new AbortController;s=u;const I={update:o=>{u.signal.aborted||g(o)},signal:u.signal,index:x,context:T};try{const o=await h(a,I);y(u.signal.aborted?null:o)}catch(o){u.signal.aborted||o instanceof DOMException&&o.name==="AbortError"?y(null):k(o)}finally{s===u&&(s=null)}},t)}),cancel:()=>{e!==null&&(clearTimeout(e),e=null),n!==null&&(n.resolve(null),n=null),s?.abort(),s=null}}},q=m`
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
`,$={supplier:"",contactEmail:""},D=["Acme Corp","Globex","Initech"],O={"Acme Corp":"contact@acme.example",Globex:"hello@globex.example",Initech:"info@initech.example"},C=async(t,e)=>(await P(t,3e3),O[e]??""),U=[{id:"supplier",label:"Supplier (select)",input:S,options:D,mode:"select",preserveOrder:!0},{id:"contactEmail",label:"Contact email",disabled:!0}],N=()=>{const t=E({started:0,cancelled:0,resolved:0}),[,e]=R(0),s=L(()=>[async(r,{update:f,signal:c})=>{if(!r.supplier)return{contactEmail:""};t.current.started++,e(a=>a+1),f({contactEmail:"loading…"}),c.addEventListener("abort",()=>{t.current.cancelled++,e(a=>a+1)},{once:!0});const h=await C(c,r.supplier);return t.current.resolved++,e(a=>a+1),{contactEmail:h}},({supplier:r})=>[r]],[]),n=b({fields:U,initial:$,asyncRules:[s]}),{started:i,cancelled:l,resolved:g}=t.current;return m`
        ${q}
        <div class="story-wrap">
            ${w(n)}
            <p class="story-hint">
                Select a supplier, then quickly select a different one before 3 s — only
                the final selection's email appears. The first fetch is cancelled. The
                loading placeholder is never rolled back — it stays until the winning
                fetch settles.
            </p>
            <div class="story-stats">
                <span>Started: <strong>${i}</strong></span>
                <span>Cancelled: <strong>${l}</strong></span>
                <span>Resolved: <strong>${g}</strong></span>
                <span>Processing: <strong>${n.processing}</strong></span>
            </div>
        </div>
    `};customElements.define("story-supplier-take-latest",v(N));const d=()=>m`<story-supplier-take-latest></story-supplier-take-latest>`;d.storyName="TakeLatest — supplier contact email";d.parameters={docs:{source:{language:"typescript",code:`// Form shape
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
    update({ contactEmail: 'loading…' }); // intermediate patch — merged immediately;
    // a cancelled run keeps what it pushed (nothing rolls it back) —
    // the re-run's final patch clears it below
    const email = await fetchContactEmail(signal, current.supplier);
    return { contactEmail: email };
  },
  ({ supplier }) => [supplier],
  // No runner specified — defaults to makeTakeLatestRunner.
];

// form.processing is true while any async rule is in flight.
// Use it to disable a save button or show a global spinner.
const form = useValidatedForm$({ fields, initial, asyncRules: [emailRule] });
// form.processing → true while fetching, false when settled`}}};const M={quantity:1,unitPrice:0,total:0,_pricingLoading:!1},Q=async(t,e)=>(await P(t,1e3),e>=50?8:e>=20?9.5:e>=10?11:13.5),z=[{id:"quantity",label:"Quantity",input:_,min:1,max:100,step:"1"},{id:"unitPrice",label:"Unit price (€)",disabled:!0,suffix:(t,e)=>A(e._pricingLoading,()=>m`<cosmoz-spinner></cosmoz-spinner>`)},{id:"total",label:"Total (€)",disabled:!0,rules:[[({quantity:t,unitPrice:e})=>({total:Math.round(t*e*100)/100}),({quantity:t,unitPrice:e})=>[t,e]]]},{id:"_pricingLoading",hidden:!0}],V=()=>{const t=E({started:0,resolved:0}),[,e]=R(0),s=L(()=>[async(r,{update:f,signal:c})=>{if(!r.quantity)return{unitPrice:0,_pricingLoading:!1};t.current.started++,e(a=>a+1),f({_pricingLoading:!0});const h=await Q(c,r.quantity);return t.current.resolved++,e(a=>a+1),{unitPrice:h,_pricingLoading:!1}},({quantity:r})=>[r],()=>F(500)],[]),n=b({fields:z,initial:M,asyncRules:[s]}),{started:i,resolved:l}=t.current,g=i-l;return m`
        ${q}
        <div class="story-wrap">
            ${w(n)}
            <p class="story-hint">
                Increment the quantity — the price lookup only fires 500 ms after you
                stop. Rapid changes are debounced. Total updates instantly via a sync
                rule once the price arrives.
            </p>
            <p class="story-hint">
                Switch quantity again mid-lookup and the older call is cancelled — its
                flag stays put. Calls discarded before the rule body runs push no flag
                at all.
            </p>
            <div class="story-stats">
                <span>Started: <strong>${i}</strong></span>
                <span>Resolved: <strong>${l}</strong></span>
                <span>In flight: <strong>${g}</strong></span>
                <span>Processing: <strong>${n.processing}</strong></span>
            </div>
        </div>
    `};customElements.define("story-quote-debounce",v(V));const p=()=>m`<story-quote-debounce></story-quote-debounce>`;p.storyName="Debounce — quantity → unit price + total";p.parameters={docs:{source:{language:"typescript",code:`// Form shape — _pricingLoading is a UI-only flag, hidden from the rendered form
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
// _pricingLoading is a separate loading flag. Patches pushed via ctx.update()
// are merged immediately and NEVER rolled back — a cancelled run keeps what it
// pushed (discarded debounce calls resolve before the rule body runs, so they
// push no flag). The rule clears the flag itself in every terminal patch:
// the early return, the final return, and any onError patch.
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
// form.processing → true while fetching, false when settled`}}};const B={title:"Async Rules",tags:["autodocs"],parameters:{docs:{canvas:{sourceState:"shown"}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"() => html`<story-supplier-take-latest></story-supplier-take-latest>`",...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"() => html`<story-quote-debounce></story-quote-debounce>`",...p.parameters?.docs?.source}}};const J=["TakeLatest","Debounce"];export{p as Debounce,d as TakeLatest,J as __namedExportsOrder,B as default};
