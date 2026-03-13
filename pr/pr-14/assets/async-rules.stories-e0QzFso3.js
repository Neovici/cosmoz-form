import{e as j,i as V,a as G,o as v,l as H,r as Y,c as R,u as P,b as L,d as A,f as q,g as x,n as B,h as J}from"./inline-file-CE2xPoxo.js";import{E,b as d}from"./iframe-DOlhww72.js";import"./preload-helper-PPVm8Dsz.js";const K={},W=j(class extends V{constructor(){super(...arguments),this.ot=K}render(t,e){return e()}update(t,[e,r]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((n,s)=>n===this.ot[s]))return E}else if(this.ot===e)return E;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,r)}}),X=G(({id:t,label:e,noLabelFloat:r,alwaysFloatLabel:n,error:s,warning:l,suffix:u,disabled:a,onChange:p,options:o,limit:c,min:i,textProperty:w,valueProperty:h,value:f,values:b,itemRenderer:y,chipRenderer:_,keepOpened:k,keepQuery:S,placeholder:F,wrap:D,showSingle:O,preserveOrder:C,title:U,textual:M,description:z,externalSearch:N,...Q})=>d`<cosmoz-autocomplete
			class="input input-autocomplete"
			?data-warning=${!!l}
			name=${t}
			?disabled=${a}
			?wrap=${D}
			?no-label-float=${r}
			?always-float-label=${n}
			?invalid=${!!s}
			?keep-opened=${!!k}
			?keep-query=${!!S}
			?show-single=${!!O}
			?preserve-order=${!!C}
			.placeholder=${F}
			.itemRenderer=${v(y)}
			.chipRenderer=${v(_)}
			.errorMessage=${s}
			.label=${e}
			.value=${H(f)}
			.source=${W([o,f,b],()=>typeof o=="function"?$=>o({...Q,...$,value:f,values:b}):o)}
			.textProperty=${w}
			.valueProperty=${h}
			.limit=${c}
			.min=${i}
			.title=${v(U)}
			.textual=${M}
			.onChange=${$=>p(c===1?$?.[0]:$)}
			?external-search=${N}
			>${Y({suffix:u,warning:l,description:z})}</cosmoz-autocomplete
		>`),I=(t,e)=>new Promise((r,n)=>{if(t.aborted){n(new DOMException("Aborted","AbortError"));return}const s=setTimeout(r,e);t.addEventListener("abort",()=>{clearTimeout(s),n(new DOMException("Aborted","AbortError"))},{once:!0})}),Z=t=>{let e=null,r=null,n=null;return{run:(s,l,u,a)=>new Promise((p,o)=>{n!==null&&(n.resolve(null),clearTimeout(e)),n={fn:s,values:l,index:a?.index,resolve:p,reject:o},e=setTimeout(async()=>{const{fn:c,values:i,index:w,resolve:h,reject:f}=n;n=null,e=null,r=new AbortController;const b={update:u,signal:r.signal,index:w};try{h(await c(i,b))}catch(y){y instanceof DOMException&&y.name==="AbortError"?h(null):f(y)}finally{r=null}},t)}),cancel:()=>{e!==null&&(clearTimeout(e),e=null),n!==null&&(n.resolve(null),n=null),r?.abort(),r=null}}},T=d`
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
`,ee={supplier:"",contactEmail:""},te=["Acme Corp","Globex","Initech"],ne={"Acme Corp":"contact@acme.example",Globex:"hello@globex.example",Initech:"info@initech.example"},re=async(t,e)=>(await I(t,3e3),ne[e]??""),se=[{id:"supplier",label:"Supplier",input:X,options:te,limit:1,showSingle:!0,preserveOrder:!0},{id:"contactEmail",label:"Contact email",disabled:!0}],ae=()=>{const t=P({started:0,cancelled:0,resolved:0}),[,e]=L(0),r=A(()=>[async(a,{update:p,signal:o})=>{if(!a.supplier)return{contactEmail:""};t.current.started++,e(i=>i+1),p({contactEmail:"loading…"}),o.addEventListener("abort",()=>{t.current.cancelled++,e(i=>i+1)},{once:!0});const c=await re(o,a.supplier);return t.current.resolved++,e(i=>i+1),{contactEmail:c}},({supplier:a})=>[a]],[]),n=q({fields:se,initial:ee,asyncRules:[r]}),{started:s,cancelled:l,resolved:u}=t.current;return d`
        ${T}
        <div class="story-wrap">
            ${x(n)}
            <p class="story-hint">
                Select a supplier, then quickly select a different one before 3 s — only
                the final selection's email appears. The first fetch is cancelled.
            </p>
            <div class="story-stats">
                <span>Started: <strong>${s}</strong></span>
                <span>Cancelled: <strong>${l}</strong></span>
                <span>Resolved: <strong>${u}</strong></span>
                <span>Processing: <strong>${n.processing}</strong></span>
            </div>
        </div>
    `};customElements.define("story-supplier-take-latest",R(ae));const m=()=>d`<story-supplier-take-latest></story-supplier-take-latest>`;m.storyName="TakeLatest — supplier contact email";m.parameters={docs:{source:{language:"typescript",code:`// Form shape
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
// form.processing → true while fetching, false when settled`}}};const ie={quantity:1,unitPrice:0,total:0,_pricingLoading:!1},oe=async(t,e)=>(await I(t,1e3),e>=50?8:e>=20?9.5:e>=10?11:13.5),le=[{id:"quantity",label:"Quantity",input:B,min:1,max:100,step:"1"},{id:"unitPrice",label:"Unit price (€)",disabled:!0,suffix:(t,e)=>J(e._pricingLoading,()=>d`<cosmoz-spinner></cosmoz-spinner>`)},{id:"total",label:"Total (€)",disabled:!0,rules:[[({quantity:t,unitPrice:e})=>({total:Math.round(t*e*100)/100}),({quantity:t,unitPrice:e})=>[t,e]]]},{id:"_pricingLoading",hidden:!0}],ce=()=>{const t=P({started:0,resolved:0}),[,e]=L(0),r=A(()=>[async(a,{update:p,signal:o})=>{if(!a.quantity)return{unitPrice:0,_pricingLoading:!1};t.current.started++,e(i=>i+1),p({_pricingLoading:!0});const c=await oe(o,a.quantity);return t.current.resolved++,e(i=>i+1),{unitPrice:c,_pricingLoading:!1}},({quantity:a})=>[a],()=>Z(500)],[]),n=q({fields:le,initial:ie,asyncRules:[r]}),{started:s,resolved:l}=t.current,u=s-l;return d`
        ${T}
        <div class="story-wrap">
            ${x(n)}
            <p class="story-hint">
                Increment the quantity — the price lookup only fires 500 ms after you
                stop. Rapid changes are debounced. Total updates instantly via a sync
                rule once the price arrives.
            </p>
            <div class="story-stats">
                <span>Started: <strong>${s}</strong></span>
                <span>Resolved: <strong>${l}</strong></span>
                <span>In flight: <strong>${u}</strong></span>
                <span>Processing: <strong>${n.processing}</strong></span>
            </div>
        </div>
    `};customElements.define("story-quote-debounce",R(ce));const g=()=>d`<story-quote-debounce></story-quote-debounce>`;g.storyName="Debounce — quantity → unit price + total";g.parameters={docs:{source:{language:"typescript",code:`// Form shape — _pricingLoading is a UI-only flag, hidden from the rendered form
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
// form.processing → true while fetching, false when settled`}}};const me={title:"Async Rules",tags:["autodocs"],parameters:{docs:{canvas:{sourceState:"shown"}}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"() => html`<story-supplier-take-latest></story-supplier-take-latest>`",...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"() => html`<story-quote-debounce></story-quote-debounce>`",...g.parameters?.docs?.source}}};const ge=["TakeLatest","Debounce"];export{g as Debounce,m as TakeLatest,ge as __namedExportsOrder,me as default};
