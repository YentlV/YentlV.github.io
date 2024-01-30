!function(){"use strict";function t(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return i};var i={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,i,e){t[i]=e.value},o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function d(t,i,e){return Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[i]}try{d({},"")}catch(E){d=function(t,i,e){return t[i]=e}}function c(t,i,e,n){var o=i&&i.prototype instanceof m?i:m,s=Object.create(o.prototype),a=new z(n||[]);return r(s,"_invoke",{value:k(t,e,a)}),s}function p(t,i,e){try{return{type:"normal",arg:t.call(i,e)}}catch(E){return{type:"throw",arg:E}}}i.wrap=c;var h={};function m(){}function u(){}function f(){}var g={};d(g,s,function(){return this});var b=Object.getPrototypeOf,v=b&&b(b(j([])));v&&v!==e&&n.call(v,s)&&(g=v);var y=f.prototype=m.prototype=Object.create(g);function w(t){["next","throw","return"].forEach(function(i){d(t,i,function(t){return this._invoke(i,t)})})}function x(t,i){function e(r,o,s,a){var l=p(t[r],t,o);if("throw"!==l.type){var d=l.arg,c=d.value;return c&&"object"==typeof c&&n.call(c,"__await")?i.resolve(c.__await).then(function(t){e("next",t,s,a)},function(t){e("throw",t,s,a)}):i.resolve(c).then(function(t){d.value=t,s(d)},function(t){return e("throw",t,s,a)})}a(l.arg)}var o;r(this,"_invoke",{value:function(t,n){function r(){return new i(function(i,r){e(t,n,i,r)})}return o=o?o.then(r,r):r()}})}function k(t,i,e){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return{value:void 0,done:!0}}for(e.method=r,e.arg=o;;){var s=e.delegate;if(s){var a=O(s,e);if(a){if(a===h)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var l=p(t,i,e);if("normal"===l.type){if(n=e.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(n="completed",e.method="throw",e.arg=l.arg)}}}function O(t,i){var e=i.method,n=t.iterator[e];if(void 0===n)return i.delegate=null,"throw"===e&&t.iterator.return&&(i.method="return",i.arg=void 0,O(t,i),"throw"===i.method)||"return"!==e&&(i.method="throw",i.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var r=p(n,t.iterator,i.arg);if("throw"===r.type)return i.method="throw",i.arg=r.arg,i.delegate=null,h;var o=r.arg;return o?o.done?(i[t.resultName]=o.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=void 0),i.delegate=null,h):o:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,h)}function S(t){var i={tryLoc:t[0]};1 in t&&(i.catchLoc=t[1]),2 in t&&(i.finallyLoc=t[2],i.afterLoc=t[3]),this.tryEntries.push(i)}function L(t){var i=t.completion||{};i.type="normal",delete i.arg,t.completion=i}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t||""===t){var i=t[s];if(i)return i.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,r=function i(){for(;++e<t.length;)if(n.call(t,e))return i.value=t[e],i.done=!1,i;return i.value=void 0,i.done=!0,i};return r.next=r}}throw new TypeError(typeof t+" is not iterable")}return u.prototype=f,r(y,"constructor",{value:f,configurable:!0}),r(f,"constructor",{value:u,configurable:!0}),u.displayName=d(f,l,"GeneratorFunction"),i.isGeneratorFunction=function(t){var i="function"==typeof t&&t.constructor;return!!i&&(i===u||"GeneratorFunction"===(i.displayName||i.name))},i.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,d(t,l,"GeneratorFunction")),t.prototype=Object.create(y),t},i.awrap=function(t){return{__await:t}},w(x.prototype),d(x.prototype,a,function(){return this}),i.AsyncIterator=x,i.async=function(t,e,n,r,o){void 0===o&&(o=Promise);var s=new x(c(t,e,n,r),o);return i.isGeneratorFunction(e)?s:s.next().then(function(t){return t.done?t.value:s.next()})},w(y),d(y,l,"Generator"),d(y,s,function(){return this}),d(y,"toString",function(){return"[object Generator]"}),i.keys=function(t){var i=Object(t),e=[];for(var n in i)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in i)return t.value=n,t.done=!1,t}return t.done=!0,t}},i.values=j,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var i in this)"t"===i.charAt(0)&&n.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function e(e,n){return s.type="throw",s.arg=t,i.next=e,n&&(i.method="next",i.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],s=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(a&&l){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,i){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=i&&i<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=i,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(s)},complete:function(t,i){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&i&&(this.next=i),h},finish:function(t){for(var i=this.tryEntries.length-1;i>=0;--i){var e=this.tryEntries[i];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),L(e),h}},catch:function(t){for(var i=this.tryEntries.length-1;i>=0;--i){var e=this.tryEntries[i];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var r=n.arg;L(e)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,i,e){return this.delegate={iterator:j(t),resultName:i,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},i}function i(t,i,e){return(i=o(i))in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}function e(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function n(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,o(n.key),n)}}function r(t,i,e){return i&&n(t.prototype,i),e&&n(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(t){var i=function(t,i){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,i||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}(self.webpackChunkzbos_fit_scan_app=self.webpackChunkzbos_fit_scan_app||[]).push([[8056],{58056:function(n,o,s){s.r(o),s.d(o,{ion_item_option:function(){return h},ion_item_options:function(){return u},ion_item_sliding:function(){return f}});var a=s(8239),l=s(23150),d=s(97585),c=s(61269),p=s(71567),h=function(){function t(i){e(this,t),(0,l.r)(this,i),this.disabled=!1,this.expandable=!1,this.type="button",this.onClick=function(t){t.target.closest("ion-item-option")&&t.preventDefault()}}return r(t,[{key:"render",value:function(){var t,e=this.disabled,n=this.expandable,r=void 0===this.href?"button":"a",o=(0,d.b)(this),s="button"===r?{type:this.type}:{download:this.download,href:this.href,target:this.target};return(0,l.h)(l.H,{onClick:this.onClick,class:(0,c.c)(this.color,(t={},i(t,o,!0),i(t,"item-option-disabled",e),i(t,"item-option-expandable",n),i(t,"ion-activatable",!0),t))},(0,l.h)(r,Object.assign({},s,{class:"button-native",part:"native",disabled:e}),(0,l.h)("span",{class:"button-inner"},(0,l.h)("slot",{name:"top"}),(0,l.h)("div",{class:"horizontal-wrapper"},(0,l.h)("slot",{name:"start"}),(0,l.h)("slot",{name:"icon-only"}),(0,l.h)("slot",null),(0,l.h)("slot",{name:"end"})),(0,l.h)("slot",{name:"bottom"})),"md"===o&&(0,l.h)("ion-ripple-effect",null)))}},{key:"el",get:function(){return(0,l.i)(this)}}]),t}();h.style={ios:":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.in-list.item-options-end:last-child){padding-right:calc(.7em + var(--ion-safe-area-right))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-end:last-child){padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}:host(.in-list.item-options-start:first-child){padding-left:calc(.7em + var(--ion-safe-area-left))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-start:first-child){padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0.7em;padding-right:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em}}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted([slot=end]){margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=icon-only]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:16px}:host(.ion-activated){background:var(--ion-color-primary-shade, #3171e0)}:host(.ion-color.ion-activated){background:var(--ion-color-shade)}",md:":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.in-list.item-options-end:last-child){padding-right:calc(.7em + var(--ion-safe-area-right))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-end:last-child){padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}:host(.in-list.item-options-start:first-child){padding-left:calc(.7em + var(--ion-safe-area-left))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-start:first-child){padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0.7em;padding-right:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em}}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted([slot=end]){margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=icon-only]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:14px;font-weight:500;text-transform:uppercase}"};var m,u=function(){function n(t){e(this,n),(0,l.r)(this,t),this.ionSwipe=(0,l.e)(this,"ionSwipe",7),this.side="end"}return r(n,[{key:"fireSwipeEvent",value:function(){var i=this;return(0,a.Z)(t().mark(function e(){return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:i.ionSwipe.emit({side:i.side});case 1:case"end":return t.stop()}},e)}))()}},{key:"render",value:function(){var t,e=(0,d.b)(this),n=(0,p.n)(this.side);return(0,l.h)(l.H,{class:(t={},i(t,e,!0),i(t,"item-options-".concat(e),!0),i(t,"item-options-start",!n),i(t,"item-options-end",n),t)})}},{key:"el",get:function(){return(0,l.i)(this)}}]),n}();u.style={ios:"ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}[dir=rtl] ion-item-options,:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end),:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] .item-options-start,:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end),:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-ios{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)))}.item-options-ios.item-options-end{border-bottom-width:0.55px}.list-ios-lines-none .item-options-ios{border-bottom-width:0}.list-ios-lines-full .item-options-ios,.list-ios-lines-inset .item-options-ios.item-options-end{border-bottom-width:0.55px}",md:"ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}[dir=rtl] ion-item-options,:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end),:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] .item-options-start,:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end),:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-md{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))))}.list-md-lines-none .item-options-md{border-bottom-width:0}.list-md-lines-full .item-options-md,.list-md-lines-inset .item-options-md.item-options-end{border-bottom-width:1px}"};var f=function(){function n(t){e(this,n),(0,l.r)(this,t),this.ionDrag=(0,l.e)(this,"ionDrag",7),this.item=null,this.openAmount=0,this.initialOpenAmount=0,this.optsWidthRightSide=0,this.optsWidthLeftSide=0,this.sides=0,this.optsDirty=!0,this.closestContent=null,this.initialContentScrollY=!0,this.state=2,this.disabled=!1}return r(n,[{key:"disabledChanged",value:function(){this.gesture&&this.gesture.enable(!this.disabled)}},{key:"connectedCallback",value:function(){var i=this;return(0,a.Z)(t().mark(function e(){return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i.item=i.el.querySelector("ion-item"),i.closestContent=i.el.closest("ion-content"),t.next=4,i.updateOptions();case 4:return t.next=6,Promise.resolve().then(s.bind(s,39461));case 6:i.gesture=t.sent.createGesture({el:i.el,gestureName:"item-swipe",gesturePriority:100,threshold:5,canStart:function(t){return i.canStart(t)},onStart:function(){return i.onStart()},onMove:function(t){return i.onMove(t)},onEnd:function(t){return i.onEnd(t)}}),i.disabledChanged();case 8:case"end":return t.stop()}},e)}))()}},{key:"disconnectedCallback",value:function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.item=null,this.leftOptions=this.rightOptions=void 0,m===this.el&&(m=void 0)}},{key:"getOpenAmount",value:function(){return Promise.resolve(this.openAmount)}},{key:"getSlidingRatio",value:function(){return Promise.resolve(this.getSlidingRatioSync())}},{key:"open",value:function(i){var e=this;return(0,a.Z)(t().mark(function n(){var r;return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e.item){t.next=2;break}return t.abrupt("return");case 2:(r=e.getOptions(i))&&(void 0===i&&(i=r===e.leftOptions?"start":"end"),i=(0,p.n)(i)?"end":"start",e.openAmount<0&&r===e.leftOptions||e.openAmount>0&&r===e.rightOptions||(e.closeOpened(),e.state=4,requestAnimationFrame(function(){e.calculateOptsWidth(),m=e.el,e.setOpenAmount("end"===i?e.optsWidthRightSide:-e.optsWidthLeftSide,!1),e.state="end"===i?8:16})));case 4:case"end":return t.stop()}},n)}))()}},{key:"close",value:function(){var i=this;return(0,a.Z)(t().mark(function e(){return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:i.setOpenAmount(0,!0);case 1:case"end":return t.stop()}},e)}))()}},{key:"closeOpened",value:function(){return(0,a.Z)(t().mark(function i(){return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",void 0!==m&&(m.close(),m=void 0,!0));case 1:case"end":return t.stop()}},i)}))()}},{key:"getOptions",value:function(t){return void 0===t?this.leftOptions||this.rightOptions:"start"===t?this.leftOptions:this.rightOptions}},{key:"updateOptions",value:function(){var i=this;return(0,a.Z)(t().mark(function e(){var n,r,o,s,a;return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=i.el.querySelectorAll("ion-item-options"),r=0,i.leftOptions=i.rightOptions=void 0,o=0;case 4:if(!(o<n.length)){t.next=18;break}if(void 0===(s=n.item(o)).componentOnReady){t.next=12;break}return t.next=9,s.componentOnReady();case 9:t.t0=t.sent,t.next=13;break;case 12:t.t0=s;case 13:a=t.t0,"start"==((0,p.n)(a.side)?"end":"start")?(i.leftOptions=a,r|=1):(i.rightOptions=a,r|=2);case 15:o++,t.next=4;break;case 18:i.optsDirty=!0,i.sides=r;case 19:case"end":return t.stop()}},e)}))()}},{key:"canStart",value:function(t){return!(("rtl"===document.dir?window.innerWidth-t.startX<15:t.startX<15)||(m&&m!==this.el&&this.closeOpened(),!this.rightOptions&&!this.leftOptions))}},{key:"disableContentScrollY",value:function(){null!==this.closestContent&&(this.initialContentScrollY=this.closestContent.scrollY,this.closestContent.scrollY=!1)}},{key:"restoreContentScrollY",value:function(){null!==this.closestContent&&(this.closestContent.scrollY=this.initialContentScrollY)}},{key:"onStart",value:function(){this.item=this.el.querySelector("ion-item"),this.disableContentScrollY(),m=this.el,void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),0===this.openAmount&&(this.optsDirty=!0,this.state=4),this.initialOpenAmount=this.openAmount,this.item&&(this.item.style.transition="none")}},{key:"onMove",value:function(t){this.optsDirty&&this.calculateOptsWidth();var i,e=this.initialOpenAmount-t.deltaX;switch(this.sides){case 2:e=Math.max(0,e);break;case 1:e=Math.min(0,e);break;case 3:break;case 0:return;default:console.warn("invalid ItemSideFlags value",this.sides)}e>this.optsWidthRightSide?e=(i=this.optsWidthRightSide)+.55*(e-i):e<-this.optsWidthLeftSide&&(e=(i=-this.optsWidthLeftSide)+.55*(e-i)),this.setOpenAmount(e,!1)}},{key:"onEnd",value:function(t){this.restoreContentScrollY();var i=t.velocityX,e=this.openAmount>0?this.optsWidthRightSide:-this.optsWidthLeftSide,n=this.openAmount>0==!(i<0),r=Math.abs(i)>.3,o=Math.abs(this.openAmount)<Math.abs(e/2);g(n,r,o)&&(e=0);var s=this.state;this.setOpenAmount(e,!0),0!=(32&s)&&this.rightOptions?this.rightOptions.fireSwipeEvent():0!=(64&s)&&this.leftOptions&&this.leftOptions.fireSwipeEvent()}},{key:"calculateOptsWidth",value:function(){this.optsWidthRightSide=0,this.rightOptions&&(this.rightOptions.style.display="flex",this.optsWidthRightSide=this.rightOptions.offsetWidth,this.rightOptions.style.display=""),this.optsWidthLeftSide=0,this.leftOptions&&(this.leftOptions.style.display="flex",this.optsWidthLeftSide=this.leftOptions.offsetWidth,this.leftOptions.style.display=""),this.optsDirty=!1}},{key:"setOpenAmount",value:function(t,i){var e=this;if(void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),this.item){var n=this.item.style;if(this.openAmount=t,i&&(n.transition=""),t>0)this.state=t>=this.optsWidthRightSide+30?40:8;else{if(!(t<0))return this.gesture&&this.gesture.enable(!1),this.tmr=setTimeout(function(){e.state=2,e.tmr=void 0,e.gesture&&e.gesture.enable(!0)},600),m=void 0,void(n.transform="");this.state=t<=-this.optsWidthLeftSide-30?80:16}n.transform="translate3d(".concat(-t,"px,0,0)"),this.ionDrag.emit({amount:t,ratio:this.getSlidingRatioSync()})}}},{key:"getSlidingRatioSync",value:function(){return this.openAmount>0?this.openAmount/this.optsWidthRightSide:this.openAmount<0?this.openAmount/this.optsWidthLeftSide:0}},{key:"render",value:function(){var t,e=(0,d.b)(this);return(0,l.h)(l.H,{class:(t={},i(t,e,!0),i(t,"item-sliding-active-slide",2!==this.state),i(t,"item-sliding-active-options-end",0!=(8&this.state)),i(t,"item-sliding-active-options-start",0!=(16&this.state)),i(t,"item-sliding-active-swipe-end",0!=(32&this.state)),i(t,"item-sliding-active-swipe-start",0!=(64&this.state)),t)})}},{key:"el",get:function(){return(0,l.i)(this)}}],[{key:"watchers",get:function(){return{disabled:["disabledChanged"]}}}]),n}(),g=function(t,i,e){return!i&&e||t&&i};f.style="ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;-ms-flex-order:1;order:1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-left;transition-property:padding-left}[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable,:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;-ms-flex-order:-1;order:-1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-right;transition-property:padding-right}[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable,:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}"}}])}();