AUI.add("aui-resize",function(AZ){var AS=AZ.Lang,F=AS.isArray,Au=AS.isBoolean,y=AS.isNumber,Az=AS.isString,Ap=AS.trim,S=AZ.Array.indexOf,AR=".",f=",",c=" ",Ay="absolute",b="active",w="activeHandle",AE="activeHandleEl",j="all",BA="auto",Ad="autoHide",Ak="bottom",Ae="className",t="constrain2node",z="constrain2region",AF="constrain2view",Ai="cursor",Ah="data",Q="diagonal",Aj="dotted",AA="dragging",AT="dragCursor",x="fixed",D="grip",AM="gripsmall",l="handle",v="handles",As="height",AQ="hidden",C="horizontal",AO="icon",i="inner",E="left",u="margin",Y="maxHeight",A0="maxWidth",U="minHeight",AB="minWidth",a="node",n="nodeName",AI="none",q="offsetHeight",Ab="offsetLeft",J="offsetTop",Ax="offsetWidth",H="parentNode",W="position",V="preserveRatio",An="proxy",k="proxyEl",AK="px",O="relative",Aa="resize",Z="resizing",K="right",A4="static",Ao="tickX",Al="tickY",N="top",AX="vertical",r="width",Af="wrap",A2="wrapper",AW="wrapTypes",p="resize:mouseUp",g="resize:resize",s="resize:end",AG="resize:start",AL="t",A3="tr",AN="r",Ar="br",AY="b",Av="bl",AS="l",A5="tl",A9=function(A){return parseFloat(A);},AC=function(A){return(A instanceof AZ.Node);},A6=function(A){return l+A.toUpperCase();},A1=function(){return Array.prototype.slice.call(arguments).join(c);},e=function(A){return AZ.one(A);},AD=AZ.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),m=AZ.ClassNameManager.getClassName,P=m(AO),At=m(AO,AM,Q,Ar),AV=m(AO,D,Aj,C),AH=m(AO,D,Aj,AX),Aq=m(Aa),Ag=m(Aa,l),AP=m(Aa,l,b),I=m(Aa,l,i),o=m(Aa,l,i,"{handle}"),A7=m(Aa,l,"{handle}"),G=m(Aa,AQ,v),h=m(Aa,An),Aw=m(Aa,A2),AU=A1(P,At),Am=A1(P,AV),X=A1(P,AH),Ac='<div class="'+A1(Ag,A7)+'">'+'<div class="'+A1(I,o)+'"></div>'+"</div>",AJ='<div class="'+h+'"></div>',A8='<div class="'+Aw+'"></div>',d=[AL,A3,AN,Ar,AY,Av,AS,A5];var M=AZ.Component.create({NAME:Aa,ATTRS:{activeHandle:{value:null,validator:Az},activeHandleEl:{value:null,validator:AC},autoHide:{value:false,validator:Au},constrain2node:{value:null},constrain2region:{value:null},constrain2view:{value:false},handles:{setter:function(L){var A=this;var B=[];if(F(L)){B=L;}else{if(Az(L)){if(L.toLowerCase()==j){B=d;}else{AZ.each(L.split(f),function(T,R){var BB=Ap(T);if(S(d,BB)>-1){B.push(BB);}});}}}return B;},value:j},minHeight:{value:15,validator:y},minWidth:{value:15,validator:y},maxHeight:{value:Infinity,validator:y},maxWidth:{value:Infinity,validator:y},node:{setter:e},preserveRatio:{value:false,validator:Au},proxy:{value:false,validator:Au},proxyEl:{setter:e,valueFn:function(){return AZ.Node.create(AJ);}},resizing:{value:false,validator:Au},tickX:{value:false},tickY:{value:false},wrap:{setter:function(R){var A=this;var L=A.get(a);var T=L.get(n);var B=A.get(AW);if(B.test(T)){R=true;}return R;},value:false,validator:Au},wrapTypes:{readOnly:true,value:/canvas|textarea|input|select|button|img/i},wrapper:{setter:function(){var A=this;var B=A.get(a);var L=B;if(A.get(Af)){L=AZ.Node.create(A8);B.placeBefore(L);L.append(B);A._copyStyles(B,L);B.setStyles({position:A4,left:0,top:0});}return L;},value:null,writeOnce:true}},EXTENDS:AZ.Base,prototype:{CSS_INNER_HANDLE_MAP:{r:X,l:X,t:Am,b:Am,br:AU},info:null,originalInfo:null,initializer:function(){var A=this;A.info={};A.originalInfo={};A.get(a).addClass(Aq);A.renderer();},renderUI:function(){var A=this;A._renderHandles();A._renderProxy();},bindUI:function(){var A=this;A._createEvents();A._bindResize();A._bindDD();A._bindHandle();},syncUI:function(){var A=this;A._setHideHandlesUI(A.get(Ad));},destructor:function(){var A=this;var B=A.get(a);var L=A.get(A2);AZ.Event.purgeElement(L,true);A.eachHandle(function(T){var R=T.dd;if(R){R.destroy();}T.remove();});if(A.get(Af)){B.setStyles({margin:L.getStyle(u),position:L.getStyle(W)});L.placeBefore(B);L.remove();}B.removeClass(Aq);B.removeClass(G);},renderer:function(){this.renderUI();this.bindUI();this.syncUI();},_bindDD:function(){var A=this;A.on("drag:drag",A._handleResizeEvent);A.on("drag:dropmiss",A._handleMouseUpEvent);A.on("drag:end",A._handleResizeEndEvent);A.on("drag:start",A._handleResizeStartEvent);},_bindHandle:function(){var A=this;var B=A.get(A2);B.on("mouseenter",AZ.bind(A._onWrapperMouseEnter,A));B.on("mouseleave",AZ.bind(A._onWrapperMouseLeave,A));B.delegate("mouseenter",AZ.bind(A._onHandleMouseOver,A),AR+Ag);B.delegate("mouseleave",AZ.bind(A._onHandleMouseOut,A),AR+Ag);},_bindResize:function(){var A=this;A.after(g,A._afterResize);},_createEvents:function(){var A=this;var B=function(L,R){A.publish(L,{defaultFn:R,queuable:false,emitFacade:true,bubbles:true,prefix:Aa});};B(AG,this._defResizeStartFn);B(g,this._defResizeFn);B(s,this._defResizeEndFn);B(p,this._defMouseUpFn);},_renderHandles:function(){var A=this;var B=A.get(A2);A.eachHandle(function(L){B.append(L);});},_renderProxy:function(){var B=this;var A=B.get(k);B.get(A2).get(H).append(A.hide());},eachHandle:function(B){var A=this;AZ.each(A.get(v),function(T,L){var R=A.get(A6(T));B.apply(A,[R,T,L]);});},_buildHandle:function(L){var A=this;var B=AZ.Node.create(AZ.substitute(Ac,{handle:L}));B.one(AR+I).addClass(A.CSS_INNER_HANDLE_MAP[L]);A._setupHandleDD(L,B);return B;},_checkHeight:function(){var BG=this;var L=BG.info;var BE=BG.originalInfo;var BB=BG.get(w);var BF=BG.get(Y);var BI=BG.get(U);var T=/^(tl|t|tr)$/i.test(BB);var BH=(L.height>BF);var BJ=(L.height<BI);if(BH){L.height=BF;if(T){L.top=BE.top+BE.height-BF;}}if(BJ){L.height=BI;if(T){L.top=BE.top+BE.height-BI;}}if(BG.get(t)){var B=BG.get(AE);var BD=B.dd.con;var BC=BD.getRegion();var A=L.nodeY+L.height;var R=BC.bottom;if(A>=R){L.height-=A-R;}}},_checkRatio:function(){var BG=this;var L=BG.info;var BE=BG.originalInfo;var BD=BG.get(w);var BI=BE.width;var B=BE.height;var BF=BE.top;var BJ=BE.left;var BH=function(){return(L.width/BI);};var BB=function(){return(L.height/B);};var T=/^(t|b)$/i;var A=/^(bl|br|l|r|tl|tr)$/i;if(T.test(BD)){L.width=BI*BB();BG._checkWidth();L.height=B*BH();}else{if(A.test(BD)){L.height=B*BH();BG._checkHeight();L.width=BI*BB();}}var R=/^(tl|t|tr)$/i;var BC=/^(tl|l|bl)$/i;if(R.test(BD)){L.top=BF+(B-L.height);
}if(BC.test(BD)){L.left=BJ+(BI-L.width);}},_checkRegion:function(){var A=this;var L=A.get(AE);var BB=L.dd.con;var T=BB.getRegion();var R=A.info;var B={left:R.nodeX,top:R.nodeY,right:R.nodeX+R.width,bottom:R.nodeY+R.height};return AZ.DOM.inRegion(null,T,true,B);},_checkWidth:function(){var BJ=this;var L=BJ.info;var BG=BJ.originalInfo;var BC=BJ.get(w);var BI=BJ.get(A0);var A=BJ.get(AB);var T=/^(tl|l|bl)$/i.test(BC);var R=(L.width>BI);var BB=(L.width<A);if(R){L.width=BI;if(T){L.left=BG.left+BG.width-BI;}}if(BB){L.width=A;if(T){L.left=BG.left+BG.width-A;}}if(BJ.get(t)){var B=BJ.get(AE);var BF=B.dd.con;var BE=BF.getRegion();var BH=L.nodeX+L.width;var BD=BE.right;if(BH>=BD){L.width-=BH-BD;}}},_copyStyles:function(T,BB){var B=this;var A=T.getStyle(W).toLowerCase();if(A==A4){A=O;}var R={position:A};var L={};AZ.each([N,K,Ak,E],function(BD){var BC=u+AD(BD);L[BC]=BB.getStyle(BC);R[BC]=T.getStyle(BC);});BB.setStyles(R);T.setStyles(L);T.setStyles({margin:0});BB.set(q,T.get(q));BB.set(Ax,T.get(Ax));},_extractHandleName:AZ.cached(function(L){var B=L.get(Ae);var A=B.match(new RegExp(m(Aa,l,"(\\w{1,2})\\b")));return A?A[1]:null;}),_getInfo:function(BC,B){var BH=this;var A=BH.get(A2);if(B){var BD=B.dragEvent.target.lastXY;}var BF=BC.getXY();var BG=A9(BC.getStyle(N));var BB=A9(BC.getStyle(E));var R=BC.get(J);var T=BC.get(Ab);var BE=A.getStyle(W);if(BE==O){if(isNaN(BB)){BB=0;}if(isNaN(BG)){BG=0;}}if((BE==Ay)||(BE==x)){if(isNaN(BB)){BB=T;}if(isNaN(BG)){BG=R;}}var BI=BC.get(q);var L=BC.get(Ax);return{left:BB,top:BG,right:BB+L,bottom:BG+BI,offsetLeft:T,offsetTop:R,height:BI,width:L,lastXY:BD,nodeX:BF[0],nodeY:BF[1]};},_recalculateXY:function(){var A=this;var L=A.info;var B=A.originalInfo;L.nodeX=B.nodeX+(L.left-B.left);L.nodeY=B.nodeY+(L.top-B.top);},_resize:function(){var A=this;var R=A.get(w);var BB=A.info;var T=A.originalInfo;var L=BB.lastXY[0]-T.lastXY[0];var B=BB.lastXY[1]-T.lastXY[1];var BC={t:function(){BB.top=T.top+B;BB.height=T.height-B;},r:function(){BB.width=T.width+L;},l:function(){BB.left=T.left+L;BB.width=T.width-L;},b:function(){BB.height=T.height+B;},tr:function(){this.t();this.r();},br:function(){this.b();this.r();},tl:function(){this.t();this.l();},bl:function(){this.b();this.l();}};BC[R](L,B);},_setupHandleDD:function(R,L){var B=this;var A=new AZ.DD.Drag({bubbleTargets:B,clickPixelThresh:0,clickTimeThresh:0,data:{handle:R,node:L},node:L,useShim:true,move:false});A.plug(AZ.Plugin.DDConstrained,{constrain2node:B.get(t),stickX:(R==AN||R==AS),stickY:(R==AL||R==AY),tickX:B.get(Ao),tickY:B.get(Al)});},_syncUI:function(){var A=this;var R=A.info;var T=A.get(A2);var B=A.get(a);var L={top:R.top+AK,left:R.left+AK};T.set(q,R.height);T.set(Ax,R.width);T.setStyles(L);if(!T.compareTo(B)){B.set(q,R.height);B.set(Ax,R.width);}if(AZ.UA.webkit){B.setStyle(Aa,AI);}},_syncProxyUI:function(){var B=this;var R=B.info;var L=B.get(AE);var A=B.get(k);var T=L.getStyle(Ai);A.show().setStyles({cursor:T,height:R.height+AK,width:R.width+AK});L.dd.set(AT,T);A.setXY([R.nodeX,R.nodeY]);},_updateInfo:function(B){var A=this;A.info=A._getInfo(A.get(A2),B);},_setActiveHandlesUI:function(L){var A=this;var B=A.get(AE);if(B){if(L){A.eachHandle(function(R){R.removeClass(AP);});B.addClass(AP);}else{B.removeClass(AP);}}},_setHideHandlesUI:function(B){var A=this;var L=A.get(A2);if(!A.get(Z)){if(B){L.addClass(G);}else{L.removeClass(G);}}},_defMouseUpFn:function(B){var A=this;A.set(Z,false);},_defResizeFn:function(L){var A=this;var B=A.info;A._updateInfo(L);A._resize();A._checkHeight();A._checkWidth();if(A.get(V)){A._checkRatio();}A._recalculateXY();if(A.get(t)){if(!A._checkRegion()){A.info=B;}}},_defResizeEndFn:function(B){var A=this;if(A.get(An)){A._syncProxyUI();A.get(k).hide();}A._syncUI();A.set(w,null);A.set(AE,null);A._setActiveHandlesUI(false);},_defResizeStartFn:function(B){var A=this;A.set(Z,true);A.originalInfo=A._getInfo(A.get(A2),B);A._updateInfo(B);},_afterResize:function(B){var A=this;if(A.get(An)){A._syncProxyUI();}else{A._syncUI();}},_handleMouseUpEvent:function(A){this.fire(p,{dragEvent:A,info:this.info});},_handleResizeEvent:function(A){this.fire(g,{dragEvent:A,info:this.info});},_handleResizeEndEvent:function(A){this.fire(s,{dragEvent:A,info:this.info});},_handleResizeStartEvent:function(A){this.fire(AG,{dragEvent:A,info:this.info});},_onWrapperMouseEnter:function(B){var A=this;if(A.get(Ad)){A._setHideHandlesUI(false);}},_onWrapperMouseLeave:function(B){var A=this;if(A.get(Ad)){A._setHideHandlesUI(true);}},_onHandleMouseOver:function(L){var A=this;var B=L.currentTarget;var R=A._extractHandleName(B);if(!A.get(Z)){A.set(w,R);A.set(AE,B);A._setActiveHandlesUI(true);}},_onHandleMouseOut:function(B){var A=this;if(!A.get(Z)){A._setActiveHandlesUI(false);}}}});AZ.each(d,function(B,A){M.ATTRS[A6(B)]={setter:function(){return this._buildHandle(B);},value:null,writeOnce:true};});AZ.Resize=M;},"@VERSION@",{requires:["aui-base","dd","substitute"],skinnable:true});