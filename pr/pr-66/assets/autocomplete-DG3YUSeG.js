import{o as e,l as F,h as G,n as I,b as p}from"./iframe-7qdxuFs1.js";import{i as J,e as K}from"./inline-file-FDBLF27i.js";const L=["font-size: var(--cz-text-sm)","line-height: var(--cz-text-sm-line-height)","font-weight: var(--cz-font-weight-regular)","padding: 0 calc(var(--cz-spacing) * 3)","color: var(--cz-color-text-secondary)"].join(";"),O=t=>I(t,()=>p`<span slot="no-result" style=${L}>${t}</span>`),U=J(({id:t,variant:m,compact:d,hint:u,label:h,error:$,required:g,warning:n,suffix:z,mode:c,disabled:f,onChange:v,options:r,limit:i,min:y,textProperty:x,valueProperty:w,value:o,values:l,itemRenderer:b,chipRenderer:R,keepOpened:k,keepQuery:q,placeholder:C,wrap:P,showSingle:j,preserveOrder:H,title:M,textual:N,description:S,externalSearch:A,itemHeight:B,noResult:D,context:s,...E})=>p`<cosmoz-autocomplete
			class="input input-autocomplete"
			mode=${e(c)}
			variant=${e(m)}
			?compact=${d}
			hint=${e(u)}
			?data-warning=${!!n}
			name=${t}
			?disabled=${f}
			?wrap=${P}
			?invalid=${!!$}
			?required=${g}
			?keep-opened=${!!k}
			?keep-query=${!!q}
			?show-single=${!!j}
			?preserve-order=${!!H}
			.placeholder=${C}
			.itemRenderer=${e(b)}
			.chipRenderer=${e(R)}
			.errorMessage=${$}
			.label=${h}
			.value=${F(o)}
			.source=${G([r,o,l,s],()=>typeof r=="function"?a=>r({...E,...a,value:o,values:l,context:s}):r)}
			.textProperty=${x}
			.valueProperty=${w}
			.limit=${i}
			.min=${y}
			.itemHeight=${B}
			.title=${e(M)}
			.textual=${N}
			.onChange=${a=>v(i===1||c==="select"?a?.[0]:a)}
			?external-search=${A}
			>${K({suffix:z,warning:n,description:S})}${O(D)}</cosmoz-autocomplete
		>`);export{U as a};
