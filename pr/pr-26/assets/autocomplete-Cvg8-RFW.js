import{b as B}from"./iframe-DvWMYFXb.js";import{d as D,o as $,l as E,H as F,g as G}from"./inline-file-Dfuny3sM.js";const K=D(({id:n,label:i,error:a,required:d,warning:o,suffix:s,mode:c,disabled:u,onChange:h,options:e,limit:p,min:g,textProperty:f,valueProperty:y,value:t,values:l,itemRenderer:b,chipRenderer:x,keepOpened:k,keepQuery:q,placeholder:w,wrap:z,showSingle:C,preserveOrder:H,title:P,textual:R,description:v,externalSearch:M,itemHeight:j,context:m,...A})=>B`<cosmoz-autocomplete
			class="input input-autocomplete"
			mode=${$(c)}
			?data-warning=${!!o}
			name=${n}
			?disabled=${u}
			?wrap=${z}
			?invalid=${!!a}
			?required=${d}
			?keep-opened=${!!k}
			?keep-query=${!!q}
			?show-single=${!!C}
			?preserve-order=${!!H}
			.placeholder=${w}
			.itemRenderer=${$(b)}
			.chipRenderer=${$(x)}
			.errorMessage=${a}
			.label=${i}
			.value=${E(t)}
			.source=${F([e,t,l,m],()=>typeof e=="function"?r=>e({...A,...r,value:t,values:l,context:m}):e)}
			.textProperty=${f}
			.valueProperty=${y}
			.limit=${p}
			.min=${g}
			.itemHeight=${j}
			.title=${$(P)}
			.textual=${R}
			.onChange=${r=>h(p===1?r?.[0]:r)}
			?external-search=${M}
			>${G({suffix:s,warning:o,description:v})}</cosmoz-autocomplete
		>`);export{K as a};
