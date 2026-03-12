import{e as G,i as J,a as U,o as b,l as V,r as B,b as H,c as x,u as E,d as k}from"./inline-file-CPK-5oS6.js";import{E as w,b as p}from"./iframe-B2Kb3zU0.js";import"./preload-helper-PPVm8Dsz.js";const K={},Q=G(class extends J{constructor(){super(...arguments),this.ot=K}render(e,t){return t()}update(e,[t,a]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((r,s)=>r===this.ot[s]))return w}else if(this.ot===t)return w;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,a)}}),W=U(({id:e,label:t,noLabelFloat:a,alwaysFloatLabel:r,error:s,warning:u,suffix:d,disabled:y,onChange:f,options:l,limit:o,min:g,textProperty:n,valueProperty:C,value:h,values:$,itemRenderer:L,keepOpened:I,keepQuery:R,placeholder:_,wrap:z,showSingle:N,preserveOrder:O,title:P,textual:F,description:M,externalSearch:j,...q})=>p`<cosmoz-autocomplete
			class="input input-autocomplete"
			?data-warning=${!!u}
			name=${e}
			?disabled=${y}
			?wrap=${z}
			?no-label-float=${a}
			?always-float-label=${r}
			?invalid=${!!s}
			?keep-opened=${!!I}
			?keep-query=${!!R}
			?show-single=${!!N}
			?preserve-order=${!!O}
			.placeholder=${_}
			.itemRenderer=${b(L)}
			.errorMessage=${s}
			.label=${t}
			.value=${V(h)}
			.source=${Q([l,h,$],()=>typeof l=="function"?m=>l({...q,...m,value:h,values:$}):l)}
			.textProperty=${n}
			.valueProperty=${C}
			.limit=${o}
			.min=${g}
			.title=${b(P)}
			.textual=${F}
			.onChange=${m=>f(o===1?m?.[0]:m)}
			?external-search=${j}
			>${B({suffix:d,warning:u,description:M})}</cosmoz-autocomplete
		>`),A=e=>({_tag:"loading",patch:e}),S=(e,...t)=>({_tag:"call",fn:e,args:t}),X=e=>{let t=null,a=null,r=null;return{run:(s,u,d)=>new Promise((y,f)=>{r!==null&&(r.gen.return(void 0),r.resolve(null),clearTimeout(t)),r={gen:s,resolve:y,reject:f},t=setTimeout(async()=>{const{gen:l,resolve:o,reject:g}=r;r=null,t=null,a=new AbortController;try{o(await H(l,a.signal,u,d))}catch(n){n instanceof DOMException&&n.name==="AbortError"?o(null):g(n)}finally{a=null}},e)}),cancel:()=>{t!==null&&(clearTimeout(t),t=null),r!==null&&(r.gen.return(void 0),r.resolve(null),r=null),a?.abort(),a=null}}},Y=["Acme Corp","Globex","Initech"],Z={"Acme Corp":"contact@acme.example",Globex:"hello@globex.example",Initech:"info@initech.example"},v=async(e,t)=>(await new Promise(a=>setTimeout(a,800)),Z[t]??""),T={supplier:"",contactEmail:""},D=[{id:"supplier",label:"Supplier",input:W,options:Y,limit:1,showSingle:!0,preserveOrder:!0},{id:"contactEmail",label:"Contact email",disabled:!0}],ee=[async function*(e){return e.supplier?(yield A({contactEmail:"loading..."}),{contactEmail:yield S(v,e.supplier)}):{contactEmail:""}},({supplier:e})=>[e]],te=()=>{const e=E({fields:D,initial:T,asyncRules:[ee]});return p`
        <style>
            .story-wrap {
                font-family: sans-serif;
                max-width: 400px;
                padding: 1rem;
            }
            .story-wrap pre {
                background: #f4f4f4;
                border-radius: 4px;
                font-size: 0.8rem;
                margin-top: 1rem;
                padding: 0.75rem;
            }
            .story-hint {
                color: #666;
                font-size: 0.85rem;
                margin-top: 0.5rem;
            }
        </style>
        <div class="story-wrap">
            ${k(e)}
            <p class="story-hint">
                Switch supplier quickly — only the last selection's email loads.
            </p>
            <pre>${JSON.stringify(e.values,null,2)}</pre>
        </div>
    `};customElements.define("story-supplier-take-latest",x(te));const i=()=>p`<story-supplier-take-latest></story-supplier-take-latest>`;i.storyName="TakeLatest — supplier contact email";const re=[async function*(e){return e.supplier?(yield A({contactEmail:"loading..."}),{contactEmail:yield S(v,e.supplier)}):{contactEmail:""}},({supplier:e})=>[e],()=>X(500)],ae=()=>{const e=E({fields:D,initial:T,asyncRules:[re]});return p`
        <style>
            .story-wrap {
                font-family: sans-serif;
                max-width: 400px;
                padding: 1rem;
            }
            .story-wrap pre {
                background: #f4f4f4;
                border-radius: 4px;
                font-size: 0.8rem;
                margin-top: 1rem;
                padding: 0.75rem;
            }
            .story-hint {
                color: #666;
                font-size: 0.85rem;
                margin-top: 0.5rem;
            }
        </style>
        <div class="story-wrap">
            ${k(e)}
            <p class="story-hint">
                Switch supplier rapidly — the fetch only fires after 500ms of silence.
            </p>
            <pre>${JSON.stringify(e.values,null,2)}</pre>
        </div>
    `};customElements.define("story-supplier-debounce",x(ae));const c=()=>p`<story-supplier-debounce></story-supplier-debounce>`;c.storyName="Debounce — supplier contact email";const ne={title:"Async Rules"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => html`<story-supplier-take-latest></story-supplier-take-latest>`",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"() => html`<story-supplier-debounce></story-supplier-debounce>`",...c.parameters?.docs?.source}}};const ie=["TakeLatest","Debounce"];export{c as Debounce,i as TakeLatest,ie as __namedExportsOrder,ne as default};
