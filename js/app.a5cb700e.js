(function(e){function t(t){for(var n,c,u=t[0],i=t[1],l=t[2],p=0,f=[];p<u.length;p++)c=u[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);s&&s(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,u=1;u<r.length;u++){var i=r[u];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},a22a:function(e,t,r){"use strict";r("d8b1")},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a={id:"container",class:"relative"},o=Object(n["c"])("span",{id:"title",class:"relative"},"Brainfuck Interpreter",-1),c={id:"outputBox",class:"relative"},u=Object(n["c"])("span",{id:"output"},"Output: ",-1),i={id:"data"};function l(e,t,r,l,s,p){return Object(n["e"])(),Object(n["b"])("div",a,[o,Object(n["h"])(Object(n["c"])("textarea",{class:"relative",rows:"10",placeholder:"++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++. (Hello World!)","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.code=t})},null,512),[[n["g"],e.code]]),Object(n["c"])("div",c,[u,Object(n["c"])("span",i,Object(n["f"])(e.output),1)]),Object(n["c"])("button",{id:"debug",class:"relative",onClick:t[1]||(t[1]=function(t){return e.run()})},"Debug")])}r("caad");function s(e){for(var t=[">","<","+","-",".",",","[","]"],r=[],n=0;n<Math.pow(2,15);n++)r.push(0);for(var a=0,o=[],c=!1,u=0,i="",l="",s=0;s<=e.length-1;s++)if(t.includes(e[s]))switch(e[s]){case">":if(c)break;a++,a>=r.length&&(a=r.length-a);break;case"<":if(c)break;a--,a<0&&(a=r.length+a);break;case"+":if(c)break;r[a]++;break;case"-":if(c)break;r[a]--;break;case".":if(c)break;l+=String.fromCharCode(r[a]);break;case",":if(c)break;i=prompt("Write a character to be stored: "),r[a]=i.charCodeAt(0);break;case"[":if(c){u++;break}0==r[a]?c=!0:o.push(s);break;case"]":if(c){0==u?c=!1:u--;break}0!=r[a]?s=o[o.length-1]:o.pop()}return l}var p=Object(n["d"])({name:"Interpreter",data:function(){return{code:"",output:""}},methods:{run:function(){var e=s(this.code);this.output=e}}}),f=(r("a22a"),r("6b0d")),b=r.n(f);const d=b()(p,[["render",l]]);var h=d;Object(n["a"])(h).mount("#app")},d8b1:function(e,t,r){}});
//# sourceMappingURL=app.a5cb700e.js.map