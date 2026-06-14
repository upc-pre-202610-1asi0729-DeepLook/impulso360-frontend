import{a as Xt,b as Yt,c as $t,d as Zt}from"./chunk-2K7KUCVD.js";import{b as nn}from"./chunk-3OZPV4ZV.js";import{a as Gt,d as Ut,e as jt,f as Wt,g as Kt}from"./chunk-NOQ5VVRP.js";import{a as Qt,d as Jt,e as en,f as tn}from"./chunk-ML2TSEYZ.js";import{c as Et,d as St,f as Tt,g as wt,j as Ft,m as Rt,n as Nt,o as qt,p as Ht}from"./chunk-NA2U3F47.js";import{b as bt,d as _t,f as kt,h as ft,i as gt,j as vt,k as xt,l as yt,m as Mt,n as Pt,o as At,s as It}from"./chunk-VF2YU6LT.js";import{b as Dt,c as Lt,d as Bt,e as ie,f as zt,g as Vt,h as de}from"./chunk-QAPJGVUR.js";import{B as te,C as se,D as ne,F as ut,H as R,K as Ot,M as Ct,c as lt,g as st,k as dt,l as mt,r as pt,y as ee,z as ht}from"./chunk-3U3NOPH6.js";import{c as We,e as Ke}from"./chunk-72QGUWBF.js";import{a as J,b as Je,c as et,d as P,f as tt,g as nt,k as it,n as ot,o as at,t as ct,v as rt}from"./chunk-6RVMELNL.js";import{a as Ze}from"./chunk-5THFIN4W.js";import{d as He,e as Ge,g as Ue,k as je,r as Qe,u as Xe,v as Z,w as Ye,x as $e}from"./chunk-R6THWD64.js";import{a as on}from"./chunk-JYDHRWOU.js";import{Bb as b,Bc as Ve,C as ge,Cb as a,D as ve,Db as c,Eb as g,Fb as Re,Gb as Ne,Gc as F,Jc as k,Kc as qe,Lb as De,M as B,Mb as W,N as z,Q as xe,Qb as f,Sa as r,Sb as Le,T as V,Tb as K,Ub as Q,V as q,Vb as Be,Wb as X,X as T,Xa as Ee,Xb as O,Ya as Se,Yb as C,Z as s,_a as Ie,a as _e,ac as S,b as ke,ba as ye,bb as Te,cc as x,d as N,da as Oe,dc as Y,ea as Ce,ec as d,f as oe,fa as Me,fb as A,fc as u,g as ae,ga as Pe,gb as U,gc as $,ha as le,hb as we,ic as ze,l as ce,la as y,lb as j,ma as H,mb as Fe,oc as M,p as D,pa as Ae,sc as m,ta as G,tc as p,u as fe,ub as E,w as L,wa as w,x as re}from"./chunk-Q2G5GA7L.js";var hn=["input"],un=["label"],bn=["*"],me={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},_n=new T("mat-checkbox-default-options",{providedIn:"root",factory:()=>me}),_=(function(o){return o[o.Init=0]="Init",o[o.Checked=1]="Checked",o[o.Unchecked=2]="Unchecked",o[o.Indeterminate=3]="Indeterminate",o})(_||{}),pe=class{source;checked},he=(()=>{class o{_elementRef=s(w);_changeDetectorRef=s(F);_ngZone=s(H);_animationsDisabled=R();_options=s(_n,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new pe;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new y;indeterminateChange=new y;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=_.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){s(Qe).load(Ct);let e=s(new Ve("tabindex"),{optional:!0});this._options=this._options||me,this.color=this._options.color||me.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=s(te).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(_.Indeterminate):this._transitionCheckState(this.checked?_.Checked:_.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=Ae(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,n=this._getAnimationTargetElement();if(!(t===e||!n)&&(this._currentAnimationClass&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);let i=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{n.classList.remove(i)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?_.Checked:_.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return"";switch(e){case _.Init:if(t===_.Checked)return this._animationClasses.uncheckedToChecked;if(t==_.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case _.Unchecked:return t===_.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case _.Checked:return t===_.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case _.Indeterminate:return t===_.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=A({type:o,selectors:[["mat-checkbox"]],viewQuery:function(t,n){if(t&1&&X(hn,5)(un,5),t&2){let i;O(i=C())&&(n._inputElement=i.first),O(i=C())&&(n._labelElement=i.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,n){t&2&&(W("id",n.id),E("tabindex",null)("aria-label",null)("aria-labelledby",null),Y(n.color?"mat-"+n.color:"mat-accent"),x("_mat-animation-noopable",n._animationsDisabled)("mdc-checkbox--disabled",n.disabled)("mat-mdc-checkbox-disabled",n.disabled)("mat-mdc-checkbox-checked",n.checked)("mat-mdc-checkbox-disabled-interactive",n.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",k],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",k],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",k],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:qe(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",k],checked:[2,"checked","checked",k],disabled:[2,"disabled","disabled",k],indeterminate:[2,"indeterminate","indeterminate",k]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[M([{provide:J,useExisting:V(()=>o),multi:!0},{provide:et,useExisting:o,multi:!0}]),G],ngContentSelectors:bn,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,n){if(t&1&&(K(),a(0,"div",3),f("click",function(l){return n._preventBubblingFromLabel(l)}),a(1,"div",4,0)(3,"div",5),f("click",function(){return n._onTouchTargetClick()}),c(),a(4,"input",6,1),f("blur",function(){return n._onBlur()})("click",function(){return n._onInputClick()})("change",function(l){return n._onInteractionEvent(l)}),c(),g(6,"div",7),a(7,"div",8),Me(),a(8,"svg",9),g(9,"path",10),c(),Pe(),g(10,"div",11),c(),g(11,"div",12),c(),a(12,"label",13,2),Q(14),c()()),t&2){let i=S(2);b("labelPosition",n.labelPosition),r(4),x("mdc-checkbox--selected",n.checked),b("checked",n.checked)("indeterminate",n.indeterminate)("disabled",n.disabled&&!n.disabledInteractive)("id",n.inputId)("required",n.required)("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex),E("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedby)("aria-checked",n.indeterminate?"mixed":null)("aria-controls",n.ariaControls)("aria-disabled",n.disabled&&n.disabledInteractive?!0:null)("aria-expanded",n.ariaExpanded)("aria-owns",n.ariaOwns)("name",n.name)("value",n.value),r(7),b("matRippleTrigger",i)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0),r(),b("for",n.inputId)}},dependencies:[Ot,Jt],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return o})(),cn=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=U({type:o});static \u0275inj=q({imports:[he,Z]})}return o})();var xn=["panel"],yn=["*"];function On(o,h){if(o&1&&(Re(0,"div",1,0),Q(2),Ne()),o&2){let e=h.id,t=Le();Y(t._classList),x("mat-mdc-autocomplete-visible",t.showPanel)("mat-mdc-autocomplete-hidden",!t.showPanel)("mat-autocomplete-panel-animations-enabled",!t._animationsDisabled)("mat-primary",t._color==="primary")("mat-accent",t._color==="accent")("mat-warn",t._color==="warn"),W("id",t.id),E("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby(e))}}var ue=class{source;option;constructor(h,e){this.source=h,this.option=e}},sn=new T("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),dn=(()=>{class o{_changeDetectorRef=s(F);_elementRef=s(w);_defaults=s(sn);_animationsDisabled=R();_activeOptionChanges=N.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new y;opened=new y;closed=new y;optionActivated=new y;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=s(te).getId("mat-autocomplete-");inertGroups;constructor(){let e=s(st);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new ht(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let t=new ue(this,e);this.optionSelected.emit(t)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=A({type:o,selectors:[["mat-autocomplete"]],contentQueries:function(t,n,i){if(t&1&&Be(i,ie,5)(i,Lt,5),t&2){let l;O(l=C())&&(n.options=l),O(l=C())&&(n.optionGroups=l)}},viewQuery:function(t,n){if(t&1&&X(Se,7)(xn,5),t&2){let i;O(i=C())&&(n.template=i.first),O(i=C())&&(n.panel=i.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",k],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",k],requireSelection:[2,"requireSelection","requireSelection",k],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",k],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",k]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[M([{provide:Dt,useExisting:o}])],ngContentSelectors:yn,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(t,n){t&1&&(K(),Fe(0,On,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
  width: 100%;
  max-height: 256px;
  visibility: hidden;
  transform-origin: center top;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  position: relative;
  border-radius: var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));
  box-shadow: var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  background-color: var(--mat-autocomplete-background-color, var(--mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-autocomplete-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: center bottom;
}
div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {
  visibility: visible;
}

div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,
.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {
  visibility: hidden;
  pointer-events: none;
}

@keyframes _mat-autocomplete-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.mat-autocomplete-panel-animations-enabled {
  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}

mat-autocomplete {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return o})();var Cn={provide:J,useExisting:V(()=>be),multi:!0};var Mn=new T("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let o=s(le);return()=>Tt(o)}}),be=(()=>{class o{_environmentInjector=s(ye);_element=s(w);_injector=s(le);_viewContainerRef=s(Te);_zone=s(H);_changeDetectorRef=s(F);_dir=s(Xe,{optional:!0});_formField=s(ft,{optional:!0,host:!0});_viewportRuler=s(Et);_scrollStrategy=s(Mn);_renderer=s(Ie);_animationsDisabled=R();_defaults=s(sn,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new ae;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=N.EMPTY;_breakpointObserver=s(pt);_handsetLandscapeSubscription=N.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new ae;_overlayPanelClass=lt(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&ne(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return L(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(re(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(re(()=>this._overlayAttached)):ce()).pipe(D(e=>e instanceof Bt?e:null))}optionSelections=fe(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(B(e),z(()=>L(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(z(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new oe(e=>{let t=i=>{let l=mt(i),v=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,I=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&l!==this._element.nativeElement&&!this._hasFocus()&&(!v||!v.contains(l))&&(!I||!I.contains(l))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(l)&&e.next(i)},n=[this._renderer.listen("document","click",t),this._renderer.listen("document","auxclick",t),this._renderer.listen("document","touchend",t)];return()=>{n.forEach(i=>i())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let t=e,n=t.keyCode,i=ee(t);if(n===27&&!i&&t.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&n===13&&this.panelOpen&&!i)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){let l=this.autocomplete._keyManager.activeItem,v=n===38||n===40;n===9||v&&!i&&this.panelOpen?this.autocomplete._keyManager.onKeydown(t):v&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(v||this.autocomplete._keyManager.activeItem!==l)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let t=e.target,n=t.value;if(t.type==="number"&&(n=n==""?null:parseFloat(n)),this._previousValue!==n){if(this._previousValue=n,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(n),!n)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let i=this.autocomplete.options?.find(l=>l.selected);if(i){let l=this._getDisplayValue(i.value);n!==l&&i.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let i=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(i)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return dt()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new oe(n=>{Ee(()=>{n.next()},{injector:this._environmentInjector})}),t=this.autocomplete.options?.changes.pipe(xe(()=>this._positionStrategy.reapplyLastPosition()),ve(0))??ce();return L(e,t).pipe(z(()=>this._zone.run(()=>{let n=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),n!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),ge(1)).subscribe(n=>this._setValueAndClose(n))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let t=this.autocomplete;return t&&t.displayWith?t.displayWith(e):e}_assignOptionValue(e){let t=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(t??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let t=this.autocomplete,n=e?e.source:this._pendingAutoselectedOption;n?(this._clearPreviousSelectedOption(n),this._assignOptionValue(n.value),this._onChange(n.value),t._emitSelectEvent(n),this._element.nativeElement.focus()):t.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,t){this.autocomplete?.options?.forEach(n=>{n!==e&&n.selected&&n.deselect(t)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let t=this.autocomplete.id;se(this._trackedModal,"aria-owns",t)}}_attachOverlay(e){if(!this.autocomplete)return;let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new It(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=Rt(this._injector,this._getOverlayConfig()),this._overlayRef=t,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(ut.HandsetLandscape).subscribe(i=>{i.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),t&&!t.hasAttached()&&(t.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let n=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&n!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!ee(e)||e.keyCode===38&&ee(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new wt({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=Ft(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let t=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],n=this._aboveClass,i=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:n},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:n}],l;this.position==="above"?l=i:this.position==="below"?l=t:l=[...t,...i],e.withPositions(l)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let t=-1;for(let n=0;n<e.options.length;n++)if(!e.options.get(n).disabled){t=n;break}e._keyManager.setActiveItem(t)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let t=this.autocomplete,n=zt(e,t.options,t.optionGroups);if(e===0&&n===1)t._setScrollTop(0);else if(t.panel){let i=t.options.toArray()[e];if(i){let l=i._getHostElement(),v=Vt(l.offsetTop,l.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(v)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=this.autocomplete.id;this._trackedModal&&ne(this._trackedModal,"aria-owns",t),se(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;ne(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(t){return new(t||o)};static \u0275dir=we({type:o,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(t,n){t&1&&f("focusin",function(){return n._handleFocus()})("blur",function(){return n._onTouched()})("input",function(l){return n._handleInput(l)})("keydown",function(l){return n._handleKeydown(l)})("click",function(){return n._handleClick()}),t&2&&E("autocomplete",n.autocompleteAttribute)("role",n.autocompleteDisabled?null:"combobox")("aria-autocomplete",n.autocompleteDisabled?null:"list")("aria-activedescendant",n.panelOpen&&n.activeOption?n.activeOption.id:null)("aria-expanded",n.autocompleteDisabled?null:n.panelOpen.toString())("aria-controls",n.autocompleteDisabled||!n.panelOpen||n.autocomplete==null?null:n.autocomplete.id)("aria-haspopup",n.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",k]},exportAs:["matAutocompleteTrigger"],features:[M([Cn]),G]})}return o})(),mn=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=U({type:o});static \u0275inj=q({imports:[Nt,de,St,de,Z]})}return o})();function An(o,h){if(o&1&&(a(0,"mat-option",40),d(1),c()),o&2){let e=h.$implicit;b("value",e.firstName+" "+e.lastName),r(),ze(" ",e.firstName," ",e.lastName," (",e.phone,") ")}}function En(o,h){if(o&1&&(a(0,"mat-option",40),d(1),c()),o&2){let e=h.$implicit;b("value",e.name),r(),u(e.name)}}function Sn(o,h){o&1&&(a(0,"div",41)(1,"mat-icon"),d(2,"error_outline"),c(),a(3,"span"),d(4),m(5,"translate"),c()()),o&2&&(r(4),u(p(5,1,"APPOINTMENT.FORM.ERROR_SUMMARY")))}var pn=class o{fb=s(ct);dialogRef=s(Gt);clientApi=s(nn);serviceApi=s(on);authStore=s(Ze);clients=[];services=[];filteredClients;appointmentForm=this.fb.group({client:["",P.required],service:["",P.required],date:[new Date,P.required],time:["09:00",P.required],duration:["1 hora",P.required],status:["pending",P.required],notes:[""],sendReminder:[!0]});ngOnInit(){let h=this.authStore.currentUser()?.businessId;this.clientApi.getAll(h).subscribe(e=>{this.clients=e,this.setupAutocomplete()}),this.serviceApi.getAll(h).subscribe(e=>{this.services=e})}setupAutocomplete(){this.filteredClients=this.appointmentForm.get("client").valueChanges.pipe(B(""),D(h=>this._filter(h||"")))}_filter(h){let e=h.toLowerCase();return this.clients.filter(t=>`${t.firstName} ${t.lastName}`.toLowerCase().includes(e)||t.phone.includes(e))}close(){this.dialogRef.close()}submit(){if(this.appointmentForm.valid){let h=this.appointmentForm.value,e=this.clients.find(t=>`${t.firstName} ${t.lastName}`===h.client);this.dialogRef.close(ke(_e({},h),{clientEmail:e?.email??""}))}else this.appointmentForm.markAllAsTouched()}setStatus(h){this.appointmentForm.patchValue({status:h})}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=A({type:o,selectors:[["app-appointment-form"]],features:[M([tn(),{provide:Qt,useValue:"es-ES"}])],decls:122,vars:87,consts:[["auto","matAutocomplete"],["picker",""],[1,"appointment-dialog"],["mat-dialog-title","",1,"modal-header"],["mat-icon-button","","type","button",3,"click"],[1,"modal-content"],[1,"info-banner"],[3,"formGroup"],[1,"form-section"],[1,"section-title"],[1,"form-field"],["appearance","outline",1,"full-width"],["matInput","","formControlName","client",3,"placeholder","matAutocomplete"],["matSuffix",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","service",3,"placeholder"],[1,"form-grid"],["appearance","outline"],["matInput","","formControlName","date","readonly","",3,"click","matDatepicker"],["matIconSuffix","",3,"for"],["matInput","","type","time","formControlName","time"],["formControlName","duration"],["value","30 min"],["value","1 hora"],["value","2 horas"],[1,"status-selection"],[1,"field-label"],[1,"status-buttons"],["type","button",1,"status-btn","confirmed",3,"click"],[1,"dot"],["type","button",1,"status-btn","pending",3,"click"],["type","button",1,"status-btn","cancelled",3,"click"],["matInput","","rows","3","formControlName","notes",3,"placeholder"],[1,"form-section","checkbox-section"],["formControlName","sendReminder"],[1,"helper-text"],["align","end",1,"modal-footer"],["class","error-summary",4,"ngIf"],["mat-button","","type","button",1,"btn-cancel",3,"click"],["mat-flat-button","","color","primary","type","button",1,"btn-submit",3,"click"],[3,"value"],[1,"error-summary"]],template:function(e,t){if(e&1){let n=De();a(0,"div",2)(1,"h2",3)(2,"span"),d(3),m(4,"translate"),c(),a(5,"button",4),f("click",function(){return t.close()}),a(6,"mat-icon"),d(7,"close"),c()()(),a(8,"mat-dialog-content",5)(9,"div",6)(10,"mat-icon"),d(11,"lightbulb_outline"),c(),a(12,"span"),d(13),m(14,"translate"),c()(),a(15,"form",7)(16,"section",8)(17,"h3",9),d(18),m(19,"translate"),c(),a(20,"div",10)(21,"mat-form-field",11)(22,"mat-label"),d(23),m(24,"translate"),c(),g(25,"input",12),m(26,"translate"),a(27,"mat-icon",13),d(28,"person_search"),c(),a(29,"mat-autocomplete",null,0),j(31,An,2,4,"mat-option",14),m(32,"async"),c(),a(33,"mat-hint"),d(34),m(35,"translate"),c()()()(),a(36,"section",8)(37,"h3",9),d(38),m(39,"translate"),c(),a(40,"div",10)(41,"mat-form-field",11)(42,"mat-label"),d(43),m(44,"translate"),c(),a(45,"mat-select",15),m(46,"translate"),j(47,En,2,2,"mat-option",14),c(),a(48,"mat-icon",13),d(49,"category"),c()()(),a(50,"div",16)(51,"mat-form-field",17)(52,"mat-label"),d(53),m(54,"translate"),c(),a(55,"input",18),f("click",function(){Oe(n);let l=S(58);return Ce(l.open())}),c(),g(56,"mat-datepicker-toggle",19)(57,"mat-datepicker",null,1),c(),a(59,"mat-form-field",17)(60,"mat-label"),d(61),m(62,"translate"),c(),g(63,"input",20),a(64,"mat-icon",13),d(65,"schedule"),c()(),a(66,"mat-form-field",17)(67,"mat-label"),d(68),m(69,"translate"),c(),a(70,"mat-select",21)(71,"mat-option",22),d(72,"30 min"),c(),a(73,"mat-option",23),d(74,"1 hora"),c(),a(75,"mat-option",24),d(76,"2 horas"),c()()()(),a(77,"div",25)(78,"label",26),d(79),m(80,"translate"),c(),a(81,"div",27)(82,"button",28),f("click",function(){return t.setStatus("confirmed")}),g(83,"span",29),d(84),m(85,"translate"),c(),a(86,"button",30),f("click",function(){return t.setStatus("pending")}),g(87,"span",29),d(88),m(89,"translate"),c(),a(90,"button",31),f("click",function(){return t.setStatus("cancelled")}),g(91,"span",29),d(92),m(93,"translate"),c()()()(),a(94,"section",8)(95,"h3",9),d(96),m(97,"translate"),c(),a(98,"mat-form-field",11)(99,"mat-label"),d(100),m(101,"translate"),c(),g(102,"textarea",32),m(103,"translate"),a(104,"mat-hint"),d(105),m(106,"translate"),c()()(),a(107,"section",33)(108,"mat-checkbox",34),d(109),m(110,"translate"),c(),a(111,"p",35),d(112),m(113,"translate"),c()()()(),a(114,"mat-dialog-actions",36),j(115,Sn,6,3,"div",37),a(116,"button",38),f("click",function(){return t.close()}),d(117),m(118,"translate"),c(),a(119,"button",39),f("click",function(){return t.submit()}),d(120),m(121,"translate"),c()()()}if(e&2){let n,i,l,v=S(30),I=S(58);r(3),u(p(4,37,"APPOINTMENT.FORM.TITLE")),r(10),u(p(14,39,"APPOINTMENT.FORM.REQUIRED_BANNER")),r(2),b("formGroup",t.appointmentForm),r(3),u(p(19,41,"APPOINTMENT.FORM.CLIENT_INFO")),r(5),u(p(24,43,"APPOINTMENT.FORM.CLIENT_LABEL")),r(2),b("placeholder",p(26,45,"APPOINTMENT.FORM.CLIENT_PLACEHOLDER"))("matAutocomplete",v),r(6),b("ngForOf",p(32,47,t.filteredClients)),r(3),u(p(35,49,"APPOINTMENT.FORM.CLIENT_HINT")),r(4),u(p(39,51,"APPOINTMENT.FORM.DETAILS_TITLE")),r(5),u(p(44,53,"APPOINTMENT.FORM.SERVICE_LABEL")),r(2),b("placeholder",p(46,55,"APPOINTMENT.FORM.SERVICE_PLACEHOLDER")),r(2),b("ngForOf",t.services),r(6),u(p(54,57,"APPOINTMENT.FORM.DATE_LABEL")),r(2),b("matDatepicker",I),r(),b("for",I),r(5),u(p(62,59,"APPOINTMENT.FORM.TIME_LABEL")),r(7),u(p(69,61,"APPOINTMENT.FORM.DURATION_LABEL")),r(11),u(p(80,63,"APPOINTMENT.FORM.STATUS_LABEL")),r(3),x("active",((n=t.appointmentForm.get("status"))==null?null:n.value)==="confirmed"),r(2),$(" ",p(85,65,"APPOINTMENT.FORM.STATUS_CONFIRMED")," "),r(2),x("active",((i=t.appointmentForm.get("status"))==null?null:i.value)==="pending"),r(2),$(" ",p(89,67,"APPOINTMENT.FORM.STATUS_PENDING")," "),r(2),x("active",((l=t.appointmentForm.get("status"))==null?null:l.value)==="cancelled"),r(2),$(" ",p(93,69,"APPOINTMENT.FORM.STATUS_CANCELLED")," "),r(4),u(p(97,71,"APPOINTMENT.FORM.NOTES_TITLE")),r(4),u(p(101,73,"APPOINTMENT.FORM.NOTES_LABEL")),r(2),b("placeholder",p(103,75,"APPOINTMENT.FORM.NOTES_PLACEHOLDER")),r(3),u(p(106,77,"APPOINTMENT.FORM.NOTES_HINT")),r(4),u(p(110,79,"APPOINTMENT.FORM.REMINDER_LABEL")),r(3),u(p(113,81,"APPOINTMENT.FORM.REMINDER_HINT")),r(3),b("ngIf",t.appointmentForm.invalid&&t.appointmentForm.touched),r(2),u(p(118,83,"APPOINTMENT.FORM.CANCEL")),r(3),u(p(121,85,"APPOINTMENT.FORM.SUBMIT"))}},dependencies:[je,He,Ge,rt,it,Je,tt,nt,at,ot,Kt,Ut,Wt,jt,$e,Ye,At,Pt,Mt,yt,xt,gt,bt,_t,kt,vt,Ht,qt,ie,Zt,Xt,Yt,$t,en,cn,he,mn,dn,be,Ke,Ue,We],styles:[".appointment-dialog[_ngcontent-%COMP%]{display:flex;flex-direction:column;background:#fff;min-width:700px;max-width:850px;font-family:Inter,sans-serif}.appointment-dialog[_ngcontent-%COMP%]     .mat-mdc-form-field-infix{padding-left:12px!important}.appointment-dialog[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper{background-color:#fcfcfc!important}.appointment-dialog[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]{background-color:#036;color:#fff;padding:16px 24px;display:flex;justify-content:space-between;align-items:center;margin:0}.appointment-dialog[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700}.appointment-dialog[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff;margin-right:-8px}.appointment-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{padding:24px!important;margin:0}.appointment-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .info-banner[_ngcontent-%COMP%]{background-color:#e0f2fe;border:1px solid #bae6fd;border-radius:12px;padding:16px;display:flex;align-items:center;gap:12px;color:#0369a1;font-size:.9375rem;margin-bottom:32px}.appointment-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .info-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:24px;width:24px;height:24px;color:#f59e0b}.appointment-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]{margin-bottom:32px}.appointment-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:700;color:#036;margin-bottom:20px;border-bottom:2px solid #f3f4f6;padding-bottom:8px}.appointment-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:100%}.appointment-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]{margin-bottom:20px}.appointment-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 1fr 1.2fr;gap:16px;margin-bottom:20px}.appointment-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .status-selection[_ngcontent-%COMP%]{margin-top:8px}.appointment-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .status-selection[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%]{display:block;font-weight:600;color:#4b5563;margin-bottom:12px;font-size:.9375rem}.appointment-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .status-selection[_ngcontent-%COMP%]   .status-buttons[_ngcontent-%COMP%]{display:flex;gap:16px}.appointment-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .status-selection[_ngcontent-%COMP%]   .status-buttons[_ngcontent-%COMP%]   .status-btn[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;justify-content:center;gap:10px;padding:14px;border:1.5px solid #e5e7eb;border-radius:12px;background:#fff;font-weight:600;font-size:.9375rem;color:#4b5563;cursor:pointer;transition:all .2s ease}.appointment-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .status-selection[_ngcontent-%COMP%]   .status-buttons[_ngcontent-%COMP%]   .status-btn[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:50%}.appointment-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .status-selection[_ngcontent-%COMP%]   .status-buttons[_ngcontent-%COMP%]   .status-btn[_ngcontent-%COMP%]:hover:not(.active){background-color:#f9fafb;border-color:#d1d5db}.appointment-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .status-selection[_ngcontent-%COMP%]   .status-buttons[_ngcontent-%COMP%]   .status-btn.confirmed[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{background-color:#0ea5e9}.appointment-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .status-selection[_ngcontent-%COMP%]   .status-buttons[_ngcontent-%COMP%]   .status-btn.confirmed.active[_ngcontent-%COMP%]{border-color:#0ea5e9;background-color:#f0f9ff;color:#0369a1;box-shadow:0 0 0 1px #0ea5e9}.appointment-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .status-selection[_ngcontent-%COMP%]   .status-buttons[_ngcontent-%COMP%]   .status-btn.pending[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{background-color:#f97316}.appointment-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .status-selection[_ngcontent-%COMP%]   .status-buttons[_ngcontent-%COMP%]   .status-btn.pending.active[_ngcontent-%COMP%]{border-color:#f97316;background-color:#fff7ed;color:#c2410c;box-shadow:0 0 0 1px #f97316}.appointment-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .status-selection[_ngcontent-%COMP%]   .status-buttons[_ngcontent-%COMP%]   .status-btn.cancelled[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{background-color:#9ca3af}.appointment-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .status-selection[_ngcontent-%COMP%]   .status-buttons[_ngcontent-%COMP%]   .status-btn.cancelled.active[_ngcontent-%COMP%]{border-color:#9ca3af;background-color:#f3f4f6;color:#4b5563;box-shadow:0 0 0 1px #9ca3af}.appointment-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-section.checkbox-section[_ngcontent-%COMP%]{margin-top:16px;background-color:#f9fafb;padding:16px;border-radius:12px}.appointment-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-section.checkbox-section[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{margin-bottom:4px}.appointment-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .form-section.checkbox-section[_ngcontent-%COMP%]   .helper-text[_ngcontent-%COMP%]{margin:0;font-size:.8125rem;color:#6b7280;padding-left:32px}.appointment-dialog[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]{padding:20px 24px!important;border-top:1px solid #f3f4f6;gap:12px}.appointment-dialog[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0 28px;height:48px;border-radius:10px;font-weight:600;font-size:1rem}.appointment-dialog[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .error-summary[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;color:#dc2626;font-size:.875rem;margin-right:auto;font-weight:500}.appointment-dialog[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .error-summary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}.appointment-dialog[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]{background-color:#f9fafb;border:1px solid #e5e7eb;color:#4b5563}.appointment-dialog[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]{background-color:#ff855e;color:#fff;box-shadow:0 4px 10px #ff855e4d}.appointment-dialog[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]:hover{background-color:#f47a54;transform:translateY(-1px);box-shadow:0 6px 14px #ff855e66}"]})};export{pn as a};
