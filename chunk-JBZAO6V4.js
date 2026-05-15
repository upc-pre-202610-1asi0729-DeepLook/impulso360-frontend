import{a as It}from"./chunk-G7FDE7ML.js";import{c as Tt}from"./chunk-IGY4IZLM.js";import"./chunk-UIINV627.js";import{c as pt,g as mt}from"./chunk-ZCAST3SW.js";import"./chunk-IWVXKSAA.js";import"./chunk-2RIEDAVI.js";import"./chunk-G5YDKJDU.js";import"./chunk-TESJPBUY.js";import{g as ft,h as Pt,i as vt,n as yt,r as xt,s as wt,t as kt,u as Dt}from"./chunk-YF7MM75M.js";import{a as St}from"./chunk-DHNG4MA3.js";import{B as st,I as Mt,K as Ct,L as Ot,l as lt,n as gt}from"./chunk-YBVRNYEB.js";import{b as ut,f as _t,j as bt,t as ht}from"./chunk-A6WUS22Q.js";import{A as rt,B as ct,C as dt,c as J,d as Z,e as X,i as tt,k as et,s as nt,t as at,v as ot,w as it}from"./chunk-GY2MOVKK.js";import"./chunk-WN4BL5O3.js";import{Ac as K,Bb as s,Cb as i,Db as c,Eb as y,Fc as q,Ic as w,Qb as _,Sa as o,Sb as b,Tb as L,Ub as R,V as A,Wb as z,X as I,Xb as $,Yb as U,Z as h,ac as W,cc as C,ec as d,fb as D,fc as l,gb as N,gc as j,la as F,lb as M,oc as Q,pa as P,pc as H,rc as p,sc as m,tc as Y,ub as T,vb as V,wa as B,wb as G,yc as x}from"./chunk-4GNEX5AL.js";var Bt=["button"],Nt=["*"];function Vt(r,n){if(r&1&&(i(0,"div",2),y(1,"mat-pseudo-checkbox",6),c()),r&2){let t=b();o(),s("disabled",t.disabled)}}var Gt=new I("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),Lt=new I("MatButtonToggleGroup");var E=class{source;value;constructor(n,t){this.source=n,this.value=t}};var Rt=(()=>{class r{_changeDetectorRef=h(q);_elementRef=h(B);_focusMonitor=h(gt);_idGenerator=h(lt);_animationDisabled=st();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(t){this._tabIndex.set(t)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=t}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}_disabledInteractive;change=new F;constructor(){h(it).load(Ct);let t=h(Lt,{optional:!0}),e=h(new K("tabindex"),{optional:!0})||"",a=h(Gt,{optional:!0});this._tabIndex=P(parseInt(e)||0),this.buttonToggleGroup=t,this._appearance=a&&a.appearance?a.appearance:"standard",this._disabledInteractive=a?.disabledInteractive??!1}ngOnInit(){let t=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}focus(t){this._buttonElement.nativeElement.focus(t)}_onButtonClick(){if(this.disabled)return;let t=this.isSingleSelector()?!0:!this._checked;if(t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let e=this.buttonToggleGroup._buttonToggles.find(a=>a.tabIndex===0);e&&(e.tabIndex=-1),this.tabIndex=0}this.change.emit(new E(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=D({type:r,selectors:[["mat-button-toggle"]],viewQuery:function(e,a){if(e&1&&z(Bt,5),e&2){let g;$(g=U())&&(a._buttonElement=g.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(e,a){e&1&&_("focus",function(){return a.focus()}),e&2&&(T("aria-label",null)("aria-labelledby",null)("id",a.id)("name",null),C("mat-button-toggle-standalone",!a.buttonToggleGroup)("mat-button-toggle-checked",a.checked)("mat-button-toggle-disabled",a.disabled)("mat-button-toggle-disabled-interactive",a.disabledInteractive)("mat-button-toggle-appearance-standard",a.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",w],appearance:"appearance",checked:[2,"checked","checked",w],disabled:[2,"disabled","disabled",w],disabledInteractive:[2,"disabledInteractive","disabledInteractive",w]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:Nt,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(e,a){if(e&1&&(L(),i(0,"button",1,0),_("click",function(){return a._onButtonClick()}),V(2,Vt,2,1,"div",2),i(3,"span",3),R(4),c()(),y(5,"span",4)(6,"span",5)),e&2){let g=W(1);s("id",a.buttonId)("disabled",a.disabled&&!a.disabledInteractive||null),T("role",a.isSingleSelector()?"radio":"button")("tabindex",a.disabled&&!a.disabledInteractive?-1:a.tabIndex)("aria-pressed",a.isSingleSelector()?null:a.checked)("aria-checked",a.isSingleSelector()?a.checked:null)("name",a._getButtonName())("aria-label",a.ariaLabel)("aria-labelledby",a.ariaLabelledby)("aria-disabled",a.disabled&&a.disabledInteractive?"true":null),o(2),G(a.buttonToggleGroup&&(!a.buttonToggleGroup.multiple&&!a.buttonToggleGroup.hideSingleSelectionIndicator||a.buttonToggleGroup.multiple&&!a.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),o(4),s("matRippleTrigger",g)("matRippleDisabled",a.disableRipple||a.disabled)}},dependencies:[Mt,St],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2,changeDetection:0})}return r})(),Et=(()=>{class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=N({type:r});static \u0275inj=A({imports:[Ot,Rt,rt]})}return r})();var zt=r=>({count:r}),$t=()=>({weekday:"long"});function Ut(r,n){if(r&1&&(i(0,"div",44)(1,"span",45),d(2),c(),i(3,"span",46),d(4),c()()),r&2){let t=n.$implicit;o(2),l(t.name),o(),C("today",t.isToday),o(),l(t.number)}}function Wt(r,n){if(r&1&&(i(0,"div",52)(1,"div",53)(2,"span",54),d(3),c(),i(4,"span",55),d(5),c()()()),r&2){let t=n.$implicit,e=b(4);s("ngClass",e.getStatusClass(t.status)),o(3),l(t.clientName),o(2),l(t.service)}}function jt(r,n){if(r&1&&(i(0,"div",50),M(1,Wt,6,3,"div",51),c()),r&2){let t=n.$implicit,e=b().$implicit,a=b(2);o(),s("ngForOf",a.getAppointmentsFor(t.fullDate,e))}}function Qt(r,n){if(r&1&&(i(0,"div",47)(1,"div",48),d(2),c(),M(3,jt,2,1,"div",49),c()),r&2){let t=n.$implicit,e=b(2);o(2),l(t),o(),s("ngForOf",e.daysInWeek())}}function Ht(r,n){if(r&1&&(i(0,"div",38)(1,"div",39),y(2,"div",40),M(3,Ut,5,4,"div",41),c(),i(4,"div",42),M(5,Qt,4,2,"div",43),c()()),r&2){let t=b();o(3),s("ngForOf",t.daysInWeek()),o(2),s("ngForOf",t.hours())}}function Yt(r,n){if(r&1&&(i(0,"p",61),d(1),c()),r&2){let t=b().$implicit;o(),l(t.note)}}function Kt(r,n){if(r&1&&(i(0,"div",59)(1,"div",53)(2,"span",54),d(3),c(),i(4,"span",55),d(5),c(),M(6,Yt,2,1,"p",60),c()()),r&2){let t=n.$implicit,e=b(3);s("ngClass",e.getStatusClass(t.status)),o(3),l(t.clientName),o(2),l(t.service),o(),s("ngIf",t.note)}}function qt(r,n){if(r&1&&(i(0,"div",47)(1,"div",48),d(2),c(),i(3,"div",50),M(4,Kt,7,4,"div",58),c()()),r&2){let t=n.$implicit,e=b(2);o(2),l(t),o(2),s("ngForOf",e.getAppointmentsFor(e.formatLocalDate(e.selectedDate()),t))}}function Jt(r,n){if(r&1&&(i(0,"div",56)(1,"div",39),y(2,"div",40),i(3,"div",44)(4,"span",45),d(5),p(6,"uppercase"),c(),i(7,"span",57),d(8),c()()(),i(9,"div",42),M(10,qt,5,2,"div",43),c()()),r&2){let t=b();o(5),l(m(6,3,t.selectedDate().toLocaleDateString("es-ES",Q(5,$t)))),o(3),l(t.selectedDate().getDate()),o(2),s("ngForOf",t.hours())}}function Zt(r,n){if(r&1&&(i(0,"div",44)(1,"span",45),d(2),c()()),r&2){let t=n.$implicit;o(2),l(t)}}function Xt(r,n){if(r&1&&(i(0,"div",70),y(1,"span",71),i(2,"span",72),d(3),c(),i(4,"span",73),d(5),c()()),r&2){let t=n.$implicit,e=b(3);s("ngClass",e.getStatusClass(t.status)),o(3),l(t.time),o(2),l(t.clientName)}}function te(r,n){if(r&1&&(i(0,"div",66)(1,"div",67)(2,"span",46),d(3),c()(),i(4,"div",68),M(5,Xt,6,3,"div",69),c()()),r&2){let t=n.$implicit,e=b(2);C("not-current",!t.isCurrentMonth),o(2),C("today",t.isToday),o(),l(t.number),o(2),s("ngForOf",e.getAppointmentsForDay(t.fullDate))}}function ee(r,n){if(r&1&&(i(0,"div",62)(1,"div",63),M(2,Zt,3,1,"div",41),c(),i(3,"div",64),M(4,te,6,6,"div",65),c()()),r&2){let t=b();o(2),s("ngForOf",t.weekDays),o(2),s("ngForOf",t.daysInMonth())}}function ne(r,n){if(r&1&&(i(0,"div",74)(1,"span",37),d(2),c(),i(3,"div",34)(4,"span",35),d(5),c(),i(6,"span",36),d(7),c()(),i(8,"span",75),d(9),p(10,"uppercase"),p(11,"translate"),c()()),r&2){let t=n.$implicit;o(2),l(t.time),o(3),l(t.clientName),o(2),l(t.service),o(),s("ngClass",t.status),o(),l(m(11,7,"OVERVIEW.STATUS."+m(10,5,t.status)))}}var S=class r{agendaApi=h(Tt);dialog=h(pt);translate=h(nt);viewMode=P("weekly");selectedDate=P(new Date);searchQuery=P("");statusFilter=P("all");appointments=P([]);currentLang=P(this.translate.currentLang||"es");weekDays=["LUN","MAR","MI\xC9","JUE","VIE","S\xC1B","DOM"];hours=x(()=>{let n=this.appointments();if(n.length===0)return["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"];let t=9,e=18;n.forEach(g=>{let u=parseInt(g.time.split(":")[0]);u<t&&(t=u),u>e&&(e=u)}),t=Math.max(0,t-1),e=Math.min(23,e+1);let a=[];for(let g=t;g<=e;g++)a.push(`${String(g).padStart(2,"0")}:00`);return a});currentWeekRange=x(()=>{let n=new Date(this.selectedDate()),t=this.currentLang();if(this.viewMode()==="daily")return n.toLocaleDateString(t==="es"?"es-ES":"en-US",{day:"numeric",month:"long",year:"numeric"});let e=n.getDate()-n.getDay()+(n.getDay()===0?-6:1),a=e+6,g=new Date(this.selectedDate());g.setDate(e);let u=new Date(this.selectedDate());u.setDate(a);let v="long",k="numeric";return g.getMonth()===u.getMonth()?`${g.getDate()} - ${u.getDate()} ${t==="es"?"de":""} ${g.toLocaleDateString(t==="es"?"es-ES":"en-US",{month:v,year:k})}`:`${g.getDate()} ${g.toLocaleDateString(t==="es"?"es-ES":"en-US",{month:"short"})} - ${u.getDate()} ${u.toLocaleDateString(t==="es"?"es-ES":"en-US",{month:"short",year:k})}`});daysInWeek=x(()=>{let n=new Date(this.selectedDate()),t=n.getDate()-n.getDay()+(n.getDay()===0?-6:1);return Array.from({length:7},(e,a)=>{let g=new Date(this.selectedDate());return g.setDate(t+a),{name:this.weekDays[a],number:g.getDate(),fullDate:this.formatLocalDate(g),isToday:g.toDateString()===new Date().toDateString()}})});daysInMonth=x(()=>{let n=new Date(this.selectedDate()),t=n.getFullYear(),e=n.getMonth(),a=new Date(t,e,1),g=new Date(t,e+1,0),u=a.getDay()-1;u===-1&&(u=6);let v=[],k=new Date(t,e,0).getDate();for(let f=u;f>0;f--){let O=new Date(t,e-1,k-f+1);v.push({number:O.getDate(),fullDate:this.formatLocalDate(O),isCurrentMonth:!1,isToday:O.toDateString()===new Date().toDateString()})}for(let f=1;f<=g.getDate();f++){let O=new Date(t,e,f);v.push({number:f,fullDate:this.formatLocalDate(O),isCurrentMonth:!0,isToday:O.toDateString()===new Date().toDateString()})}let At=42-v.length;for(let f=1;f<=At;f++){let O=new Date(t,e+1,f);v.push({number:O.getDate(),fullDate:this.formatLocalDate(O),isCurrentMonth:!1,isToday:O.toDateString()===new Date().toDateString()})}return v});formatLocalDate(n){let t=n.getFullYear(),e=String(n.getMonth()+1).padStart(2,"0"),a=String(n.getDate()).padStart(2,"0");return`${t}-${e}-${a}`}filteredAppointments=x(()=>this.appointments().filter(n=>{let t=this.statusFilter()==="all"||n.status===this.statusFilter(),e=n.clientName.toLowerCase().includes(this.searchQuery().toLowerCase())||n.service.toLowerCase().includes(this.searchQuery().toLowerCase());return t&&e}));ngOnInit(){this.loadAppointments(),this.translate.onLangChange.subscribe(n=>{this.currentLang.set(n.lang)})}loadAppointments(){this.agendaApi.getAllAppointments().subscribe(n=>{this.appointments.set(n)})}prev(){let n=new Date(this.selectedDate());this.viewMode()==="weekly"?n.setDate(n.getDate()-7):this.viewMode()==="daily"?n.setDate(n.getDate()-1):n.setMonth(n.getMonth()-1),this.selectedDate.set(n)}next(){let n=new Date(this.selectedDate());this.viewMode()==="weekly"?n.setDate(n.getDate()+7):this.viewMode()==="daily"?n.setDate(n.getDate()+1):n.setMonth(n.getMonth()+1),this.selectedDate.set(n)}today(){this.selectedDate.set(new Date)}getAppointmentsFor(n,t){return this.filteredAppointments().filter(e=>e.date===n&&e.time===t)}getAppointmentsForDay(n){return this.filteredAppointments().filter(t=>t.date===n)}openNewAppointmentForm(){this.dialog.open(It,{width:"800px",maxWidth:"95vw",panelClass:"appointment-form-dialog"}).afterClosed().subscribe(t=>{if(t){let e=t.date instanceof Date?t.date:new Date(t.date),g={date:this.formatLocalDate(e),time:t.time,clientName:t.client,service:t.service,category:"Veterinaria",status:t.status,note:t.notes};this.agendaApi.createAppointment(g).subscribe({next:()=>{this.selectedDate.set(e),this.loadAppointments()},error:u=>{console.error("Error al guardar la cita:",u)}})}})}getStatusClass(n){return`status-${n}`}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=D({type:r,selectors:[["app-agenda-view"]],decls:87,vars:65,consts:[[1,"agenda-container"],[1,"agenda-header"],[1,"header-top"],[1,"page-title"],["mat-flat-button","","color","primary",1,"btn-new-appointment",3,"click"],[1,"header-controls"],[1,"view-selectors"],["mat-flat-button","",3,"click"],[1,"status-filters"],[1,"search-bar"],["appearance","outline","subscriptSizing","dynamic"],["matPrefix",""],["matInput","",3,"ngModelChange","placeholder","ngModel"],[1,"agenda-content"],[1,"calendar-main"],[1,"calendar-header"],[1,"navigation"],["mat-icon-button","",3,"click"],[1,"current-range"],["mat-stroked-button","",1,"btn-today",3,"click"],["class","calendar-grid",4,"ngIf"],["class","calendar-grid daily-view",4,"ngIf"],["class","calendar-grid monthly-view",4,"ngIf"],[1,"agenda-sidebar"],[1,"day-details","card"],[1,"details-header"],[1,"subtitle"],[1,"details-list"],["class","detail-item",4,"ngFor","ngForOf"],[1,"upcoming-appointments","card"],[1,"upcoming-item"],[1,"date-box"],[1,"day"],[1,"month"],[1,"info"],[1,"name"],[1,"svc"],[1,"time"],[1,"calendar-grid"],[1,"grid-header"],[1,"time-column"],["class","day-column",4,"ngFor","ngForOf"],[1,"grid-body"],["class","grid-row",4,"ngFor","ngForOf"],[1,"day-column"],[1,"day-name"],[1,"day-number"],[1,"grid-row"],[1,"time-cell"],["class","day-cell",4,"ngFor","ngForOf"],[1,"day-cell"],["class","appointment-card",3,"ngClass",4,"ngFor","ngForOf"],[1,"appointment-card",3,"ngClass"],[1,"card-content"],[1,"client-name"],[1,"service-name"],[1,"calendar-grid","daily-view"],[1,"day-number","today"],["class","appointment-card large",3,"ngClass",4,"ngFor","ngForOf"],[1,"appointment-card","large",3,"ngClass"],["class","app-note",4,"ngIf"],[1,"app-note"],[1,"calendar-grid","monthly-view"],[1,"grid-header","no-time"],[1,"month-body"],["class","month-day",3,"not-current",4,"ngFor","ngForOf"],[1,"month-day"],[1,"day-header"],[1,"day-events"],["class","event-indicator",3,"ngClass",4,"ngFor","ngForOf"],[1,"event-indicator",3,"ngClass"],[1,"dot"],[1,"event-time"],[1,"event-client"],[1,"detail-item"],[1,"badge",3,"ngClass"]],template:function(t,e){t&1&&(i(0,"div",0)(1,"header",1)(2,"div",2)(3,"h1",3),d(4),p(5,"translate"),c(),i(6,"button",4),_("click",function(){return e.openNewAppointmentForm()}),i(7,"mat-icon"),d(8,"add"),c(),d(9),p(10,"translate"),c()(),i(11,"div",5)(12,"div",6)(13,"button",7),_("click",function(){return e.viewMode.set("daily")}),d(14),p(15,"translate"),c(),i(16,"button",7),_("click",function(){return e.viewMode.set("weekly")}),d(17),p(18,"translate"),c(),i(19,"button",7),_("click",function(){return e.viewMode.set("monthly")}),d(20),p(21,"translate"),c()(),i(22,"div",8)(23,"button",7),_("click",function(){return e.statusFilter.set("all")}),d(24),p(25,"translate"),c(),i(26,"button",7),_("click",function(){return e.statusFilter.set("confirmed")}),d(27),p(28,"translate"),c(),i(29,"button",7),_("click",function(){return e.statusFilter.set("pending")}),d(30),p(31,"translate"),c(),i(32,"button",7),_("click",function(){return e.statusFilter.set("cancelled")}),d(33),p(34,"translate"),c()(),i(35,"div",9)(36,"mat-form-field",10)(37,"mat-icon",11),d(38,"search"),c(),i(39,"input",12),p(40,"translate"),_("ngModelChange",function(g){return e.searchQuery.set(g)}),c()()()()(),i(41,"div",13)(42,"main",14)(43,"div",15)(44,"div",16)(45,"button",17),_("click",function(){return e.prev()}),i(46,"mat-icon"),d(47,"chevron_left"),c()(),i(48,"span",18),d(49),c(),i(50,"button",17),_("click",function(){return e.next()}),i(51,"mat-icon"),d(52,"chevron_right"),c()()(),i(53,"button",19),_("click",function(){return e.today()}),d(54),p(55,"translate"),c()(),M(56,Ht,6,2,"div",20)(57,Jt,11,6,"div",21)(58,ee,5,2,"div",22),c(),i(59,"aside",23)(60,"section",24)(61,"div",25)(62,"h3"),d(63),p(64,"translate"),c(),i(65,"span",26),d(66),p(67,"translate"),c()(),i(68,"div",27),M(69,ne,12,9,"div",28),c()(),i(70,"section",29)(71,"h4"),d(72),p(73,"translate"),c(),i(74,"div",30)(75,"div",31)(76,"span",32),d(77,"15"),c(),i(78,"span",33),d(79,"MAY"),c()(),i(80,"div",34)(81,"span",35),d(82,"Ana Flores"),c(),i(83,"span",36),d(84,"Desparasitaci\xF3n"),c()(),i(85,"span",37),d(86,"11:00"),c()()()()()()),t&2&&(o(4),l(m(5,34,"AGENDA.TITLE")),o(5),j(" ",m(10,36,"AGENDA.NEW_APPOINTMENT")," "),o(4),C("active",e.viewMode()==="daily"),o(),l(m(15,38,"AGENDA.VIEW_DAILY")),o(2),C("active",e.viewMode()==="weekly"),o(),l(m(18,40,"AGENDA.VIEW_WEEKLY")),o(2),C("active",e.viewMode()==="monthly"),o(),l(m(21,42,"AGENDA.VIEW_MONTHLY")),o(3),C("active",e.statusFilter()==="all"),o(),l(m(25,44,"AGENDA.FILTER_ALL")),o(2),C("active",e.statusFilter()==="confirmed"),o(),l(m(28,46,"AGENDA.FILTER_CONFIRMED")),o(2),C("active",e.statusFilter()==="pending"),o(),l(m(31,48,"AGENDA.FILTER_PENDING")),o(2),C("active",e.statusFilter()==="cancelled"),o(),l(m(34,50,"AGENDA.FILTER_CANCELLED")),o(6),s("placeholder",m(40,52,"AGENDA.SEARCH_PLACEHOLDER"))("ngModel",e.searchQuery()),o(10),l(e.currentWeekRange()),o(5),l(m(55,54,"AGENDA.TODAY")),o(2),s("ngIf",e.viewMode()==="weekly"),o(),s("ngIf",e.viewMode()==="daily"),o(),s("ngIf",e.viewMode()==="monthly"),o(5),l(m(64,56,"AGENDA.SIDEBAR_TITLE")),o(3),l(Y(67,58,"AGENDA.SIDEBAR_SUBTITLE",H(63,zt,e.getAppointmentsForDay(e.formatLocalDate(e.selectedDate())).length))),o(3),s("ngForOf",e.getAppointmentsForDay(e.formatLocalDate(e.selectedDate()))),o(3),l(m(73,61,"AGENDA.UPCOMING_TITLE")))},dependencies:[et,J,Z,X,ht,ut,_t,bt,dt,ct,vt,Pt,ft,Et,Dt,kt,xt,yt,wt,mt,ot,tt,at],styles:[".agenda-container[_ngcontent-%COMP%]{padding:24px;background-color:#fcfaf7;min-height:100vh;font-family:Inter,sans-serif}.agenda-container[_ngcontent-%COMP%]   .agenda-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;margin-bottom:32px}.agenda-container[_ngcontent-%COMP%]   .agenda-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.agenda-container[_ngcontent-%COMP%]   .agenda-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]{font-size:2rem;font-weight:800;color:#036;margin:0}.agenda-container[_ngcontent-%COMP%]   .agenda-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .btn-new-appointment[_ngcontent-%COMP%]{background-color:#036;color:#fff;border-radius:12px;height:48px;padding:0 24px;font-weight:600;display:flex;align-items:center;gap:8px;box-shadow:0 4px 12px #0363;transition:all .2s ease}.agenda-container[_ngcontent-%COMP%]   .agenda-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .btn-new-appointment[_ngcontent-%COMP%]:hover{background-color:#024;transform:translateY(-2px);box-shadow:0 6px 16px #0033664d}.agenda-container[_ngcontent-%COMP%]   .agenda-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .btn-new-appointment[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:4px}.agenda-container[_ngcontent-%COMP%]   .agenda-header[_ngcontent-%COMP%]   .header-controls[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:16px}.agenda-container[_ngcontent-%COMP%]   .agenda-header[_ngcontent-%COMP%]   .view-selectors[_ngcontent-%COMP%], .agenda-container[_ngcontent-%COMP%]   .agenda-header[_ngcontent-%COMP%]   .status-filters[_ngcontent-%COMP%]{display:flex;background:#eeeae4;padding:4px;border-radius:12px;gap:4px}.agenda-container[_ngcontent-%COMP%]   .agenda-header[_ngcontent-%COMP%]   .view-selectors[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .agenda-container[_ngcontent-%COMP%]   .agenda-header[_ngcontent-%COMP%]   .status-filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:8px;background:transparent;box-shadow:none;color:#6b7280;font-weight:500;transition:all .2s ease}.agenda-container[_ngcontent-%COMP%]   .agenda-header[_ngcontent-%COMP%]   .view-selectors[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], .agenda-container[_ngcontent-%COMP%]   .agenda-header[_ngcontent-%COMP%]   .status-filters[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background:#fff;color:#111827;box-shadow:0 2px 4px #0000000d}.agenda-container[_ngcontent-%COMP%]   .agenda-header[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]{flex:1;max-width:400px}.agenda-container[_ngcontent-%COMP%]   .agenda-header[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.agenda-container[_ngcontent-%COMP%]   .agenda-header[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-mdc-form-field-flex{background-color:#fff!important;border-radius:24px!important;padding:0 16px!important}.agenda-container[_ngcontent-%COMP%]   .agenda-header[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-mdc-form-field-outline{display:none!important}.agenda-container[_ngcontent-%COMP%]   .agenda-header[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mdc-notched-outline{display:none}.agenda-container[_ngcontent-%COMP%]   .agenda-header[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper{border-radius:24px!important;background-color:#fff!important;border:1px solid #e5e7eb;transition:all .2s ease}.agenda-container[_ngcontent-%COMP%]   .agenda-header[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper:hover{border-color:#036}.agenda-container[_ngcontent-%COMP%]   .agenda-header[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper.mdc-text-field--focused{border-color:#036;box-shadow:0 0 0 3px #0033661a}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]{display:flex;gap:24px}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]{flex:1;background:#fff;border-radius:16px;padding:24px;box-shadow:0 4px 6px -1px #0000000d}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:32px}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .current-range[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:700;color:#036}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-header[_ngcontent-%COMP%]   .btn-today[_ngcontent-%COMP%]{border-color:#036;color:#036;border-radius:8px}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid[_ngcontent-%COMP%]{display:flex;flex-direction:column}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid.monthly-view[_ngcontent-%COMP%]   .grid-header.no-time[_ngcontent-%COMP%]{grid-template-columns:repeat(7,1fr);padding-bottom:8px}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid.monthly-view[_ngcontent-%COMP%]   .month-body[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(7,1fr);grid-auto-rows:minmax(120px,auto);border:1px solid #f3f4f6;border-radius:12px;overflow:hidden}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid.monthly-view[_ngcontent-%COMP%]   .month-body[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]{border:.5px solid #f3f4f6;padding:8px;display:flex;flex-direction:column;gap:4px;min-height:120px}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid.monthly-view[_ngcontent-%COMP%]   .month-body[_ngcontent-%COMP%]   .month-day.not-current[_ngcontent-%COMP%]{background-color:#f9fafb}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid.monthly-view[_ngcontent-%COMP%]   .month-body[_ngcontent-%COMP%]   .month-day.not-current[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{color:#d1d5db}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid.monthly-view[_ngcontent-%COMP%]   .month-body[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-bottom:4px}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid.monthly-view[_ngcontent-%COMP%]   .month-body[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-header[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{font-size:.875rem;font-weight:600;width:28px;height:28px;display:flex;align-items:center;justify-content:center;border-radius:50%}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid.monthly-view[_ngcontent-%COMP%]   .month-body[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-header[_ngcontent-%COMP%]   .day-number.today[_ngcontent-%COMP%]{background:#036;color:#fff}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid.monthly-view[_ngcontent-%COMP%]   .month-body[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-events[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px;overflow-y:auto}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid.monthly-view[_ngcontent-%COMP%]   .month-body[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-events[_ngcontent-%COMP%]   .event-indicator[_ngcontent-%COMP%]{font-size:.625rem;padding:2px 6px;border-radius:4px;display:flex;align-items:center;gap:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid.monthly-view[_ngcontent-%COMP%]   .month-body[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-events[_ngcontent-%COMP%]   .event-indicator[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:4px;height:4px;border-radius:50%;flex-shrink:0}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid.monthly-view[_ngcontent-%COMP%]   .month-body[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-events[_ngcontent-%COMP%]   .event-indicator.status-confirmed[_ngcontent-%COMP%]{background:#e0f2fe;color:#0369a1}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid.monthly-view[_ngcontent-%COMP%]   .month-body[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-events[_ngcontent-%COMP%]   .event-indicator.status-confirmed[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{background:#0369a1}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid.monthly-view[_ngcontent-%COMP%]   .month-body[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-events[_ngcontent-%COMP%]   .event-indicator.status-pending[_ngcontent-%COMP%]{background:#ffedd5;color:#c2410c}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid.monthly-view[_ngcontent-%COMP%]   .month-body[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-events[_ngcontent-%COMP%]   .event-indicator.status-pending[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{background:#c2410c}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid.monthly-view[_ngcontent-%COMP%]   .month-body[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-events[_ngcontent-%COMP%]   .event-indicator.status-cancelled[_ngcontent-%COMP%]{background:#f3f4f6;color:#6b7280}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid.monthly-view[_ngcontent-%COMP%]   .month-body[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-events[_ngcontent-%COMP%]   .event-indicator.status-cancelled[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{background:#6b7280}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid.monthly-view[_ngcontent-%COMP%]   .month-body[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-events[_ngcontent-%COMP%]   .event-indicator[_ngcontent-%COMP%]   .event-time[_ngcontent-%COMP%]{font-weight:700}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid.monthly-view[_ngcontent-%COMP%]   .month-body[_ngcontent-%COMP%]   .month-day[_ngcontent-%COMP%]   .day-events[_ngcontent-%COMP%]   .event-indicator[_ngcontent-%COMP%]   .event-client[_ngcontent-%COMP%]{font-weight:500}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid[_ngcontent-%COMP%]   .grid-header[_ngcontent-%COMP%]{display:grid;grid-template-columns:80px repeat(7,1fr);border-bottom:1px solid #f3f4f6;padding-bottom:16px}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid[_ngcontent-%COMP%]   .grid-header[_ngcontent-%COMP%]   .day-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:8px}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid[_ngcontent-%COMP%]   .grid-header[_ngcontent-%COMP%]   .day-column[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%]{font-size:.75rem;font-weight:600;color:#9ca3af}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid[_ngcontent-%COMP%]   .grid-header[_ngcontent-%COMP%]   .day-column[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{width:40px;height:40px;display:flex;align-items:center;justify-content:center;font-size:1.125rem;font-weight:700;border-radius:50%;color:#111827}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid[_ngcontent-%COMP%]   .grid-header[_ngcontent-%COMP%]   .day-column[_ngcontent-%COMP%]   .day-number.today[_ngcontent-%COMP%]{background:#036;color:#fff}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid[_ngcontent-%COMP%]   .grid-body[_ngcontent-%COMP%]   .grid-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:80px repeat(7,1fr);min-height:80px;border-bottom:1px solid #f3f4f6}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid[_ngcontent-%COMP%]   .grid-body[_ngcontent-%COMP%]   .grid-row[_ngcontent-%COMP%]   .time-cell[_ngcontent-%COMP%]{padding-top:12px;font-size:.75rem;color:#9ca3af;font-weight:500}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid[_ngcontent-%COMP%]   .grid-body[_ngcontent-%COMP%]   .grid-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]{border-left:1px solid #f3f4f6;padding:4px;display:flex;flex-direction:column;gap:4px}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid[_ngcontent-%COMP%]   .grid-body[_ngcontent-%COMP%]   .grid-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]{padding:8px 12px;border-radius:8px;font-size:.75rem;cursor:pointer;transition:transform .1s}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid[_ngcontent-%COMP%]   .grid-body[_ngcontent-%COMP%]   .grid-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]:hover{transform:scale(1.02)}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid[_ngcontent-%COMP%]   .grid-body[_ngcontent-%COMP%]   .grid-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]   .appointment-card[_ngcontent-%COMP%]   .client-name[_ngcontent-%COMP%]{display:block;font-weight:700;margin-bottom:2px}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid[_ngcontent-%COMP%]   .grid-body[_ngcontent-%COMP%]   .grid-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]   .appointment-card.status-confirmed[_ngcontent-%COMP%]{background:#e0f2fe;color:#0369a1;border-left:4px solid #0369a1}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid[_ngcontent-%COMP%]   .grid-body[_ngcontent-%COMP%]   .grid-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]   .appointment-card.status-pending[_ngcontent-%COMP%]{background:#ffedd5;color:#c2410c;border-left:4px solid #c2410c}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .calendar-main[_ngcontent-%COMP%]   .calendar-grid[_ngcontent-%COMP%]   .grid-body[_ngcontent-%COMP%]   .grid-row[_ngcontent-%COMP%]   .day-cell[_ngcontent-%COMP%]   .appointment-card.status-cancelled[_ngcontent-%COMP%]{background:#f3f4f6;color:#6b7280;border-left:4px solid #6b7280}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .agenda-sidebar[_ngcontent-%COMP%]{width:320px;display:flex;flex-direction:column;gap:24px}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .agenda-sidebar[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{background:#fff;border-radius:16px;padding:20px;box-shadow:0 4px 6px -1px #0000000d}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .agenda-sidebar[_ngcontent-%COMP%]   .day-details[_ngcontent-%COMP%]   .details-header[_ngcontent-%COMP%]{margin-bottom:16px}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .agenda-sidebar[_ngcontent-%COMP%]   .day-details[_ngcontent-%COMP%]   .details-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.125rem;color:#036}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .agenda-sidebar[_ngcontent-%COMP%]   .day-details[_ngcontent-%COMP%]   .details-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:.75rem;color:#9ca3af}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .agenda-sidebar[_ngcontent-%COMP%]   .day-details[_ngcontent-%COMP%]   .details-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .agenda-sidebar[_ngcontent-%COMP%]   .day-details[_ngcontent-%COMP%]   .details-list[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:12px;border:1px solid #f3f4f6;border-radius:12px}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .agenda-sidebar[_ngcontent-%COMP%]   .day-details[_ngcontent-%COMP%]   .details-list[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{font-weight:700;font-size:.875rem;color:#036}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .agenda-sidebar[_ngcontent-%COMP%]   .day-details[_ngcontent-%COMP%]   .details-list[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .agenda-sidebar[_ngcontent-%COMP%]   .day-details[_ngcontent-%COMP%]   .details-list[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-weight:600;font-size:.875rem}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .agenda-sidebar[_ngcontent-%COMP%]   .day-details[_ngcontent-%COMP%]   .details-list[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .svc[_ngcontent-%COMP%]{font-size:.75rem;color:#6b7280}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .agenda-sidebar[_ngcontent-%COMP%]   .day-details[_ngcontent-%COMP%]   .details-list[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{font-size:.625rem;padding:4px 8px;border-radius:9999px;text-transform:capitalize}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .agenda-sidebar[_ngcontent-%COMP%]   .day-details[_ngcontent-%COMP%]   .details-list[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .badge.confirmed[_ngcontent-%COMP%]{background:#dcfce7;color:#15803d}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .agenda-sidebar[_ngcontent-%COMP%]   .day-details[_ngcontent-%COMP%]   .details-list[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .badge.pending[_ngcontent-%COMP%]{background:#fef9c3;color:#a16207}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .agenda-sidebar[_ngcontent-%COMP%]   .day-details[_ngcontent-%COMP%]   .details-list[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .badge.cancelled[_ngcontent-%COMP%]{background:#fee2e2;color:#b91c1c}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .agenda-sidebar[_ngcontent-%COMP%]   .upcoming-appointments[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:.75rem;color:#9ca3af;margin-bottom:16px;letter-spacing:.05em}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .agenda-sidebar[_ngcontent-%COMP%]   .upcoming-appointments[_ngcontent-%COMP%]   .upcoming-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .agenda-sidebar[_ngcontent-%COMP%]   .upcoming-appointments[_ngcontent-%COMP%]   .upcoming-item[_ngcontent-%COMP%]   .date-box[_ngcontent-%COMP%]{background:#f3f4f6;padding:8px;border-radius:8px;text-align:center;min-width:48px}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .agenda-sidebar[_ngcontent-%COMP%]   .upcoming-appointments[_ngcontent-%COMP%]   .upcoming-item[_ngcontent-%COMP%]   .date-box[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]{display:block;font-weight:700;font-size:1.125rem}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .agenda-sidebar[_ngcontent-%COMP%]   .upcoming-appointments[_ngcontent-%COMP%]   .upcoming-item[_ngcontent-%COMP%]   .date-box[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]{font-size:.625rem;color:#6b7280}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .agenda-sidebar[_ngcontent-%COMP%]   .upcoming-appointments[_ngcontent-%COMP%]   .upcoming-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{flex:1}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .agenda-sidebar[_ngcontent-%COMP%]   .upcoming-appointments[_ngcontent-%COMP%]   .upcoming-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{display:block;font-weight:600;font-size:.875rem}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .agenda-sidebar[_ngcontent-%COMP%]   .upcoming-appointments[_ngcontent-%COMP%]   .upcoming-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .svc[_ngcontent-%COMP%]{font-size:.75rem;color:#6b7280}.agenda-container[_ngcontent-%COMP%]   .agenda-content[_ngcontent-%COMP%]   .agenda-sidebar[_ngcontent-%COMP%]   .upcoming-appointments[_ngcontent-%COMP%]   .upcoming-item[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{font-size:.75rem;color:#9ca3af}.view-placeholder[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:400px;color:#9ca3af}.view-placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px;margin-bottom:16px}"]})};var Je=[{path:"",component:S,data:{titleKey:"VIEWS.AGENDA"}}];export{Je as AGENDA_ROUTES};
