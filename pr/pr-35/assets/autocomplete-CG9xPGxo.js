import{o as e,l as D,h as E,b as F}from"./iframe-9g9OU6Q5.js";import{i as G,e as I}from"./inline-file-NNbAZmLa.js";const L=G(({id:m,variant:s,label:c,error:a,required:u,warning:o,suffix:d,mode:i,disabled:h,onChange:f,options:r,limit:l,min:g,textProperty:y,valueProperty:b,value:$,values:n,itemRenderer:x,chipRenderer:k,keepOpened:q,keepQuery:v,placeholder:w,wrap:z,showSingle:C,preserveOrder:P,title:R,textual:H,description:M,externalSearch:j,itemHeight:A,context:p,...B})=>F`<cosmoz-autocomplete
			class="input input-autocomplete"
			mode=${e(i)}
			variant=${e(s)}
			?data-warning=${!!o}
			name=${m}
			?disabled=${h}
			?wrap=${z}
			?invalid=${!!a}
			?required=${u}
			?keep-opened=${!!q}
			?keep-query=${!!v}
			?show-single=${!!C}
			?preserve-order=${!!P}
			.placeholder=${w}
			.itemRenderer=${e(x)}
			.chipRenderer=${e(k)}
			.errorMessage=${a}
			.label=${c}
			.value=${D($)}
			.source=${E([r,$,n,p],()=>typeof r=="function"?t=>r({...B,...t,value:$,values:n,context:p}):r)}
			.textProperty=${y}
			.valueProperty=${b}
			.limit=${l}
			.min=${g}
			.itemHeight=${A}
			.title=${e(R)}
			.textual=${H}
			.onChange=${t=>f(l===1||i==="select"?t?.[0]:t)}
			?external-search=${j}
			>${I({suffix:d,warning:o,description:M})}</cosmoz-autocomplete
		>`);export{L as a};
