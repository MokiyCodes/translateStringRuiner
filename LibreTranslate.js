console.log('v1.0.5')
(()=>{const t=t=>{let a=t.split("");return a=(t=>{let a=t.length;for(;0!==a;){let e=Math.floor(Math.random()*a);a-=1;let n=t[a];t[a]=t[e],t[e]=n}return t})(a),a.join("")},a=async(a,e)=>{e="function"==typeof e?e:()=>{};let n=0,o="en";const i=()=>{a="#shuffle"===window.location.hash?t(a):a};console.log("[0] Starting with Language %s using:\n%s",o,a);const r=async t=>{n++;const i=await fetch("https://translate.mentality.rip/translate",{method:"POST",body:JSON.stringify({q:a,source:o,target:t,format:"text"}),headers:{"Content-Type":"application/json"},referrer:"https://libretranslate.de/"}),r=(await i.json()).translatedText;return a=r,console.log("[%s] Translated from %s to %s:\n%s",n,o,t,a),o=t,e(a),r};return await r("de"),await r("zh"),await r("en"),await r("fr"),await r("zh"),i(),await r("en"),await r("de"),await r("fr"),await r("en"),await r("ja"),i(),await r("en"),await r("zh"),i(),await r("en"),a};(window??{}).zz=a,(document??{}).zz=a})();
