import{i as G,o as v,l as H,a as Y,r as B,c as P,u as L,b as x,d as q,e as I,f as T,n as J,g as K}from"./inline-file-BSdnJjdR.js";import{b as d}from"./iframe-Cdfx0sMp.js";import"./preload-helper-PPVm8Dsz.js";const W=G(({id:t,label:e,noLabelFloat:a,alwaysFloatLabel:n,error:i,warning:c,suffix:u,disabled:s,onChange:p,onPaste:l,options:o,limit:r,min:w,textProperty:R,valueProperty:h,value:f,values:b,itemRenderer:y,chipRenderer:k,keepOpened:S,keepQuery:F,placeholder:D,wrap:O,showSingle:C,preserveOrder:U,title:M,textual:z,description:N,externalSearch:Q,itemHeight:j,context:E,...V})=>d`<cosmoz-autocomplete
			class="input input-autocomplete"
			?data-warning=${!!c}
			name=${t}
			?disabled=${s}
			?wrap=${O}
			?no-label-float=${a}
			?always-float-label=${n}
			?invalid=${!!i}
			?keep-opened=${!!S}
			?keep-query=${!!F}
			?show-single=${!!C}
			?preserve-order=${!!U}
			.placeholder=${D}
			.itemRenderer=${v(y)}
			.chipRenderer=${v(k)}
			.errorMessage=${i}
			.label=${e}
			.value=${H(f)}
			.source=${Y([o,f,b,E],()=>typeof o=="function"?$=>o({...V,...$,value:f,values:b,context:E}):o)}
			.textProperty=${R}
			.valueProperty=${h}
			.limit=${r}
			.min=${w}
			.itemHeight=${j}
			.title=${v(M)}
			.textual=${z}
			.onChange=${$=>p(r===1?$?.[0]:$)}
			@paste=${l}
			?external-search=${Q}
			>${B({suffix:u,warning:c,description:N})}</cosmoz-autocomplete
		>`),_=(t,e)=>new Promise((a,n)=>{if(t.aborted){n(new DOMException("Aborted","AbortError"));return}const i=setTimeout(a,e);t.addEventListener("abort",()=>{clearTimeout(i),n(new DOMException("Aborted","AbortError"))},{once:!0})}),X=t=>{let e=null,a=null,n=null;return{run:(i,c,u,s)=>new Promise((p,l)=>{n!==null&&(n.resolve(null),clearTimeout(e)),n={fn:i,values:c,index:s?.index,context:s?.context,resolve:p,reject:l},e=setTimeout(async()=>{const{fn:o,values:r,index:w,context:R,resolve:h,reject:f}=n;n=null,e=null,a=new AbortController;const b={update:u,signal:a.signal,index:w,context:R};try{h(await o(r,b))}catch(y){y instanceof DOMException&&y.name==="AbortError"?h(null):f(y)}finally{a=null}},t)}),cancel:()=>{e!==null&&(clearTimeout(e),e=null),n!==null&&(n.resolve(null),n=null),a?.abort(),a=null}}},A=d`
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
`,Z={supplier:"",contactEmail:""},ee=["Acme Corp","Globex","Initech"],te={"Acme Corp":"contact@acme.example",Globex:"hello@globex.example",Initech:"info@initech.example"},ne=async(t,e)=>(await _(t,3e3),te[e]??""),se=[{id:"supplier",label:"Supplier",input:W,options:ee,limit:1,showSingle:!0,preserveOrder:!0},{id:"contactEmail",label:"Contact email",disabled:!0}],re=()=>{const t=L({started:0,cancelled:0,resolved:0}),[,e]=x(0),a=q(()=>[async(s,{update:p,signal:l})=>{if(!s.supplier)return{contactEmail:""};t.current.started++,e(r=>r+1),p({contactEmail:"loading…"}),l.addEventListener("abort",()=>{t.current.cancelled++,e(r=>r+1)},{once:!0});const o=await ne(l,s.supplier);return t.current.resolved++,e(r=>r+1),{contactEmail:o}},({supplier:s})=>[s]],[]),n=I({fields:se,initial:Z,asyncRules:[a]}),{started:i,cancelled:c,resolved:u}=t.current;return d`
        ${A}
        <div class="story-wrap">
            ${T(n)}
            <p class="story-hint">
                Select a supplier, then quickly select a different one before 3 s — only
                the final selection's email appears. The first fetch is cancelled.
            </p>
            <div class="story-stats">
                <span>Started: <strong>${i}</strong></span>
                <span>Cancelled: <strong>${c}</strong></span>
                <span>Resolved: <strong>${u}</strong></span>
                <span>Processing: <strong>${n.processing}</strong></span>
            </div>
        </div>
    `};customElements.define("story-supplier-take-latest",P(re));const m=()=>d`<story-supplier-take-latest></story-supplier-take-latest>`;m.storyName="TakeLatest — supplier contact email";m.parameters={docs:{source:{language:"typescript",code:`// Form shape
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
// form.processing → true while fetching, false when settled`}}};const ae={quantity:1,unitPrice:0,total:0,_pricingLoading:!1},ie=async(t,e)=>(await _(t,1e3),e>=50?8:e>=20?9.5:e>=10?11:13.5),oe=[{id:"quantity",label:"Quantity",input:J,min:1,max:100,step:"1"},{id:"unitPrice",label:"Unit price (€)",disabled:!0,suffix:(t,e)=>K(e._pricingLoading,()=>d`<cosmoz-spinner></cosmoz-spinner>`)},{id:"total",label:"Total (€)",disabled:!0,rules:[[({quantity:t,unitPrice:e})=>({total:Math.round(t*e*100)/100}),({quantity:t,unitPrice:e})=>[t,e]]]},{id:"_pricingLoading",hidden:!0}],ce=()=>{const t=L({started:0,resolved:0}),[,e]=x(0),a=q(()=>[async(s,{update:p,signal:l})=>{if(!s.quantity)return{unitPrice:0,_pricingLoading:!1};t.current.started++,e(r=>r+1),p({_pricingLoading:!0});const o=await ie(l,s.quantity);return t.current.resolved++,e(r=>r+1),{unitPrice:o,_pricingLoading:!1}},({quantity:s})=>[s],()=>X(500)],[]),n=I({fields:oe,initial:ae,asyncRules:[a]}),{started:i,resolved:c}=t.current,u=i-c;return d`
        ${A}
        <div class="story-wrap">
            ${T(n)}
            <p class="story-hint">
                Increment the quantity — the price lookup only fires 500 ms after you
                stop. Rapid changes are debounced. Total updates instantly via a sync
                rule once the price arrives.
            </p>
            <div class="story-stats">
                <span>Started: <strong>${i}</strong></span>
                <span>Resolved: <strong>${c}</strong></span>
                <span>In flight: <strong>${u}</strong></span>
                <span>Processing: <strong>${n.processing}</strong></span>
            </div>
        </div>
    `};customElements.define("story-quote-debounce",P(ce));const g=()=>d`<story-quote-debounce></story-quote-debounce>`;g.storyName="Debounce — quantity → unit price + total";g.parameters={docs:{source:{language:"typescript",code:`// Form shape — _pricingLoading is a UI-only flag, hidden from the rendered form
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
// form.processing → true while fetching, false when settled`}}};const de={title:"Async Rules",tags:["autodocs"],parameters:{docs:{canvas:{sourceState:"shown"}}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"() => html`<story-supplier-take-latest></story-supplier-take-latest>`",...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"() => html`<story-quote-debounce></story-quote-debounce>`",...g.parameters?.docs?.source}}};const me=["TakeLatest","Debounce"];export{g as Debounce,m as TakeLatest,me as __namedExportsOrder,de as default};
