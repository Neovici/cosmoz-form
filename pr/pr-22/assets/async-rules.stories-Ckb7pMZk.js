import{e as G,i as H,a as Y,o as E,l as B,r as J,c as x,u as L,b as A,d as q,f as I,g as T,n as K,h as W}from"./inline-file-BxtYLDh3.js";import{E as P,b as d}from"./iframe-P0rA17y9.js";import"./preload-helper-PPVm8Dsz.js";const X={},Z=G(class extends H{constructor(){super(...arguments),this.ot=X}render(t,e){return e()}update(t,[e,r]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((n,a)=>n===this.ot[a]))return P}else if(this.ot===e)return P;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,r)}}),ee=Y(({id:t,label:e,noLabelFloat:r,alwaysFloatLabel:n,error:a,warning:c,suffix:u,disabled:s,onChange:p,options:o,limit:l,min:i,textProperty:$,valueProperty:w,value:m,values:h,itemRenderer:v,chipRenderer:y,keepOpened:S,keepQuery:F,placeholder:D,wrap:O,showSingle:C,preserveOrder:U,title:M,textual:z,description:N,externalSearch:Q,itemHeight:j,context:R,...V})=>d`<cosmoz-autocomplete
			class="input input-autocomplete"
			?data-warning=${!!c}
			name=${t}
			?disabled=${s}
			?wrap=${O}
			?no-label-float=${r}
			?always-float-label=${n}
			?invalid=${!!a}
			?keep-opened=${!!S}
			?keep-query=${!!F}
			?show-single=${!!C}
			?preserve-order=${!!U}
			.placeholder=${D}
			.itemRenderer=${E(v)}
			.chipRenderer=${E(y)}
			.errorMessage=${a}
			.label=${e}
			.value=${B(m)}
			.source=${Z([o,m,h,R],()=>typeof o=="function"?b=>o({...V,...b,value:m,values:h,context:R}):o)}
			.textProperty=${$}
			.valueProperty=${w}
			.limit=${l}
			.min=${i}
			.itemHeight=${j}
			.title=${E(M)}
			.textual=${z}
			.onChange=${b=>p(l===1?b?.[0]:b)}
			?external-search=${Q}
			>${J({suffix:u,warning:c,description:N})}</cosmoz-autocomplete
		>`),_=(t,e)=>new Promise((r,n)=>{if(t.aborted){n(new DOMException("Aborted","AbortError"));return}const a=setTimeout(r,e);t.addEventListener("abort",()=>{clearTimeout(a),n(new DOMException("Aborted","AbortError"))},{once:!0})}),te=t=>{let e=null,r=null,n=null;return{run:(a,c,u,s)=>new Promise((p,o)=>{n!==null&&(n.resolve(null),clearTimeout(e)),n={fn:a,values:c,index:s?.index,context:s?.context,resolve:p,reject:o},e=setTimeout(async()=>{const{fn:l,values:i,index:$,context:w,resolve:m,reject:h}=n;n=null,e=null,r=new AbortController;const v={update:u,signal:r.signal,index:$,context:w};try{m(await l(i,v))}catch(y){y instanceof DOMException&&y.name==="AbortError"?m(null):h(y)}finally{r=null}},t)}),cancel:()=>{e!==null&&(clearTimeout(e),e=null),n!==null&&(n.resolve(null),n=null),r?.abort(),r=null}}},k=d`
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
`,ne={supplier:"",contactEmail:""},re=["Acme Corp","Globex","Initech"],se={"Acme Corp":"contact@acme.example",Globex:"hello@globex.example",Initech:"info@initech.example"},ae=async(t,e)=>(await _(t,3e3),se[e]??""),ie=[{id:"supplier",label:"Supplier",input:ee,options:re,limit:1,showSingle:!0,preserveOrder:!0},{id:"contactEmail",label:"Contact email",disabled:!0}],oe=()=>{const t=L({started:0,cancelled:0,resolved:0}),[,e]=A(0),r=q(()=>[async(s,{update:p,signal:o})=>{if(!s.supplier)return{contactEmail:""};t.current.started++,e(i=>i+1),p({contactEmail:"loading…"}),o.addEventListener("abort",()=>{t.current.cancelled++,e(i=>i+1)},{once:!0});const l=await ae(o,s.supplier);return t.current.resolved++,e(i=>i+1),{contactEmail:l}},({supplier:s})=>[s]],[]),n=I({fields:ie,initial:ne,asyncRules:[r]}),{started:a,cancelled:c,resolved:u}=t.current;return d`
        ${k}
        <div class="story-wrap">
            ${T(n)}
            <p class="story-hint">
                Select a supplier, then quickly select a different one before 3 s — only
                the final selection's email appears. The first fetch is cancelled.
            </p>
            <div class="story-stats">
                <span>Started: <strong>${a}</strong></span>
                <span>Cancelled: <strong>${c}</strong></span>
                <span>Resolved: <strong>${u}</strong></span>
                <span>Processing: <strong>${n.processing}</strong></span>
            </div>
        </div>
    `};customElements.define("story-supplier-take-latest",x(oe));const g=()=>d`<story-supplier-take-latest></story-supplier-take-latest>`;g.storyName="TakeLatest — supplier contact email";g.parameters={docs:{source:{language:"typescript",code:`// Form shape
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
// form.processing → true while fetching, false when settled`}}};const ce={quantity:1,unitPrice:0,total:0,_pricingLoading:!1},le=async(t,e)=>(await _(t,1e3),e>=50?8:e>=20?9.5:e>=10?11:13.5),ue=[{id:"quantity",label:"Quantity",input:K,min:1,max:100,step:"1"},{id:"unitPrice",label:"Unit price (€)",disabled:!0,suffix:(t,e)=>W(e._pricingLoading,()=>d`<cosmoz-spinner></cosmoz-spinner>`)},{id:"total",label:"Total (€)",disabled:!0,rules:[[({quantity:t,unitPrice:e})=>({total:Math.round(t*e*100)/100}),({quantity:t,unitPrice:e})=>[t,e]]]},{id:"_pricingLoading",hidden:!0}],pe=()=>{const t=L({started:0,resolved:0}),[,e]=A(0),r=q(()=>[async(s,{update:p,signal:o})=>{if(!s.quantity)return{unitPrice:0,_pricingLoading:!1};t.current.started++,e(i=>i+1),p({_pricingLoading:!0});const l=await le(o,s.quantity);return t.current.resolved++,e(i=>i+1),{unitPrice:l,_pricingLoading:!1}},({quantity:s})=>[s],()=>te(500)],[]),n=I({fields:ue,initial:ce,asyncRules:[r]}),{started:a,resolved:c}=t.current,u=a-c;return d`
        ${k}
        <div class="story-wrap">
            ${T(n)}
            <p class="story-hint">
                Increment the quantity — the price lookup only fires 500 ms after you
                stop. Rapid changes are debounced. Total updates instantly via a sync
                rule once the price arrives.
            </p>
            <div class="story-stats">
                <span>Started: <strong>${a}</strong></span>
                <span>Resolved: <strong>${c}</strong></span>
                <span>In flight: <strong>${u}</strong></span>
                <span>Processing: <strong>${n.processing}</strong></span>
            </div>
        </div>
    `};customElements.define("story-quote-debounce",x(pe));const f=()=>d`<story-quote-debounce></story-quote-debounce>`;f.storyName="Debounce — quantity → unit price + total";f.parameters={docs:{source:{language:"typescript",code:`// Form shape — _pricingLoading is a UI-only flag, hidden from the rendered form
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
// form.processing → true while fetching, false when settled`}}};const fe={title:"Async Rules",tags:["autodocs"],parameters:{docs:{canvas:{sourceState:"shown"}}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"() => html`<story-supplier-take-latest></story-supplier-take-latest>`",...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"() => html`<story-quote-debounce></story-quote-debounce>`",...f.parameters?.docs?.source}}};const ye=["TakeLatest","Debounce"];export{f as Debounce,g as TakeLatest,ye as __namedExportsOrder,fe as default};
