import{g as ot,l as st,m as ct,n as lt,o as Dt,p as At}from"./chunk-TESJPBUY.js";import{a as Se,b as nt,c as rt,e as Ee,f as at,h as me,i as pe,k as Ct,l as St,m as Et,n as kt,r as Mt,s as wt,t as It,u as Bt}from"./chunk-YF7MM75M.js";import{e as Pt}from"./chunk-DHNG4MA3.js";import{A as ut,B as ke,a as tt,l as it,q as dt,v as mt,z as pt}from"./chunk-YBVRNYEB.js";import{b as ft,d as E,f as gt,g as ht,k as _t,n as vt,o as bt,s as yt,u as xt}from"./chunk-A6WUS22Q.js";import{A as O,B as Ye,C as et,f as Ge,g as We,h as Qe,k as Xe,t as Je,v as Ke}from"./chunk-GY2MOVKK.js";import{h as Ze}from"./chunk-WN4BL5O3.js";import{$a as ne,Ab as Le,Bb as S,Cb as c,Db as o,Eb as y,Fb as Ve,Fc as qe,Gb as ze,Jc as de,Kb as ae,Lb as oe,O as te,Q as De,Qa as ye,Qb as D,Sa as s,Sb as x,Tb as Ce,U as I,Ub as X,V as B,Wb as se,X as R,Xa as xe,Xb as Z,Y as $,Ya as Ne,Yb as J,Z as f,a as z,ac as ce,bc as le,cc as j,da as N,dc as $e,ea as T,ec as l,f as Y,fa as be,fb as C,fc as u,g as k,ga as Ae,gb as P,gc as A,h as ee,ha as Q,hb as F,hc as Ue,ia as Oe,kb as Te,l as Pe,lb as re,ma as Re,p as ve,rc as m,sc as p,ub as M,uc as He,vb as _,wa as ie,wb as v,yb as Fe,zb as je}from"./chunk-4GNEX5AL.js";var Gt=["*"];var Wt=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],Qt=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],Xt=new R("MAT_CARD_CONFIG"),Ot=(()=>{class i{appearance;constructor(){let e=f(Xt,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,r){n&2&&j("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Gt,decls:1,vars:0,template:function(n,r){n&1&&(Ce(),X(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return i})(),Rt=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275dir=F({type:i,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return i})();var Nt=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275dir=F({type:i,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return i})();var Tt=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:Qt,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(n,r){n&1&&(Ce(Wt),X(0),Ve(1,"div",0),X(2,1),ze(),X(3,2))},encapsulation:2,changeDetection:0})}return i})();var Ft=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=P({type:i});static \u0275inj=B({imports:[O]})}return i})();function Jt(i,t){if(i&1){let e=oe();c(0,"div",1)(1,"button",2),D("click",function(){N(e);let r=x();return T(r.action())}),l(2),o()()}if(i&2){let e=x();s(2),A(" ",e.data.action," ")}}var Kt=["label"];function Yt(i,t){}var ei=Math.pow(2,31)-1,K=class{_overlayRef;instance;containerInstance;_afterDismissed=new k;_afterOpened=new k;_onAction=new k;_durationTimeoutId;_dismissedByAction=!1;constructor(t,e){this._overlayRef=e,this.containerInstance=t,t._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(t){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(t,ei))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},jt=new R("MatSnackBarData"),U=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},ti=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275dir=F({type:i,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return i})(),ii=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275dir=F({type:i,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return i})(),ni=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275dir=F({type:i,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return i})(),Lt=(()=>{class i{snackBarRef=f(K);data=f(jt);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(n,r){n&1&&(c(0,"div",0),l(1),o(),_(2,Jt,3,1,"div",1)),n&2&&(s(),A(" ",r.data.message,`
`),s(),v(r.hasAction?2:-1))},dependencies:[me,ti,ii,ni],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),Me="_mat-snack-bar-enter",we="_mat-snack-bar-exit",ri=(()=>{class i extends rt{_ngZone=f(Re);_elementRef=f(ie);_changeDetectorRef=f(qe);_platform=f(tt);_animationsDisabled=ke();snackBarConfig=f(U);_document=f(Oe);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=f(Q);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new k;_onExit=new k;_onEnter=new k;_animationState="void";_live;_label;_role;_liveElementId=f(it).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let n=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),n}attachTemplatePortal(e){this._assertNotAttached();let n=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),n}attachDomPortal=e=>{this._assertNotAttached();let n=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),n};onAnimationEnd(e){e===we?this._completeExit():e===Me&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?xe(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Me)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Me)},200)))}exit(){return this._destroyed?Pe(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?xe(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(we)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(we),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,n=this.snackBarConfig.panelClass;n&&(Array.isArray(n)?n.forEach(d=>e.classList.add(d)):e.classList.add(n)),this._exposeToModals();let r=this._label.nativeElement,a="mdc-snackbar__label";r.classList.toggle(a,!r.querySelector(`.${a}`))}_exposeToModals(){let e=this._liveElementId,n=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<n.length;r++){let a=n[r],d=a.getAttribute("aria-owns");this._trackedModals.add(a),d?d.indexOf(e)===-1&&a.setAttribute("aria-owns",d+" "+e):a.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let n=e.getAttribute("aria-owns");if(n){let r=n.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,n=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(n&&r){let a=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&n.contains(document.activeElement)&&(a=document.activeElement),n.removeAttribute("aria-hidden"),r.appendChild(n),a?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["mat-snack-bar-container"]],viewQuery:function(n,r){if(n&1&&se(Ee,7)(Kt,7),n&2){let a;Z(a=J())&&(r._portalOutlet=a.first),Z(a=J())&&(r._label=a.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(n,r){n&1&&D("animationend",function(d){return r.onAnimationEnd(d.animationName)})("animationcancel",function(d){return r.onAnimationEnd(d.animationName)}),n&2&&j("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[Te],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(n,r){n&1&&(c(0,"div",1)(1,"div",2,0)(3,"div",3),re(4,Yt,0,0,"ng-template",4),o(),y(5,"div"),o()()),n&2&&(s(5),M("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[Ee],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return i})(),ai=new R("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new U}),Ie=(()=>{class i{_live=f(mt);_injector=f(Q);_breakpointObserver=f(dt);_parentSnackBar=f(i,{optional:!0,skipSelf:!0});_defaultConfig=f(ai);_animationsDisabled=ke();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Lt;snackBarContainerComponent=ri;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,n){return this._attach(e,n)}openFromTemplate(e,n){return this._attach(e,n)}open(e,n="",r){let a=z(z({},this._defaultConfig),r);return a.data={message:e,action:n},a.announcementMessage===e&&(a.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,a)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,n){let r=n&&n.viewContainerRef&&n.viewContainerRef.injector,a=Q.create({parent:r||this._injector,providers:[{provide:U,useValue:n}]}),d=new Se(this.snackBarContainerComponent,n.viewContainerRef,a),g=e.attach(d);return g.instance.snackBarConfig=n,g.instance}_attach(e,n){let r=z(z(z({},new U),this._defaultConfig),n),a=this._createOverlay(r),d=this._attachSnackBarContainer(a,r),g=new K(d,a);if(e instanceof Ne){let b=new nt(e,null,{$implicit:r.data,snackBarRef:g});g.instance=d.attachTemplatePortal(b)}else{let b=this._createInjector(r,g),w=new Se(e,void 0,b),V=d.attachComponentPortal(w);g.instance=V.instance}return this._breakpointObserver.observe(pt.HandsetPortrait).pipe(te(a.detachments())).subscribe(b=>{a.overlayElement.classList.toggle(this.handsetCssClass,b.matches)}),r.announcementMessage&&d._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(g,r),this._openedSnackBarRef=g,this._openedSnackBarRef}_animateSnackBar(e,n){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),n.announcementMessage&&this._live.clear()}),n.duration&&n.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(n.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let n=new ot;n.direction=e.direction;let r=st(this._injector),a=e.direction==="rtl",d=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!a||e.horizontalPosition==="end"&&a,g=!d&&e.horizontalPosition!=="center";return d?r.left("0"):g?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),n.positionStrategy=r,n.disableAnimations=this._animationsDisabled,ct(this._injector,n)}_createInjector(e,n){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return Q.create({parent:r||this._injector,providers:[{provide:K,useValue:n},{provide:jt,useValue:e.data}]})}static \u0275fac=function(n){return new(n||i)};static \u0275prov=I({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Vt=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=P({type:i});static \u0275inj=B({providers:[Ie],imports:[lt,at,pe,Lt,O]})}return i})();var si=["determinateSpinner"];function ci(i,t){if(i&1&&(be(),c(0,"svg",11),y(1,"circle",12),o()),i&2){let e=x();M("viewBox",e._viewBox()),s(),le("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),M("r",e._circleRadius())}}var li=new R("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:zt})}),zt=100,di=10,$t=(()=>{class i{_elementRef=f(ie);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=f(li),n=ut(),r=this._elementRef.nativeElement;this._noopAnimations=n==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&n==="reduced-motion"&&r.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=zt;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-di)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(n,r){if(n&1&&se(si,5),n&2){let a;Z(a=J())&&(r._determinateCircle=a.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(n,r){n&2&&(M("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",r.mode==="determinate"?r.value:null)("mode",r.mode),$e("mat-"+r.color),le("width",r.diameter,"px")("height",r.diameter,"px")("--mat-progress-spinner-size",r.diameter+"px")("--mat-progress-spinner-active-indicator-width",r.diameter+"px"),j("_mat-animation-noopable",r._noopAnimations)("mdc-circular-progress--indeterminate",r.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",de],diameter:[2,"diameter","diameter",de],strokeWidth:[2,"strokeWidth","strokeWidth",de]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(n,r){if(n&1&&(re(0,ci,2,8,"ng-template",null,0,He),c(2,"div",2,1),be(),c(4,"svg",3),y(5,"circle",4),o()(),Ae(),c(6,"div",5)(7,"div",6)(8,"div",7),ae(9,8),o(),c(10,"div",9),ae(11,8),o(),c(12,"div",10),ae(13,8),o()()()),n&2){let a=ce(1);s(4),M("viewBox",r._viewBox()),s(),le("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeDashOffset(),"px")("stroke-width",r._circleStrokeWidth(),"%"),M("r",r._circleRadius()),s(4),S("ngTemplateOutlet",a),s(2),S("ngTemplateOutlet",a),s(2),S("ngTemplateOutlet",a)}},dependencies:[Ge],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Ut=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=P({type:i});static \u0275inj=B({imports:[O]})}return i})();var Ht=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=P({type:i});static \u0275inj=B({imports:[O]})}return i})();var Be=(r=>(r.VETERINARIA="VETERINARIA",r.ESTETICA="ESTETICA",r.PREVENCION="PREVENCION",r.SALUD="SALUD",r))(Be||{});var H=class{_id;_name;_address;_description;_phone;_category;_isPublished;_services;_coverImage;constructor(t,e,n,r,a,d,g,b=[],w){if(!a||a.trim().length===0)throw new Error("El tel\xE9fono no puede estar vac\xEDo");this._id=t,this._name=e,this._address=n,this._description=r?.trim()??"",this._phone=a.trim(),this._category=d,this._isPublished=g,this._services=b,this._coverImage=w}get id(){return this._id}get name(){return this._name}get address(){return this._address}get description(){return this._description}get phone(){return this._phone}get category(){return this._category}get isPublished(){return this._isPublished}get services(){return[...this._services]}get coverImage(){return this._coverImage}publishService(t){if(this._services.some(n=>n.id===t.id))throw new Error(`El servicio con id ${t.id} ya fue publicado`);this._services.push(t)}};var q=class{_legalName;_publicDisplayName;constructor(t,e){if(!t||t.trim().length===0)throw new Error("El nombre legal no puede estar vac\xEDo");if(!e||e.trim().length===0)throw new Error("El nombre p\xFAblico no puede estar vac\xEDo");this._legalName=t.trim(),this._publicDisplayName=e.trim()}get legalName(){return this._legalName}get publicDisplayName(){return this._publicDisplayName}equals(t){return this._legalName===t._legalName&&this._publicDisplayName===t._publicDisplayName}};var G=class{_street;_city;_reference;constructor(t,e,n){if(!t||t.trim().length===0)throw new Error("La calle no puede estar vac\xEDa");if(!e||e.trim().length===0)throw new Error("La ciudad no puede estar vac\xEDa");this._street=t.trim(),this._city=e.trim(),this._reference=n?.trim()??""}get street(){return this._street}get city(){return this._city}get reference(){return this._reference}equals(t){return this._street===t._street&&this._city===t._city&&this._reference===t._reference}};var ue=class{_amount;_currency;constructor(t,e){if(t<0)throw new Error("El precio no puede ser negativo");if(!e||e.trim().length===0)throw new Error("La moneda no puede estar vac\xEDa");this._amount=t,this._currency=e.trim().toUpperCase()}get amount(){return this._amount}get currency(){return this._currency}equals(t){return this._amount===t._amount&&this._currency===t._currency}};var fe=class{_id;_name;_description;_durationMinutes;_price;_status;_category;_isFeatured;constructor(t,e,n,r,a,d,g,b){if(!e||e.trim().length===0)throw new Error("El nombre del servicio no puede estar vac\xEDo");if(r<=0)throw new Error("La duraci\xF3n debe ser mayor a 0");this._id=t,this._name=e.trim(),this._description=n?.trim()??"",this._durationMinutes=r,this._price=a,this._status=d,this._category=g,this._isFeatured=b}get id(){return this._id}get name(){return this._name}get description(){return this._description}get durationMinutes(){return this._durationMinutes}get price(){return this._price}get status(){return this._status}get category(){return this._category}get isFeatured(){return this._isFeatured}updatePrice(t){this._price=t}setFeatured(t){this._isFeatured=t}};var W=class i{toEntity(t){let e=new q(t.name.legalName,t.name.publicDisplayName),n=new G(t.address.street,t.address.city,t.address.reference),r=t.services.map(a=>this.toServiceEntity(a));return new H(t.id,e,n,t.description,t.phone,t.category,t.isPublished,r,t.coverImage)}toResource(t){return{id:t.id,name:{legalName:t.name.legalName,publicDisplayName:t.name.publicDisplayName},address:{street:t.address.street,city:t.address.city,reference:t.address.reference},description:t.description,phone:t.phone,category:t.category,isPublished:t.isPublished,coverImage:t.coverImage,services:t.services.map(e=>this.toServiceResource(e))}}toServiceEntity(t){let e=new ue(t.price.amount,t.price.currency);return new fe(t.id,t.name,t.description,t.durationMinutes,e,t.status,t.category,t.isFeatured)}toServiceResource(t){return{id:t.id,name:t.name,description:t.description,durationMinutes:t.durationMinutes,price:{amount:t.price.amount,currency:t.price.currency},status:t.status,category:t.category,isFeatured:t.isFeatured}}static \u0275fac=function(e){return new(e||i)};static \u0275prov=I({token:i,factory:i.\u0275fac,providedIn:"root"})};var ge=class i{constructor(t,e){this.http=t;this.assembler=e}dataUrl="/assets/data/business-profile.json";getById(t){return this.http.get(this.dataUrl).pipe(ve(e=>e.id===t?this.assembler.toEntity(e):null))}getByOwnerId(t){return this.http.get(this.dataUrl).pipe(ve(e=>this.assembler.toEntity(e)))}save(t){throw new Error("No disponible en modo JSON est\xE1tico")}update(t){throw new Error("No disponible en modo JSON est\xE1tico")}delete(t){throw new Error("No disponible en modo JSON est\xE1tico")}static \u0275fac=function(e){return new(e||i)($(Ze),$(W))};static \u0275prov=I({token:i,factory:i.\u0275fac,providedIn:"root"})};var he=class i{constructor(t,e){this.businessProfileService=t;this.assembler=e}_profile$=new ee(null);_loading$=new ee(!1);_error$=new ee(null);profile$=this._profile$.asObservable();loading$=this._loading$.asObservable();error$=this._error$.asObservable();loadProfile(t){if(this._profile$.getValue())return;let n=localStorage.getItem(`business_profile_${t}`);if(n)try{let r=JSON.parse(n),a=this.assembler.toEntity(r);this._profile$.next(a);return}catch(r){console.error("Error parsing saved profile",r)}this._loading$.next(!0),this._error$.next(null),this.businessProfileService.getByOwnerId(t).pipe(De({next:r=>{this._profile$.next(r),this._loading$.next(!1)},error:r=>{this._error$.next("No se pudo cargar el perfil del negocio"),this._loading$.next(!1),console.error(r)}})).subscribe()}updateProfileData(t){let e=this._profile$.getValue();if(e){let n=new q(t.legalName,t.publicDisplayName),r=new G(t.street,t.city,t.reference),a=new H(e.id,n,r,t.description,t.phone,t.category,e.isPublished,e.services,t.coverImage!==void 0?t.coverImage:e.coverImage);this._profile$.next(a);let d=this.assembler.toResource(a);localStorage.setItem(`business_profile_${a.id}`,JSON.stringify(d))}}getServicesByCategory(t){return new Y(e=>{this._profile$.subscribe(n=>{if(!n){e.next([]);return}let r=n.services.filter(a=>a.category===t);e.next(r)})})}getFeaturedServices(){return new Y(t=>{this._profile$.subscribe(e=>{if(!e){t.next([]);return}t.next(e.services.filter(n=>n.isFeatured))})})}getActiveServices(){return new Y(t=>{this._profile$.subscribe(e=>{if(!e){t.next([]);return}t.next(e.services.filter(n=>n.status==="ACTIVE"))})})}static \u0275fac=function(e){return new(e||i)($(ge),$(W))};static \u0275prov=I({token:i,factory:i.\u0275fac,providedIn:"root"})};function fi(i,t){i&1&&(c(0,"div",4),y(1,"mat-spinner",6),o())}function gi(i,t){if(i&1&&y(0,"img",8),i&2){let e=x();S("src",e.coverImage,ye)}}function hi(i,t){i&1&&(c(0,"div",9)(1,"mat-icon"),l(2,"storefront"),o()())}function _i(i,t){if(i&1&&(c(0,"div",5)(1,"div",7),_(2,gi,1,1,"img",8)(3,hi,3,0,"div",9),o(),c(4,"div",10)(5,"h2",11),l(6),o(),c(7,"p",12),l(8),m(9,"titlecase"),o(),c(10,"p",13),l(11),o(),c(12,"div",14)(13,"span",15)(14,"mat-icon"),l(15,"phone"),o(),l(16),o(),c(17,"span",15)(18,"mat-icon"),l(19,"location_on"),o(),l(20),o()()()()),i&2){let e=t;s(2),v(e.coverImage?2:3),s(4),u(e.name.publicDisplayName),s(2),u(p(9,7,e.category)),s(3),u(e.description),s(5),A(" ",e.phone),s(4),Ue(" ",e.address.street,", ",e.address.city)}}function vi(i,t){if(i&1&&y(0,"img",21),i&2){let e=x(2);S("src",e.selectedCoverImage,ye)}}function bi(i,t){i&1&&(c(0,"mat-icon"),l(1,"image"),o(),c(2,"span"),l(3),m(4,"translate"),o()),i&2&&(s(3),u(p(4,1,"BUSINESS.FIELDS.CHANGE_COVER")))}function yi(i,t){i&1&&(c(0,"mat-error"),l(1),m(2,"translate"),o()),i&2&&(s(),u(p(2,1,"BUSINESS.ERRORS.REQUIRED_NAME")))}function xi(i,t){i&1&&(c(0,"mat-error"),l(1),m(2,"translate"),o()),i&2&&(s(),u(p(2,1,"BUSINESS.ERRORS.MIN_LENGTH")))}function Ci(i,t){if(i&1&&(c(0,"mat-option",26),l(1),m(2,"titlecase"),o()),i&2){let e=t.$implicit;S("value",e),s(),u(p(2,2,e))}}function Si(i,t){i&1&&(c(0,"mat-error"),l(1),m(2,"translate"),o()),i&2&&(s(),u(p(2,1,"BUSINESS.ERRORS.REQUIRED_CATEGORY")))}function Ei(i,t){i&1&&(c(0,"mat-error"),l(1),m(2,"translate"),o()),i&2&&(s(),u(p(2,1,"BUSINESS.ERRORS.REQUIRED_DESCRIPTION")))}function ki(i,t){i&1&&(c(0,"mat-error"),l(1),m(2,"translate"),o()),i&2&&(s(),u(p(2,1,"BUSINESS.ERRORS.MAX_LENGTH")))}function Mi(i,t){i&1&&(c(0,"mat-error"),l(1),m(2,"translate"),o()),i&2&&(s(),u(p(2,1,"BUSINESS.ERRORS.REQUIRED_PHONE")))}function wi(i,t){i&1&&(c(0,"mat-error"),l(1),m(2,"translate"),o()),i&2&&(s(),u(p(2,1,"BUSINESS.ERRORS.INVALID_PHONE")))}function Ii(i,t){i&1&&(c(0,"mat-error"),l(1),m(2,"translate"),o()),i&2&&(s(),u(p(2,1,"BUSINESS.ERRORS.REQUIRED_ADDRESS")))}function Bi(i,t){if(i&1){let e=oe();c(0,"mat-card",16)(1,"mat-card-header")(2,"mat-card-title"),l(3),m(4,"translate"),o()(),c(5,"mat-card-content")(6,"form",17)(7,"span",18),l(8),m(9,"translate"),o(),c(10,"input",19,0),D("change",function(r){N(e);let a=x();return T(a.onCoverFileSelected(r))}),o(),c(12,"div",20),D("click",function(){N(e);let r=ce(11);return T(r.click())}),_(13,vi,1,1,"img",21)(14,bi,5,3),o(),c(15,"div",22)(16,"mat-form-field",23)(17,"mat-label"),l(18),m(19,"translate"),o(),y(20,"input",24),m(21,"translate"),_(22,yi,3,3,"mat-error"),_(23,xi,3,3,"mat-error"),o(),c(24,"mat-form-field",23)(25,"mat-label"),l(26),m(27,"translate"),o(),c(28,"mat-select",25),je(29,Ci,3,4,"mat-option",26,Fe),o(),_(31,Si,3,3,"mat-error"),o()(),c(32,"mat-form-field",27)(33,"mat-label"),l(34),m(35,"translate"),o(),y(36,"textarea",28),m(37,"translate"),c(38,"mat-hint",29),l(39),o(),_(40,Ei,3,3,"mat-error"),_(41,ki,3,3,"mat-error"),o(),c(42,"div",22)(43,"mat-form-field",23)(44,"mat-label"),l(45),m(46,"translate"),o(),y(47,"input",30),c(48,"mat-icon",31),l(49,"phone"),o(),_(50,Mi,3,3,"mat-error"),_(51,wi,3,3,"mat-error"),o(),c(52,"mat-form-field",23)(53,"mat-label"),l(54),m(55,"translate"),o(),y(56,"input",32),c(57,"mat-icon",31),l(58,"location_on"),o(),_(59,Ii,3,3,"mat-error"),o()()()()(),c(60,"div",33)(61,"button",34),D("click",function(){N(e);let r=x();return T(r.onPreview())}),c(62,"mat-icon"),l(63,"visibility"),o(),l(64),m(65,"translate"),o(),c(66,"button",35),D("click",function(){N(e);let r=x();return T(r.onSave())}),c(67,"mat-icon"),l(68,"save"),o(),l(69),m(70,"translate"),o()()}if(i&2){let e,n,r,a,d,g,b,w,V,h=x();s(3),u(p(4,22,"BUSINESS.SECTIONS.GENERAL")),s(3),S("formGroup",h.form),s(2),u(p(9,24,"BUSINESS.FIELDS.COVER_IMAGE")),s(5),v(h.selectedCoverImage?13:14),s(5),u(p(19,26,"BUSINESS.FIELDS.NAME")),s(2),S("placeholder",p(21,28,"BUSINESS.FIELDS.NAME_PLACEHOLDER")),s(2),v((e=h.form.get("publicDisplayName"))!=null&&e.hasError("required")&&((e=h.form.get("publicDisplayName"))!=null&&e.touched)?22:-1),s(),v((n=h.form.get("publicDisplayName"))!=null&&n.hasError("minlength")&&((n=h.form.get("publicDisplayName"))!=null&&n.touched)?23:-1),s(3),u(p(27,30,"BUSINESS.FIELDS.CATEGORY")),s(3),Le(h.categories),s(2),v((r=h.form.get("category"))!=null&&r.hasError("required")&&((r=h.form.get("category"))!=null&&r.touched)?31:-1),s(3),u(p(35,32,"BUSINESS.FIELDS.DESCRIPTION")),s(2),S("placeholder",p(37,34,"BUSINESS.FIELDS.DESCRIPTION_PLACEHOLDER")),s(3),A(" ",((a=h.form.get("description"))==null||a.value==null?null:a.value.length)||0,"/300 "),s(),v((d=h.form.get("description"))!=null&&d.hasError("required")&&((d=h.form.get("description"))!=null&&d.touched)?40:-1),s(),v((g=h.form.get("description"))!=null&&g.hasError("maxlength")&&((g=h.form.get("description"))!=null&&g.touched)?41:-1),s(4),u(p(46,36,"BUSINESS.FIELDS.PHONE")),s(5),v((b=h.form.get("phone"))!=null&&b.hasError("required")&&((b=h.form.get("phone"))!=null&&b.touched)?50:-1),s(),v((w=h.form.get("phone"))!=null&&w.hasError("pattern")&&((w=h.form.get("phone"))!=null&&w.touched)?51:-1),s(3),u(p(55,38,"BUSINESS.FIELDS.ADDRESS")),s(5),v((V=h.form.get("street"))!=null&&V.hasError("required")&&((V=h.form.get("street"))!=null&&V.touched)?59:-1),s(5),A(" ",p(65,40,"BUSINESS.ACTIONS.PREVIEW")," "),s(5),A(" ",p(70,42,"BUSINESS.SAVE")," ")}}var _e=class i{constructor(t,e,n){this.store=t;this.fb=e;this.snackBar=n}form;loading$;profile$;categories=Object.values(Be);selectedCoverImage=null;destroy$=new k;ngOnInit(){this.loading$=this.store.loading$,this.profile$=this.store.profile$,this.form=this.fb.group({publicDisplayName:["",[E.required,E.minLength(3)]],legalName:["",E.required],category:["",E.required],description:["",[E.required,E.maxLength(300)]],phone:["",[E.required,E.pattern(/^\+?[\d\s]{7,15}$/)]],street:["",E.required],city:["",E.required],reference:[""]}),this.store.loadProfile(1),this.store.profile$.pipe(te(this.destroy$)).subscribe(t=>{t&&(this.form.patchValue({publicDisplayName:t.name.publicDisplayName,legalName:t.name.legalName,category:t.category,description:t.description,phone:t.phone,street:t.address.street,city:t.address.city,reference:t.address.reference}),t.coverImage&&(this.selectedCoverImage=t.coverImage))})}onSave(){if(this.form.invalid){this.form.markAllAsTouched();return}let t=this.form.value;this.store.updateProfileData({legalName:t.legalName,publicDisplayName:t.publicDisplayName,category:t.category,description:t.description,phone:t.phone,street:t.street,city:t.city,reference:t.reference,coverImage:this.selectedCoverImage||void 0}),this.snackBar.open("Cambios guardados correctamente","Cerrar",{duration:3e3,panelClass:["snack-success"]})}onPreview(){this.snackBar.open("Vista previa no disponible en modo demo","Cerrar",{duration:2500})}onCoverFileSelected(t){let e=t.target;if(e.files&&e.files.length>0){let n=e.files[0],r=new FileReader;r.onload=a=>{this.selectedCoverImage=a.target.result},r.readAsDataURL(n)}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static \u0275fac=function(e){return new(e||i)(ne(he),ne(yt),ne(Ie))};static \u0275cmp=C({type:i,selectors:[["app-business-profile"]],decls:11,vars:12,consts:[["coverInput",""],[1,"profile-page"],[1,"page-header"],[1,"page-title"],[1,"loading-container"],[1,"profile-presentation-card"],["diameter","40"],[1,"profile-presentation-cover"],["alt","Cover",1,"cover-image-preview",3,"src"],[1,"cover-placeholder-preview"],[1,"profile-presentation-info"],[1,"profile-name"],[1,"profile-category"],[1,"profile-description"],[1,"profile-contact"],[1,"contact-item"],[1,"section-card"],[3,"formGroup"],[1,"cover-label"],["type","file","accept","image/*",2,"display","none",3,"change"],[1,"cover-placeholder",3,"click"],["alt","Cover Preview",1,"cover-image-preview",2,"border-radius","10px",3,"src"],[1,"form-row"],["appearance","outline",1,"field-half"],["matInput","","formControlName","publicDisplayName",3,"placeholder"],["formControlName","category"],[3,"value"],["appearance","outline",1,"field-full"],["matInput","","formControlName","description","rows","3",3,"placeholder"],["align","end"],["matInput","","formControlName","phone","placeholder","+51 987 654 321"],["matPrefix",""],["matInput","","formControlName","street","placeholder","Av. Arequipa 1234, Lima"],[1,"footer-actions"],["mat-stroked-button","",3,"click"],["mat-flat-button","","color","primary",3,"click"]],template:function(e,n){if(e&1&&(c(0,"div",1)(1,"div",2)(2,"h1",3),l(3),m(4,"translate"),o()(),_(5,fi,2,0,"div",4),m(6,"async"),_(7,_i,21,9,"div",5),m(8,"async"),_(9,Bi,71,44),m(10,"async"),o()),e&2){let r;s(3),u(p(4,4,"BUSINESS.TITLE")),s(2),v(p(6,6,n.loading$)?5:-1),s(2),v((r=p(8,8,n.profile$))?7:-1,r),s(2),v(p(10,10,n.loading$)?-1:9)}},dependencies:[Xe,xt,_t,ft,gt,ht,bt,vt,Ft,Ot,Nt,Tt,Rt,wt,Mt,Ct,Et,St,kt,Bt,It,At,Dt,Pt,pe,me,Vt,Ut,$t,Ht,et,Ye,Ke,We,Qe,Je],styles:[".profile-page[_ngcontent-%COMP%]{padding:24px 32px;max-width:960px;display:flex;flex-direction:column;gap:24px}.page-header[_ngcontent-%COMP%]{display:flex;align-items:center}.page-title[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:700;color:#1a1a2e;margin:0}.loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:60px 0}.section-card[_ngcontent-%COMP%]{border-radius:16px!important;box-shadow:0 1px 6px #0000000f!important;border:1px solid #e8eaf0;background:#fff}.section-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{padding:24px 28px 0}.section-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:1rem!important;font-weight:600!important;color:#1565c0!important}.section-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:20px 28px 28px!important}.cover-label[_ngcontent-%COMP%]{font-size:.8rem;font-weight:500;color:#1565c0;margin-bottom:8px;display:block}.cover-placeholder[_ngcontent-%COMP%]{width:100%;height:160px;border-radius:10px;background:linear-gradient(135deg,#1a3a6b,#1e88e5);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;margin-bottom:24px;color:#ffffffe6;cursor:pointer;overflow:hidden;position:relative;transition:filter .2s ease}.cover-placeholder[_ngcontent-%COMP%]:hover{filter:brightness(1.05)}.cover-placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:28px;width:28px;height:28px;opacity:.85}.cover-placeholder[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.8rem;font-weight:500;letter-spacing:.3px}.form-row[_ngcontent-%COMP%]{display:flex;gap:16px;margin-bottom:4px}.field-half[_ngcontent-%COMP%]{flex:1}.field-full[_ngcontent-%COMP%]{width:100%}  .section-card .mat-mdc-form-field-subscript-wrapper{margin-top:2px}  .section-card .mat-mdc-text-field-wrapper{border-radius:8px!important;background-color:#f8f9fc!important}  .section-card .mdc-notched-outline__leading,   .section-card .mdc-notched-outline__notch,   .section-card .mdc-notched-outline__trailing{border-color:#dde1ea!important}  .section-card .mat-mdc-form-field-label,   .section-card .mat-mdc-floating-label{color:#1565c0!important}  .section-card .mdc-floating-label--float-above{color:#1565c0!important}.footer-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:12px;padding:4px 0 16px}.footer-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:8px!important;padding:0 20px!important;height:40px;font-weight:500;display:flex;align-items:center;gap:6px}.footer-actions[_ngcontent-%COMP%]   [mat-flat-button][_ngcontent-%COMP%]{background-color:#1565c0!important}  .snack-success{background-color:#2e7d32!important;color:#fff!important}.profile-presentation-card[_ngcontent-%COMP%]{background:#fff;border-radius:16px;box-shadow:0 2px 12px #00000014;overflow:hidden;border:1px solid #e8eaf0;margin-bottom:24px}.profile-presentation-cover[_ngcontent-%COMP%]{width:100%;height:180px;background:linear-gradient(135deg,#1a3a6b,#1e88e5);position:relative}.cover-image-preview[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.cover-placeholder-preview[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#fffc}.cover-placeholder-preview[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px}.profile-presentation-info[_ngcontent-%COMP%]{padding:24px}.profile-name[_ngcontent-%COMP%]{font-size:1.6rem;font-weight:700;color:#1a1a2e;margin:0 0 4px}.profile-category[_ngcontent-%COMP%]{font-size:.95rem;font-weight:600;color:#1565c0;margin:0 0 16px;text-transform:uppercase;letter-spacing:.5px}.profile-description[_ngcontent-%COMP%]{font-size:1rem;color:#4a4a5e;line-height:1.5;margin:0 0 20px}.profile-contact[_ngcontent-%COMP%]{display:flex;gap:24px;flex-wrap:wrap}.contact-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:.95rem;color:#6a6a7e}.contact-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;color:#1e88e5}@media(max-width:600px){.profile-page[_ngcontent-%COMP%]{padding:16px}.form-row[_ngcontent-%COMP%]{flex-direction:column;gap:0}}"]})};var pr=[{path:"",component:_e}];export{pr as PERFIL_NEGOCIO_ROUTES};
