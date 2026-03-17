import{d as x,j as c,b as E,u as T,k as $,t as u,m as _,p as m,q as S,c as R,s as p,n as F,g as v,v as I,w as M,h as L}from"./inline-file-C06oeLL9.js";import{b as l}from"./iframe-B0kM-or0.js";import"./preload-helper-PPVm8Dsz.js";const W=(e,o)=>Array.isArray(e)?e:[[e,o]],B=({items:e,setItems:o,initial:i,rules:a,context:t,touched:b})=>{const w=T(void 0);return $(()=>{const r=w.current;w.current=t,r!==void 0&&o(d=>d.map((s,n)=>u(c({oldItem:s,newItem:s,rules:a,index:n,context:t,oldContext:r}),_(s))))},[t]),{items:e,setItems:o,touched:x(()=>_(e)||(b??!1),[e,b]),update:m((r,d)=>o((s=[])=>u(W(r??s.length,d).reduce((n,[y,A])=>[...n.slice(0,y),u(c({oldItem:n[y],newItem:{...n[y],...A},rules:a,index:y,context:t})),...n.slice(y+1)],s))),[a,t]),updateAll:m(r=>o((d=[])=>d.map((s,n)=>{const y=S(r,s);return u(c({oldItem:s,newItem:{...s,...y},rules:a,index:n,context:t}))})),[a,t]),remove:m(r=>o((d=[])=>u([...d.slice(0,r),...d.slice(r+1).map((s,n)=>c({rules:a,newItem:s,oldItem:s,index:n+r,oldIndex:n+r+1,context:t}))])),[a,t]),append:m(r=>o((d=[])=>u(d.concat(r.map((s,n)=>c({rules:a,newItem:s,index:n+d.length,context:t}))))),[a,t]),prepend:m(r=>o((d=[])=>u([...r.map((s,n)=>c({rules:a,newItem:s,index:n,context:t})),...d.map((s,n)=>c({rules:a,newItem:s,oldItem:s,index:n+r.length,oldIndex:n,context:t}))])),[a,t]),reset:m(()=>o(i),[i]),clear:m(()=>o(u([])),[]),load:m((r,d)=>o(r.map((s,n)=>c({newItem:s,index:n,rules:d??a,context:t}))),[a,t])}},Y=({initial:e,rules:o,context:i,touched:a})=>{const t=x(()=>e.map((r,d)=>c({rules:o,newItem:r,index:d,context:i})),[e]),[b,w]=E(t);return B({items:b,setItems:w,initial:t,rules:o,context:i,touched:a})},V=l`
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
`,D=[{id:"cost",label:"Cost (€)",input:F,min:0,suffix:(e,o,i,a)=>{const t=a?.budget??1/0;return L(e>t,()=>l`<span class="story-badge story-badge-warn">Over budget!</span>`)}}],P=[{id:"budget",label:"Budget (€)",input:F,min:0}],k=()=>{const e=p({fields:P,initial:{budget:100}}),o=x(()=>({budget:e.values.budget}),[e.values.budget]),i=p({fields:D,initial:{cost:50},context:o}),a=p({fields:D,initial:{cost:120},context:o}),t=p({fields:D,initial:{cost:80},context:o});return l`
        ${V}
        <div class="story-wrap">
            <div class="story-section">
                <h3>Parent form — set the budget</h3>
                ${v(e)}
            </div>

            <div class="story-section">
                <h3>Rows — cost suffix reflects parent budget via context</h3>
                ${v(i)} ${v(a)} ${v(t)}
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
});`}}};const z=[{id:"deliveryDate",label:"Delivery date",input:I,placeholder:"YYYY-MM-DD"}],C=[{id:"rowDate",label:"Row date",input:I,placeholder:"YYYY-MM-DD",validate:(e,o,i,a)=>{const t=a?.deliveryDate;return!e||!t?!1:e<t?`Must be on or after delivery date (${t})`:!1},suffix:(e,o,i,a)=>{const t=a?.deliveryDate;return e&&t&&e>=t?l`<span class="story-badge">✓</span>`:void 0}}],N=()=>{const e=p({fields:z,initial:{deliveryDate:"2024-06-01"}}),o=x(()=>({deliveryDate:e.values.deliveryDate}),[e.values.deliveryDate]),i=p({fields:C,initial:{rowDate:"2024-07-01"},context:o,touched:e.touched}),a=p({fields:C,initial:{rowDate:"2024-05-01"},context:o,touched:e.touched});return l`
        ${V}
        <div class="story-wrap">
            <div class="story-section">
                <h3>Parent form — set the delivery date</h3>
                ${v(e)}
            </div>

            <div class="story-section">
                <h3>Rows — row date validated against parent delivery date</h3>
                ${v(i)} ${v(a)}
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
});`}}};const O=[{id:"vatRate",label:"VAT rate (%)",input:F,min:0,max:100}],j=[[({price:e},o,i,a,t)=>({totalWithVat:Math.round(e*(1+(t?.vatRate??0)/100)*100)/100}),({price:e},o,i)=>[e,i?.vatRate]]],U=()=>{const e=p({fields:O,initial:{vatRate:20}}),o=x(()=>({vatRate:e.values.vatRate}),[e.values.vatRate]),{items:i}=Y({initial:[{price:100,totalWithVat:0},{price:250,totalWithVat:0},{price:75,totalWithVat:0}],rules:j,context:o});return l`
        ${V}
        <div class="story-wrap">
            <div class="story-section">
                <h3>Parent form — set the VAT rate</h3>
                ${v(e)}
            </div>

            <div class="story-section">
                <h3>Line items — totals recomputed when VAT rate changes</h3>
                ${M(i,(a,t)=>t,a=>l`
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
