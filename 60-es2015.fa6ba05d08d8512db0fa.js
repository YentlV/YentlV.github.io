"use strict";(self.webpackChunkzbos_fit_scan_app=self.webpackChunkzbos_fit_scan_app||[]).push([[60],{86272:function(e,t,n){n.r(t),n.d(t,{startTapClick:function(){return s}});var o=n(71567);const s=e=>{let t,n,s,v,p=10*-u,f=0;const L=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),m=new WeakMap,h=e=>{p=(0,o.q)(e),b(e)},E=()=>{clearTimeout(v),v=void 0,n&&(T(!1),n=void 0)},w=e=>{n||void 0!==t&&null!==t.parentElement||(t=void 0,g(i(e),e))},b=e=>{g(void 0,e)},g=(e,t)=>{if(e&&e===n)return;clearTimeout(v),v=void 0;const{x:s,y:i}=(0,o.p)(t);if(n){if(m.has(n))throw new Error("internal error");n.classList.contains(c)||k(n,s,i),T(!0)}if(e){const t=m.get(e);t&&(clearTimeout(t),m.delete(e));const n=a(e)?0:d;e.classList.remove(c),v=setTimeout(()=>{k(e,s,i),v=void 0},n)}n=e},k=(e,t,n)=>{f=Date.now(),e.classList.add(c);const o=L&&r(e);o&&o.addRipple&&(q(),s=o.addRipple(t,n))},q=()=>{void 0!==s&&(s.then(e=>e()),s=void 0)},T=e=>{q();const t=n;if(!t)return;const o=l-Date.now()+f;if(e&&o>0&&!a(t)){const e=setTimeout(()=>{t.classList.remove(c),m.delete(t)},l);m.set(t,e)}else t.classList.remove(c)},_=document;_.addEventListener("ionScrollStart",e=>{t=e.target,E()}),_.addEventListener("ionScrollEnd",()=>{t=void 0}),_.addEventListener("ionGestureCaptured",E),_.addEventListener("touchstart",e=>{p=(0,o.q)(e),w(e)},!0),_.addEventListener("touchcancel",h,!0),_.addEventListener("touchend",h,!0),_.addEventListener("mousedown",e=>{const t=(0,o.q)(e)-u;p<t&&w(e)},!0),_.addEventListener("mouseup",e=>{const t=(0,o.q)(e)-u;p<t&&b(e)},!0)},i=e=>{if(!e.composedPath)return e.target.closest(".ion-activatable");{const t=e.composedPath();for(let e=0;e<t.length-2;e++){const n=t[e];if(n.classList&&n.classList.contains("ion-activatable"))return n}}},a=e=>e.classList.contains("ion-activatable-instant"),r=e=>{if(e.shadowRoot){const t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},c="ion-activated",d=200,l=200,u=2500}}]);