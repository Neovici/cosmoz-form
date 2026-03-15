import{d as x,j as y,b as E,u as T,k as $,t as p,m as _,p as v,q as S,c as R,s as c,n as F,g as u,v as I,w as M,h as L}from"./inline-file-wPTlcz37.js";import{b as l}from"./iframe-CUxvJn2J.js";import"./preload-helper-PPVm8Dsz.js";const W=(e,a)=>Array.isArray(e)?e:[[e,a]],B=({items:e,setItems:a,initial:s,rules:o,context:t,touched:b})=>{const w=T(void 0);return $(()=>{const r=w.current;w.current=t,r!==void 0&&a(i=>i.map((n,d)=>p(y({oldItem:n,newItem:n,rules:o,index:d,context:t,oldContext:r}),_(n))))},[t]),{items:e,setItems:a,touched:x(()=>_(e)||(b??!1),[e,b]),update:v((r,i)=>a((n=[])=>p(W(r??n.length,i).reduce((d,[m,A])=>[...d.slice(0,m),p(y({oldItem:d[m],newItem:{...d[m],...A},rules:o,index:m,context:t})),...d.slice(m+1)],n))),[o,t]),updateAll:v(r=>a((i=[])=>i.map((n,d)=>{const m=S(r,n);return p(y({oldItem:n,newItem:{...n,...m},rules:o,index:d,context:t}))})),[o,t]),remove:v(r=>a((i=[])=>p([...i.slice(0,r),...i.slice(r+1).map((n,d)=>y({rules:o,newItem:n,oldItem:n,index:d+r,oldIndex:d+r+1,context:t}))])),[o,t]),append:v(r=>a((i=[])=>p(i.concat(r.map((n,d)=>y({rules:o,newItem:n,index:d+i.length,context:t}))))),[o,t]),reset:v(()=>a(s),[s]),clear:v(()=>a(p([])),[]),load:v((r,i)=>a(r.map((n,d)=>y({newItem:n,index:d,rules:i??o,context:t}))),[o,t])}},Y=({initial:e,rules:a,context:s,touched:o})=>{const t=x(()=>e.map((r,i)=>y({rules:a,newItem:r,index:i,context:s})),[e]),[b,w]=E(t);return B({items:b,setItems:w,initial:t,rules:a,context:s,touched:o})},V=l`
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
`,D=[{id:"cost",label:"Cost (€)",input:F,min:0,suffix:(e,a,s,o)=>{const t=o?.budget??1/0;return L(e>t,()=>l`<span class="story-badge story-badge-warn">Over budget!</span>`)}}],P=[{id:"budget",label:"Budget (€)",input:F,min:0}],k=()=>{const e=c({fields:P,initial:{budget:100}}),a=x(()=>({budget:e.values.budget}),[e.values.budget]),s=c({fields:D,initial:{cost:50},context:a}),o=c({fields:D,initial:{cost:120},context:a}),t=c({fields:D,initial:{cost:80},context:a});return l`
        ${V}
        <div class="story-wrap">
            <div class="story-section">
                <h3>Parent form — set the budget</h3>
                ${u(e)}
            </div>

            <div class="story-section">
                <h3>Rows — cost suffix reflects parent budget via context</h3>
                ${u(s)} ${u(o)} ${u(t)}
            </div>

            <p class="story-hint">
                Change the budget — rows immediately update their suffix badge. Context
                flows from parent to each nested form without prop drilling.
            </p>
        </div>
    `};customElements.define("story-context-budget",R(k));const g=()=>l`<story-context-budget></story-context-budget>`;g.storyName="Budget context — parent value in row suffix";g.parameters={docs:{source:{language:"typescript",code:`type BudgetCtx = { budget: number };
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
});`}}};const z=[{id:"deliveryDate",label:"Delivery date",input:I,placeholder:"YYYY-MM-DD"}],C=[{id:"rowDate",label:"Row date",input:I,placeholder:"YYYY-MM-DD",validate:(e,a,s,o)=>{const t=o?.deliveryDate;return!e||!t?!1:e<t?`Must be on or after delivery date (${t})`:!1},suffix:(e,a,s,o)=>{const t=o?.deliveryDate;return e&&t&&e>=t?l`<span class="story-badge">✓</span>`:void 0}}],N=()=>{const e=c({fields:z,initial:{deliveryDate:"2024-06-01"}}),a=x(()=>({deliveryDate:e.values.deliveryDate}),[e.values.deliveryDate]),s=c({fields:C,initial:{rowDate:"2024-07-01"},context:a,touched:e.touched}),o=c({fields:C,initial:{rowDate:"2024-05-01"},context:a,touched:e.touched});return l`
        ${V}
        <div class="story-wrap">
            <div class="story-section">
                <h3>Parent form — set the delivery date</h3>
                ${u(e)}
            </div>

            <div class="story-section">
                <h3>Rows — row date validated against parent delivery date</h3>
                ${u(s)} ${u(o)}
            </div>

            <p class="story-hint">
                Change the delivery date — rows with earlier dates instantly show a
                validation error. Context is the mechanism; no manual prop passing
                needed.
            </p>
        </div>
    `};customElements.define("story-context-delivery",R(N));const h=()=>l`<story-context-delivery></story-context-delivery>`;h.storyName="Delivery date context — validate rows against parent date";h.parameters={docs:{source:{language:"typescript",code:`type DeliveryCtx = { deliveryDate: string };
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
});`}}};const O=[{id:"vatRate",label:"VAT rate (%)",input:F,min:0,max:100}],j=[[({price:e},a,s,o,t)=>({totalWithVat:Math.round(e*(1+(t?.vatRate??0)/100)*100)/100}),({price:e},a,s)=>[e,s?.vatRate]]],U=()=>{const e=c({fields:O,initial:{vatRate:20}}),a=x(()=>({vatRate:e.values.vatRate}),[e.values.vatRate]),{items:s}=Y({initial:[{price:100,totalWithVat:0},{price:250,totalWithVat:0},{price:75,totalWithVat:0}],rules:j,context:a});return l`
        ${V}
        <div class="story-wrap">
            <div class="story-section">
                <h3>Parent form — set the VAT rate</h3>
                ${u(e)}
            </div>

            <div class="story-section">
                <h3>Line items — totals recomputed when VAT rate changes</h3>
                ${M(s,(o,t)=>t,o=>l`
                        <div
                            style="display:flex;justify-content:space-between;padding:0.3rem 0;border-bottom:1px solid #eee"
                        >
                            <span style="font-size:0.9rem"
                                >Price: <strong>${o.price.toFixed(2)} €</strong></span
                            >
                            <span style="font-size:0.9rem"
                                >Total with VAT:
                                <strong>${o.totalWithVat.toFixed(2)} €</strong></span
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
    `};customElements.define("story-context-vat",R(U));const f=()=>l`<story-context-vat></story-context-vat>`;f.storyName="VAT context — rules recompute when parent rate changes";f.parameters={docs:{source:{language:"typescript",code:`type VatCtx = { vatRate: number };
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
});`}}};const J={title:"Context Propagation",tags:["autodocs"],parameters:{docs:{canvas:{sourceState:"shown"}}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"() => html`<story-context-budget></story-context-budget>`",...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"() => html`<story-context-delivery></story-context-delivery>`",...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"() => html`<story-context-vat></story-context-vat>`",...f.parameters?.docs?.source}}};const K=["BudgetContext","DeliveryValidation","VatRules"];export{g as BudgetContext,h as DeliveryValidation,f as VatRules,K as __namedExportsOrder,J as default};
