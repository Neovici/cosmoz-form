import{b as B}from"./iframe-B3sRQIBC.js";import{d as D,o as e,l as E,I as F,g as G}from"./inline-file-B0CdB2gO.js";const L=D(({id:l,variant:m,label:d,error:a,required:s,warning:o,suffix:c,mode:u,disabled:h,onChange:g,options:r,limit:n,min:f,textProperty:y,valueProperty:b,value:t,values:p,itemRenderer:x,chipRenderer:k,keepOpened:q,keepQuery:v,placeholder:w,wrap:z,showSingle:C,preserveOrder:P,title:R,textual:H,description:I,externalSearch:M,itemHeight:j,context:i,...A})=>B`<cosmoz-autocomplete
			class="input input-autocomplete"
			mode=${e(u)}
			variant=${e(m)}
			?data-warning=${!!o}
			name=${l}
			?disabled=${h}
			?wrap=${z}
			?invalid=${!!a}
			?required=${s}
			?keep-opened=${!!q}
			?keep-query=${!!v}
			?show-single=${!!C}
			?preserve-order=${!!P}
			.placeholder=${w}
			.itemRenderer=${e(x)}
			.chipRenderer=${e(k)}
			.errorMessage=${a}
			.label=${d}
			.value=${E(t)}
			.source=${F([r,t,p,i],()=>typeof r=="function"?$=>r({...A,...$,value:t,values:p,context:i}):r)}
			.textProperty=${y}
			.valueProperty=${b}
			.limit=${n}
			.min=${f}
			.itemHeight=${j}
			.title=${e(R)}
			.textual=${H}
			.onChange=${$=>g(n===1?$?.[0]:$)}
			?external-search=${M}
			>${G({suffix:c,warning:o,description:I})}</cosmoz-autocomplete
		>`);export{L as a};
