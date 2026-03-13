import{d as w,j as y,b as S,k as m,t as $,m as v,p as A,c as D,q as l,n as b,g as p,s as E,v as T,h as F}from"./inline-file-CbPQB0fa.js";import{b as c}from"./iframe-COdpOZMV.js";import"./preload-helper-PPVm8Dsz.js";const I=(t,e)=>Array.isArray(t)?t:[[t,e]],C=({items:t,setItems:e,initial:o,rules:a,context:s})=>({items:t,setItems:e,touched:$(t),update:m((i,n)=>e((r=[])=>v(I(i??r.length,n).reduce((d,[u,V])=>[...d.slice(0,u),v(y({oldItem:d[u],newItem:{...d[u],...V},rules:a,index:u,context:s})),...d.slice(u+1)],r))),[a,s]),updateAll:m(i=>e((n=[])=>n.map((r,d)=>{const u=A(i,r);return v(y({oldItem:r,newItem:{...r,...u},rules:a,index:d,context:s}))})),[a,s]),remove:m(i=>e((n=[])=>v([...n.slice(0,i),...n.slice(i+1).map((r,d)=>y({rules:a,newItem:r,oldItem:r,index:d+i,oldIndex:d+i+1,context:s}))])),[a,s]),append:m(i=>e((n=[])=>v(n.concat(i.map((r,d)=>y({rules:a,newItem:r,index:d+n.length,context:s}))))),[a,s]),reset:m(()=>e(o),[o]),clear:m(()=>e(v([])),[]),load:m((i,n)=>e(i.map((r,d)=>y({newItem:r,index:d,rules:n??a,context:s}))),[a,s])}),L=({initial:t,rules:e,context:o})=>{const a=w(()=>t.map((n,r)=>y({rules:e,newItem:n,index:r,context:o})),[t]),[s,i]=S(a);return C({items:s,setItems:i,initial:a,rules:e,context:o})},_=c`
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
`,x=[{id:"cost",label:"Cost (€)",input:b,min:0,suffix:(t,e,o,a)=>{const s=a?.budget??1/0;return F(e.cost>s,()=>c`<span class="story-badge story-badge-warn">Over budget!</span>`)}}],Y=[{id:"budget",label:"Budget (€)",input:b,min:0}],M=()=>{const t=l({fields:Y,initial:{budget:100}}),e=w(()=>({budget:t.values.budget}),[t.values.budget]),o=l({fields:x,initial:{cost:50},context:e}),a=l({fields:x,initial:{cost:120},context:e}),s=l({fields:x,initial:{cost:80},context:e});return c`
        ${_}
        <div class="story-wrap">
            <div class="story-section">
                <h3>Parent form — set the budget</h3>
                ${p(t)}
            </div>

            <div class="story-section">
                <h3>Rows — cost suffix reflects parent budget via context</h3>
                ${p(o)} ${p(a)} ${p(s)}
            </div>

            <p class="story-hint">
                Change the budget — rows immediately update their suffix badge. Context
                flows from parent to each nested form without prop drilling.
            </p>
        </div>
    `};customElements.define("story-context-budget",D(M));const h=()=>c`<story-context-budget></story-context-budget>`;h.storyName="Budget context — parent value in row suffix";const P=[{id:"deliveryDate",label:"Delivery date",input:E,placeholder:"YYYY-MM-DD"}],R=[{id:"rowDate",label:"Row date",input:E,placeholder:"YYYY-MM-DD",validate:(t,e,o,a)=>{const s=a?.deliveryDate;return!t||!s?!1:t<s?`Must be on or after delivery date (${s})`:!1},suffix:(t,e,o,a)=>{const s=a?.deliveryDate;return t&&s&&t>=s?c`<span class="story-badge">✓</span>`:void 0}}],B=()=>{const t=l({fields:P,initial:{deliveryDate:"2024-06-01"}}),e=w(()=>({deliveryDate:t.values.deliveryDate}),[t.values.deliveryDate]),o=l({fields:R,initial:{rowDate:"2024-07-01"},context:e}),a=l({fields:R,initial:{rowDate:"2024-05-01"},context:e});return c`
        ${_}
        <div class="story-wrap">
            <div class="story-section">
                <h3>Parent form — set the delivery date</h3>
                ${p(t)}
            </div>

            <div class="story-section">
                <h3>Rows — row date validated against parent delivery date</h3>
                ${p(o)} ${p(a)}
            </div>

            <p class="story-hint">
                Change the delivery date — rows with earlier dates instantly show a
                validation error. Context is the mechanism; no manual prop passing
                needed.
            </p>
        </div>
    `};customElements.define("story-context-delivery",D(B));const g=()=>c`<story-context-delivery></story-context-delivery>`;g.storyName="Delivery date context — validate rows against parent date";const W=[{id:"vatRate",label:"VAT rate (%)",input:b,min:0,max:100}],k=[[({price:t},e,o,a,s)=>({totalWithVat:Math.round(t*(1+(s?.vatRate??0)/100)*100)/100}),({price:t},e,o)=>[t,o?.vatRate]]],N=[{id:"price",label:"Price (€)",input:b,min:0}],z=()=>{const t=l({fields:W,initial:{vatRate:20}}),e=w(()=>({vatRate:t.values.vatRate}),[t.values.vatRate]),{items:o}=L({initial:[{price:100,totalWithVat:0},{price:250,totalWithVat:0},{price:75,totalWithVat:0}],rules:k,context:e});return c`
        ${_}
        <div class="story-wrap">
            <div class="story-section">
                <h3>Parent form — set the VAT rate</h3>
                ${p(t)}
            </div>

            <div class="story-section">
                <h3>Line items — totals recomputed when VAT rate changes</h3>
                ${T(o,(a,s)=>s,a=>c`
                        <div
                            style="display:flex;align-items:center;gap:1rem;margin-bottom:0.4rem"
                        >
                            ${p(l({fields:N,initial:a,context:e}))}
                            <span style="font-size:0.85rem;white-space:nowrap">
                                Total with VAT:
                                <strong>${a.totalWithVat.toFixed(2)} €</strong>
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
    `};customElements.define("story-context-vat",D(z));const f=()=>c`<story-context-vat></story-context-vat>`;f.storyName="VAT context — rules recompute when parent rate changes";const q={title:"Context Propagation",tags:["autodocs"],parameters:{docs:{canvas:{sourceState:"shown"}}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"() => html`<story-context-budget></story-context-budget>`",...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"() => html`<story-context-delivery></story-context-delivery>`",...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"() => html`<story-context-vat></story-context-vat>`",...f.parameters?.docs?.source}}};const G=["BudgetContext","DeliveryValidation","VatRules"];export{h as BudgetContext,g as DeliveryValidation,f as VatRules,G as __namedExportsOrder,q as default};
