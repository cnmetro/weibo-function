!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=18)}([function(e,t,r){"use strict";var n=r(7),o=r(39),s=Object.prototype.toString;function a(e){return"[object Array]"===s.call(e)}function i(e){return null!==e&&"object"==typeof e}function u(e){return"[object Function]"===s.call(e)}function c(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===s.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:i,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===s.call(e)},isFile:function(e){return"[object File]"===s.call(e)},isBlob:function(e){return"[object Blob]"===s.call(e)},isFunction:u,isStream:function(e){return i(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]=r}for(var n=0,o=arguments.length;n<o;n++)c(arguments[n],r);return t},extend:function(e,t,r){return c(t,function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,r){var n=r(21),o=r(5),s=36e5,a=6e4,i=2,u=/[T ]/,c=/:/,f=/^(\d{2})$/,p=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],l=/^(\d{4})/,d=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],h=/^-(\d{2})$/,m=/^-?(\d{3})$/,g=/^-?(\d{2})-?(\d{2})$/,v=/^-?W(\d{2})$/,y=/^-?W(\d{2})-?(\d{1})$/,C=/^(\d{2}([.,]\d*)?)$/,x=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,b=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,w=/([Z+-].*)$/,F=/^(Z)$/,T=/^([+-])(\d{2})$/,D=/^([+-])(\d{2}):?(\d{2})$/;function R(e,t,r){t=t||0,r=r||0;var n=new Date(0);n.setUTCFullYear(e,0,4);var o=7*t+r+1-(n.getUTCDay()||7);return n.setUTCDate(n.getUTCDate()+o),n}e.exports=function(e,t){if(o(e))return new Date(e.getTime());if("string"!=typeof e)return new Date(e);var r=(t||{}).additionalDigits;r=null==r?i:Number(r);var S=function(e){var t,r={},n=e.split(u);if(c.test(n[0])?(r.date=null,t=n[0]):(r.date=n[0],t=n[1]),t){var o=w.exec(t);o?(r.time=t.replace(o[1],""),r.timezone=o[1]):r.time=t}return r}(e),O=function(e,t){var r,n=p[t],o=d[t];if(r=l.exec(e)||o.exec(e)){var s=r[1];return{year:parseInt(s,10),restDateString:e.slice(s.length)}}if(r=f.exec(e)||n.exec(e)){var a=r[1];return{year:100*parseInt(a,10),restDateString:e.slice(a.length)}}return{year:null}}(S.date,r),E=O.year,_=function(e,t){if(null===t)return null;var r,n,o,s;if(0===e.length)return(n=new Date(0)).setUTCFullYear(t),n;if(r=h.exec(e))return n=new Date(0),o=parseInt(r[1],10)-1,n.setUTCFullYear(t,o),n;if(r=m.exec(e)){n=new Date(0);var a=parseInt(r[1],10);return n.setUTCFullYear(t,0,a),n}if(r=g.exec(e)){n=new Date(0),o=parseInt(r[1],10)-1;var i=parseInt(r[2],10);return n.setUTCFullYear(t,o,i),n}if(r=v.exec(e))return s=parseInt(r[1],10)-1,R(t,s);if(r=y.exec(e)){s=parseInt(r[1],10)-1;var u=parseInt(r[2],10)-1;return R(t,s,u)}return null}(O.restDateString,E);if(_){var M,A=_.getTime(),j=0;if(S.time&&(j=function(e){var t,r,n;if(t=C.exec(e))return(r=parseFloat(t[1].replace(",",".")))%24*s;if(t=x.exec(e))return r=parseInt(t[1],10),n=parseFloat(t[2].replace(",",".")),r%24*s+n*a;if(t=b.exec(e)){r=parseInt(t[1],10),n=parseInt(t[2],10);var o=parseFloat(t[3].replace(",","."));return r%24*s+n*a+1e3*o}return null}(S.time)),S.timezone)L=S.timezone,M=((U=F.exec(L))?0:(U=T.exec(L))?(I=60*parseInt(U[2],10),"+"===U[1]?-I:I):(U=D.exec(L))?(I=60*parseInt(U[2],10)+parseInt(U[3],10),"+"===U[1]?-I:I):0)*a;else{var B=A+j,k=new Date(B);M=n(k);var q=new Date(B);q.setDate(k.getDate()+1);var N=n(q)-n(k);N>0&&(M+=N)}return new Date(A+j+M)}var L,U,I;return new Date(e)}},function(e,t,r){var n=r(28);e.exports=function(e){return n(e,{weekStartsOn:1})}},function(e,t,r){"use strict";var n=r(0),o=r(41),s={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var i,u={adapter:("undefined"!=typeof XMLHttpRequest?i=r(42):"undefined"!=typeof process&&(i=r(46)),i),transformRequest:[function(e,t){return o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],function(e){u.headers[e]={}}),n.forEach(["post","put","patch"],function(e){u.headers[e]=n.merge(s)}),e.exports=u},function(e,t,r){"use strict";var n=r(9);e.exports=function(e,t,r,o,s){var a=new Error(e);return n(a,t,r,o,s)}},function(e,t){e.exports=function(e){return e instanceof Date}},function(e,t,r){var n=r(1),o=r(2);e.exports=function(e){var t=n(e),r=t.getFullYear(),s=new Date(0);s.setFullYear(r+1,0,4),s.setHours(0,0,0,0);var a=o(s),i=new Date(0);i.setFullYear(r,0,4),i.setHours(0,0,0,0);var u=o(i);return t.getTime()>=a.getTime()?r+1:t.getTime()>=u.getTime()?r:r-1}},function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},function(e,t,r){"use strict";var n=r(4);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e}},function(e,t,r){"use strict";var n=r(0);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var s;if(r)s=r(t);else if(n.isURLSearchParams(t))s=t.toString();else{var a=[];n.forEach(t,function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))}))}),s=a.join("&")}return s&&(e+=(-1===e.indexOf("?")?"?":"&")+s),e}},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("https")},function(e,t,r){var n=r(14),o=r(11),s=r(12),a=r(47),i=r(48).Writable,u=r(49)("follow-redirects"),c={GET:!0,HEAD:!0,OPTIONS:!0,TRACE:!0},f=Object.create(null);function p(e,t){i.call(this),e.headers=e.headers||{},this._options=e,this._redirectCount=0,this._redirects=[],this._requestBodyLength=0,this._requestBodyBuffers=[],e.host&&(e.hostname||(e.hostname=e.host),delete e.host),t&&this.on("response",t);var r=this;if(this._onNativeResponse=function(e){r._processResponse(e)},!e.pathname&&e.path){var n=e.path.indexOf("?");n<0?e.pathname=e.path:(e.pathname=e.path.substring(0,n),e.search=e.path.substring(n))}this._performRequest()}function l(e){var t={maxRedirects:21,maxBodyLength:10485760},r={};return Object.keys(e).forEach(function(o){var s=o+":",i=r[s]=e[o],c=t[o]=Object.create(i);c.request=function(e,o){return"string"==typeof e?(e=n.parse(e)).maxRedirects=t.maxRedirects:e=Object.assign({protocol:s,maxRedirects:t.maxRedirects,maxBodyLength:t.maxBodyLength},e),e.nativeProtocols=r,a.equal(e.protocol,s,"protocol mismatch"),u("options",e),new p(e,o)},c.get=function(e,t){var r=c.request(e,t);return r.end(),r}}),t}["abort","aborted","error","socket","timeout"].forEach(function(e){f[e]=function(t){this._redirectable.emit(e,t)}}),p.prototype=Object.create(i.prototype),p.prototype.write=function(e,t,r){if(!("string"==typeof e||"object"==typeof e&&"length"in e))throw new Error("data should be a string, Buffer or Uint8Array");"function"==typeof t&&(r=t,t=null),0!==e.length?this._requestBodyLength+e.length<=this._options.maxBodyLength?(this._requestBodyLength+=e.length,this._requestBodyBuffers.push({data:e,encoding:t}),this._currentRequest.write(e,t,r)):(this.emit("error",new Error("Request body larger than maxBodyLength limit")),this.abort()):r&&r()},p.prototype.end=function(e,t,r){"function"==typeof e?(r=e,e=t=null):"function"==typeof t&&(r=t,t=null);var n=this._currentRequest;this.write(e||"",t,function(){n.end(null,null,r)})},p.prototype.setHeader=function(e,t){this._options.headers[e]=t,this._currentRequest.setHeader(e,t)},p.prototype.removeHeader=function(e){delete this._options.headers[e],this._currentRequest.removeHeader(e)},["abort","flushHeaders","getHeader","setNoDelay","setSocketKeepAlive","setTimeout"].forEach(function(e){p.prototype[e]=function(t,r){return this._currentRequest[e](t,r)}}),["aborted","connection","socket"].forEach(function(e){Object.defineProperty(p.prototype,e,{get:function(){return this._currentRequest[e]}})}),p.prototype._performRequest=function(){var e=this._options.protocol,t=this._options.nativeProtocols[e];if(t){if(this._options.agents){var r=e.substr(0,e.length-1);this._options.agent=this._options.agents[r]}var o=this._currentRequest=t.request(this._options,this._onNativeResponse);for(var s in this._currentUrl=n.format(this._options),o._redirectable=this,f)s&&o.on(s,f[s]);if(this._isRedirect){var a=0,i=this._requestBodyBuffers;!function e(){if(a<i.length){var t=i[a++];o.write(t.data,t.encoding,e)}else o.end()}()}}else this.emit("error",new Error("Unsupported protocol "+e))},p.prototype._processResponse=function(e){this._options.trackRedirects&&this._redirects.push({url:this._currentUrl,headers:e.headers,statusCode:e.statusCode});var t=e.headers.location;if(t&&!1!==this._options.followRedirects&&e.statusCode>=300&&e.statusCode<400){if(++this._redirectCount>this._options.maxRedirects)return void this.emit("error",new Error("Max redirects exceeded."));var r,o=this._options.headers;if(307!==e.statusCode&&!(this._options.method in c))for(r in this._options.method="GET",this._requestBodyBuffers=[],o)/^content-/i.test(r)&&delete o[r];if(!this._isRedirect)for(r in o)/^host$/i.test(r)&&delete o[r];var s=n.resolve(this._currentUrl,t);u("redirecting to",s),Object.assign(this._options,n.parse(s)),this._isRedirect=!0,this._performRequest(),e.destroy()}else e.responseUrl=this._currentUrl,e.redirects=this._redirects,this.emit("response",e),this._requestBodyBuffers=[]},e.exports=l({http:o,https:s}),e.exports.wrap=l},function(e,t){e.exports=require("url")},function(e,t,r){function n(e){var r;function n(){if(n.enabled){var e=n,o=+new Date,s=o-(r||o);e.diff=s,e.prev=r,e.curr=o,r=o;for(var a=new Array(arguments.length),i=0;i<a.length;i++)a[i]=arguments[i];a[0]=t.coerce(a[0]),"string"!=typeof a[0]&&a.unshift("%O");var u=0;a[0]=a[0].replace(/%([a-zA-Z%])/g,function(r,n){if("%%"===r)return r;u++;var o=t.formatters[n];if("function"==typeof o){var s=a[u];r=o.call(e,s),a.splice(u,1),u--}return r}),t.formatArgs.call(e,a),(n.log||t.log||console.log.bind(console)).apply(e,a)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var r,n=0;for(r in e)n=(n<<5)-n+e.charCodeAt(r),n|=0;return t.colors[Math.abs(n)%t.colors.length]}(e),n.destroy=o,"function"==typeof t.init&&t.init(n),t.instances.push(n),n}function o(){var e=t.instances.indexOf(this);return-1!==e&&(t.instances.splice(e,1),!0)}(t=e.exports=n.debug=n.default=n).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){var r;t.save(e),t.names=[],t.skips=[];var n=("string"==typeof e?e:"").split(/[\s,]+/),o=n.length;for(r=0;r<o;r++)n[r]&&("-"===(e=n[r].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")));for(r=0;r<t.instances.length;r++){var s=t.instances[r];s.enabled=t.enabled(s.namespace)}},t.enabled=function(e){if("*"===e[e.length-1])return!0;var r,n;for(r=0,n=t.skips.length;r<n;r++)if(t.skips[r].test(e))return!1;for(r=0,n=t.names.length;r<n;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=r(51),t.instances=[],t.names=[],t.skips=[],t.formatters={}},function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,r){const n=r(19),o=r(22),{sendWeibo:s,fetchFlow:a}=r(35);t.handler=async(e,t,r)=>{const i={bj:"北京",gz:"广州",sh:"上海"},{city:u}=JSON.parse(e.body);if(!i[u])return r(null,{statusCode:400,body:"city not found"});try{const e=o(n(new Date,1),"YYYY-MM-DD"),t=await a(u),c=t.date;if(e!==c)return;const f=`${i[u]}地铁 ${c} 总客流量为 ${t.num} 万人次 http://metro.sinchang.me/${u}`;await s(f),r(null,{statusCode:200,body:"Yep"})}catch(e){r(null,{statusCode:500,body:JSON.stringify(e.response&&e.response.data)||e.message})}}},function(e,t,r){var n=r(20);e.exports=function(e,t){var r=Number(t);return n(e,-r)}},function(e,t,r){var n=r(1);e.exports=function(e,t){var r=n(e),o=Number(t);return r.setDate(r.getDate()+o),r}},function(e,t){e.exports=function(e){var t=new Date(e.getTime()),r=t.getTimezoneOffset();return t.setSeconds(0,0),6e4*r+t.getTime()%6e4}},function(e,t,r){var n=r(23),o=r(27),s=r(6),a=r(1),i=r(30),u=r(31);var c={M:function(e){return e.getMonth()+1},MM:function(e){return p(e.getMonth()+1,2)},Q:function(e){return Math.ceil((e.getMonth()+1)/3)},D:function(e){return e.getDate()},DD:function(e){return p(e.getDate(),2)},DDD:function(e){return n(e)},DDDD:function(e){return p(n(e),3)},d:function(e){return e.getDay()},E:function(e){return e.getDay()||7},W:function(e){return o(e)},WW:function(e){return p(o(e),2)},YY:function(e){return p(e.getFullYear(),4).substr(2)},YYYY:function(e){return p(e.getFullYear(),4)},GG:function(e){return String(s(e)).substr(2)},GGGG:function(e){return s(e)},H:function(e){return e.getHours()},HH:function(e){return p(e.getHours(),2)},h:function(e){var t=e.getHours();return 0===t?12:t>12?t%12:t},hh:function(e){return p(c.h(e),2)},m:function(e){return e.getMinutes()},mm:function(e){return p(e.getMinutes(),2)},s:function(e){return e.getSeconds()},ss:function(e){return p(e.getSeconds(),2)},S:function(e){return Math.floor(e.getMilliseconds()/100)},SS:function(e){return p(Math.floor(e.getMilliseconds()/10),2)},SSS:function(e){return p(e.getMilliseconds(),3)},Z:function(e){return f(e.getTimezoneOffset(),":")},ZZ:function(e){return f(e.getTimezoneOffset())},X:function(e){return Math.floor(e.getTime()/1e3)},x:function(e){return e.getTime()}};function f(e,t){t=t||"";var r=e>0?"-":"+",n=Math.abs(e),o=n%60;return r+p(Math.floor(n/60),2)+t+p(o,2)}function p(e,t){for(var r=Math.abs(e).toString();r.length<t;)r="0"+r;return r}e.exports=function(e,t,r){var n=t?String(t):"YYYY-MM-DDTHH:mm:ss.SSSZ",o=(r||{}).locale,s=u.format.formatters,f=u.format.formattingTokensRegExp;o&&o.format&&o.format.formatters&&(s=o.format.formatters,o.format.formattingTokensRegExp&&(f=o.format.formattingTokensRegExp));var p=a(e);return i(p)?function(e,t,r){var n,o,s,a=e.match(r),i=a.length;for(n=0;n<i;n++)o=t[a[n]]||c[a[n]],a[n]=o||((s=a[n]).match(/\[[\s\S]/)?s.replace(/^\[|]$/g,""):s.replace(/\\/g,""));return function(e){for(var t="",r=0;r<i;r++)a[r]instanceof Function?t+=a[r](e,c):t+=a[r];return t}}(n,s,f)(p):"Invalid Date"}},function(e,t,r){var n=r(1),o=r(24),s=r(25);e.exports=function(e){var t=n(e);return s(t,o(t))+1}},function(e,t,r){var n=r(1);e.exports=function(e){var t=n(e),r=new Date(0);return r.setFullYear(t.getFullYear(),0,1),r.setHours(0,0,0,0),r}},function(e,t,r){var n=r(26),o=6e4,s=864e5;e.exports=function(e,t){var r=n(e),a=n(t),i=r.getTime()-r.getTimezoneOffset()*o,u=a.getTime()-a.getTimezoneOffset()*o;return Math.round((i-u)/s)}},function(e,t,r){var n=r(1);e.exports=function(e){var t=n(e);return t.setHours(0,0,0,0),t}},function(e,t,r){var n=r(1),o=r(2),s=r(29),a=6048e5;e.exports=function(e){var t=n(e),r=o(t).getTime()-s(t).getTime();return Math.round(r/a)+1}},function(e,t,r){var n=r(1);e.exports=function(e,t){var r=t&&Number(t.weekStartsOn)||0,o=n(e),s=o.getDay(),a=(s<r?7:0)+s-r;return o.setDate(o.getDate()-a),o.setHours(0,0,0,0),o}},function(e,t,r){var n=r(6),o=r(2);e.exports=function(e){var t=n(e),r=new Date(0);return r.setFullYear(t,0,4),r.setHours(0,0,0,0),o(r)}},function(e,t,r){var n=r(5);e.exports=function(e){if(n(e))return!isNaN(e);throw new TypeError(toString.call(e)+" is not an instance of Date")}},function(e,t,r){var n=r(32),o=r(33);e.exports={distanceInWords:n(),format:o()}},function(e,t){e.exports=function(){var e={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};return{localize:function(t,r,n){var o;return n=n||{},o="string"==typeof e[t]?e[t]:1===r?e[t].one:e[t].other.replace("{{count}}",r),n.addSuffix?n.comparison>0?"in "+o:o+" ago":o}}}},function(e,t,r){var n=r(34);e.exports=function(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=["January","February","March","April","May","June","July","August","September","October","November","December"],r=["Su","Mo","Tu","We","Th","Fr","Sa"],o=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=["AM","PM"],i=["am","pm"],u=["a.m.","p.m."],c={MMM:function(t){return e[t.getMonth()]},MMMM:function(e){return t[e.getMonth()]},dd:function(e){return r[e.getDay()]},ddd:function(e){return o[e.getDay()]},dddd:function(e){return s[e.getDay()]},A:function(e){return e.getHours()/12>=1?a[1]:a[0]},a:function(e){return e.getHours()/12>=1?i[1]:i[0]},aa:function(e){return e.getHours()/12>=1?u[1]:u[0]}};return["M","D","DDD","d","Q","W"].forEach(function(e){c[e+"o"]=function(t,r){return function(e){var t=e%100;if(t>20||t<10)switch(t%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"}(r[e](t))}}),{formatters:c,formattingTokensRegExp:n(c)}}},function(e,t){var r=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];e.exports=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);var o=r.concat(t).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+o.join("|")+"|.)","g")}},function(e,t,r){"use strict";const n=r(36),o=r(37);t.sendWeibo=e=>o.post("https://api.weibo.com/2/statuses/share.json",n.stringify({access_token:process.env.WEIBO_ACCESS_TOKEN,status:e})),t.fetchFlow=e=>o.get(`http://metro.sinchang.me/api/flows?city=${e}`).then(e=>e.data.data[0])},function(e,t){e.exports=require("querystring")},function(e,t,r){e.exports=r(38)},function(e,t,r){"use strict";var n=r(0),o=r(7),s=r(40),a=r(3);function i(e){var t=new s(e),r=o(s.prototype.request,t);return n.extend(r,s.prototype,t),n.extend(r,t),r}var u=i(a);u.Axios=s,u.create=function(e){return i(n.merge(a,e))},u.Cancel=r(17),u.CancelToken=r(65),u.isCancel=r(16),u.all=function(e){return Promise.all(e)},u.spread=r(66),e.exports=u,e.exports.default=u},function(e,t){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},function(e,t,r){"use strict";var n=r(3),o=r(0),s=r(60),a=r(61);function i(e){this.defaults=e,this.interceptors={request:new s,response:new s}}i.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),(e=o.merge(n,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[a,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},o.forEach(["delete","get","head","options"],function(e){i.prototype[e]=function(t,r){return this.request(o.merge(r||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){i.prototype[e]=function(t,r,n){return this.request(o.merge(n||{},{method:e,url:t,data:r}))}}),e.exports=i},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},function(e,t,r){"use strict";var n=r(0),o=r(8),s=r(10),a=r(43),i=r(44),u=r(4);e.exports=function(e){return new Promise(function(t,c){var f=e.data,p=e.headers;n.isFormData(f)&&delete p["Content-Type"];var l=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",h=e.auth.password||"";p.Authorization="Basic "+btoa(d+":"+h)}if(l.open(e.method.toUpperCase(),s(e.url,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,l.onreadystatechange=function(){if(l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in l?a(l.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:r,config:e,request:l};o(t,c,n),l=null}},l.onerror=function(){c(u("Network Error",e,null,l)),l=null},l.ontimeout=function(){c(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",l)),l=null},n.isStandardBrowserEnv()){var m=r(45),g=(e.withCredentials||i(e.url))&&e.xsrfCookieName?m.read(e.xsrfCookieName):void 0;g&&(p[e.xsrfHeaderName]=g)}if("setRequestHeader"in l&&n.forEach(p,function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete p[t]:l.setRequestHeader(t,e)}),e.withCredentials&&(l.withCredentials=!0),e.responseType)try{l.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){l&&(l.abort(),c(e),l=null)}),void 0===f&&(f=null),l.send(f)})}},function(e,t,r){"use strict";var n=r(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,s,a={};return e?(n.forEach(e.split("\n"),function(e){if(s=e.indexOf(":"),t=n.trim(e.substr(0,s)).toLowerCase(),r=n.trim(e.substr(s+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([r]):a[t]?a[t]+", "+r:r}}),a):a}},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,s,a){var i=[];i.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),n.isString(o)&&i.push("path="+o),n.isString(s)&&i.push("domain="+s),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,r){"use strict";var n=r(0),o=r(8),s=r(10),a=r(11),i=r(12),u=r(13).http,c=r(13).https,f=r(14),p=r(58),l=r(59),d=r(4),h=r(9);e.exports=function(e){return new Promise(function(t,r){var m,g=e.data,v=e.headers;if(v["User-Agent"]||v["user-agent"]||(v["User-Agent"]="axios/"+l.version),g&&!n.isStream(g)){if(Buffer.isBuffer(g));else if(n.isArrayBuffer(g))g=new Buffer(new Uint8Array(g));else{if(!n.isString(g))return r(d("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",e));g=new Buffer(g,"utf-8")}v["Content-Length"]=g.length}var y=void 0;e.auth&&(y=(e.auth.username||"")+":"+(e.auth.password||""));var C=f.parse(e.url),x=C.protocol||"http:";if(!y&&C.auth){var b=C.auth.split(":");y=(b[0]||"")+":"+(b[1]||"")}y&&delete v.Authorization;var w="https:"===x,F=w?e.httpsAgent:e.httpAgent,T={path:s(C.path,e.params,e.paramsSerializer).replace(/^\?/,""),method:e.method,headers:v,agent:F,auth:y};e.socketPath?T.socketPath=e.socketPath:(T.hostname=C.hostname,T.port=C.port);var D,R=e.proxy;if(!R&&!1!==R){var S=x.slice(0,-1)+"_proxy",O=process.env[S]||process.env[S.toUpperCase()];if(O){var E=f.parse(O);if(R={host:E.hostname,port:E.port},E.auth){var _=E.auth.split(":");R.auth={username:_[0],password:_[1]}}}}if(R&&(T.hostname=R.host,T.host=R.host,T.headers.host=C.hostname+(C.port?":"+C.port:""),T.port=R.port,T.path=x+"//"+C.hostname+(C.port?":"+C.port:"")+T.path,R.auth)){var M=new Buffer(R.auth.username+":"+R.auth.password,"utf8").toString("base64");T.headers["Proxy-Authorization"]="Basic "+M}e.transport?D=e.transport:0===e.maxRedirects?D=w?i:a:(e.maxRedirects&&(T.maxRedirects=e.maxRedirects),D=w?c:u),e.maxContentLength&&e.maxContentLength>-1&&(T.maxBodyLength=e.maxContentLength);var A=D.request(T,function(n){if(!A.aborted){clearTimeout(m),m=null;var s=n;switch(n.headers["content-encoding"]){case"gzip":case"compress":case"deflate":s=s.pipe(p.createUnzip()),delete n.headers["content-encoding"]}var a=n.req||A,i={status:n.statusCode,statusText:n.statusMessage,headers:n.headers,config:e,request:a};if("stream"===e.responseType)i.data=s,o(t,r,i);else{var u=[];s.on("data",function(t){u.push(t),e.maxContentLength>-1&&Buffer.concat(u).length>e.maxContentLength&&(s.destroy(),r(d("maxContentLength size of "+e.maxContentLength+" exceeded",e,null,a)))}),s.on("error",function(t){A.aborted||r(h(t,e,null,a))}),s.on("end",function(){var n=Buffer.concat(u);"arraybuffer"!==e.responseType&&(n=n.toString("utf8")),i.data=n,o(t,r,i)})}}});A.on("error",function(t){A.aborted||r(h(t,e,null,A))}),e.timeout&&!m&&(m=setTimeout(function(){A.abort(),r(d("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",A))},e.timeout)),e.cancelToken&&e.cancelToken.promise.then(function(e){A.aborted||(A.abort(),r(e))}),n.isStream(g)?g.pipe(A):A.end(g)})}},function(e,t){e.exports=require("assert")},function(e,t){e.exports=require("stream")},function(e,t,r){"undefined"==typeof process||"renderer"===process.type?e.exports=r(50):e.exports=r(52)},function(e,t,r){function n(){var e;try{e=t.storage.debug}catch(e){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e}(t=e.exports=r(15)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var r=this.useColors;if(e[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+e[0]+(r?"%c ":" ")+"+"+t.humanize(this.diff),!r)return;var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var o=0,s=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(o++,"%c"===e&&(s=o))}),e.splice(s,0,n)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=n,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(n())},function(e,t){var r=1e3,n=60*r,o=60*n,s=24*o,a=365.25*s;function i(e,t,r){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}e.exports=function(e,t){t=t||{};var u,c=typeof e;if("string"===c&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var i=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return i*a;case"days":case"day":case"d":return i*s;case"hours":case"hour":case"hrs":case"hr":case"h":return i*o;case"minutes":case"minute":case"mins":case"min":case"m":return i*n;case"seconds":case"second":case"secs":case"sec":case"s":return i*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(e);if("number"===c&&!1===isNaN(e))return t.long?i(u=e,s,"day")||i(u,o,"hour")||i(u,n,"minute")||i(u,r,"second")||u+" ms":function(e){if(e>=s)return Math.round(e/s)+"d";if(e>=o)return Math.round(e/o)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=r)return Math.round(e/r)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},function(e,t,r){var n=r(53),o=r(54);(t=e.exports=r(15)).init=function(e){e.inspectOpts={};for(var r=Object.keys(t.inspectOpts),n=0;n<r.length;n++)e.inspectOpts[r[n]]=t.inspectOpts[r[n]]},t.log=function(){return process.stderr.write(o.format.apply(o,arguments)+"\n")},t.formatArgs=function(e){var r=this.namespace;if(this.useColors){var n=this.color,o="[3"+(n<8?n:"8;5;"+n),s="  "+o+";1m"+r+" [0m";e[0]=s+e[0].split("\n").join("\n"+s),e.push(o+"m+"+t.humanize(this.diff)+"[0m")}else e[0]=(t.inspectOpts.hideDate?"":(new Date).toISOString()+" ")+r+" "+e[0]},t.save=function(e){null==e?delete process.env.DEBUG:process.env.DEBUG=e},t.load=a,t.useColors=function(){return"colors"in t.inspectOpts?Boolean(t.inspectOpts.colors):n.isatty(process.stderr.fd)},t.colors=[6,2,3,4,5,1];try{var s=r(55);s&&s.level>=2&&(t.colors=[20,21,26,27,32,33,38,39,40,41,42,43,44,45,56,57,62,63,68,69,74,75,76,77,78,79,80,81,92,93,98,99,112,113,128,129,134,135,148,149,160,161,162,163,164,165,166,167,168,169,170,171,172,173,178,179,184,185,196,197,198,199,200,201,202,203,204,205,206,207,208,209,214,215,220,221])}catch(e){}function a(){return process.env.DEBUG}t.inspectOpts=Object.keys(process.env).filter(function(e){return/^debug_/i.test(e)}).reduce(function(e,t){var r=t.substring(6).toLowerCase().replace(/_([a-z])/g,function(e,t){return t.toUpperCase()}),n=process.env[t];return n=!!/^(yes|on|true|enabled)$/i.test(n)||!/^(no|off|false|disabled)$/i.test(n)&&("null"===n?null:Number(n)),e[r]=n,e},{}),t.formatters.o=function(e){return this.inspectOpts.colors=this.useColors,o.inspect(e,this.inspectOpts).split("\n").map(function(e){return e.trim()}).join(" ")},t.formatters.O=function(e){return this.inspectOpts.colors=this.useColors,o.inspect(e,this.inspectOpts)},t.enable(a())},function(e,t){e.exports=require("tty")},function(e,t){e.exports=require("util")},function(e,t,r){"use strict";const n=r(56),o=r(57),s=process.env;let a;function i(e){return function(e){return 0!==e&&{level:e,hasBasic:!0,has256:e>=2,has16m:e>=3}}(function(e){if(!1===a)return 0;if(o("color=16m")||o("color=full")||o("color=truecolor"))return 3;if(o("color=256"))return 2;if(e&&!e.isTTY&&!0!==a)return 0;const t=a?1:0;if("win32"===process.platform){const e=n.release().split(".");return Number(process.versions.node.split(".")[0])>=8&&Number(e[0])>=10&&Number(e[2])>=10586?Number(e[2])>=14931?3:2:1}if("CI"in s)return["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI"].some(e=>e in s)||"codeship"===s.CI_NAME?1:t;if("TEAMCITY_VERSION"in s)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(s.TEAMCITY_VERSION)?1:0;if("truecolor"===s.COLORTERM)return 3;if("TERM_PROGRAM"in s){const e=parseInt((s.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(s.TERM_PROGRAM){case"iTerm.app":return e>=3?3:2;case"Apple_Terminal":return 2}}return/-256(color)?$/i.test(s.TERM)?2:/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(s.TERM)?1:"COLORTERM"in s?1:(s.TERM,t)}(e))}o("no-color")||o("no-colors")||o("color=false")?a=!1:(o("color")||o("colors")||o("color=true")||o("color=always"))&&(a=!0),"FORCE_COLOR"in s&&(a=0===s.FORCE_COLOR.length||0!==parseInt(s.FORCE_COLOR,10)),e.exports={supportsColor:i,stdout:i(process.stdout),stderr:i(process.stderr)}},function(e,t){e.exports=require("os")},function(e,t,r){"use strict";e.exports=(e,t)=>{t=t||process.argv;const r=e.startsWith("-")?"":1===e.length?"-":"--",n=t.indexOf(r+e),o=t.indexOf("--");return-1!==n&&(-1===o||n<o)}},function(e,t){e.exports=require("zlib")},function(e){e.exports={name:"axios",version:"0.18.1",description:"Promise based HTTP client for the browser and node.js",main:"index.js",scripts:{test:"grunt test && bundlesize",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js"},repository:{type:"git",url:"https://github.com/axios/axios.git"},keywords:["xhr","http","ajax","promise","node"],author:"Matt Zabriskie",license:"MIT",bugs:{url:"https://github.com/axios/axios/issues"},homepage:"https://github.com/axios/axios",devDependencies:{bundlesize:"^0.5.7",coveralls:"^2.11.9","es6-promise":"^4.0.5",grunt:"^1.0.1","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.0.0","grunt-contrib-nodeunit":"^1.0.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^19.0.0","grunt-karma":"^2.0.0","grunt-ts":"^6.0.0-beta.3","grunt-webpack":"^1.0.18","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^1.3.0","karma-chrome-launcher":"^2.0.0","karma-coverage":"^1.0.0","karma-firefox-launcher":"^1.0.0","karma-jasmine":"^1.0.2","karma-jasmine-ajax":"^0.1.13","karma-opera-launcher":"^1.0.0","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^1.1.0","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^1.7.0","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",sinon:"^1.17.4",webpack:"^1.13.1","webpack-dev-server":"^1.14.1","url-search-params":"^0.6.1",typescript:"^2.0.3"},browser:{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},typings:"./index.d.ts",dependencies:{"follow-redirects":"1.5.10","is-buffer":"^2.0.2"},bundlesize:[{path:"./dist/axios.min.js",threshold:"5kB"}]}},function(e,t,r){"use strict";var n=r(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},function(e,t,r){"use strict";var n=r(0),o=r(62),s=r(16),a=r(3),i=r(63),u=r(64);function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return c(e),e.baseURL&&!i(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return c(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(c(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,r){"use strict";var n=r(17);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new n(e),t(r.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(t){e=t}),cancel:e}},e.exports=o},function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}}]));