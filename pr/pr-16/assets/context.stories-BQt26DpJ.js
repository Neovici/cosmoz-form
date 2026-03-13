import{d as b,j as y,b as A,u as T,k as C,t as m,m as E,p as v,q as F,c as _,s as l,n as x,g as p,v as S,w as I,h as L}from"./inline-file-DVCQ-M7w.js";import{b as c}from"./iframe-GxZUm_Zb.js";import"./preload-helper-PPVm8Dsz.js";const Y=(t,e)=>Array.isArray(t)?t:[[t,e]],M=({items:t,setItems:e,initial:o,rules:s,context:a})=>{const w=T(void 0);return C(()=>{const r=w.current;w.current=a,r!==void 0&&e(i=>i.map((n,d)=>m(y({oldItem:n,newItem:n,rules:s,index:d,context:a,oldContext:r}),E(n))))},[a]),{items:t,setItems:e,touched:E(t),update:v((r,i)=>e((n=[])=>m(Y(r??n.length,i).reduce((d,[u,$])=>[...d.slice(0,u),m(y({oldItem:d[u],newItem:{...d[u],...$},rules:s,index:u,context:a})),...d.slice(u+1)],n))),[s,a]),updateAll:v(r=>e((i=[])=>i.map((n,d)=>{const u=F(r,n);return m(y({oldItem:n,newItem:{...n,...u},rules:s,index:d,context:a}))})),[s,a]),remove:v(r=>e((i=[])=>m([...i.slice(0,r),...i.slice(r+1).map((n,d)=>y({rules:s,newItem:n,oldItem:n,index:d+r,oldIndex:d+r+1,context:a}))])),[s,a]),append:v(r=>e((i=[])=>m(i.concat(r.map((n,d)=>y({rules:s,newItem:n,index:d+i.length,context:a}))))),[s,a]),reset:v(()=>e(o),[o]),clear:v(()=>e(m([])),[]),load:v((r,i)=>e(r.map((n,d)=>y({newItem:n,index:d,rules:i??s,context:a}))),[s,a])}},P=({initial:t,rules:e,context:o})=>{const s=b(()=>t.map((r,i)=>y({rules:e,newItem:r,index:i,context:o})),[t]),[a,w]=A(s);return M({items:a,setItems:w,initial:s,rules:e,context:o})},R=c`
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
`,D=[{id:"cost",label:"Cost (€)",input:x,min:0,suffix:(t,e,o,s)=>{const a=s?.budget??1/0;return L(e.cost>a,()=>c`<span class="story-badge story-badge-warn">Over budget!</span>`)}}],B=[{id:"budget",label:"Budget (€)",input:x,min:0}],W=()=>{const t=l({fields:B,initial:{budget:100}}),e=b(()=>({budget:t.values.budget}),[t.values.budget]),o=l({fields:D,initial:{cost:50},context:e}),s=l({fields:D,initial:{cost:120},context:e}),a=l({fields:D,initial:{cost:80},context:e});return c`
        ${R}
        <div class="story-wrap">
            <div class="story-section">
                <h3>Parent form — set the budget</h3>
                ${p(t)}
            </div>

            <div class="story-section">
                <h3>Rows — cost suffix reflects parent budget via context</h3>
                ${p(o)} ${p(s)} ${p(a)}
            </div>

            <p class="story-hint">
                Change the budget — rows immediately update their suffix badge. Context
                flows from parent to each nested form without prop drilling.
            </p>
        </div>
    `};customElements.define("story-context-budget",_(W));const h=()=>c`<story-context-budget></story-context-budget>`;h.storyName="Budget context — parent value in row suffix";const k=[{id:"deliveryDate",label:"Delivery date",input:S,placeholder:"YYYY-MM-DD"}],V=[{id:"rowDate",label:"Row date",input:S,placeholder:"YYYY-MM-DD",validate:(t,e,o,s)=>{const a=s?.deliveryDate;return!t||!a?!1:t<a?`Must be on or after delivery date (${a})`:!1},suffix:(t,e,o,s)=>{const a=s?.deliveryDate;return t&&a&&t>=a?c`<span class="story-badge">✓</span>`:void 0}}],N=()=>{const t=l({fields:k,initial:{deliveryDate:"2024-06-01"}}),e=b(()=>({deliveryDate:t.values.deliveryDate}),[t.values.deliveryDate]),o=l({fields:V,initial:{rowDate:"2024-07-01"},context:e}),s=l({fields:V,initial:{rowDate:"2024-05-01"},context:e});return c`
        ${R}
        <div class="story-wrap">
            <div class="story-section">
                <h3>Parent form — set the delivery date</h3>
                ${p(t)}
            </div>

            <div class="story-section">
                <h3>Rows — row date validated against parent delivery date</h3>
                ${p(o)} ${p(s)}
            </div>

            <p class="story-hint">
                Change the delivery date — rows with earlier dates instantly show a
                validation error. Context is the mechanism; no manual prop passing
                needed.
            </p>
        </div>
    `};customElements.define("story-context-delivery",_(N));const f=()=>c`<story-context-delivery></story-context-delivery>`;f.storyName="Delivery date context — validate rows against parent date";const z=[{id:"vatRate",label:"VAT rate (%)",input:x,min:0,max:100}],O=[[({price:t},e,o,s,a)=>({totalWithVat:Math.round(t*(1+(a?.vatRate??0)/100)*100)/100}),({price:t},e,o)=>[t,o?.vatRate]]],U=[{id:"price",label:"Price (€)",input:x,min:0}],j=()=>{const t=l({fields:z,initial:{vatRate:20}}),e=b(()=>({vatRate:t.values.vatRate}),[t.values.vatRate]),{items:o}=P({initial:[{price:100,totalWithVat:0},{price:250,totalWithVat:0},{price:75,totalWithVat:0}],rules:O,context:e});return c`
        ${R}
        <div class="story-wrap">
            <div class="story-section">
                <h3>Parent form — set the VAT rate</h3>
                ${p(t)}
            </div>

            <div class="story-section">
                <h3>Line items — totals recomputed when VAT rate changes</h3>
                ${I(o,(s,a)=>a,s=>c`
                        <div
                            style="display:flex;align-items:center;gap:1rem;margin-bottom:0.4rem"
                        >
                            ${p(l({fields:U,initial:s,context:e}))}
                            <span style="font-size:0.85rem;white-space:nowrap">
                                Total with VAT:
                                <strong>${s.totalWithVat.toFixed(2)} €</strong>
                            </span>
                        </div>
                    `)}
            </div>

            <p class="story-hint">
                Change the VAT rate — all line item totals instantly recompute via
                context-aware rules. Rules receive <code>context.vatRate</code> in their
                <code>depsFn</code> so they re-run whenever it changes.
            </p>
        </div>
    `};customElements.define("story-context-vat",_(j));const g=()=>c`<story-context-vat></story-context-vat>`;g.storyName="VAT context — rules recompute when parent rate changes";const J={title:"Context Propagation",tags:["autodocs"],parameters:{docs:{canvas:{sourceState:"shown"}}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"() => html`<story-context-budget></story-context-budget>`",...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"() => html`<story-context-delivery></story-context-delivery>`",...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"() => html`<story-context-vat></story-context-vat>`",...g.parameters?.docs?.source}}};const K=["BudgetContext","DeliveryValidation","VatRules"];export{h as BudgetContext,f as DeliveryValidation,g as VatRules,K as __namedExportsOrder,J as default};
