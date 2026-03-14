import{d as b,j as y,b as A,u as T,k as F,t as m,m as V,p as v,q as C,c as D,s as l,n as _,g as p,v as S,w as Y,h as L}from"./inline-file-B7MfOL0v.js";import{b as c}from"./iframe-BmEoGkG7.js";import"./preload-helper-PPVm8Dsz.js";const I=(t,a)=>Array.isArray(t)?t:[[t,a]],M=({items:t,setItems:a,initial:o,rules:s,context:e})=>{const w=T(void 0);return F(()=>{const r=w.current;w.current=e,r!==void 0&&a(i=>i.map((n,d)=>m(y({oldItem:n,newItem:n,rules:s,index:d,context:e,oldContext:r}),V(n))))},[e]),{items:t,setItems:a,touched:V(t),update:v((r,i)=>a((n=[])=>m(I(r??n.length,i).reduce((d,[u,$])=>[...d.slice(0,u),m(y({oldItem:d[u],newItem:{...d[u],...$},rules:s,index:u,context:e})),...d.slice(u+1)],n))),[s,e]),updateAll:v(r=>a((i=[])=>i.map((n,d)=>{const u=C(r,n);return m(y({oldItem:n,newItem:{...n,...u},rules:s,index:d,context:e}))})),[s,e]),remove:v(r=>a((i=[])=>m([...i.slice(0,r),...i.slice(r+1).map((n,d)=>y({rules:s,newItem:n,oldItem:n,index:d+r,oldIndex:d+r+1,context:e}))])),[s,e]),append:v(r=>a((i=[])=>m(i.concat(r.map((n,d)=>y({rules:s,newItem:n,index:d+i.length,context:e}))))),[s,e]),reset:v(()=>a(o),[o]),clear:v(()=>a(m([])),[]),load:v((r,i)=>a(r.map((n,d)=>y({newItem:n,index:d,rules:i??s,context:e}))),[s,e])}},B=({initial:t,rules:a,context:o})=>{const s=b(()=>t.map((r,i)=>y({rules:a,newItem:r,index:i,context:o})),[t]),[e,w]=A(s);return M({items:e,setItems:w,initial:s,rules:a,context:o})},R=c`
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
`,x=[{id:"cost",label:"Cost (€)",input:_,min:0,suffix:(t,a,o,s)=>{const e=s?.budget??1/0;return L(a.cost>e,()=>c`<span class="story-badge story-badge-warn">Over budget!</span>`)}}],P=[{id:"budget",label:"Budget (€)",input:_,min:0}],W=()=>{const t=l({fields:P,initial:{budget:100}}),a=b(()=>({budget:t.values.budget}),[t.values.budget]),o=l({fields:x,initial:{cost:50},context:a}),s=l({fields:x,initial:{cost:120},context:a}),e=l({fields:x,initial:{cost:80},context:a});return c`
        ${R}
        <div class="story-wrap">
            <div class="story-section">
                <h3>Parent form — set the budget</h3>
                ${p(t)}
            </div>

            <div class="story-section">
                <h3>Rows — cost suffix reflects parent budget via context</h3>
                ${p(o)} ${p(s)} ${p(e)}
            </div>

            <p class="story-hint">
                Change the budget — rows immediately update their suffix badge. Context
                flows from parent to each nested form without prop drilling.
            </p>
        </div>
    `};customElements.define("story-context-budget",D(W));const f=()=>c`<story-context-budget></story-context-budget>`;f.storyName="Budget context — parent value in row suffix";const k=[{id:"deliveryDate",label:"Delivery date",input:S,placeholder:"YYYY-MM-DD"}],E=[{id:"rowDate",label:"Row date",input:S,placeholder:"YYYY-MM-DD",validate:(t,a,o,s)=>{const e=s?.deliveryDate;return!t||!e?!1:t<e?`Must be on or after delivery date (${e})`:!1},suffix:(t,a,o,s)=>{const e=s?.deliveryDate;return t&&e&&t>=e?c`<span class="story-badge">✓</span>`:void 0}}],z=()=>{const t=l({fields:k,initial:{deliveryDate:"2024-06-01"}}),a=b(()=>({deliveryDate:t.values.deliveryDate}),[t.values.deliveryDate]),o=l({fields:E,initial:{rowDate:"2024-07-01"},context:a}),s=l({fields:E,initial:{rowDate:"2024-05-01"},context:a});return c`
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
    `};customElements.define("story-context-delivery",D(z));const h=()=>c`<story-context-delivery></story-context-delivery>`;h.storyName="Delivery date context — validate rows against parent date";const N=[{id:"vatRate",label:"VAT rate (%)",input:_,min:0,max:100}],j=[[({price:t},a,o,s,e)=>({totalWithVat:Math.round(t*(1+(e?.vatRate??0)/100)*100)/100}),({price:t},a,o)=>[t,o?.vatRate]]],O=()=>{const t=l({fields:N,initial:{vatRate:20}}),a=b(()=>({vatRate:t.values.vatRate}),[t.values.vatRate]),{items:o}=B({initial:[{price:100,totalWithVat:0},{price:250,totalWithVat:0},{price:75,totalWithVat:0}],rules:j,context:a});return c`
        ${R}
        <div class="story-wrap">
            <div class="story-section">
                <h3>Parent form — set the VAT rate</h3>
                ${p(t)}
            </div>

            <div class="story-section">
                <h3>Line items — totals recomputed when VAT rate changes</h3>
                ${Y(o,(s,e)=>e,s=>c`
                        <div
                            style="display:flex;justify-content:space-between;padding:0.3rem 0;border-bottom:1px solid #eee"
                        >
                            <span style="font-size:0.9rem"
                                >Price: <strong>${s.price.toFixed(2)} €</strong></span
                            >
                            <span style="font-size:0.9rem"
                                >Total with VAT:
                                <strong>${s.totalWithVat.toFixed(2)} €</strong></span
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
    `};customElements.define("story-context-vat",D(O));const g=()=>c`<story-context-vat></story-context-vat>`;g.storyName="VAT context — rules recompute when parent rate changes";const H={title:"Context Propagation",tags:["autodocs"],parameters:{docs:{canvas:{sourceState:"shown"}}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"() => html`<story-context-budget></story-context-budget>`",...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"() => html`<story-context-delivery></story-context-delivery>`",...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"() => html`<story-context-vat></story-context-vat>`",...g.parameters?.docs?.source}}};const J=["BudgetContext","DeliveryValidation","VatRules"];export{f as BudgetContext,h as DeliveryValidation,g as VatRules,J as __namedExportsOrder,H as default};
