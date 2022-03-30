!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).MergeImages={})}(this,(function(e){"use strict";
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
    ***************************************************************************** */function t(e,t,n,o){return new(n||(n=Promise))((function(i,c){function r(e){try{u(o.next(e))}catch(e){c(e)}}function a(e){try{u(o.throw(e))}catch(e){c(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}u((o=o.apply(e,t||[])).next())}))}function n(e,n="horizontal",o=700,i=700){return t(this,void 0,void 0,(function*(){const t=yield function(e){return new Promise((t=>{const n=e.length,o=[];let i=0;e.forEach(((e,c)=>{const r=new Image;r.src=e,r.crossOrigin="Anonymous",r.onload=()=>{o[c]=r,i++,i===n&&t(o)}}))}))}(e);return"horizontal"===n?function(e,t){const n=.5,o=e.map((e=>t/e.height*e.width)),i=document.createElement("canvas");i.height=t,i.width=o.reduce(((e,t)=>e+t));const c=i.getContext("2d");let r=0;e.forEach(((e,n)=>{const i=o[n];null==c||c.drawImage(e,r,0,i,t),r+=i}));return i.toDataURL("image/jpeg",n)}(t,i):function(e,t){const n=.5,o=e.map((e=>t/e.width*e.height)),i=document.createElement("canvas");i.width=t,i.height=o.reduce(((e,t)=>e+t));const c=i.getContext("2d");let r=0;e.forEach(((e,n)=>{const i=o[n];null==c||c.drawImage(e,0,r,t,i),r+=i}));return i.toDataURL("image/jpeg",n)}(t,o)}))}e.default=n,e.mergeImages=n,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
