import{b as B}from"./iframe-BDuZ46Q0.js";import{i as D,o as $,l as E,A as F,c as G}from"./inline-file-OCQuMC8N.js";const K=D(({id:m,label:n,error:a,required:c,warning:o,suffix:s,mode:d,disabled:u,onChange:h,options:e,limit:p,min:f,textProperty:g,valueProperty:y,value:t,values:i,itemRenderer:b,chipRenderer:x,keepOpened:k,keepQuery:q,placeholder:w,wrap:z,showSingle:C,preserveOrder:P,title:R,textual:v,description:A,externalSearch:H,itemHeight:M,context:l,...j})=>B`<cosmoz-autocomplete
			class="input input-autocomplete"
			mode=${$(d)}
			?data-warning=${!!o}
			name=${m}
			?disabled=${u}
			?wrap=${z}
			?invalid=${!!a}
			?required=${c}
			?keep-opened=${!!k}
			?keep-query=${!!q}
			?show-single=${!!C}
			?preserve-order=${!!P}
			.placeholder=${w}
			.itemRenderer=${$(b)}
			.chipRenderer=${$(x)}
			.errorMessage=${a}
			.label=${n}
			.value=${E(t)}
			.source=${F([e,t,i,l],()=>typeof e=="function"?r=>e({...j,...r,value:t,values:i,context:l}):e)}
			.textProperty=${g}
			.valueProperty=${y}
			.limit=${p}
			.min=${f}
			.itemHeight=${M}
			.title=${$(R)}
			.textual=${v}
			.onChange=${r=>h(p===1?r?.[0]:r)}
			?external-search=${H}
			>${G({suffix:s,warning:o,description:A})}</cosmoz-autocomplete
		>`);export{K as a};
