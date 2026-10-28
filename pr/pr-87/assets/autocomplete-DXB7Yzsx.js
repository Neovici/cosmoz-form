import{o as e,l as G,h as I,n as J,b as K}from"./iframe-B3v4pMAJ.js";import{i as L,e as N}from"./inline-file-CEZb-dEv.js";const S=L(({id:c,variant:s,compact:u,hint:d,label:h,error:a,required:f,warning:o,suffix:g,mode:i,disabled:y,onChange:b,options:$,limit:p,min:x,textProperty:k,valueProperty:q,value:t,values:l,itemRenderer:v,chipRenderer:w,keepOpened:z,keepQuery:C,placeholder:P,wrap:R,showSingle:H,preserveOrder:M,title:j,textual:A,description:B,externalSearch:D,itemHeight:E,content:n,context:m,...F})=>K`<cosmoz-autocomplete
			class="input input-autocomplete"
			mode=${e(i)}
			variant=${e(s)}
			?compact=${u}
			hint=${e(d)}
			?data-warning=${!!o}
			name=${c}
			?disabled=${y}
			?wrap=${R}
			?invalid=${!!a}
			?required=${f}
			?keep-opened=${!!z}
			?keep-query=${!!C}
			?show-single=${!!H}
			?preserve-order=${!!M}
			.placeholder=${P}
			.itemRenderer=${e(v)}
			.chipRenderer=${e(w)}
			.errorMessage=${a}
			.label=${h}
			.value=${G(t)}
			.source=${I([$,t,l,m],()=>typeof $=="function"?r=>$({...F,...r,value:t,values:l,context:m}):$)}
			.textProperty=${k}
			.valueProperty=${q}
			.limit=${p}
			.min=${x}
			.itemHeight=${E}
			.title=${e(j)}
			.textual=${A}
			.onChange=${r=>b(p===1||i==="select"?r?.[0]:r)}
			?external-search=${D}
			>${[N({suffix:g,warning:o,description:B}),J(n,()=>n)]}</cosmoz-autocomplete
		>`);export{S as a};
