import{d as b,j as y,b as A,u as E,k as T,t as p,m as V,p as v,q as $,c as D,s as c,n as R,g as u,v as C,w as S,h as M}from"./inline-file-CZKSQraz.js";import{b as l}from"./iframe-BvfsljuF.js";import"./preload-helper-PPVm8Dsz.js";const L=(e,o)=>Array.isArray(e)?e:[[e,o]],W=({items:e,setItems:o,initial:s,rules:a,context:t})=>{const h=E(void 0);return T(()=>{const r=h.current;h.current=t,r!==void 0&&o(i=>i.map((n,d)=>p(y({oldItem:n,newItem:n,rules:a,index:d,context:t,oldContext:r}),V(n))))},[t]),{items:e,setItems:o,touched:V(e),update:v((r,i)=>o((n=[])=>p(L(r??n.length,i).reduce((d,[m,I])=>[...d.slice(0,m),p(y({oldItem:d[m],newItem:{...d[m],...I},rules:a,index:m,context:t})),...d.slice(m+1)],n))),[a,t]),updateAll:v(r=>o((i=[])=>i.map((n,d)=>{const m=$(r,n);return p(y({oldItem:n,newItem:{...n,...m},rules:a,index:d,context:t}))})),[a,t]),remove:v(r=>o((i=[])=>p([...i.slice(0,r),...i.slice(r+1).map((n,d)=>y({rules:a,newItem:n,oldItem:n,index:d+r,oldIndex:d+r+1,context:t}))])),[a,t]),append:v(r=>o((i=[])=>p(i.concat(r.map((n,d)=>y({rules:a,newItem:n,index:d+i.length,context:t}))))),[a,t]),reset:v(()=>o(s),[s]),clear:v(()=>o(p([])),[]),load:v((r,i)=>o(r.map((n,d)=>y({newItem:n,index:d,rules:i??a,context:t}))),[a,t])}},B=({initial:e,rules:o,context:s})=>{const a=b(()=>e.map((r,i)=>y({rules:o,newItem:r,index:i,context:s})),[e]),[t,h]=A(a);return W({items:t,setItems:h,initial:a,rules:o,context:s})},F=l`
    <style>
        .story-wrap {
            font-family: sans-serif;
            max-width: 540px;
            padding: 1rem;
        }
        .story-hint {
            color: #555;
            font-size: 0.85rem;
            margin-top: 0.75rem;
        }
        .story-section {
            border: 1px solid #dde3ef;
            border-radius: 8px;
            margin-top: 1rem;
            padding: 0.75rem 1rem;
        }
        .story-section h3 {
            font-size: 0.9rem;
            font-weight: 600;
            margin: 0 0 0.5rem;
            color: #1a56db;
        }
        .story-badge {
            background: #1a56db;
            border-radius: 4px;
            color: #fff;
            font-size: 0.7rem;
            padding: 2px 6px;
            white-space: nowrap;
            align-self: center;
            margin-left: 4px;
        }
        .story-badge-warn {
            background: #c27803;
        }
    </style>
`,w=[{id:"cost",label:"Cost (€)",input:R,min:0,suffix:(e,o,s,a)=>{const t=a?.budget??1/0;return M(e>t,()=>l`<span class="story-badge story-badge-warn">Over budget!</span>`)}}],Y=[{id:"budget",label:"Budget (€)",input:R,min:0}],P=()=>{const e=c({fields:Y,initial:{budget:100}}),o=b(()=>({budget:e.values.budget}),[e.values.budget]),s=c({fields:w,initial:{cost:50},context:o}),a=c({fields:w,initial:{cost:120},context:o}),t=c({fields:w,initial:{cost:80},context:o});return l`
        ${F}
        <div class="story-wrap">
            <div class="story-section">
                <h3>Parent form — set the budget</h3>
                ${u(e)}
            </div>

            <div class="story-section">
                <h3>Rows — cost suffix reflects parent budget via context</h3>
                ${u(s)} ${u(a)} ${u(t)}
            </div>

            <p class="story-hint">
                Change the budget — rows immediately update their suffix badge. Context
                flows from parent to each nested form without prop drilling.
            </p>
        </div>
    `};customElements.define("story-context-budget",D(P));const g=()=>l`<story-context-budget></story-context-budget>`;g.storyName="Budget context — parent value in row suffix";g.parameters={docs:{source:{language:"typescript",code:`type BudgetCtx = { budget: number };
type CostRow = { cost: number };

// suffix reads budget from context — shows a badge when cost exceeds it
const costFields: Fields<CostRow, BudgetCtx> = [
  {
    id: 'cost',
    label: 'Cost (€)',
    input: number,
    suffix: (value, _values, _field, context) => {
      const budget = context?.budget ?? Infinity;
      return value > budget
        ? html\`<span class="badge">Over budget!</span>\`
        : undefined;
    },
  },
];

// Parent form owns the budget value
const budgetForm = useValidatedForm({
  fields: [{ id: 'budget', label: 'Budget (€)', input: number }],
  initial: { budget: 100 },
});

// Memoize to keep the context reference stable between renders
const ctx = useMemo(
  () => ({ budget: budgetForm.values.budget }),
  [budgetForm.values.budget],
);

// Row forms receive context — suffix re-evaluates whenever ctx changes
const rowForm = useValidatedForm<CostRow, BudgetCtx>({
  fields: costFields,
  initial: { cost: 120 },
  context: ctx,
});`}}};const k=[{id:"deliveryDate",label:"Delivery date",input:C,placeholder:"YYYY-MM-DD"}],_=[{id:"rowDate",label:"Row date",input:C,placeholder:"YYYY-MM-DD",validate:(e,o,s,a)=>{const t=a?.deliveryDate;return!e||!t?!1:e<t?`Must be on or after delivery date (${t})`:!1},suffix:(e,o,s,a)=>{const t=a?.deliveryDate;return e&&t&&e>=t?l`<span class="story-badge">✓</span>`:void 0}}],z=()=>{const e=c({fields:k,initial:{deliveryDate:"2024-06-01"}}),o=b(()=>({deliveryDate:e.values.deliveryDate}),[e.values.deliveryDate]),s=c({fields:_,initial:{rowDate:"2024-07-01"},context:o}),a=c({fields:_,initial:{rowDate:"2024-05-01"},context:o});return l`
        ${F}
        <div class="story-wrap">
            <div class="story-section">
                <h3>Parent form — set the delivery date</h3>
                ${u(e)}
            </div>

            <div class="story-section">
                <h3>Rows — row date validated against parent delivery date</h3>
                ${u(s)} ${u(a)}
            </div>

            <p class="story-hint">
                Change the delivery date — rows with earlier dates instantly show a
                validation error. Context is the mechanism; no manual prop passing
                needed.
            </p>
        </div>
    `};customElements.define("story-context-delivery",D(z));const f=()=>l`<story-context-delivery></story-context-delivery>`;f.storyName="Delivery date context — validate rows against parent date";f.parameters={docs:{source:{language:"typescript",code:`type DeliveryCtx = { deliveryDate: string };
type RowItem = { rowDate: string };

// validate reads the minimum date from context
const rowDateFields: Fields<RowItem, DeliveryCtx> = [
  {
    id: 'rowDate',
    label: 'Row date',
    input: text,
    validate: (value, _values, _field, context) => {
      const minDate = context?.deliveryDate;
      if (!value || !minDate) return false;
      return value < minDate
        ? \`Must be on or after delivery date (\${minDate})\`
        : false;
    },
  },
];

// Parent form owns the delivery date
const parentForm = useValidatedForm({
  fields: [{ id: 'deliveryDate', label: 'Delivery date', input: text }],
  initial: { deliveryDate: '2024-06-01' },
});

const ctx = useMemo(
  () => ({ deliveryDate: parentForm.values.deliveryDate }),
  [parentForm.values.deliveryDate],
);

// When deliveryDate changes, rowForm re-validates immediately via context
const rowForm = useValidatedForm<RowItem, DeliveryCtx>({
  fields: rowDateFields,
  initial: { rowDate: '2024-05-01' },
  context: ctx,
});`}}};const N=[{id:"vatRate",label:"VAT rate (%)",input:R,min:0,max:100}],O=[[({price:e},o,s,a,t)=>({totalWithVat:Math.round(e*(1+(t?.vatRate??0)/100)*100)/100}),({price:e},o,s)=>[e,s?.vatRate]]],j=()=>{const e=c({fields:N,initial:{vatRate:20}}),o=b(()=>({vatRate:e.values.vatRate}),[e.values.vatRate]),{items:s}=B({initial:[{price:100,totalWithVat:0},{price:250,totalWithVat:0},{price:75,totalWithVat:0}],rules:O,context:o});return l`
        ${F}
        <div class="story-wrap">
            <div class="story-section">
                <h3>Parent form — set the VAT rate</h3>
                ${u(e)}
            </div>

            <div class="story-section">
                <h3>Line items — totals recomputed when VAT rate changes</h3>
                ${S(s,(a,t)=>t,a=>l`
                        <div
                            style="display:flex;justify-content:space-between;padding:0.3rem 0;border-bottom:1px solid #eee"
                        >
                            <span style="font-size:0.9rem"
                                >Price: <strong>${a.price.toFixed(2)} €</strong></span
                            >
                            <span style="font-size:0.9rem"
                                >Total with VAT:
                                <strong>${a.totalWithVat.toFixed(2)} €</strong></span
                            >
                        </div>
                    `)}
            </div>

            <p class="story-hint">
                Change the VAT rate — all line item totals instantly recompute via
                context-aware rules. Rules receive <code>context.vatRate</code> in their
                <code>depsFn</code> so they re-run whenever it changes.
            </p>
        </div>
    `};customElements.define("story-context-vat",D(j));const x=()=>l`<story-context-vat></story-context-vat>`;x.storyName="VAT context — rules recompute when parent rate changes";x.parameters={docs:{source:{language:"typescript",code:`type VatCtx = { vatRate: number };
type LineItem = { price: number; totalWithVat: number };

// Rule computes totalWithVat from price × (1 + vatRate%).
// depsFn includes context.vatRate so the rule re-runs when VAT changes.
const vatRule: ItemRule<LineItem, VatCtx> = [
  ({ price }, _old, _index, _oldIndex, context) => ({
    totalWithVat:
      Math.round(price * (1 + (context?.vatRate ?? 0) / 100) * 100) / 100,
  }),
  ({ price }, _index, context) => [price, context?.vatRate],
];

// Parent form owns the VAT rate
const vatForm = useValidatedForm({
  fields: [{ id: 'vatRate', label: 'VAT rate (%)', input: number }],
  initial: { vatRate: 20 },
});

const ctx = useMemo(
  () => ({ vatRate: vatForm.values.vatRate }),
  [vatForm.values.vatRate],
);

// All items recompute totalWithVat whenever ctx.vatRate changes —
// no explicit update() call needed, context change triggers the rule.
const { items } = useItems<LineItem, VatCtx>({
  initial: lineItems,
  rules: [vatRule],
  context: ctx,
});`}}};const H={title:"Context Propagation",tags:["autodocs"],parameters:{docs:{canvas:{sourceState:"shown"}}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"() => html`<story-context-budget></story-context-budget>`",...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"() => html`<story-context-delivery></story-context-delivery>`",...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"() => html`<story-context-vat></story-context-vat>`",...x.parameters?.docs?.source}}};const J=["BudgetContext","DeliveryValidation","VatRules"];export{g as BudgetContext,f as DeliveryValidation,x as VatRules,J as __namedExportsOrder,H as default};
