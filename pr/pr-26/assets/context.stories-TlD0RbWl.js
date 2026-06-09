import{p as m,q as i,y as v,h as p,b as n,x as g,I as h,n as f}from"./inline-file-Dfuny3sM.js";import{b as r}from"./iframe-DvWMYFXb.js";import{u as b}from"./use-items-C-HRmi8E.js";import"./preload-helper-PPVm8Dsz.js";const x=r`
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
`,u=[{id:"cost",label:"Cost (€)",input:v,min:0,suffix:(e,o,s,t)=>{const a=t?.budget??1/0;return f(e>a,()=>r`<cosmoz-badge color="warning">Over budget!</cosmoz-badge>`)}}],w=[{id:"budget",label:"Budget (€)",input:v,min:0}],D=()=>{const e=i({fields:w,initial:{budget:100}}),o=p(()=>({budget:e.values.budget}),[e.values.budget]),s=i({fields:u,initial:{cost:50},context:o}),t=i({fields:u,initial:{cost:120},context:o}),a=i({fields:u,initial:{cost:80},context:o});return r`
        ${x}
        <div class="story-wrap">
            <div class="story-section">
                <h3>Parent form — set the budget</h3>
                ${n(e)}
            </div>

            <div class="story-section">
                <h3>Rows — cost suffix reflects parent budget via context</h3>
                ${n(s)} ${n(t)} ${n(a)}
            </div>

            <p class="story-hint">
                Change the budget — rows immediately update their suffix badge. Context
                flows from parent to each nested form without prop drilling.
            </p>
        </div>
    `};customElements.define("story-context-budget",m(D));const d=()=>r`<story-context-budget></story-context-budget>`;d.storyName="Budget context — parent value in row suffix";d.parameters={docs:{source:{language:"typescript",code:`type BudgetCtx = { budget: number };
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
});`}}};const R=[{id:"deliveryDate",label:"Delivery date",input:g,placeholder:"YYYY-MM-DD"}],y=[{id:"rowDate",label:"Row date",input:g,placeholder:"YYYY-MM-DD",validate:(e,o,s,t)=>{const a=t?.deliveryDate;return!e||!a?!1:e<a?`Must be on or after delivery date (${a})`:!1},suffix:(e,o,s,t)=>{const a=t?.deliveryDate;return e&&a&&e>=a?r`<span class="story-badge">✓</span>`:void 0}}],F=()=>{const e=i({fields:R,initial:{deliveryDate:"2024-06-01"}}),o=p(()=>({deliveryDate:e.values.deliveryDate}),[e.values.deliveryDate]),s=i({fields:y,initial:{rowDate:"2024-07-01"},context:o,touched:e.touched}),t=i({fields:y,initial:{rowDate:"2024-05-01"},context:o,touched:e.touched});return r`
        ${x}
        <div class="story-wrap">
            <div class="story-section">
                <h3>Parent form — set the delivery date</h3>
                ${n(e)}
            </div>

            <div class="story-section">
                <h3>Rows — row date validated against parent delivery date</h3>
                ${n(s)} ${n(t)}
            </div>

            <p class="story-hint">
                Change the delivery date — rows with earlier dates instantly show a
                validation error. Context is the mechanism; no manual prop passing
                needed.
            </p>
        </div>
    `};customElements.define("story-context-delivery",m(F));const l=()=>r`<story-context-delivery></story-context-delivery>`;l.storyName="Delivery date context — validate rows against parent date";l.parameters={docs:{source:{language:"typescript",code:`type DeliveryCtx = { deliveryDate: string };
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
});`}}};const V=[{id:"vatRate",label:"VAT rate (%)",input:v,min:0,max:100}],_=[[({price:e},o,s,t,a)=>({totalWithVat:Math.round(e*(1+(a?.vatRate??0)/100)*100)/100}),({price:e},o,s)=>[e,s?.vatRate]]],C=()=>{const e=i({fields:V,initial:{vatRate:20}}),o=p(()=>({vatRate:e.values.vatRate}),[e.values.vatRate]),{items:s}=b({initial:[{price:100,totalWithVat:0},{price:250,totalWithVat:0},{price:75,totalWithVat:0}],rules:_,context:o});return r`
        ${x}
        <div class="story-wrap">
            <div class="story-section">
                <h3>Parent form — set the VAT rate</h3>
                ${n(e)}
            </div>

            <div class="story-section">
                <h3>Line items — totals recomputed when VAT rate changes</h3>
                ${h(s,(t,a)=>a,t=>r`
                        <div
                            style="display:flex;justify-content:space-between;padding:0.3rem 0;border-bottom:1px solid #eee"
                        >
                            <span style="font-size:0.9rem"
                                >Price: <strong>${t.price.toFixed(2)} €</strong></span
                            >
                            <span style="font-size:0.9rem"
                                >Total with VAT:
                                <strong>${t.totalWithVat.toFixed(2)} €</strong></span
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
    `};customElements.define("story-context-vat",m(C));const c=()=>r`<story-context-vat></story-context-vat>`;c.storyName="VAT context — rules recompute when parent rate changes";c.parameters={docs:{source:{language:"typescript",code:`type VatCtx = { vatRate: number };
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
});`}}};const A={title:"Context Propagation",tags:["autodocs"],parameters:{docs:{canvas:{sourceState:"shown"}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"() => html`<story-context-budget></story-context-budget>`",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"() => html`<story-context-delivery></story-context-delivery>`",...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"() => html`<story-context-vat></story-context-vat>`",...c.parameters?.docs?.source}}};const S=["BudgetContext","DeliveryValidation","VatRules"];export{d as BudgetContext,l as DeliveryValidation,c as VatRules,S as __namedExportsOrder,A as default};
