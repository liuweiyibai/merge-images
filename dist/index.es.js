/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,n,e,o){return new(e||(e=Promise))((function(c,a){function r(t){try{u(o.next(t))}catch(t){a(t)}}function i(t){try{u(o.throw(t))}catch(t){a(t)}}function u(t){var n;t.done?c(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(r,i)}u((o=o.apply(t,n||[])).next())}))}function n(n,e="horizontal",o=700,c=700){return t(this,void 0,void 0,(function*(){const t=yield function(t){return new Promise((n=>{const e=t.length,o=[];let c=0;t.forEach(((t,a)=>{const r=new Image;r.src=t,r.crossOrigin="Anonymous",r.onload=()=>{o[a]=r,c++,c===e&&n(o)}}))}))}(n);return"horizontal"===e?function(t,n){const e=.5,o=t.map((t=>n/t.height*t.width)),c=document.createElement("canvas");c.height=n,c.width=o.reduce(((t,n)=>t+n));const a=c.getContext("2d");let r=0;t.forEach(((t,e)=>{const c=o[e];null==a||a.drawImage(t,r,0,c,n),r+=c}));return c.toDataURL("image/jpeg",e)}(t,c):function(t,n){const e=.5,o=t.map((t=>n/t.width*t.height)),c=document.createElement("canvas");c.width=n,c.height=o.reduce(((t,n)=>t+n));const a=c.getContext("2d");let r=0;t.forEach(((t,e)=>{const c=o[e];null==a||a.drawImage(t,0,r,n,c),r+=c}));return c.toDataURL("image/jpeg",e)}(t,o)}))}export{n as default,n as mergeImages};
//# sourceMappingURL=index.es.js.map
