"use strict";(self.webpackChunkzbos_fit_scan_app=self.webpackChunkzbos_fit_scan_app||[]).push([[3527],{23527:function(o,e,t){t.r(e),t.d(e,{ion_popover:function(){return u}});var i=t(8239),r=t(23150),n=t(97585),s=t(27069),p=t(53291),a=t(61269),l=t(64425),d=t(97235);const c=(o,e)=>{let t="top",i="left";const r=o.querySelector(".popover-content"),n=r.getBoundingClientRect(),s=n.width,p=n.height,a=o.ownerDocument.defaultView.innerWidth,l=o.ownerDocument.defaultView.innerHeight,c=e&&e.target&&e.target.getBoundingClientRect(),v=null!=c&&"top"in c?c.top:l/2-p/2,m=null!=c&&"left"in c?c.left:a/2,f=c&&c.width||0,u=c&&c.height||0,b=o.querySelector(".popover-arrow"),x=b.getBoundingClientRect(),g=x.width,w=x.height;null==c&&(b.style.display="none");const y={top:v+u,left:m+f/2-g/2},k={top:v+u+(w-1),left:m+f/2-s/2};let D=!1,E=!1;k.left<h+25?(D=!0,k.left=h):s+h+k.left+25>a&&(E=!0,k.left=a-s-h,i="right"),v+u+p>l&&v-p>0?(y.top=v-(w+1),k.top=v-p-(w-1),o.className=o.className+" popover-bottom",t="bottom"):v+u+p>l&&(r.style.bottom=h+"%"),b.style.top=y.top+"px",b.style.left=y.left+"px",r.style.top=k.top+"px",r.style.left=k.left+"px",D&&(r.style.left=`calc(${k.left}px + var(--ion-safe-area-left, 0px))`),E&&(r.style.left=`calc(${k.left}px - var(--ion-safe-area-right, 0px))`),r.style.transformOrigin=t+" "+i;const P=(0,d.c)(),S=(0,d.c)(),q=(0,d.c)();return S.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),q.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),P.addElement(o).easing("ease").duration(100).addAnimation([S,q])},h=5,v=o=>{const e=(0,d.c)(),t=(0,d.c)(),i=(0,d.c)();return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),e.addElement(o).easing("ease").duration(500).addAnimation([t,i])},m=(o,e)=>{const t=o.ownerDocument,i="rtl"===t.dir;let r="top",n=i?"right":"left";const s=o.querySelector(".popover-content"),p=s.getBoundingClientRect(),a=p.width,l=p.height,c=t.defaultView.innerWidth,h=t.defaultView.innerHeight,v=e&&e.target&&e.target.getBoundingClientRect(),m=null!=v&&"bottom"in v?v.bottom:h/2-l/2,f=v&&v.height||0,u={top:m,left:null!=v&&"left"in v?i?v.left-a+v.width:v.left:c/2-a/2};u.left<12?(u.left=12,n="left"):a+12+u.left>c&&(u.left=c-a-12,n="right"),m+f+l>h&&m-l>0?(u.top=m-l-f,o.className=o.className+" popover-bottom",r="bottom"):m+f+l>h&&(s.style.bottom="12px");const b=(0,d.c)(),x=(0,d.c)(),g=(0,d.c)(),w=(0,d.c)(),y=(0,d.c)();return x.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),g.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),w.addElement(s).beforeStyles({top:`${u.top}px`,left:`${u.left}px`,"transform-origin":`${r} ${n}`}).fromTo("transform","scale(0.001)","scale(1)"),y.addElement(o.querySelector(".popover-viewport")).fromTo("opacity",.01,1),b.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([x,g,w,y])},f=o=>{const e=(0,d.c)(),t=(0,d.c)(),i=(0,d.c)();return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),e.addElement(o).easing("ease").duration(500).addAnimation([t,i])},u=class{constructor(o){(0,r.r)(this,o),this.didPresent=(0,r.e)(this,"ionPopoverDidPresent",7),this.willPresent=(0,r.e)(this,"ionPopoverWillPresent",7),this.willDismiss=(0,r.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=(0,r.e)(this,"ionPopoverDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=o=>{o.stopPropagation(),o.preventDefault(),this.dismiss()},this.onBackdropTap=()=>{this.dismiss(void 0,p.B)},this.onLifecycle=o=>{const e=this.usersElement,t=b[o.type];if(e&&t){const i=new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:o.detail});e.dispatchEvent(i)}}}connectedCallback(){(0,p.e)(this.el)}present(){var o=this;return(0,i.Z)(function*(){if(o.presented)return;const e=o.el.querySelector(".popover-content");if(!e)throw new Error("container is undefined");const t=Object.assign(Object.assign({},o.componentProps),{popover:o.el});return o.usersElement=yield(0,s.a)(o.delegate,e,o.component,["popover-viewport",o.el["s-sc"]],t),yield(0,l.e)(o.usersElement),(0,p.d)(o,"popoverEnter",c,m,o.event)})()}dismiss(o,e){var t=this;return(0,i.Z)(function*(){const i=yield(0,p.f)(t,o,e,"popoverLeave",v,f,t.event);return i&&(yield(0,s.d)(t.delegate,t.usersElement)),i})()}onDidDismiss(){return(0,p.g)(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return(0,p.g)(this.el,"ionPopoverWillDismiss")}render(){const o=(0,n.b)(this),{onLifecycle:e,htmlAttributes:t}=this;return(0,r.h)(r.H,Object.assign({"aria-modal":"true","no-router":!0,tabindex:"-1"},t,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign(Object.assign({},(0,a.g)(this.cssClass)),{[o]:!0,"popover-translucent":this.translucent}),onIonPopoverDidPresent:e,onIonPopoverWillPresent:e,onIonPopoverWillDismiss:e,onIonPopoverDidDismiss:e,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap}),(0,r.h)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),(0,r.h)("div",{tabindex:"0"}),(0,r.h)("div",{class:"popover-wrapper ion-overlay-wrapper"},(0,r.h)("div",{class:"popover-arrow"}),(0,r.h)("div",{class:"popover-content"})),(0,r.h)("div",{tabindex:"0"}))}get el(){return(0,r.i)(this)}},b={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};u.style={ios:'.sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:100ms;transition-delay:100ms}"}}}]);