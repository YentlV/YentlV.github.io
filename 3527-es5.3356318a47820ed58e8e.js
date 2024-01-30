!function(){"use strict";function e(e,t,o){return(t=r(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function t(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return e};var e={},o=Object.prototype,r=o.hasOwnProperty,n=Object.defineProperty||function(e,t,o){e[t]=o.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",p=i.toStringTag||"@@toStringTag";function c(e,t,o){return Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(j){c=function(e,t,o){return e[t]=o}}function l(e,t,o,r){var i=t&&t.prototype instanceof f?t:f,a=Object.create(i.prototype),s=new D(r||[]);return n(a,"_invoke",{value:k(e,o,s)}),a}function u(e,t,o){try{return{type:"normal",arg:e.call(t,o)}}catch(j){return{type:"throw",arg:j}}}e.wrap=l;var d={};function f(){}function h(){}function v(){}var m={};c(m,a,function(){return this});var y=Object.getPrototypeOf,g=y&&y(y(S([])));g&&g!==o&&r.call(g,a)&&(m=g);var b=v.prototype=f.prototype=Object.create(m);function w(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function x(e,t){function o(n,i,a,s){var p=u(e[n],e,i);if("throw"!==p.type){var c=p.arg,l=c.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then(function(e){o("next",e,a,s)},function(e){o("throw",e,a,s)}):t.resolve(l).then(function(e){c.value=e,a(c)},function(e){return o("throw",e,a,s)})}s(p.arg)}var i;n(this,"_invoke",{value:function(e,r){function n(){return new t(function(t,n){o(e,r,t,n)})}return i=i?i.then(n,n):n()}})}function k(e,t,o){var r="suspendedStart";return function(n,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw i;return{value:void 0,done:!0}}for(o.method=n,o.arg=i;;){var a=o.delegate;if(a){var s=E(a,o);if(s){if(s===d)continue;return s}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if("suspendedStart"===r)throw r="completed",o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);r="executing";var p=u(e,t,o);if("normal"===p.type){if(r=o.done?"completed":"suspendedYield",p.arg===d)continue;return{value:p.arg,done:o.done}}"throw"===p.type&&(r="completed",o.method="throw",o.arg=p.arg)}}}function E(e,t){var o=t.method,r=e.iterator[o];if(void 0===r)return t.delegate=null,"throw"===o&&e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method)||"return"!==o&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+o+"' method")),d;var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,d;var i=n.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function S(e){if(e||""===e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,n=function t(){for(;++o<e.length;)if(r.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}throw new TypeError(typeof e+" is not iterable")}return h.prototype=v,n(b,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:h,configurable:!0}),h.displayName=c(v,p,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,p,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},w(x.prototype),c(x.prototype,s,function(){return this}),e.AsyncIterator=x,e.async=function(t,o,r,n,i){void 0===i&&(i=Promise);var a=new x(l(t,o,r,n),i);return e.isGeneratorFunction(o)?a:a.next().then(function(e){return e.done?e.value:a.next()})},w(b),c(b,p,"Generator"),c(b,a,function(){return this}),c(b,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),o=[];for(var r in t)o.push(r);return o.reverse(),function e(){for(;o.length;){var r=o.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=S,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function o(o,r){return a.type="throw",a.arg=e,t.next=o,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),p=r.call(i,"finallyLoc");if(s&&p){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!p)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.finallyLoc===e)return this.complete(o.completion,o.afterLoc),L(o),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.tryLoc===e){var r=o.completion;if("throw"===r.type){var n=r.arg;L(o)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,o){return this.delegate={iterator:S(e),resultName:t,nextLoc:o},"next"===this.method&&(this.arg=void 0),d}},e}function o(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,r(n.key),n)}}function r(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(self.webpackChunkzbos_fit_scan_app=self.webpackChunkzbos_fit_scan_app||[]).push([[3527],{23527:function(r,n,i){i.r(n),i.d(n,{ion_popover:function(){return b}});var a=i(8239),s=i(23150),p=i(97585),c=i(27069),l=i(53291),u=i(61269),d=i(64425),f=i(97235),h=function(e,t){var o="top",r="left",n=e.querySelector(".popover-content"),i=n.getBoundingClientRect(),a=i.width,s=i.height,p=e.ownerDocument.defaultView.innerWidth,c=e.ownerDocument.defaultView.innerHeight,l=t&&t.target&&t.target.getBoundingClientRect(),u=null!=l&&"top"in l?l.top:c/2-s/2,d=null!=l&&"left"in l?l.left:p/2,h=l&&l.width||0,m=l&&l.height||0,y=e.querySelector(".popover-arrow"),g=y.getBoundingClientRect(),b=g.width,w=g.height;null==l&&(y.style.display="none");var x={top:u+m,left:d+h/2-b/2},k={top:u+m+(w-1),left:d+h/2-a/2},E=!1,P=!1;k.left<v+25?(E=!0,k.left=v):a+v+k.left+25>p&&(P=!0,k.left=p-a-v,r="right"),u+m+s>c&&u-s>0?(x.top=u-(w+1),k.top=u-s-(w-1),e.className=e.className+" popover-bottom",o="bottom"):u+m+s>c&&(n.style.bottom=v+"%"),y.style.top=x.top+"px",y.style.left=x.left+"px",n.style.top=k.top+"px",n.style.left=k.left+"px",E&&(n.style.left="calc(".concat(k.left,"px + var(--ion-safe-area-left, 0px))")),P&&(n.style.left="calc(".concat(k.left,"px - var(--ion-safe-area-right, 0px))")),n.style.transformOrigin=o+" "+r;var L=(0,f.c)(),D=(0,f.c)(),S=(0,f.c)();return D.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),S.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),L.addElement(e).easing("ease").duration(100).addAnimation([D,S])},v=5,m=function(e){var t=(0,f.c)(),o=(0,f.c)(),r=(0,f.c)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([o,r])},y=function(e,t){var o=e.ownerDocument,r="rtl"===o.dir,n="top",i=r?"right":"left",a=e.querySelector(".popover-content"),s=a.getBoundingClientRect(),p=s.width,c=s.height,l=o.defaultView.innerWidth,u=o.defaultView.innerHeight,d=t&&t.target&&t.target.getBoundingClientRect(),h=null!=d&&"bottom"in d?d.bottom:u/2-c/2,v=d&&d.height||0,m={top:h,left:null!=d&&"left"in d?r?d.left-p+d.width:d.left:l/2-p/2};m.left<12?(m.left=12,i="left"):p+12+m.left>l&&(m.left=l-p-12,i="right"),h+v+c>u&&h-c>0?(m.top=h-c-v,e.className=e.className+" popover-bottom",n="bottom"):h+v+c>u&&(a.style.bottom="12px");var y=(0,f.c)(),g=(0,f.c)(),b=(0,f.c)(),w=(0,f.c)(),x=(0,f.c)();return g.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),b.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),w.addElement(a).beforeStyles({top:"".concat(m.top,"px"),left:"".concat(m.left,"px"),"transform-origin":"".concat(n," ").concat(i)}).fromTo("transform","scale(0.001)","scale(1)"),x.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1),y.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([g,b,w,x])},g=function(e){var t=(0,f.c)(),o=(0,f.c)(),r=(0,f.c)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([o,r])},b=function(){function r(e){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(0,s.r)(this,e),this.didPresent=(0,s.e)(this,"ionPopoverDidPresent",7),this.willPresent=(0,s.e)(this,"ionPopoverWillPresent",7),this.willDismiss=(0,s.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=(0,s.e)(this,"ionPopoverDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),t.dismiss()},this.onBackdropTap=function(){t.dismiss(void 0,l.B)},this.onLifecycle=function(e){var o=t.usersElement,r=w[e.type];if(o&&r){var n=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(n)}}}var n,i,f;return n=r,(i=[{key:"connectedCallback",value:function(){(0,l.e)(this.el)}},{key:"present",value:function(){var e=this;return(0,a.Z)(t().mark(function o(){var r,n;return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.presented){t.next=2;break}return t.abrupt("return");case 2:if(r=e.el.querySelector(".popover-content")){t.next=5;break}throw new Error("container is undefined");case 5:return n=Object.assign(Object.assign({},e.componentProps),{popover:e.el}),t.next=8,(0,c.a)(e.delegate,r,e.component,["popover-viewport",e.el["s-sc"]],n);case 8:return e.usersElement=t.sent,t.next=11,(0,d.e)(e.usersElement);case 11:return t.abrupt("return",(0,l.d)(e,"popoverEnter",h,y,e.event));case 12:case"end":return t.stop()}},o)}))()}},{key:"dismiss",value:function(e,o){var r=this;return(0,a.Z)(t().mark(function n(){var i;return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,l.f)(r,e,o,"popoverLeave",m,g,r.event);case 2:if(i=t.sent,t.t0=i,!t.t0){t.next=7;break}return t.next=7,(0,c.d)(r.delegate,r.usersElement);case 7:return t.abrupt("return",i);case 8:case"end":return t.stop()}},n)}))()}},{key:"onDidDismiss",value:function(){return(0,l.g)(this.el,"ionPopoverDidDismiss")}},{key:"onWillDismiss",value:function(){return(0,l.g)(this.el,"ionPopoverWillDismiss")}},{key:"render",value:function(){var t,o=(0,p.b)(this),r=this.onLifecycle,n=this.htmlAttributes;return(0,s.h)(s.H,Object.assign({"aria-modal":"true","no-router":!0,tabindex:"-1"},n,{style:{zIndex:"".concat(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},(0,u.g)(this.cssClass)),(t={},e(t,o,!0),e(t,"popover-translucent",this.translucent),t)),onIonPopoverDidPresent:r,onIonPopoverWillPresent:r,onIonPopoverWillDismiss:r,onIonPopoverDidDismiss:r,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap}),(0,s.h)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),(0,s.h)("div",{tabindex:"0"}),(0,s.h)("div",{class:"popover-wrapper ion-overlay-wrapper"},(0,s.h)("div",{class:"popover-arrow"}),(0,s.h)("div",{class:"popover-content"})),(0,s.h)("div",{tabindex:"0"}))}},{key:"el",get:function(){return(0,s.i)(this)}}])&&o(n.prototype,i),f&&o(n,f),Object.defineProperty(n,"prototype",{writable:!1}),r}(),w={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};b.style={ios:'.sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:100ms;transition-delay:100ms}"}}}])}();