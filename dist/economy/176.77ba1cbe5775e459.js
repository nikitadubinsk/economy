"use strict";(self.webpackChunkeconomy=self.webpackChunkeconomy||[]).push([[176],{2176:(Y,T,c)=>{c.d(T,{r:()=>H,i:()=>G});var t=c(4650),g=c(3422),m=c(8459),p=c(4227),w=c(1054),C=c(8535),y=c(9255),h=c(1225),f=c(7414),x=c(9367),l=c(9741),P=c(2302),I=c(1947),E=c(2970),L=c(8896),M=c(4850),_=c(6895),b=c(9740);const A=["element"];function O(i,s){if(1&i&&(t.ynx(0),t._uU(1),t.BQk()),2&i){const n=s.polymorpheusOutlet;t.xp6(1),t.hij(" ",n," ")}}const F=function(i){return{$implicit:i}};function N(i,s){if(1&i){const n=t.EpF();t.TgZ(0,"button",9,10),t.NdJ("click",function(){t.CHM(n);const o=t.oxw().tuiLet,a=t.oxw(4);return t.KtG(a.onElementClick(o))})("keydown.arrowLeft.prevent",function(){t.CHM(n);const o=t.MAs(1),a=t.oxw(5);return t.KtG(a.onElementKeyDownArrowLeft(o))})("keydown.arrowRight.prevent",function(){t.CHM(n);const o=t.MAs(1),a=t.oxw(5);return t.KtG(a.onElementKeyDownArrowRight(o))}),t.YNc(2,O,2,1,"ng-container",11),t.qZA()}if(2&i){const n=t.oxw().tuiLet,e=t.oxw(4);t.Q6J("appearance",e.getElementMode(n))("disabled",e.disabled)("focusable",e.elementIsFocusable(n))("size",e.buttonSize),t.xp6(2),t.Q6J("polymorpheusOutlet",e.content||n+1)("polymorpheusOutletContext",t.VKq(6,F,n))}}function D(i,s){if(1&i&&(t.ynx(0),t.YNc(1,N,3,8,"button",8),t.BQk()),2&i){const n=s.tuiLet;t.oxw(4);const e=t.MAs(5);t.xp6(1),t.Q6J("ngIf",null!==n)("ngIfElse",e)}}function R(i,s){if(1&i&&(t.ynx(0),t.YNc(1,D,2,2,"ng-container",7),t.BQk()),2&i){const n=s.$implicit,e=t.oxw(3);t.xp6(1),t.Q6J("tuiLet",e.getItemIndexByElementIndex(n))}}function K(i,s){if(1&i){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",5),t.NdJ("click",function(){t.CHM(n);const o=t.oxw(2);return t.KtG(o.onArrowClick("left"))})("mousedown.silent.prevent",function(){return 0}),t.qZA(),t.YNc(2,R,2,1,"ng-container",6),t.TgZ(3,"button",5),t.NdJ("click",function(){t.CHM(n);const o=t.oxw(2);return t.KtG(o.onArrowClick("right"))})("mousedown.silent.prevent",function(){return 0}),t.qZA(),t.BQk()}if(2&i){const n=s.ngIf,e=t.oxw(2);t.xp6(1),t.Q6J("disabled",e.arrowIsDisabledLeft)("focusable",!1)("icon",e.icons.decrement)("size",e.buttonSize)("title",n[0]),t.xp6(1),t.Q6J("tuiRepeatTimesOf",e.elementsLength),t.xp6(1),t.Q6J("disabled",e.arrowIsDisabledRight)("focusable",!1)("icon",e.icons.increment)("size",e.buttonSize)("title",n[1])}}function z(i,s){if(1&i&&(t.ynx(0),t.YNc(1,K,4,11,"ng-container",4),t.ALo(2,"async"),t.BQk()),2&i){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,n.texts$))}}function S(i,s){if(1&i){const n=t.EpF();t.TgZ(0,"button",13,10),t.NdJ("click",function(){const a=t.CHM(n).$implicit,r=t.oxw(2);return t.KtG(r.onElementClick(a))})("keydown.arrowLeft.prevent",function(){t.CHM(n);const o=t.MAs(1),a=t.oxw(2);return t.KtG(a.onElementKeyDownArrowLeft(o))})("keydown.arrowRight.prevent",function(){t.CHM(n);const o=t.MAs(1),a=t.oxw(2);return t.KtG(a.onElementKeyDownArrowRight(o))}),t.ALo(2,"async"),t.qZA()}if(2&i){const n=s.$implicit,e=t.oxw(2);t.ekj("t-button_active",n===e.index),t.Q6J("appearance",e.getSmallElementMode(n,t.lcZ(2,5,e.mode$)))("disabled",e.disabled)("focusable",e.elementIsFocusable(n))}}function B(i,s){if(1&i&&t.YNc(0,S,3,7,"button",12),2&i){const n=t.oxw();t.Q6J("tuiRepeatTimesOf",n.length)}}function Z(i,s){1&i&&t._UZ(0,"div",14)}let H=(()=>{class i extends w.Xn{constructor(n,e,o,a){super(),this.el=n,this.modeDirective=e,this.texts$=o,this.icons=a,this.els=C.Mm,this.length=1,this.size="l",this.disabled=!1,this.activePadding=1,this.sidePadding=1,this.index=0,this.indexChange=new t.vpe,this.mode$=this.modeDirective?this.modeDirective.change$.pipe((0,M.U)(()=>{var r;return(null===(r=this.modeDirective)||void 0===r?void 0:r.mode)||null})):L.E}get nativeFocusableElement(){var n,e;if(this.disabled)return null;let o=0;const{elementsLength:a}=this;for(let r=0;r<a;r++){const u=this.getItemIndexByElementIndex(r);if(u&&o++,u===this.index)break}return null!==(e=null===(n=this.els.find((r,u)=>u===o))||void 0===n?void 0:n.nativeFocusableElement)&&void 0!==e?e:null}get focused(){return(0,y.zb)(this.el.nativeElement)}get elementsLength(){return this.itemsFit?this.length:this.maxElementsLength}get buttonSize(){return"m"===this.size?"xs":"s"}get arrowIsDisabledLeft(){return 0===this.index}get arrowIsDisabledRight(){return 0===this.reverseIndex}elementIsFocusable(n){return this.index===n&&!this.focused}getItemIndexByElementIndex(n){if("s"===this.size||n<this.sidePadding)return n;if(n===this.sidePadding&&this.hasCollapsedItems(this.index))return null;const e=this.lastElementIndex-n;return e===this.sidePadding&&this.hasCollapsedItems(this.reverseIndex)?null:e<this.sidePadding?this.lastIndex-e:(0,h.Ki)(this.index-this.maxHalfLength+n,n,this.lastIndex-e)}getElementMode(n){return this.index===n?l.Nm.Primary:l.Nm.Flat}getSmallElementMode(n,e){return this.index===n&&"onLight"!==e?l.Nm.Primary:l.Nm.Secondary}onElementClick(n){this.updateIndex(n)}onElementKeyDownArrowLeft(n){if(n===this.els.first)return;const e=this.els.find((o,a,r)=>r[a+1]===n);e?.nativeFocusableElement&&e.nativeFocusableElement.focus()}onElementKeyDownArrowRight(n){if(n===this.els.last)return;const e=this.els.find((o,a,r)=>r[a-1]===n);e?.nativeFocusableElement&&e.nativeFocusableElement.focus()}onArrowClick(n){this.tryChangeTo(n),this.focusActive()}onActiveZone(n){this.updateFocused(n)}get reverseIndex(){return this.lastIndex-this.index}get maxHalfLength(){return this.sidePadding+1+this.activePadding}get itemsFit(){return this.length<=this.maxElementsLength}get maxElementsLength(){return 2*this.maxHalfLength+1}get lastIndex(){return this.length-1}get lastElementIndex(){return this.elementsLength-1}hasCollapsedItems(n){return!this.itemsFit&&n>this.maxHalfLength}tryChangeTo(n){this.updateIndex((0,h.Ki)(this.index+function k(i){switch(i){case"left":return-1;case"right":return 1}}(n),0,this.lastIndex))}focusActive(){const{nativeFocusableElement:n}=this;n&&n.focus()}updateIndex(n){this.index!==n&&(this.index=n,this.indexChange.emit(n))}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(t.SBq),t.Y36(P.w,8),t.Y36(E.yI),t.Y36(I.oC))},i.\u0275cmp=t.Xpm({type:i,selectors:[["tui-pagination"]],viewQuery:function(n,e){if(1&n&&t.Gf(A,5,f.KZ),2&n){let o;t.iGM(o=t.CRH())&&(e.els=o)}},inputs:{length:"length",size:"size",disabled:"disabled",activePadding:"activePadding",sidePadding:"sidePadding",content:"content",index:"index"},outputs:{indexChange:"indexChange"},features:[t._Bn([(0,f.FT)(i)]),t.qOj],decls:6,vars:2,consts:[[1,"t-content",3,"tuiActiveZoneChange"],[4,"ngIf","ngIfElse"],["smallButtons",""],["dotsTemplate",""],[4,"ngIf"],["appearance","flat","tuiIconButton","","type","button",1,"t-button",3,"disabled","focusable","icon","size","title","click","mousedown.silent.prevent"],[4,"tuiRepeatTimes","tuiRepeatTimesOf"],[4,"tuiLet"],["automation-id","tui-pagination__element","shape","square","tuiButton","","type","button","class","t-button",3,"appearance","disabled","focusable","size","click","keydown.arrowLeft.prevent","keydown.arrowRight.prevent",4,"ngIf","ngIfElse"],["automation-id","tui-pagination__element","shape","square","tuiButton","","type","button",1,"t-button",3,"appearance","disabled","focusable","size","click","keydown.arrowLeft.prevent","keydown.arrowRight.prevent"],["element",""],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["shape","square","tuiButton","","type","button","class","t-button t-button_small",3,"appearance","t-button_active","disabled","focusable","click","keydown.arrowLeft.prevent","keydown.arrowRight.prevent",4,"tuiRepeatTimes","tuiRepeatTimesOf"],["shape","square","tuiButton","","type","button",1,"t-button","t-button_small",3,"appearance","disabled","focusable","click","keydown.arrowLeft.prevent","keydown.arrowRight.prevent"],["automation-id","tui-pagination__element",1,"t-dots"]],template:function(n,e){if(1&n&&(t.TgZ(0,"div",0),t.NdJ("tuiActiveZoneChange",function(a){return e.onActiveZone(a)}),t.YNc(1,z,3,3,"ng-container",1),t.YNc(2,B,1,1,"ng-template",null,2,t.W1O),t.YNc(4,Z,1,0,"ng-template",null,3,t.W1O),t.qZA()),2&n){const o=t.MAs(3);t.xp6(1),t.Q6J("ngIf","s"!==e.size)("ngIfElse",o)}},dependencies:[x.v0,g.e,_.O5,m.Xj,p.Ls,b.Li,_.Ov],styles:['[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);display:block;text-align:center}.t-content[_ngcontent-%COMP%]{display:flex;justify-content:center}.t-button[_ngcontent-%COMP%]{margin:0 .125rem;flex-shrink:0}.t-button_active[_ngcontent-%COMP%]{background:currentColor}.t-button.t-button.t-button_small[_ngcontent-%COMP%]{width:.5rem;height:.5rem;margin:0}.t-button.t-button.t-button_small[_ngcontent-%COMP%]:not(:first-child){margin-left:.5rem}.t-dots[_ngcontent-%COMP%]{width:var(--tui-height-s);height:var(--tui-height-s);line-height:var(--tui-height-s);margin:0 .125rem;flex-shrink:0;color:var(--tui-text-03);text-align:center;cursor:default}.t-dots[_ngcontent-%COMP%]:before{content:"\\2026"}'],changeDetection:0}),i})(),G=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[_.ez,b.wq,m.Ih,p.WD,g.A,x.fN]]}),i})()}}]);