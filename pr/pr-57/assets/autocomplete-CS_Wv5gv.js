import{o as e,l as F,h as G,b as I}from"./iframe-DCnwLpSN.js";import{i as J,e as K}from"./inline-file-DUSnUP3R.js";const O=J(({id:c,variant:m,compact:s,hint:u,label:d,error:a,required:h,warning:o,suffix:f,mode:i,disabled:g,onChange:y,options:t,limit:n,min:b,textProperty:x,valueProperty:k,value:r,values:p,itemRenderer:q,chipRenderer:v,keepOpened:w,keepQuery:z,placeholder:C,wrap:P,showSingle:R,preserveOrder:H,title:M,textual:j,description:A,externalSearch:B,itemHeight:D,context:l,...E})=>I`<cosmoz-autocomplete
			class="input input-autocomplete"
			mode=${e(i)}
			variant=${e(m)}
			?compact=${s}
			hint=${e(u)}
			?data-warning=${!!o}
			name=${c}
			?disabled=${g}
			?wrap=${P}
			?invalid=${!!a}
			?required=${h}
			?keep-opened=${!!w}
			?keep-query=${!!z}
			?show-single=${!!R}
			?preserve-order=${!!H}
			.placeholder=${C}
			.itemRenderer=${e(q)}
			.chipRenderer=${e(v)}
			.errorMessage=${a}
			.label=${d}
			.value=${F(r)}
			.source=${G([t,r,p,l],()=>typeof t=="function"?$=>t({...E,...$,value:r,values:p,context:l}):t)}
			.textProperty=${x}
			.valueProperty=${k}
			.limit=${n}
			.min=${b}
			.itemHeight=${D}
			.title=${e(M)}
			.textual=${j}
			.onChange=${$=>y(n===1||i==="select"?$?.[0]:$)}
			?external-search=${B}
			>${K({suffix:f,warning:o,description:A})}</cosmoz-autocomplete
		>`);export{O as a};
