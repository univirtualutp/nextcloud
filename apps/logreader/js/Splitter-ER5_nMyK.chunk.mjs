/*! third party licenses: js/vendor.LICENSE.txt */
import{g as h}from"./logreader-main.mjs";var l=function(a){for(var c=0,n=1,o=2,b=3,e=c,s=0,u=null,t=[],r=0;r<a.length;++r)switch(e){case c:switch(a[r]){case"{":++s,e=n,u=r;break}break;case n:switch(a[r]){case"{":++s;break;case"}":--s,s===0&&(e=c,t.push({start:u,end:r+1}));break;case'"':e=o;break}break;case o:switch(a[r]){case'"':e=n;break;case"\\":e=b;break}break;case b:e=o;break}var i={jsons:[],remainder:a.substring(t[t.length-1].end)};return t.forEach(function(k){i.jsons.push(a.substring(k.start,k.end))}),i};const d=h(l),g=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"}));export{g as S};