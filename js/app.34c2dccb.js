(function(t){function e(e){for(var a,c,o=e[0],u=e[1],s=e[2],f=0,d=[];f<o.length;f++)c=o[f],r[c]&&d.push(r[c][0]),r[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},i=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var s=0;s<o.length;s++)e(o[s]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},2856:function(t,e,n){},"40e0":function(t,e,n){"use strict";var a=n("9919"),r=n.n(a);r.a},"5c0b":function(t,e,n){"use strict";var a=n("2856"),r=n.n(a);r.a},9919:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a,r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Morse")],1)},c=[],o=n("c665"),u=n("dc0a"),s=n("d328"),l=n("11d9"),f=n("9ab4"),d=n("60a3"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-sm-6"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),n("button",{staticClass:"btn btn-primary btn-block m-1",on:{click:function(e){t.test_transmit()}}},[t._v("Transmit")]),n("button",{staticClass:"btn btn-primary btn-block m-1",on:{click:function(e){t.query()}}},[t._v("Read")]),n("button",{staticClass:"btn btn-primary btn-block m-1",on:{click:function(e){t.clear()}}},[t._v("Clear")])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},t._l(t.data,function(t,e){return n("div",{key:e,staticClass:"morse",class:{dit:0==t,dah:1==t,invalid:2==t,blank:5==t}})}))]),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[t._v("\n      "+t._s(t.result)+"\n    ")])])])},h=[],p=(n("63d9"),n("aa9a")),b=n("5118"),y=n("2ef0"),_=n.n(y),m=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."],g="ABCDEFGHIJKLMNOPQRSTUVWXYZ",k=function(t,e){for(var n=a,r=0;r<t.length;r++){var i=t[r];i in n.children||(n.children[i]={data:null,children:{}}),n=n.children[i]}n.data=e},O=function(){a={data:null,children:{}};for(var t=0;t<m.length;t++)k(m[t],g[t])};O();var j=function(t){for(var e=[".","-"],n=a,r="",i=0;i<t.length;i++)5==t[i]?(r+=n.data,n=a):0!=t[i]&&1!=t[i]||(n=n.children[e[t[i]]]);return r},w=function(t){for(var e=[],n=0;n<t.length;n++){var a=t.charCodeAt(n);e=e.concat(_.a.map(m[a-65],function(t){return"."==t?0:1})),e.push(5)}return e},C=window,x=new(C["AudioContext"]||C["webkitAudioContext"]),M=10,S=5,A=4096,P=[1046.502,1318.51,1567.982,2093.005,261.6256,329.6276,391.9954,523.2511],R=.02,T=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(s["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.analyser=null,t.dataArray=null,t.receive_data_cnt=0,t.receive_data_time=0,t.result="",t.text="",t.data=[],t.continue_block=0,t.c_status=-1,t}return Object(p["a"])(e,[{key:"mounted",value:function(){this.stream()}},{key:"stream",value:function(){var t=this;this.analyser=x.createAnalyser(),this.analyser.fftSize=A;var e=this.analyser.frequencyBinCount;this.dataArray=new Float32Array(e),navigator.getUserMedia({audio:!0},function(e){var n=x.createMediaStreamSource(e);n.connect(t.analyser),Object(b["setInterval"])(function(){return t.analyze()},1e3/M/S)},function(t){return!0})}},{key:"test_transmit",value:function(){this.transmit(w(this.text))}},{key:"clear",value:function(){this.data=[]}},{key:"query",value:function(){this.result=j(this.data.concat([5]))}},{key:"transmit",value:function(t){var e=this,n=0,a=0,r=function(){a--,a<=0&&(0==t[n]&&(e.playSound(e.generateSound(1)),a=2),1==t[n]&&(e.playSound(e.generateSound(3)),a=4),5==t[n]&&(a=1),n++,n>=t.length&&Object(b["clearInterval"])(i))},i=Object(b["setInterval"])(function(){return r()},1e3/M)}},{key:"receive",value:function(t){if(this.receive_data_time++,this.receive_data_cnt+=_.a.sum(_.a.map(t,function(t){return t?1:0})),this.receive_data_time>=S){var e=this.receive_data_cnt>=S*P.length/2-2?1:0;this.receive_data_cnt=0,this.receive_data_time=0,this.c_status!=e?(1==this.c_status?1==this.continue_block?this.data.push(0):3==this.continue_block?this.data.push(1):this.data.push(2):0==this.c_status&&2==this.continue_block&&this.data.push(5),this.continue_block=1,this.c_status=e):this.continue_block++}}},{key:"analyze",value:function(){var t=this,e=x.sampleRate/A;this.analyser.getFloatTimeDomainData(this.dataArray);var n=_.a.map(P,function(n){return Math.abs(t.dataArray[Math.round(n/e)])>=R});this.receive(n)}},{key:"playSound",value:function(t){for(var e=x.createBuffer(1,t.length,x.sampleRate),n=e.getChannelData(0),a=0;a<t.length;a++)n[a]=t[a];var r=x.createBufferSource();r.buffer=e,r.connect(x.destination),r.start(0)}},{key:"fn",value:function(t){var e=20;return t<0?-Math.pow(-t,e):Math.pow(t,e)}},{key:"generateSound",value:function(t){for(var e=function(t,e){var n=x.sampleRate/e;return Math.sin(t/(n/(2*Math.PI)))},n=1/P.length,a=1/M*t,r=P,i=x.sampleRate*(a-1/M/10),c=new Float32Array(i),o=0;o<i;o++)for(var u=0;u<r.length;u++)c[o]+=this.fn(e(o,r[u]))*n;return c}}]),Object(u["a"])(e,t),e}(d["b"]);T=f["a"]([d["a"]],T);var I=T,B=I,D=(n("40e0"),n("2877")),F=Object(D["a"])(B,v,h,!1,null,"39830569",null);F.options.__file="Morse.vue";var q=F.exports,z=function(t){function e(){return Object(o["a"])(this,e),Object(s["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(d["b"]);z=f["a"]([Object(d["a"])({components:{Morse:q}})],z);var E=z,J=E,$=(n("5c0b"),Object(D["a"])(J,i,c,!1,null,null,null));$.options.__file="App.vue";var N=$.exports;n("486f"),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(N)}}).$mount("#app")}});
//# sourceMappingURL=app.34c2dccb.js.map