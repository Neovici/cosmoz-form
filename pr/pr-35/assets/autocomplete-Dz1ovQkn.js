import{b as B}from"./iframe-GNBATVmi.js";import{d as D,o as e,l as E,J as F,g as G}from"./inline-file-BesmN0rx.js";const L=D(({id:m,variant:s,label:c,error:a,required:d,warning:o,suffix:u,mode:l,disabled:h,onChange:g,options:r,limit:n,min:f,textProperty:y,valueProperty:b,value:$,values:p,itemRenderer:x,chipRenderer:k,keepOpened:q,keepQuery:v,placeholder:w,wrap:z,showSingle:C,preserveOrder:P,title:R,textual:H,description:J,externalSearch:M,itemHeight:j,context:i,...A})=>B`<cosmoz-autocomplete
			class="input input-autocomplete"
			mode=${e(l)}
			variant=${e(s)}
			?data-warning=${!!o}
			name=${m}
			?disabled=${h}
			?wrap=${z}
			?invalid=${!!a}
			?required=${d}
			?keep-opened=${!!q}
			?keep-query=${!!v}
			?show-single=${!!C}
			?preserve-order=${!!P}
			.placeholder=${w}
			.itemRenderer=${e(x)}
			.chipRenderer=${e(k)}
			.errorMessage=${a}
			.label=${c}
			.value=${E($)}
			.source=${F([r,$,p,i],()=>typeof r=="function"?t=>r({...A,...t,value:$,values:p,context:i}):r)}
			.textProperty=${y}
			.valueProperty=${b}
			.limit=${n}
			.min=${f}
			.itemHeight=${j}
			.title=${e(R)}
			.textual=${H}
			.onChange=${t=>g(n===1||l==="select"?t?.[0]:t)}
			?external-search=${M}
			>${G({suffix:u,warning:o,description:J})}</cosmoz-autocomplete
		>`);export{L as a};
