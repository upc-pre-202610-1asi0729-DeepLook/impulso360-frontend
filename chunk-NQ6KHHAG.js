import{b as We}from"./chunk-2WJ757SW.js";import{j as ot,l as rt,n as pt,o as dt,q as ae,s as lt,v as ct,w as mt}from"./chunk-PHP6WHSO.js";import{A as it,B as z,H as at,M as st,o as tt,y as nt}from"./chunk-5TBVWADF.js";import{b as ie,c as M}from"./chunk-72QGUWBF.js";import{b as Ze,f as $e,i as Xe,m as Je,v as et}from"./chunk-H6I3J6N2.js";import{d as k,e as D,k as C,r as Ye,v as Ke,w as A,x as q}from"./chunk-KTUD7CFY.js";import"./chunk-BICKBV3Z.js";import{Bb as u,Bc as Ve,C as Ie,Cb as s,Db as r,Eb as xe,Fb as X,Gb as be,Gc as ne,Hb as ze,Ib as J,Jb as ee,Jc as E,Kc as Ue,Lb as te,M as ge,Qb as y,Sa as a,Sb as I,Tb as _e,U as V,Ub as w,V as U,Vb as ye,Wb as Be,X as O,Xb as L,Ya as Fe,Yb as G,Z as d,_a as Re,bb as Ne,bc as je,cc as S,d as B,da as W,ea as Y,ec as p,fa as He,fb as _,fc as g,g as R,gb as Z,gc as x,hb as P,hc as Qe,ia as ke,j as Ee,kb as he,l as j,la as b,lb as h,ma as De,oc as H,p as Q,pa as v,sc as l,ta as K,tc as c,ua as Ae,ub as $,v as Te,vb as Le,w as Oe,wa as fe,wb as Ge,x as N,xa as qe,zc as ve}from"./chunk-Q2G5GA7L.js";var oe=class{constructor(n,e,i){this.id=n;this.question=e;this.answer=i}};var re=class{constructor(n,e,i,o,m){this.id=n;this.icon=e;this.title=i;this.description=o;this.route=m}};var se=class{constructor(n,e,i,o,m,f){this.id=n;this.number=e;this.title=i;this.description=o;this.status=m;this.route=f}};var F=class{static toFaqEntity(n){return new oe(n.id,n.question,n.answer)}static toFaqEntities(n){return n.map(e=>this.toFaqEntity(e))}static toGuideEntity(n){return new re(n.id,n.icon,n.title,n.description,n.route)}static toGuideEntities(n){return n.map(e=>this.toGuideEntity(e))}static toTutorialStepEntity(n){return new se(n.id,n.number,n.title,n.description,n.status,n.route)}static toTutorialStepEntities(n){return n.map(e=>this.toTutorialStepEntity(e))}};var pe=class t{translate=d(ie);contentByLanguage={es:{faqs:[{id:1,question:"\xBFC\xF3mo registro una nueva cita?",answer:"Ingresa a la secci\xF3n Agenda, selecciona Nueva cita, completa los datos del cliente, servicio, fecha y hora. Luego presiona Guardar."},{id:2,question:"\xBFPuedo reprogramar una cita?",answer:"S\xED. Desde la agenda puedes seleccionar una cita existente, cambiar su fecha u hora y guardar la actualizaci\xF3n."},{id:3,question:"\xBFC\xF3mo cancelo una cita?",answer:"Selecciona la cita desde la agenda y utiliza la opci\xF3n Cancelar. El sistema actualizar\xE1 el estado de la cita y liberar\xE1 el horario."},{id:4,question:"\xBFC\xF3mo comparto mi perfil digital?",answer:"Entra a Perfil del negocio, copia el enlace p\xFAblico de tu perfil y comp\xE1rtelo por WhatsApp, redes sociales o correo."},{id:5,question:"\xBFCu\xE1ntos servicios puedo destacar?",answer:"Puedes destacar hasta tres servicios principales para que aparezcan con mayor visibilidad en tu perfil digital."},{id:6,question:"\xBFPuedo exportar el historial?",answer:"S\xED. Desde el historial puedes exportar la informaci\xF3n disponible para revisarla o compartirla."}],guides:[{id:1,icon:"calendar_today",title:"C\xF3mo registrar una nueva cita",description:"Paso a paso ilustrado \xB7 3 min",route:"/agenda"},{id:2,icon:"person_add",title:"C\xF3mo agregar un cliente",description:"Paso a paso ilustrado \xB7 2 min",route:"/clientes"},{id:3,icon:"storefront",title:"C\xF3mo configurar tu perfil digital",description:"Paso a paso ilustrado \xB7 4 min",route:"/perfil-negocio"},{id:4,icon:"work_outline",title:"C\xF3mo gestionar tus servicios",description:"Paso a paso ilustrado \xB7 3 min",route:"/servicios"}],tutorialSteps:[{id:1,number:1,title:"Configura tu perfil del negocio",description:"Completa el nombre, descripci\xF3n, horarios y datos principales de tu negocio.",status:"completed",route:"/perfil-negocio"},{id:2,number:2,title:"Agrega tus servicios",description:"Registra los servicios que ofreces para que puedan ser usados en las citas.",status:"completed",route:"/servicios"},{id:3,number:3,title:"Registra tu primera cita",description:"Crea una cita con cliente, servicio, fecha y hora para organizar tu agenda.",status:"in-progress",route:"/agenda"},{id:4,number:4,title:"Registra un cliente",description:"Guarda los datos de tus clientes para tener mejor seguimiento.",status:"pending",route:"/clientes"},{id:5,number:5,title:"Comparte tu perfil digital",description:"Comparte tu perfil para que m\xE1s clientes conozcan tus servicios.",status:"pending",route:"/perfil-negocio"}]},en:{faqs:[{id:1,question:"How do I register a new appointment?",answer:"Go to the Agenda section, select New appointment, complete the customer, service, date and time information. Then press Save."},{id:2,question:"Can I reschedule an appointment?",answer:"Yes. From the agenda, you can select an existing appointment, change its date or time, and save the update."},{id:3,question:"How do I cancel an appointment?",answer:"Select the appointment from the agenda and use the Cancel option. The system will update the appointment status and free the time slot."},{id:4,question:"How do I share my digital profile?",answer:"Go to Business Profile, copy your public profile link, and share it through WhatsApp, social media, or email."},{id:5,question:"How many services can I highlight?",answer:"You can highlight up to three main services so they appear with more visibility in your digital profile."},{id:6,question:"Can I export the history?",answer:"Yes. From the history section, you can export the available information to review or share it."}],guides:[{id:1,icon:"calendar_today",title:"How to register a new appointment",description:"Includes customer, service, date and time \xB7 3 min",route:"/agenda"},{id:2,icon:"person_add",title:"How to add a customer",description:"Step-by-step guide \xB7 2 min",route:"/clientes"},{id:3,icon:"storefront",title:"How to set up your digital profile",description:"Step-by-step guide \xB7 4 min",route:"/perfil-negocio"},{id:4,icon:"work_outline",title:"How to manage your services",description:"Step-by-step guide \xB7 3 min",route:"/servicios"}],tutorialSteps:[{id:1,number:1,title:"Set up your business profile",description:"Complete your business name, description, opening hours, and main business information.",status:"completed",route:"/perfil-negocio"},{id:2,number:2,title:"Add your services",description:"Register the services you offer so they can be used when creating appointments.",status:"completed",route:"/servicios"},{id:3,number:3,title:"Register your first appointment",description:"Create an appointment with customer, service, date and time to organize your agenda.",status:"in-progress",route:"/agenda"},{id:4,number:4,title:"Register a customer",description:"Save your customer information to keep better follow-up records.",status:"pending",route:"/clientes"},{id:5,number:5,title:"Share your digital profile",description:"Share your profile so more customers can learn about your services.",status:"pending",route:"/perfil-negocio"}]}};getFaqs(){return j(this.getCurrentContent().faqs).pipe(Q(n=>F.toFaqEntities(n)))}getGuides(){return j(this.getCurrentContent().guides).pipe(Q(n=>F.toGuideEntities(n)))}getTutorialSteps(){return j(this.getCurrentContent().tutorialSteps).pipe(Q(n=>F.toTutorialStepEntities(n)))}getCurrentContent(){let e=(this.translate.getCurrentLang()??this.translate.getFallbackLang()??"es").startsWith("en")?"en":"es";return this.contentByLanguage[e]}static \u0275fac=function(e){return new(e||t)};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})};var de=class t{helpApiService=d(pe);translate=d(ie);faqsSignal=v([]);guidesSignal=v([]);tutorialStepsSignal=v([]);searchTermSignal=v("");loadingSignal=v(!1);faqs=this.faqsSignal.asReadonly();guides=this.guidesSignal.asReadonly();tutorialSteps=this.tutorialStepsSignal.asReadonly();searchTerm=this.searchTermSignal.asReadonly();loading=this.loadingSignal.asReadonly();constructor(){this.translate.onLangChange.subscribe(()=>{this.loadHelpContent()})}filteredFaqs=ve(()=>{let n=this.normalizeText(this.searchTermSignal());return n?this.faqsSignal().filter(e=>{let i=this.normalizeText(e.question),o=this.normalizeText(e.answer);return i.includes(n)||o.includes(n)}):this.faqsSignal()});filteredGuides=ve(()=>{let n=this.normalizeText(this.searchTermSignal());return n?this.guidesSignal().filter(e=>{let i=this.normalizeText(e.title),o=this.normalizeText(e.description);return i.includes(n)||o.includes(n)}):this.guidesSignal()});loadHelpContent(){this.loadingSignal.set(!0),Te({faqs:this.helpApiService.getFaqs(),guides:this.helpApiService.getGuides(),tutorialSteps:this.helpApiService.getTutorialSteps()}).subscribe({next:({faqs:n,guides:e,tutorialSteps:i})=>{this.faqsSignal.set(n),this.guidesSignal.set(e),this.tutorialStepsSignal.set(i),this.loadingSignal.set(!1)},error:n=>{console.error("Error loading help content:",n),this.loadingSignal.set(!1)}})}setSearchTerm(n){this.searchTermSignal.set(n)}normalizeText(n){return n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim()}static \u0275fac=function(e){return new(e||t)};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})};function Mt(t,n){t&1&&(s(0,"mat-icon"),p(1,"check"),r())}function Pt(t,n){if(t&1&&(s(0,"span"),p(1),r()),t&2){let e=I().$implicit;a(),g(e.number)}}function wt(t,n){t&1&&(J(0),p(1),l(2,"translate"),ee()),t&2&&(a(),x(" ",c(2,1,"HELP.STATUS.COMPLETED")," "))}function St(t,n){t&1&&(J(0),p(1),l(2,"translate"),ee()),t&2&&(a(),x(" ",c(2,1,"HELP.STATUS.IN_PROGRESS")," "))}function Et(t,n){t&1&&(J(0),p(1),l(2,"translate"),ee()),t&2&&(a(),x(" ",c(2,1,"HELP.STATUS.PENDING")," "))}function Tt(t,n){if(t&1){let e=te();s(0,"button",11),y("click",function(){W(e);let o=I().$implicit,m=I();return Y(m.onContinue(o))}),p(1),l(2,"translate"),r()}t&2&&(a(),x(" ",c(2,1,"HELP.CONTINUE")," "))}function Ot(t,n){if(t&1&&(s(0,"div",5)(1,"div",6),h(2,Mt,2,0,"mat-icon",7)(3,Pt,2,1,"span",7),r(),s(4,"div",8)(5,"h3"),p(6),r(),s(7,"p"),p(8),r(),s(9,"span",9),h(10,wt,3,3,"ng-container",7)(11,St,3,3,"ng-container",7)(12,Et,3,3,"ng-container",7),r()(),h(13,Tt,3,3,"button",10),r()),t&2){let e=n.$implicit;S("step-item--completed",e.status==="completed")("step-item--active",e.status==="in-progress")("step-item--pending",e.status==="pending"),a(2),u("ngIf",e.status==="completed"),a(),u("ngIf",e.status!=="completed"),a(3),g(e.title),a(2),g(e.description),a(2),u("ngIf",e.status==="completed"),a(),u("ngIf",e.status==="in-progress"),a(),u("ngIf",e.status==="pending"),a(),u("ngIf",e.status==="in-progress")}}var le=class t{steps=[];continueStep=new b;onContinue(n){this.continueStep.emit(n)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=_({type:t,selectors:[["app-tutorial-card"]],inputs:{steps:"steps"},outputs:{continueStep:"continueStep"},decls:14,vars:11,consts:[[1,"help-card","tutorial-card"],[1,"section-header"],[1,"progress-label"],[1,"steps-list"],["class","step-item",3,"step-item--completed","step-item--active","step-item--pending",4,"ngFor","ngForOf"],[1,"step-item"],[1,"step-marker"],[4,"ngIf"],[1,"step-content"],[1,"step-status"],["mat-flat-button","","type","button","class","continue-button",3,"click",4,"ngIf"],["mat-flat-button","","type","button",1,"continue-button",3,"click"]],template:function(e,i){e&1&&(s(0,"section",0)(1,"div",1)(2,"div")(3,"h2"),p(4),l(5,"translate"),r(),s(6,"p"),p(7),l(8,"translate"),r()(),s(9,"span",2),p(10),l(11,"translate"),r()(),s(12,"div",3),h(13,Ot,14,14,"div",4),r()()),e&2&&(a(4),g(c(5,5,"HELP.TUTORIAL_TITLE")),a(3),g(c(8,7,"HELP.TUTORIAL_DESCRIPTION")),a(3),Qe(" ",i.steps.length," ",c(11,9,"HELP.STEPS_LABEL")," "),a(3),u("ngForOf",i.steps))},dependencies:[C,k,D,q,A,dt,pt,M],styles:[".help-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;padding:24px;box-shadow:0 10px 24px #0f172a0f;border:1px solid #e5e7eb}.section-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:16px;margin-bottom:20px}.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;color:#0c2340;font-size:1.25rem;font-weight:700}.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:6px 0 0;color:#6b7280;font-size:.92rem}.progress-label[_ngcontent-%COMP%]{height:fit-content;background:#eff6ff;color:#1d4ed8;padding:6px 12px;border-radius:999px;font-size:.78rem;font-weight:700;white-space:nowrap}.steps-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:14px}.step-item[_ngcontent-%COMP%]{display:grid;grid-template-columns:42px 1fr auto;align-items:center;gap:14px;padding:16px;border-radius:16px;border:1px solid #e5e7eb;background:#fff}.step-marker[_ngcontent-%COMP%]{width:38px;height:38px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0}.step-item--completed[_ngcontent-%COMP%]   .step-marker[_ngcontent-%COMP%]{background:#dcfce7;color:#15803d}.step-item--active[_ngcontent-%COMP%]{border-color:#f37048;background:#fff7ed}.step-item--active[_ngcontent-%COMP%]   .step-marker[_ngcontent-%COMP%]{background:#f37048;color:#fff}.step-item--pending[_ngcontent-%COMP%]   .step-marker[_ngcontent-%COMP%]{background:#f3f4f6;color:#6b7280}.step-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;color:#111827;font-size:.98rem;font-weight:700}.step-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 8px;color:#6b7280;font-size:.86rem;line-height:1.4}.step-status[_ngcontent-%COMP%]{font-size:.78rem;color:#6b7280;font-weight:700}.continue-button[_ngcontent-%COMP%]{background:#f37048!important;color:#fff!important;border-radius:10px}@media(max-width:768px){.step-item[_ngcontent-%COMP%]{grid-template-columns:42px 1fr}.continue-button[_ngcontent-%COMP%]{grid-column:2;width:fit-content}.section-header[_ngcontent-%COMP%]{flex-direction:column}}"]})};var Me=new O("CdkAccordion"),ft=(()=>{class t{_stateChanges=new R;_openCloseAllActions=new R;id=d(z).getId("cdk-accordion-");multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",E]},exportAs:["cdkAccordion"],features:[H([{provide:Me,useExisting:t}]),K]})}return t})(),ht=(()=>{class t{accordion=d(Me,{optional:!0,skipSelf:!0});_changeDetectorRef=d(ne);_expansionDispatcher=d(ae);_openCloseAllSubscription=B.EMPTY;closed=new b;opened=new b;destroyed=new b;expandedChange=new b;id=d(z).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let i=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,i)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=v(!1);_removeUniqueSelectionListener=()=>{};constructor(){}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,i)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===i&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",E],disabled:[2,"disabled","disabled",E]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[H([{provide:Me,useValue:void 0}])]})}return t})(),xt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Z({type:t});static \u0275inj=U({})}return t})();var kt=["body"],Dt=["bodyWrapper"],At=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],qt=["mat-expansion-panel-header","*","mat-action-row"];function Ft(t,n){}var Rt=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Nt=["mat-panel-title","mat-panel-description","*"];function Lt(t,n){t&1&&(X(0,"span",1),He(),X(1,"svg",2),ze(2,"path",3),be()())}var Pe=new O("MAT_ACCORDION"),bt=new O("MAT_EXPANSION_PANEL"),Gt=(()=>{class t{_template=d(Fe);_expansionPanel=d(bt,{optional:!0});constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["ng-template","matExpansionPanelContent",""]]})}return t})(),_t=new O("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),we=(()=>{class t extends ht{_viewContainerRef=d(Ne);_animationsDisabled=at();_document=d(ke);_ngZone=d(De);_elementRef=d(fe);_renderer=d(Re);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new b;afterCollapse=new b;_inputChanges=new R;accordion=d(Pe,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=d(z).getId("mat-expansion-panel-header-");constructor(){super();let e=d(_t,{optional:!0});this._expansionDispatcher=d(ae),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(ge(null),N(()=>this.expanded&&!this._portal),Ie(1)).subscribe(()=>{this._portal=new lt(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,i=this._body.nativeElement;return e===i||i.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:i})=>{e===this._bodyWrapper?.nativeElement&&i==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=_({type:t,selectors:[["mat-expansion-panel"]],contentQueries:function(i,o,m){if(i&1&&ye(m,Gt,5),i&2){let f;L(f=G())&&(o._lazyContent=f.first)}},viewQuery:function(i,o){if(i&1&&Be(kt,5)(Dt,5),i&2){let m;L(m=G())&&(o._body=m.first),L(m=G())&&(o._bodyWrapper=m.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(i,o){i&2&&S("mat-expanded",o.expanded)("mat-expansion-panel-spacing",o._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",E],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[H([{provide:Pe,useValue:void 0},{provide:bt,useExisting:t}]),he,K],ngContentSelectors:qt,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(i,o){i&1&&(_e(At),w(0),s(1,"div",2,0)(3,"div",3,1)(5,"div",4),w(6,1),h(7,Ft,0,0,"ng-template",5),r(),w(8,2),r()()),i&2&&(a(),$("inert",o.expanded?null:""),a(2),u("id",o.id),$("aria-labelledby",o._headerId),a(4),u("cdkPortalOutlet",o._portal))},dependencies:[ct],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));
  border-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));
  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));
  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2,changeDetection:0})}return t})();var Se=(()=>{class t{panel=d(we,{host:!0});_element=d(fe);_focusMonitor=d(tt);_changeDetectorRef=d(ne);_parentChangeSubscription=B.EMPTY;constructor(){d(Ye).load(st);let e=this.panel,i=d(_t,{optional:!0}),o=d(new Ve("tabindex"),{optional:!0}),m=e.accordion?e.accordion._stateChanges.pipe(N(f=>!!(f.hideToggle||f.togglePosition))):Ee;this.tabIndex=parseInt(o||"")||0,this._parentChangeSubscription=Oe(e.opened,e.closed,m,e._inputChanges.pipe(N(f=>!!(f.hideToggle||f.disabled||f.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(N(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),i&&(this.expandedHeight=i.expandedHeight,this.collapsedHeight=i.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:nt(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,i){e?this._focusMonitor.focusVia(this._element,e,i):this._element.nativeElement.focus(i)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=_({type:t,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(i,o){i&1&&y("click",function(){return o._toggle()})("keydown",function(f){return o._keydown(f)}),i&2&&($("id",o.panel._headerId)("tabindex",o.disabled?-1:o.tabIndex)("aria-controls",o._getPanelId())("aria-expanded",o._isExpanded())("aria-disabled",o.panel.disabled),je("height",o._getHeaderHeight()),S("mat-expanded",o._isExpanded())("mat-expansion-toggle-indicator-after",o._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",o._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ue(e)]},ngContentSelectors:Nt,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(i,o){i&1&&(_e(Rt),X(0,"span",0),w(1),w(2,1),w(3,2),be(),Le(4,Lt,3,0,"span",1)),i&2&&(S("mat-content-hide-toggle",!o._showToggle()),a(4),Ge(o._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));
  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));
  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));
  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));
  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {
  outline: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var yt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return t})(),vt=(()=>{class t extends ft{_keyManager;_ownHeaders=new qe;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(ge(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(i=>i.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new it(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=Ae(t)))(o||t)}})();static \u0275dir=P({type:t,selectors:[["mat-accordion"]],contentQueries:function(i,o,m){if(i&1&&ye(m,Se,5),i&2){let f;L(f=G())&&(o._headers=f)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(i,o){i&2&&S("mat-accordion-multi",o.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",E],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[H([{provide:Pe,useExisting:t}]),he]})}return t})(),Ct=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Z({type:t});static \u0275inj=U({imports:[xt,mt,Ke]})}return t})();function Bt(t,n){if(t&1&&(s(0,"mat-expansion-panel")(1,"mat-expansion-panel-header")(2,"mat-panel-title"),p(3),r()(),s(4,"p",5),p(5),r()()),t&2){let e=n.$implicit;a(3),x(" ",e.question," "),a(2),x(" ",e.answer," ")}}function jt(t,n){t&1&&(s(0,"div",6),p(1),l(2,"translate"),r()),t&2&&(a(),x(" ",c(2,1,"HELP.EMPTY_FAQS")," "))}var ce=class t{faqs=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=_({type:t,selectors:[["app-faq-card"]],inputs:{faqs:"faqs"},decls:11,vars:8,consts:[[1,"help-card"],[1,"section-header"],[1,"faq-accordion"],[4,"ngFor","ngForOf"],["class","empty-state",4,"ngIf"],[1,"faq-answer"],[1,"empty-state"]],template:function(e,i){e&1&&(s(0,"section",0)(1,"div",1)(2,"h2"),p(3),l(4,"translate"),r(),s(5,"p"),p(6),l(7,"translate"),r()(),s(8,"mat-accordion",2),h(9,Bt,6,2,"mat-expansion-panel",3),r(),h(10,jt,3,3,"div",4),r()),e&2&&(a(3),g(c(4,4,"HELP.FAQ_TITLE")),a(3),g(c(7,6,"HELP.FAQ_DESCRIPTION")),a(3),u("ngForOf",i.faqs),a(),u("ngIf",i.faqs.length===0))},dependencies:[C,k,D,Ct,vt,we,Se,yt,M],styles:[".help-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;padding:24px;box-shadow:0 10px 24px #0f172a0f;border:1px solid #e5e7eb}.section-header[_ngcontent-%COMP%]{margin-bottom:18px}.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;color:#0c2340;font-size:1.25rem;font-weight:700}.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:6px 0 0;color:#6b7280;font-size:.92rem}.faq-accordion[_ngcontent-%COMP%]{display:block}.faq-answer[_ngcontent-%COMP%]{color:#4b5563;line-height:1.55;margin:0 0 8px}.empty-state[_ngcontent-%COMP%]{padding:18px;background:#f9fafb;border:1px dashed #d1d5db;border-radius:14px;color:#6b7280;text-align:center}"]})};function Qt(t,n){if(t&1){let e=te();s(0,"button",5),y("click",function(){let o=W(e).$implicit,m=I();return Y(m.onOpenGuide(o))}),s(1,"span",6)(2,"mat-icon"),p(3),r()(),s(4,"span",7)(5,"strong"),p(6),r(),s(7,"small"),p(8),r()(),s(9,"mat-icon",8),p(10,"chevron_right"),r()()}if(t&2){let e=n.$implicit;a(3),g(e.icon),a(3),g(e.title),a(2),g(e.description)}}function Vt(t,n){t&1&&(s(0,"div",9),p(1),l(2,"translate"),r()),t&2&&(a(),x(" ",c(2,1,"HELP.EMPTY_GUIDES")," "))}var me=class t{guides=[];openGuide=new b;onOpenGuide(n){this.openGuide.emit(n)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=_({type:t,selectors:[["app-quick-guides-card"]],inputs:{guides:"guides"},outputs:{openGuide:"openGuide"},decls:11,vars:8,consts:[[1,"help-card"],[1,"section-header"],[1,"guides-list"],["class","guide-item","type","button",3,"click",4,"ngFor","ngForOf"],["class","empty-state",4,"ngIf"],["type","button",1,"guide-item",3,"click"],[1,"guide-icon"],[1,"guide-content"],[1,"arrow-icon"],[1,"empty-state"]],template:function(e,i){e&1&&(s(0,"section",0)(1,"div",1)(2,"h2"),p(3),l(4,"translate"),r(),s(5,"p"),p(6),l(7,"translate"),r()(),s(8,"div",2),h(9,Qt,11,3,"button",3),r(),h(10,Vt,3,3,"div",4),r()),e&2&&(a(3),g(c(4,4,"HELP.QUICK_GUIDES_TITLE")),a(3),g(c(7,6,"HELP.QUICK_GUIDES_DESCRIPTION")),a(3),u("ngForOf",i.guides),a(),u("ngIf",i.guides.length===0))},dependencies:[C,k,D,q,A,M],styles:[".help-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;padding:24px;box-shadow:0 10px 24px #0f172a0f;border:1px solid #e5e7eb}.section-header[_ngcontent-%COMP%]{margin-bottom:18px}.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;color:#0c2340;font-size:1.25rem;font-weight:700}.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:6px 0 0;color:#6b7280;font-size:.92rem}.guides-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.guide-item[_ngcontent-%COMP%]{width:100%;border:1px solid #e5e7eb;background:#fff;border-radius:16px;padding:16px;display:grid;grid-template-columns:44px 1fr 24px;align-items:center;gap:14px;cursor:pointer;text-align:left;transition:.18s ease}.guide-item[_ngcontent-%COMP%]:hover{background:#f9fafb;border-color:#f37048;transform:translateY(-1px)}.guide-icon[_ngcontent-%COMP%]{width:42px;height:42px;border-radius:14px;background:#eff6ff;color:#0c2340;display:inline-flex;align-items:center;justify-content:center}.guide-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.guide-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#111827;font-size:.95rem}.guide-content[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#6b7280;font-size:.82rem}.arrow-icon[_ngcontent-%COMP%]{color:#9ca3af}.empty-state[_ngcontent-%COMP%]{padding:18px;background:#f9fafb;border:1px dashed #d1d5db;border-radius:14px;color:#6b7280;text-align:center}"]})};var ue=class t{store=d(de);router=d(We);searchControl=new Xe("",{nonNullable:!0});ngOnInit(){this.store.loadHelpContent(),this.searchControl.valueChanges.subscribe(n=>{this.store.setSearchTerm(n)})}continueTutorialStep(n){n.route&&this.router.navigate([n.route])}openGuide(n){n.route&&this.router.navigate([n.route])}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=_({type:t,selectors:[["app-help-view"]],decls:32,vars:22,consts:[[1,"help-page"],[1,"help-hero"],[1,"hero-content"],[1,"eyebrow"],[1,"search-box"],["type","text",3,"formControl","placeholder"],[1,"hero-card"],[1,"help-content"],[1,"main-column"],[3,"continueStep","steps"],[3,"faqs"],[1,"side-column"],[3,"openGuide","guides"]],template:function(e,i){e&1&&(s(0,"div",0)(1,"section",1)(2,"div",2)(3,"span",3),p(4),l(5,"translate"),r(),s(6,"h1"),p(7),l(8,"translate"),r(),s(9,"p"),p(10),l(11,"translate"),r(),s(12,"div",4)(13,"mat-icon"),p(14,"search"),r(),xe(15,"input",5),l(16,"translate"),r()(),s(17,"div",6)(18,"mat-icon"),p(19,"support_agent"),r(),s(20,"h2"),p(21),l(22,"translate"),r(),s(23,"p"),p(24),l(25,"translate"),r()()(),s(26,"section",7)(27,"div",8)(28,"app-tutorial-card",9),y("continueStep",function(m){return i.continueTutorialStep(m)}),r(),xe(29,"app-faq-card",10),r(),s(30,"aside",11)(31,"app-quick-guides-card",12),y("openGuide",function(m){return i.openGuide(m)}),r()()()()),e&2&&(a(4),g(c(5,10,"HELP.EYEBROW")),a(3),g(c(8,12,"HELP.TITLE")),a(3),x(" ",c(11,14,"HELP.DESCRIPTION")," "),a(5),u("formControl",i.searchControl)("placeholder",c(16,16,"HELP.SEARCH_PLACEHOLDER")),a(6),g(c(22,18,"HELP.TUTORIAL_TITLE")),a(3),g(c(25,20,"HELP.TUTORIAL_DESCRIPTION")),a(4),u("steps",i.store.tutorialSteps()),a(),u("faqs",i.store.filteredFaqs()),a(2),u("guides",i.store.filteredGuides()))},dependencies:[C,et,Ze,$e,Je,q,A,ot,rt,le,ce,me,M],styles:[".help-page[_ngcontent-%COMP%]{padding:.25rem 1.75rem 2rem;color:#111827}.help-hero[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:24px;margin-bottom:24px}.hero-content[_ngcontent-%COMP%]{background:linear-gradient(135deg,#0c2340,#123d6d);color:#fff;border-radius:24px;padding:34px;box-shadow:0 12px 28px #0c23402e}.eyebrow[_ngcontent-%COMP%]{display:inline-block;background:#ffffff24;padding:6px 12px;border-radius:999px;font-size:.8rem;font-weight:700;margin-bottom:16px}.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:2rem;font-weight:800;letter-spacing:-.03em}.hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:12px 0 24px;color:#dbeafe;max-width:640px;line-height:1.6}.search-box[_ngcontent-%COMP%]{width:100%;max-width:640px;height:54px;background:#fff;border-radius:14px;display:flex;align-items:center;gap:12px;padding:0 18px;box-sizing:border-box}.search-box[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#6b7280}.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;border:none;outline:none;font-size:.95rem;color:#111827;background:transparent;font-family:inherit}.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#9ca3af}.hero-card[_ngcontent-%COMP%]{background:#fff;border-radius:24px;padding:28px;border:1px solid #e5e7eb;box-shadow:0 10px 24px #0f172a0f;display:flex;flex-direction:column;justify-content:center}.hero-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:52px;height:52px;font-size:52px;color:#f37048;margin-bottom:16px}.hero-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;color:#0c2340;font-size:1.35rem;font-weight:800}.hero-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0 0;color:#6b7280;line-height:1.55}.help-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr) 390px;gap:24px;align-items:start}.main-column[_ngcontent-%COMP%], .side-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px}@media(max-width:1100px){.help-hero[_ngcontent-%COMP%], .help-content[_ngcontent-%COMP%]{grid-template-columns:1fr}.hero-card[_ngcontent-%COMP%]{min-height:auto}}@media(max-width:768px){.help-page[_ngcontent-%COMP%]{padding:.25rem 1rem 1.5rem}.hero-content[_ngcontent-%COMP%]{padding:24px;border-radius:20px}.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.55rem}.hero-card[_ngcontent-%COMP%]{padding:22px;border-radius:20px}}"]})};var Oi=[{path:"",component:ue,data:{titleKey:"VIEWS.HELP"}}];export{Oi as AYUDA_ROUTES};
