var k=Object.defineProperty,w=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;var n=(u,c,a)=>c in u?k(u,c,{enumerable:!0,configurable:!0,writable:!0,value:a}):u[c]=a,d=(u,c)=>{for(var a in c||(c={}))v.call(c,a)&&n(u,a,c[a]);if(g)for(var a of g(c))i.call(c,a)&&n(u,a,c[a]);return u},b=(u,c)=>w(u,y(c));(function(){"use strict";const u=a=>{throw a};(a=>{onmessage=e=>postMessage(a(e.data))})(({program:a,state:e})=>{const t=r=>{var f;switch(r.type){case"n":return r.value;case"var":return(f=e[r.name])!=null?f:u(new TypeError(`Variable "${r.name}" not defined.`));case"+":return t(r.left)+t(r.right);case"-":return t(r.left)-t(r.right);case"*":return t(r.left)*t(r.right);case"/":return Math.trunc(t(r.left)/t(r.right))}},l=r=>{switch(r.type){case"true":return!0;case"false":return!1;case"not":return!l(r.value);case"<":return t(r.left)<t(r.right);case">":return t(r.left)>t(r.right);case"<=":return t(r.left)<=t(r.right);case">=":return t(r.left)>=t(r.right);case"==":return t(r.left)===t(r.right);case"!=":return t(r.left)!==t(r.right);case"or":return l(r.left)||l(r.right);case"and":return l(r.left)&&l(r.right)}},h=r=>{switch(r.type){case"skip":break;case"assign":e=b(d({},e),{[r.variable]:t(r.expression)});break;case"if":l(r.condition)?h(r.ifBody):h(r.elseBody);break;case"while":for(;l(r.condition);)h(r.body);break;case"seq":r.statements.forEach(h);break}};return h(a),{state:e}})})();