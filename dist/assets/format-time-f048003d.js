function F(r){"@babel/helpers - typeof";return F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(r)}function S(r){if(r===null||r===!0||r===!1)return NaN;var t=Number(r);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function h(r,t){if(t.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+t.length+" present")}function m(r){h(1,arguments);var t=Object.prototype.toString.call(r);return r instanceof Date||F(r)==="object"&&t==="[object Date]"?new Date(r.getTime()):typeof r=="number"||t==="[object Number]"?new Date(r):((typeof r=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function de(r,t){h(2,arguments);var e=m(r).getTime(),a=S(t);return new Date(e+a)}var le={};function U(){return le}function A(r){var t=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return t.setUTCFullYear(r.getFullYear()),r.getTime()-t.getTime()}function $(r,t){h(2,arguments);var e=m(r),a=m(t),n=e.getTime()-a.getTime();return n<0?-1:n>0?1:n}function fe(r){return h(1,arguments),r instanceof Date||F(r)==="object"&&Object.prototype.toString.call(r)==="[object Date]"}function ce(r){if(h(1,arguments),!fe(r)&&typeof r!="number")return!1;var t=m(r);return!isNaN(Number(t))}function me(r,t){h(2,arguments);var e=m(r),a=m(t),n=e.getFullYear()-a.getFullYear(),i=e.getMonth()-a.getMonth();return n*12+i}function he(r,t){return h(2,arguments),m(r).getTime()-m(t).getTime()}var G={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}},ve="trunc";function ge(r){return r?G[r]:G[ve]}function we(r){h(1,arguments);var t=m(r);return t.setHours(23,59,59,999),t}function be(r){h(1,arguments);var t=m(r),e=t.getMonth();return t.setFullYear(t.getFullYear(),e+1,0),t.setHours(23,59,59,999),t}function ye(r){h(1,arguments);var t=m(r);return we(t).getTime()===be(t).getTime()}function Te(r,t){h(2,arguments);var e=m(r),a=m(t),n=$(e,a),i=Math.abs(me(e,a)),o;if(i<1)o=0;else{e.getMonth()===1&&e.getDate()>27&&e.setDate(30),e.setMonth(e.getMonth()-n*i);var s=$(e,a)===-n;ye(m(r))&&i===1&&$(r,a)===1&&(s=!1),o=n*(i-Number(s))}return o===0?0:o}function Me(r,t,e){h(2,arguments);var a=he(r,t)/1e3;return ge(e==null?void 0:e.roundingMethod)(a)}function De(r,t){h(2,arguments);var e=S(t);return de(r,-e)}var pe=864e5;function Oe(r){h(1,arguments);var t=m(r),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime(),n=e-a;return Math.floor(n/pe)+1}function q(r){h(1,arguments);var t=1,e=m(r),a=e.getUTCDay(),n=(a<t?7:0)+a-t;return e.setUTCDate(e.getUTCDate()-n),e.setUTCHours(0,0,0,0),e}function K(r){h(1,arguments);var t=m(r),e=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(e+1,0,4),a.setUTCHours(0,0,0,0);var n=q(a),i=new Date(0);i.setUTCFullYear(e,0,4),i.setUTCHours(0,0,0,0);var o=q(i);return t.getTime()>=n.getTime()?e+1:t.getTime()>=o.getTime()?e:e-1}function Ce(r){h(1,arguments);var t=K(r),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var a=q(e);return a}var Se=6048e5;function Pe(r){h(1,arguments);var t=m(r),e=q(t).getTime()-Ce(t).getTime();return Math.round(e/Se)+1}function L(r,t){var e,a,n,i,o,s,u,l;h(1,arguments);var v=U(),c=S((e=(a=(n=(i=t==null?void 0:t.weekStartsOn)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&n!==void 0?n:v.weekStartsOn)!==null&&a!==void 0?a:(u=v.locale)===null||u===void 0||(l=u.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&e!==void 0?e:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var w=m(r),d=w.getUTCDay(),g=(d<c?7:0)+d-c;return w.setUTCDate(w.getUTCDate()-g),w.setUTCHours(0,0,0,0),w}function Z(r,t){var e,a,n,i,o,s,u,l;h(1,arguments);var v=m(r),c=v.getUTCFullYear(),w=U(),d=S((e=(a=(n=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:w.firstWeekContainsDate)!==null&&a!==void 0?a:(u=w.locale)===null||u===void 0||(l=u.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=new Date(0);g.setUTCFullYear(c+1,0,d),g.setUTCHours(0,0,0,0);var D=L(g,t),y=new Date(0);y.setUTCFullYear(c,0,d),y.setUTCHours(0,0,0,0);var p=L(y,t);return v.getTime()>=D.getTime()?c+1:v.getTime()>=p.getTime()?c:c-1}function ke(r,t){var e,a,n,i,o,s,u,l;h(1,arguments);var v=U(),c=S((e=(a=(n=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:v.firstWeekContainsDate)!==null&&a!==void 0?a:(u=v.locale)===null||u===void 0||(l=u.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&e!==void 0?e:1),w=Z(r,t),d=new Date(0);d.setUTCFullYear(w,0,c),d.setUTCHours(0,0,0,0);var g=L(d,t);return g}var xe=6048e5;function We(r,t){h(1,arguments);var e=m(r),a=L(e,t).getTime()-ke(e,t).getTime();return Math.round(a/xe)+1}function f(r,t){for(var e=r<0?"-":"",a=Math.abs(r).toString();a.length<t;)a="0"+a;return e+a}var _e={y:function(t,e){var a=t.getUTCFullYear(),n=a>0?a:1-a;return f(e==="yy"?n%100:n,e.length)},M:function(t,e){var a=t.getUTCMonth();return e==="M"?String(a+1):f(a+1,2)},d:function(t,e){return f(t.getUTCDate(),e.length)},a:function(t,e){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];case"aaaa":default:return a==="am"?"a.m.":"p.m."}},h:function(t,e){return f(t.getUTCHours()%12||12,e.length)},H:function(t,e){return f(t.getUTCHours(),e.length)},m:function(t,e){return f(t.getUTCMinutes(),e.length)},s:function(t,e){return f(t.getUTCSeconds(),e.length)},S:function(t,e){var a=e.length,n=t.getUTCMilliseconds(),i=Math.floor(n*Math.pow(10,a-3));return f(i,e.length)}};const M=_e;var k={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ye={G:function(t,e,a){var n=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})}},y:function(t,e,a){if(e==="yo"){var n=t.getUTCFullYear(),i=n>0?n:1-n;return a.ordinalNumber(i,{unit:"year"})}return M.y(t,e)},Y:function(t,e,a,n){var i=Z(t,n),o=i>0?i:1-i;if(e==="YY"){var s=o%100;return f(s,2)}return e==="Yo"?a.ordinalNumber(o,{unit:"year"}):f(o,e.length)},R:function(t,e){var a=K(t);return f(a,e.length)},u:function(t,e){var a=t.getUTCFullYear();return f(a,e.length)},Q:function(t,e,a){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return f(n,2);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,e,a){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return f(n,2);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,e,a){var n=t.getUTCMonth();switch(e){case"M":case"MM":return M.M(t,e);case"Mo":return a.ordinalNumber(n+1,{unit:"month"});case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})}},L:function(t,e,a){var n=t.getUTCMonth();switch(e){case"L":return String(n+1);case"LL":return f(n+1,2);case"Lo":return a.ordinalNumber(n+1,{unit:"month"});case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})}},w:function(t,e,a,n){var i=We(t,n);return e==="wo"?a.ordinalNumber(i,{unit:"week"}):f(i,e.length)},I:function(t,e,a){var n=Pe(t);return e==="Io"?a.ordinalNumber(n,{unit:"week"}):f(n,e.length)},d:function(t,e,a){return e==="do"?a.ordinalNumber(t.getUTCDate(),{unit:"date"}):M.d(t,e)},D:function(t,e,a){var n=Oe(t);return e==="Do"?a.ordinalNumber(n,{unit:"dayOfYear"}):f(n,e.length)},E:function(t,e,a){var n=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})}},e:function(t,e,a,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return f(o,2);case"eo":return a.ordinalNumber(o,{unit:"day"});case"eee":return a.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(i,{width:"short",context:"formatting"});case"eeee":default:return a.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,a,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return f(o,e.length);case"co":return a.ordinalNumber(o,{unit:"day"});case"ccc":return a.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(i,{width:"narrow",context:"standalone"});case"cccccc":return a.day(i,{width:"short",context:"standalone"});case"cccc":default:return a.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,a){var n=t.getUTCDay(),i=n===0?7:n;switch(e){case"i":return String(i);case"ii":return f(i,e.length);case"io":return a.ordinalNumber(i,{unit:"day"});case"iii":return a.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(n,{width:"short",context:"formatting"});case"iiii":default:return a.day(n,{width:"wide",context:"formatting"})}},a:function(t,e,a){var n=t.getUTCHours(),i=n/12>=1?"pm":"am";switch(e){case"a":case"aa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,a){var n=t.getUTCHours(),i;switch(n===12?i=k.noon:n===0?i=k.midnight:i=n/12>=1?"pm":"am",e){case"b":case"bb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,a){var n=t.getUTCHours(),i;switch(n>=17?i=k.evening:n>=12?i=k.afternoon:n>=4?i=k.morning:i=k.night,e){case"B":case"BB":case"BBB":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,a){if(e==="ho"){var n=t.getUTCHours()%12;return n===0&&(n=12),a.ordinalNumber(n,{unit:"hour"})}return M.h(t,e)},H:function(t,e,a){return e==="Ho"?a.ordinalNumber(t.getUTCHours(),{unit:"hour"}):M.H(t,e)},K:function(t,e,a){var n=t.getUTCHours()%12;return e==="Ko"?a.ordinalNumber(n,{unit:"hour"}):f(n,e.length)},k:function(t,e,a){var n=t.getUTCHours();return n===0&&(n=24),e==="ko"?a.ordinalNumber(n,{unit:"hour"}):f(n,e.length)},m:function(t,e,a){return e==="mo"?a.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):M.m(t,e)},s:function(t,e,a){return e==="so"?a.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):M.s(t,e)},S:function(t,e){return M.S(t,e)},X:function(t,e,a,n){var i=n._originalDate||t,o=i.getTimezoneOffset();if(o===0)return"Z";switch(e){case"X":return B(o);case"XXXX":case"XX":return C(o);case"XXXXX":case"XXX":default:return C(o,":")}},x:function(t,e,a,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"x":return B(o);case"xxxx":case"xx":return C(o);case"xxxxx":case"xxx":default:return C(o,":")}},O:function(t,e,a,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+j(o,":");case"OOOO":default:return"GMT"+C(o,":")}},z:function(t,e,a,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+j(o,":");case"zzzz":default:return"GMT"+C(o,":")}},t:function(t,e,a,n){var i=n._originalDate||t,o=Math.floor(i.getTime()/1e3);return f(o,e.length)},T:function(t,e,a,n){var i=n._originalDate||t,o=i.getTime();return f(o,e.length)}};function j(r,t){var e=r>0?"-":"+",a=Math.abs(r),n=Math.floor(a/60),i=a%60;if(i===0)return e+String(n);var o=t||"";return e+String(n)+o+f(i,2)}function B(r,t){if(r%60===0){var e=r>0?"-":"+";return e+f(Math.abs(r)/60,2)}return C(r,t)}function C(r,t){var e=t||"",a=r>0?"-":"+",n=Math.abs(r),i=f(Math.floor(n/60),2),o=f(n%60,2);return a+i+e+o}const Ue=Ye;var V=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},ee=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Ee=function(t,e){var a=t.match(/(P+)(p+)?/)||[],n=a[1],i=a[2];if(!i)return V(t,e);var o;switch(n){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",V(n,e)).replace("{{time}}",ee(i,e))},Ne={p:ee,P:Ee};const $e=Ne;var Fe=["D","DD"],qe=["YY","YYYY"];function Le(r){return Fe.indexOf(r)!==-1}function Ie(r){return qe.indexOf(r)!==-1}function J(r,t,e){if(r==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Re={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Xe=function(t,e,a){var n,i=Re[t];return typeof i=="string"?n=i:e===1?n=i.one:n=i.other.replace("{{count}}",e.toString()),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:n+" ago":n};const He=Xe;function H(r){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):r.defaultWidth,a=r.formats[e]||r.formats[r.defaultWidth];return a}}var Qe={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ae={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ge={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},je={date:H({formats:Qe,defaultWidth:"full"}),time:H({formats:Ae,defaultWidth:"full"}),dateTime:H({formats:Ge,defaultWidth:"full"})};const Be=je;var Ve={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Je=function(t,e,a,n){return Ve[t]};const ze=Je;function _(r){return function(t,e){var a=e!=null&&e.context?String(e.context):"standalone",n;if(a==="formatting"&&r.formattingValues){var i=r.defaultFormattingWidth||r.defaultWidth,o=e!=null&&e.width?String(e.width):i;n=r.formattingValues[o]||r.formattingValues[i]}else{var s=r.defaultWidth,u=e!=null&&e.width?String(e.width):r.defaultWidth;n=r.values[u]||r.values[s]}var l=r.argumentCallback?r.argumentCallback(t):t;return n[l]}}var Ke={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ze={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},et={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},tt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},rt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},at={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},nt=function(t,e){var a=Number(t),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},it={ordinalNumber:nt,era:_({values:Ke,defaultWidth:"wide"}),quarter:_({values:Ze,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:_({values:et,defaultWidth:"wide"}),day:_({values:tt,defaultWidth:"wide"}),dayPeriod:_({values:rt,defaultWidth:"wide",formattingValues:at,defaultFormattingWidth:"wide"})};const ot=it;function Y(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.width,n=a&&r.matchPatterns[a]||r.matchPatterns[r.defaultMatchWidth],i=t.match(n);if(!i)return null;var o=i[0],s=a&&r.parsePatterns[a]||r.parsePatterns[r.defaultParseWidth],u=Array.isArray(s)?st(s,function(c){return c.test(o)}):ut(s,function(c){return c.test(o)}),l;l=r.valueCallback?r.valueCallback(u):u,l=e.valueCallback?e.valueCallback(l):l;var v=t.slice(o.length);return{value:l,rest:v}}}function ut(r,t){for(var e in r)if(r.hasOwnProperty(e)&&t(r[e]))return e}function st(r,t){for(var e=0;e<r.length;e++)if(t(r[e]))return e}function dt(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.match(r.matchPattern);if(!a)return null;var n=a[0],i=t.match(r.parsePattern);if(!i)return null;var o=r.valueCallback?r.valueCallback(i[0]):i[0];o=e.valueCallback?e.valueCallback(o):o;var s=t.slice(n.length);return{value:o,rest:s}}}var lt=/^(\d+)(th|st|nd|rd)?/i,ft=/\d+/i,ct={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},mt={any:[/^b/i,/^(a|c)/i]},ht={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},vt={any:[/1/i,/2/i,/3/i,/4/i]},gt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},wt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},bt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},yt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Tt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Mt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Dt={ordinalNumber:dt({matchPattern:lt,parsePattern:ft,valueCallback:function(t){return parseInt(t,10)}}),era:Y({matchPatterns:ct,defaultMatchWidth:"wide",parsePatterns:mt,defaultParseWidth:"any"}),quarter:Y({matchPatterns:ht,defaultMatchWidth:"wide",parsePatterns:vt,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Y({matchPatterns:gt,defaultMatchWidth:"wide",parsePatterns:wt,defaultParseWidth:"any"}),day:Y({matchPatterns:bt,defaultMatchWidth:"wide",parsePatterns:yt,defaultParseWidth:"any"}),dayPeriod:Y({matchPatterns:Tt,defaultMatchWidth:"any",parsePatterns:Mt,defaultParseWidth:"any"})};const pt=Dt;var Ot={code:"en-US",formatDistance:He,formatLong:Be,formatRelative:ze,localize:ot,match:pt,options:{weekStartsOn:0,firstWeekContainsDate:1}};const te=Ot;var Ct=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,St=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Pt=/^'([^]*?)'?$/,kt=/''/g,xt=/[a-zA-Z]/;function re(r,t,e){var a,n,i,o,s,u,l,v,c,w,d,g,D,y,p,P,O,I;h(2,arguments);var ne=String(t),x=U(),W=(a=(n=e==null?void 0:e.locale)!==null&&n!==void 0?n:x.locale)!==null&&a!==void 0?a:te,R=S((i=(o=(s=(u=e==null?void 0:e.firstWeekContainsDate)!==null&&u!==void 0?u:e==null||(l=e.locale)===null||l===void 0||(v=l.options)===null||v===void 0?void 0:v.firstWeekContainsDate)!==null&&s!==void 0?s:x.firstWeekContainsDate)!==null&&o!==void 0?o:(c=x.locale)===null||c===void 0||(w=c.options)===null||w===void 0?void 0:w.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(R>=1&&R<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var X=S((d=(g=(D=(y=e==null?void 0:e.weekStartsOn)!==null&&y!==void 0?y:e==null||(p=e.locale)===null||p===void 0||(P=p.options)===null||P===void 0?void 0:P.weekStartsOn)!==null&&D!==void 0?D:x.weekStartsOn)!==null&&g!==void 0?g:(O=x.locale)===null||O===void 0||(I=O.options)===null||I===void 0?void 0:I.weekStartsOn)!==null&&d!==void 0?d:0);if(!(X>=0&&X<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!W.localize)throw new RangeError("locale must contain localize property");if(!W.formatLong)throw new RangeError("locale must contain formatLong property");var E=m(r);if(!ce(E))throw new RangeError("Invalid time value");var ie=A(E),oe=De(E,ie),ue={firstWeekContainsDate:R,weekStartsOn:X,locale:W,_originalDate:E},se=ne.match(St).map(function(b){var T=b[0];if(T==="p"||T==="P"){var N=$e[T];return N(b,W.formatLong)}return b}).join("").match(Ct).map(function(b){if(b==="''")return"'";var T=b[0];if(T==="'")return Wt(b);var N=Ue[T];if(N)return!(e!=null&&e.useAdditionalWeekYearTokens)&&Ie(b)&&J(b,t,String(r)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&Le(b)&&J(b,t,String(r)),N(oe,b,W.localize,ue);if(T.match(xt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+T+"`");return b}).join("");return se}function Wt(r){var t=r.match(Pt);return t?t[1].replace(kt,"'"):r}function ae(r,t){if(r==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e]);return r}function _t(r){return ae({},r)}var z=1440,Yt=2520,Q=43200,Ut=86400;function Et(r,t,e){var a,n;h(2,arguments);var i=U(),o=(a=(n=e==null?void 0:e.locale)!==null&&n!==void 0?n:i.locale)!==null&&a!==void 0?a:te;if(!o.formatDistance)throw new RangeError("locale must contain formatDistance property");var s=$(r,t);if(isNaN(s))throw new RangeError("Invalid time value");var u=ae(_t(e),{addSuffix:!!(e!=null&&e.addSuffix),comparison:s}),l,v;s>0?(l=m(t),v=m(r)):(l=m(r),v=m(t));var c=Me(v,l),w=(A(v)-A(l))/1e3,d=Math.round((c-w)/60),g;if(d<2)return e!=null&&e.includeSeconds?c<5?o.formatDistance("lessThanXSeconds",5,u):c<10?o.formatDistance("lessThanXSeconds",10,u):c<20?o.formatDistance("lessThanXSeconds",20,u):c<40?o.formatDistance("halfAMinute",0,u):c<60?o.formatDistance("lessThanXMinutes",1,u):o.formatDistance("xMinutes",1,u):d===0?o.formatDistance("lessThanXMinutes",1,u):o.formatDistance("xMinutes",d,u);if(d<45)return o.formatDistance("xMinutes",d,u);if(d<90)return o.formatDistance("aboutXHours",1,u);if(d<z){var D=Math.round(d/60);return o.formatDistance("aboutXHours",D,u)}else{if(d<Yt)return o.formatDistance("xDays",1,u);if(d<Q){var y=Math.round(d/z);return o.formatDistance("xDays",y,u)}else if(d<Ut)return g=Math.round(d/Q),o.formatDistance("aboutXMonths",g,u)}if(g=Te(v,l),g<12){var p=Math.round(d/Q);return o.formatDistance("xMonths",p,u)}else{var P=g%12,O=Math.floor(g/12);return P<3?o.formatDistance("aboutXYears",O,u):P<9?o.formatDistance("overXYears",O,u):o.formatDistance("almostXYears",O+1,u)}}function Nt(r,t){return h(1,arguments),Et(r,Date.now(),t)}function $t(r,t){const e=t||"dd MMM yyyy";return r?re(new Date(r),e):""}function Ft(r,t){const e=t||"dd MMM yyyy p";return r?re(new Date(r),e):""}function qt(r){return r?Nt(new Date(r),{addSuffix:!0}):""}export{F as _,Ft as a,$t as b,qt as f};
