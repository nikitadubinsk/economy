"use strict";(self.webpackChunkeconomy=self.webpackChunkeconomy||[]).push([[804],{804:(et,v,a)=>{a.d(v,{Bq:()=>G,FC:()=>$,Mu:()=>X});var d=a(6895),t=a(4650),c=a(4006),_=a(9982),p=a(1054),P=a(9255),g=a(7414),h=a(1195),m=a(8276),C=a(3675),O=a(7846),u=a(117),b=a(9040),x=a(1947),M=a(8487),T=a(9003),y=a(4645),w=a(6966),f=a(9740);const D=["focusableElement"];function z(n,i){1&n&&t.GkF(0)}function E(n,i){if(1&n&&(t.TgZ(0,"div",19),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.AsE(" ",e.value.length,"/",e.maxLength," ")}}function A(n,i){if(1&n&&(t.TgZ(0,"div",20),t.Hsn(1,1),t.qZA()),2&n){const e=t.oxw();t.ekj("t-placeholder_raised",e.placeholderRaised)}}function I(n,i){1&n&&t._UZ(0,"tui-svg",23),2&n&&t.Q6J("src",i.polymorpheusOutlet)}const s=function(n){return{$implicit:n}};function k(n,i){if(1&n&&(t.TgZ(0,"div",21),t.YNc(1,I,1,1,"tui-svg",22),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("polymorpheusOutlet",e.iconLeftContent)("polymorpheusOutletContext",t.VKq(2,s,e.size))}}function F(n,i){1&n&&t._UZ(0,"tui-svg",25),2&n&&t.Q6J("src",i.polymorpheusOutlet)}function W(n,i){if(1&n&&(t.ynx(0),t.YNc(1,F,1,1,"tui-svg",24),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("polymorpheusOutlet",e.controller.customContent)}}function B(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"tui-svg",27),t.NdJ("click.stop",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.onValueChange(""))}),t.qZA()}2&n&&t.Q6J("src",i.polymorpheusOutlet)}function L(n,i){if(1&n&&(t.ynx(0),t.YNc(1,B,1,1,"tui-svg",26),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("polymorpheusOutlet",e.iconCleaner)("polymorpheusOutletContext",t.VKq(2,s,e.size))}}function R(n,i){if(1&n&&t._UZ(0,"tui-tooltip",28),2&n){const e=t.oxw();t.Q6J("content",null==e.hintOptions?null:e.hintOptions.content)("describeId",e.id)}}function J(n,i){1&n&&t._UZ(0,"tui-svg",23),2&n&&t.Q6J("src",i.polymorpheusOutlet)}function Q(n,i){if(1&n&&(t.TgZ(0,"div",29),t.YNc(1,J,1,1,"tui-svg",22),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("polymorpheusOutlet",e.iconContent)("polymorpheusOutletContext",t.VKq(2,s,e.size))}}const S=[[["textarea"]],"*"],U=["textarea","*"];let $=(()=>{class n extends p.M${constructor(e,o,r,l,q,tt){super(e,o),this.isIOS=r,this.mode$=l,this.controller=q,this.hintOptions=tt,this.rows=20,this.maxLength=null,this.expandable=!1}get labelOutside(){return this.controller.labelOutside}get nativeFocusableElement(){var e,o;return this.computedDisabled?null:(null===(e=this.textfield)||void 0===e?void 0:e.nativeElement)||(null===(o=this.focusableElement)||void 0===o?void 0:o.nativeElement)||null}get focused(){return(0,P.V8)(this.nativeFocusableElement)}get appearance(){return this.controller.appearance}get size(){return this.controller.size}get borderStart(){return this.iconLeftContent?u.iQ[this.size]:0}get borderEnd(){return(0,b._X)(!!this.iconContent,this.hasCleaner,this.hasTooltip,this.hasCustomContent,this.size)}get hasCleaner(){return this.controller.cleaner&&this.hasValue&&this.interactive}get hasTooltip(){var e;return!(null===(e=this.hintOptions)||void 0===e||!e.content)&&(this.controller.options.hintOnDisabled||!this.computedDisabled)}get hasValue(){return""!==this.value}get hasCounter(){return!!this.maxLength&&this.interactive}get hasPlaceholder(){return this.placeholderRaisable||!this.hasValue&&!this.hasExampleText}get hasCustomContent(){return!!this.controller.customContent}get iconLeftContent(){return this.controller.iconLeft}get iconContent(){return this.controller.icon}get iconCleaner(){return this.controller.options.iconCleaner}get hasExampleText(){var e;return!(null===(e=this.textfield)||void 0===e||!e.nativeElement.placeholder)&&this.focused&&!this.hasValue&&!this.readOnly}get computeMaxHeight(){return this.expandable?this.rows*this.lineHeight:null}get placeholderRaised(){return this.placeholderRaisable&&(this.computedFocused&&!this.readOnly||this.hasValue)}get fittedContent(){return this.value.slice(0,this.maxLength||1/0)}get extraContent(){return this.value.slice(this.maxLength||1/0)}onFocused(e){this.updateFocused(e)}onValueChange(e){this.value=e}onMouseDown(e){e.target!==this.nativeFocusableElement&&(e.preventDefault(),this.nativeFocusableElement&&this.nativeFocusableElement.focus())}getFallbackValue(){return""}get lineHeight(){return"m"===this.controller.size?20:24}get placeholderRaisable(){return"s"!==this.size&&!this.controller.labelOutside}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.a5,10),t.Y36(t.sBO),t.Y36(g.FA),t.Y36(x.Au),t.Y36(M.Cs),t.Y36(T.bZ,8))},n.\u0275cmp=t.Xpm({type:n,selectors:[["tui-textarea"]],contentQueries:function(e,o,r){if(1&e&&t.Suo(r,u.MB,5,t.SBq),2&e){let l;t.iGM(l=t.CRH())&&(o.textfield=l.first)}},viewQuery:function(e,o){if(1&e&&t.Gf(D,5),2&e){let r;t.iGM(r=t.CRH())&&(o.focusableElement=r.first)}},hostVars:17,hostBindings:function(e,o){1&e&&t.NdJ("$.data-mode.attr",function(){return o.mode$})("focusin",function(){return o.onFocused(!0)})("focusout",function(){return o.onFocused(!1)}),2&e&&(t.uIk("data-size",o.size),t.Udp("--border-start",o.borderStart,"rem")("--border-end",o.borderEnd,"rem"),t.ekj("_ios",o.isIOS)("_expandable",o.expandable)("_label-outside",o.labelOutside)("_has-tooltip",o.hasTooltip)("_has-value",o.hasValue)("_has-counter",o.hasCounter))},inputs:{rows:"rows",maxLength:"maxLength",expandable:"expandable"},features:[t._Bn([(0,g.FT)(n),(0,p.wB)(n),M.Y0,y.CV]),t.qOj],ngContentSelectors:U,decls:23,vars:25,consts:[[4,"ngIf"],["automation-id","tui-text-area__wrapper","tuiWrapper","",1,"t-outline",3,"appearance","disabled","focus","hover","invalid","readOnly"],["automation-id","tui-text-area__counter","class","t-counter",4,"ngIf"],[1,"t-content",3,"mousedown"],[1,"t-wrapper"],["automation-id","tui-text-area__placeholder","class","t-placeholder",3,"t-placeholder_raised",4,"ngIf"],["automation-id","tui-text-area__scrollbar",1,"t-box"],[1,"t-input-wrapper"],[1,"t-relative"],["aria-hidden","true",1,"t-pseudo-content"],[3,"textContent"],[1,"t-pseudo-content__extra",3,"textContent"],[1,"t-caret"],["automation-id","tui-text-area__native",1,"t-input",3,"disabled","id","readOnly","tuiFocusable","ngModel","ngModelChange"],["focusableElement",""],[1,"t-icons"],["class","t-icon t-icon_left t-textfield-icon",4,"ngIf"],["automation-id","tui-text-area__tooltip",3,"content","describeId",4,"ngIf"],["class","t-icon t-textfield-icon",4,"ngIf"],["automation-id","tui-text-area__counter",1,"t-counter"],["automation-id","tui-text-area__placeholder",1,"t-placeholder"],[1,"t-icon","t-icon_left","t-textfield-icon"],["appearance","icon","tuiWrapper","",3,"src",4,"polymorpheusOutlet","polymorpheusOutletContext"],["appearance","icon","tuiWrapper","",3,"src"],[3,"src",4,"polymorpheusOutlet"],[3,"src"],["appearance","icon","tuiWrapper","","class","t-cleaner",3,"src","click.stop",4,"polymorpheusOutlet","polymorpheusOutletContext"],["appearance","icon","tuiWrapper","",1,"t-cleaner",3,"src","click.stop"],["automation-id","tui-text-area__tooltip",3,"content","describeId"],[1,"t-icon","t-textfield-icon"]],template:function(e,o){1&e&&(t.F$t(S),t.YNc(0,z,1,0,"ng-container",0),t.ALo(1,"async"),t.TgZ(2,"div",1),t.YNc(3,E,2,2,"div",2),t.TgZ(4,"label",3),t.NdJ("mousedown",function(l){return o.onMouseDown(l)}),t.TgZ(5,"div",4),t.YNc(6,A,2,2,"div",5),t.TgZ(7,"tui-scrollbar",6)(8,"div",7)(9,"div",8)(10,"div",9),t._UZ(11,"span",10)(12,"span",11)(13,"span",12),t.qZA(),t.TgZ(14,"textarea",13,14),t.NdJ("ngModelChange",function(l){return o.value=l}),t.qZA(),t.Hsn(16),t.qZA()()()(),t.TgZ(17,"div",15),t.YNc(18,k,2,4,"div",16),t.YNc(19,W,2,1,"ng-container",0),t.YNc(20,L,2,4,"ng-container",0),t.YNc(21,R,1,2,"tui-tooltip",17),t.YNc(22,Q,2,4,"div",18),t.qZA()()()),2&e&&(t.Q6J("ngIf",t.lcZ(1,23,null==o.hintOptions?null:o.hintOptions.change$)),t.xp6(2),t.Q6J("appearance",o.appearance)("disabled",o.disabled)("focus",o.computedFocused)("hover",o.pseudoHover)("invalid",o.computedInvalid)("readOnly",o.readOnly),t.xp6(1),t.Q6J("ngIf",o.hasCounter),t.xp6(3),t.Q6J("ngIf",o.hasPlaceholder),t.xp6(1),t.Udp("max-height",o.computeMaxHeight,"px"),t.xp6(4),t.Q6J("textContent",o.fittedContent||(null==o.nativeFocusableElement?null:o.nativeFocusableElement.placeholder)),t.xp6(1),t.Q6J("textContent",o.extraContent),t.xp6(2),t.Q6J("disabled",o.computedDisabled)("id",o.id)("readOnly",o.readOnly)("tuiFocusable",o.computedFocusable)("ngModel",o.value),t.xp6(4),t.Q6J("ngIf",o.iconLeftContent),t.xp6(1),t.Q6J("ngIf",o.hasCustomContent),t.xp6(1),t.Q6J("ngIf",o.hasCleaner),t.xp6(1),t.Q6J("ngIf",o.hasTooltip),t.xp6(1),t.Q6J("ngIf",o.iconContent))},dependencies:[h.IB,m.PN,C.w,d.O5,O.o,c.Fj,_.t,c.JJ,c.On,f.Li,d.Ov],styles:["[_nghost-%COMP%]{position:relative;z-index:0;display:flex;flex-direction:column;min-height:var(--tui-textarea-height);border-radius:var(--tui-radius-m);color:var(--tui-text-01)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-size=s][_nghost-%COMP%]{--tui-height: var(--tui-height-s);--tui-textarea-height: 4.5625rem;font:var(--tui-font-text-s)}[data-size=m][_nghost-%COMP%]{--tui-height: var(--tui-height-m);--tui-textarea-height: 5.5rem;font:var(--tui-font-text-s)}[data-size=l][_nghost-%COMP%]{--tui-height: var(--tui-height-l);--tui-textarea-height: 6.75rem;font:var(--tui-font-text-m)}[data-size=m]._has-counter[_nghost-%COMP%]{--tui-textarea-height: 6.625rem}[data-size=l]._has-counter[_nghost-%COMP%]{--tui-textarea-height: 7.875rem}.t-outline[_ngcontent-%COMP%]{min-height:inherit}.t-content[_ngcontent-%COMP%]{display:block;margin-top:0;margin-bottom:0;min-height:inherit;box-sizing:border-box;overflow:hidden;cursor:text}._disabled[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{cursor:auto;opacity:var(--tui-disabled-opacity)}[_nghost-%COMP%]:not(._expandable)   .t-content[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:1px;right:0;min-height:auto}._has-counter[_nghost-%COMP%]:not(._expandable)   .t-content[_ngcontent-%COMP%]{bottom:1.6875rem}._label-outside._has-counter[_nghost-%COMP%]:not(._expandable)   .t-content[_ngcontent-%COMP%]{bottom:1rem}.t-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;min-height:inherit;box-sizing:border-box;padding:calc((var(--tui-height) - 1.25rem) / 2) 0}[data-size=l]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 1.5rem) / 2) 0}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 2.25rem) / 2) 0}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 2.625rem) / 2) 0}table[data-size=m]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%], table   [data-size=m]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding-bottom:.75rem}table[data-size=l]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%], table   [data-size=l]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding-bottom:1rem}.t-input-wrapper[_ngcontent-%COMP%]{min-height:inherit;width:100%;flex:1}.t-relative[_ngcontent-%COMP%]{position:relative;min-height:inherit}.t-box[_ngcontent-%COMP%]{display:flex;min-height:calc(100% - 1rem);width:100%}[_nghost-%COMP%]:not(._expandable)   .t-box[_ngcontent-%COMP%]{height:calc(100% - 1rem)}[_nghost-%COMP%]:not(._expandable)._label-outside   .t-box[_ngcontent-%COMP%]{height:100%}._has-counter._expandable[_nghost-%COMP%]   .t-box[_ngcontent-%COMP%]{margin-bottom:1.25rem}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-box[_ngcontent-%COMP%]{border-top:1rem solid transparent}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-box[_ngcontent-%COMP%]{border-top:1.25rem solid transparent}.t-pseudo-content[_ngcontent-%COMP%]{white-space:pre-wrap;word-wrap:break-word;pointer-events:none;color:transparent;overflow:hidden;border:solid transparent;border-top:0;border-bottom:0;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0)}[data-size=s][_nghost-%COMP%]   .t-pseudo-content[_ngcontent-%COMP%], [data-size=m][_nghost-%COMP%]   .t-pseudo-content[_ngcontent-%COMP%]{padding:0 .75rem}[data-size=l][_nghost-%COMP%]   .t-pseudo-content[_ngcontent-%COMP%]{padding:0 1rem}.t-pseudo-content__extra[_ngcontent-%COMP%]{background-color:var(--tui-error-bg-night)}.t-input[_ngcontent-%COMP%]{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;-webkit-appearance:none;-moz-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;width:100%;height:100%;box-sizing:border-box;resize:none;overflow:hidden;outline:none;border-style:solid;border-color:transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0)}.t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-input[_ngcontent-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01)!important;border-color:var(--tui-autofill);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill) inset!important}.t-input[_ngcontent-%COMP%]:not(:last-of-type){display:none}.t-input[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-03);opacity:0}[data-mode=onDark][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-03-night)}._focused[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]:not(:-moz-read-only)::placeholder{opacity:1}._focused[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]:not(:read-only)::placeholder{opacity:1}[data-size=s][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], [data-size=m][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{padding:0 .75rem}[data-size=l][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{padding:0 1rem}[data-mode=onDark]._disabled[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{color:var(--tui-text-03-night)}@supports (-webkit-marquee-repetition: infinite) and (object-fit: fill){._ios[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{padding-left:.8125rem}}.t-placeholder[_ngcontent-%COMP%]{transition-property:transform,font-size,color,letter-spacing;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;width:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;font:var(--tui-font-text-s);color:var(--tui-text-02);pointer-events:none;will-change:transform;transform:translateY(0);position:absolute;top:calc(var(--tui-height) / 2 - .625rem);left:0;max-width:100%;border:solid transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0);box-sizing:border-box}@supports (-webkit-hyphens: none){.t-placeholder[_ngcontent-%COMP%]{will-change:unset;transition-property:transform,color,letter-spacing}}.t-placeholder_raised[_ngcontent-%COMP%]{transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font:var(--tui-font-text-xs);line-height:1.25rem;transform:translateY(-.5rem);letter-spacing:.025rem}._invalid[_nghost-%COMP%]:not(._focused)   .t-placeholder_raised[_ngcontent-%COMP%], ._invalid[_nghost-%COMP%]:not(._focused):hover   .t-placeholder_raised[_ngcontent-%COMP%]{color:var(--tui-error-fill)}._invalid[_nghost-%COMP%]:not(._focused)   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%], ._invalid[_nghost-%COMP%]:not(._focused):hover   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{color:var(--tui-error-fill-night)}._focused[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=m]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-03)}[data-size=l][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font:var(--tui-font-text-m);line-height:1.25rem}[data-size=l][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font-size:.8156rem}[data-size=m]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-01)}[tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-02-night)}[data-size=m]._focused[_nghost-%COMP%]:not(._label-outside)   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused[_nghost-%COMP%]:not(._label-outside)   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}._focused[_nghost-%COMP%]   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=m]._focused._label-outside[_nghost-%COMP%]   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused._label-outside[_nghost-%COMP%]   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-02-night)}[data-size=s][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{padding:0 .75rem}[data-size=m][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{padding:0 .75rem}[data-size=l][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{padding:0 1rem}._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{overflow:initial;height:auto;white-space:initial}.t-icons[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;right:0;display:flex;justify-content:flex-end;pointer-events:none;padding:calc((var(--tui-height) - 1.5rem) / 2) 1rem}[data-size=m][_nghost-%COMP%]   .t-icons[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 1.5rem) / 2) .625rem}.t-icons[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){-webkit-margin-start:.25rem;margin-inline-start:.25rem}.t-icon[_ngcontent-%COMP%]{position:relative;display:flex;width:1.5rem;height:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none}.t-icon_left[_ngcontent-%COMP%]{-webkit-margin-end:auto;margin-inline-end:auto}.t-cleaner[_ngcontent-%COMP%]{position:relative;display:flex;width:1.5rem;height:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none;pointer-events:auto}._readonly[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%], ._disabled[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%]{pointer-events:none}.t-caret[_ngcontent-%COMP%]{display:inline-block;height:1rem;width:0}.t-counter[_ngcontent-%COMP%]{position:absolute;right:.75rem;bottom:.5rem;font:var(--tui-font-text-s);pointer-events:none;margin-top:auto;text-align:right;color:var(--tui-text-03)}[data-mode=onDark][_nghost-%COMP%]   .t-counter[_ngcontent-%COMP%]{color:var(--tui-text-03-night)}"],changeDetection:0}),n})(),G=(()=>{class n extends w.D1{onValueChange(e){this.host.onValueChange(e)}}return n.\u0275fac=function(){let i;return function(o){return(i||(i=t.n5z(n)))(o||n)}}(),n.\u0275dir=t.lG2({type:n,selectors:[["tui-textarea"]],features:[t._Bn([(0,x.cp)(n)]),t.qOj]}),n})(),X=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[d.ez,c.u5,_.u,h.Jy,C.Q,O.W,m.EI,u.KW,f.wq]]}),n})()}}]);