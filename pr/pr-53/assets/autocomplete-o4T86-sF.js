import{o as e,l as E,h as F,b as G}from"./iframe-CbzvMNJT.js";import{i as I,e as J}from"./inline-file-CIYhDiSw.js";const N=I(({id:m,variant:s,hint:c,label:u,error:a,required:d,warning:o,suffix:h,mode:i,disabled:f,onChange:g,options:r,limit:n,min:y,textProperty:b,valueProperty:x,value:$,values:l,itemRenderer:k,chipRenderer:q,keepOpened:v,keepQuery:w,placeholder:z,wrap:C,showSingle:P,preserveOrder:R,title:H,textual:M,description:j,externalSearch:A,itemHeight:B,context:p,...D})=>G`<cosmoz-autocomplete
			class="input input-autocomplete"
			mode=${e(i)}
			variant=${e(s)}
			hint=${e(c)}
			?data-warning=${!!o}
			name=${m}
			?disabled=${f}
			?wrap=${C}
			?invalid=${!!a}
			?required=${d}
			?keep-opened=${!!v}
			?keep-query=${!!w}
			?show-single=${!!P}
			?preserve-order=${!!R}
			.placeholder=${z}
			.itemRenderer=${e(k)}
			.chipRenderer=${e(q)}
			.errorMessage=${a}
			.label=${u}
			.value=${E($)}
			.source=${F([r,$,l,p],()=>typeof r=="function"?t=>r({...D,...t,value:$,values:l,context:p}):r)}
			.textProperty=${b}
			.valueProperty=${x}
			.limit=${n}
			.min=${y}
			.itemHeight=${B}
			.title=${e(H)}
			.textual=${M}
			.onChange=${t=>g(n===1||i==="select"?t?.[0]:t)}
			?external-search=${A}
			>${J({suffix:h,warning:o,description:j})}</cosmoz-autocomplete
		>`);export{N as a};
