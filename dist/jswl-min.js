!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.jswl=t():e.jswl=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),t.default=new function(){var e=this;this.isNullOrUndefined=function(e){return null==e},this.inArray=function(e,t){return!(-1===t.indexOf(e))},this.isEmpty=function(t){return null==t||""===t||0===t||"0"===t||e.isDefined(t.length)&&0===t.length||!1===t||e.isObjectEmpty(t)},this.isDefined=function(e){return null!=e},this.getSquareBracketedFragmentByNumber=function(t,n){return e.getSquareBracketedFragments(t)[n]},this.getSquareBracketedFragments=function(e){var t=e.split("[");return t.forEach(function(e,t,n){n[t]=e.replace(/\]/g,"")}),t},this.checkForSubstring=function(e,t){return-1!==e.indexOf(t)},this.hello=function(){console.log("Hello JSWL! ;)")},this.uniqueArray=function(e){return e.filter(function(e,t,n){return n.indexOf(e)===t})},this.removeAllElementsLike=function(e,t){var n=[];return e.forEach((e,r,u)=>{e!==t&&n.push(e)}),n},this.isObjectEmpty=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}}}]).default});