AUI.add("aui-diagram-builder-base",function(ai){var X=ai.Lang,d=X.isArray,ax=X.isBoolean,O=X.isNumber,F=X.isObject,aB=X.isString,M=function(A){return(A instanceof ai.ArrayList);},V=function(A){return(A instanceof ai.Node);},H=function(A){return(A instanceof ai.AvailableField);},aK=ai.Array,Y="add",o="addNode",aJ="auto",P="availableField",T="availableFields",aG="availableFieldsDragConfig",v="boundingBox",aD="builder",ac="cancel",af="canvas",az="clearfix",f="column",a="container",ag="content",y="contentBox",e="contentContainer",S="contentNode",I="createDocumentFragment",D="diagram",ao="diagram-builder",ad="disk",r="draggable",aF="drop",ar="dropConfig",ab="dropContainer",aw="field",w="fields",q="fieldsContainer",av="height",s="helper",aa="icon",z="iconClass",aq="id",am="label",x="layout",ap="list",R="maxFields",u="node",g="parentNode",ah="propertyList",aE="rendered",at="save",t="settings",Q="tab",K="tabView",b="tabs",h="tabview",N="toolbar",m="toolbarContainer",C=ai.getClassName,aI=" ",i=".",j="#",aI=" ",E="_",n=C(f),B=C(D,aD,af),aj=C(D,aD,ag,a),G=C(D,aD,aF,a),ay=C(D,aD,aw),l=C(D,aD,aw,r),c=C(D,aD,aw,aa),ae=C(D,aD,aw,am),Z=C(D,aD,w,a),ak=C(D,aD,Q,Y),L=C(D,aD,Q,t),au=C(D,aD,b),U=C(D,aD,b,ag),an=C(D,aD,N,a),al=C(s,az),p=C(aa),J=C(x),aC=C(h,ag),aH=C(h,ap);var k=ai.Component.create({NAME:P,ATTRS:{draggable:{value:true,validator:ax},label:{validator:aB},iconClass:{validator:aB},id:{value:ai.guid(),setter:"_setId",validator:aB},node:{valueFn:function(aL){var A=this;if(!V(aL)){aL=ai.Node.create(ai.Lang.sub(A.FIELD_ITEM_TEMPLATE,{iconClass:A.get(z)}));aL.setData(P,A);}return aL;},validator:V,writeOnce:true},type:{value:u,validator:aB}},EXTENDS:ai.Base,buildNodeId:function(A){return T+E+aw+E+A;},getAvailableFieldById:function(A){return ai.AvailableField.getAvailableFieldByNode(j+ai.AvailableField.buildNodeId(A));},getAvailableFieldByNode:function(A){var A=ai.one(A);if(V(ai.one(A))){return A.getData(P);}return null;},prototype:{FIELD_ITEM_TEMPLATE:'<li class="'+ay+'">'+'<span class="'+[p,c].join(aI)+' {iconClass}"></span>'+'<div class="'+ae+'"></div>'+"</li>",initializer:function(){var A=this;var aL=A.get(u);A.after({draggableChange:A._afterDraggableChange,idChange:A._afterIdChange,labelChange:A._afterLabelChange});A.labelNode=aL.one(i+ae);A._uiSetDraggable(A.get(r));A._uiSetId(A.get(aq));A._uiSetLabel(A.get(am));},_afterDraggableChange:function(aL){var A=this;A._uiSetDraggable(aL.newVal);},_afterIdChange:function(aL){var A=this;A._uiSetId(aL.newVal);},_afterLabelChange:function(aL){var A=this;A._uiSetLabel(aL.newVal);},_setId:function(A){return ai.AvailableField.buildNodeId(A);},_uiSetDraggable:function(aL){var A=this;A.get(u).toggleClass(l,aL);},_uiSetId:function(aL){var A=this;A.get(u).set(aq,aL);},_uiSetLabel:function(aL){var A=this;A.labelNode.setContent(aL);}}});ai.AvailableField=k;var W=function(){};W.ATTRS={fields:{value:[],setter:"_setFields",validator:function(A){return d(A)||M(A);}},maxFields:{value:Infinity,validator:O}};ai.mix(W.prototype,{_setFields:function(aL){var A=this;if(M(aL)){return aL;}else{return A.createFields(aL);}},_updateFields:function(aL){var A=this;A.set(w,aL);},addField:function(aM,aL){var A=this;if(A.get(w).size()<A.get(R)){var aN=A.createField(aM);if(aN){A._updateFields(A.get(w).add(aN,aL));}return aN;}return null;},createFields:function(aM){var aL=this;var A=[];aK.each(aM,function(aO,aN){if(aN<aL.get(R)){A.push(aL.createField(aO));}});return new ai.ArrayList(A);},removeField:function(aL){var A=this;A._updateFields(A.get(w).remove(aL));},createField:function(A){return A;}});ai.FieldSupport=W;var aA=ai.Component.create({NAME:ao,ATTRS:{availableFields:{setter:"_setAvailableFields",validator:d},availableFieldsDragConfig:{value:null,setter:"_setAvailableFieldsDragConfig",validator:F},canvas:{valueFn:function(){return ai.Node.create(this.CANVAS_TEMPLATE);}},dropConfig:{value:null,setter:"_setDropConfig",validator:F},contentContainer:{valueFn:function(){return ai.Node.create(this.CONTENT_CONTAINER_TEMPLATE);}},dropContainer:{valueFn:function(){return ai.Node.create(this.DROP_CONTAINER_TEMPLATE);}},fieldsContainer:{valueFn:function(){return ai.Node.create(this.FIELDS_CONTAINER_TEMPLATE);}},propertyList:{setter:"_setPropertyList",validator:F,value:null},strings:{value:{addNode:"Add node",cancel:"Cancel",propertyName:"Property Name",save:"Save",settings:"Settings",value:"Value"}},tabView:{setter:"_setTabView",validator:F,value:null,writeOnce:true},toolbar:{setter:"_setToolbar",validator:F,value:null},toolbarContainer:{valueFn:function(){return ai.Node.create(this.TOOLBAR_CONTAINER_TEMPLATE);}}},HTML_PARSER:{contentContainer:i+aj,dropContainer:i+G,fieldsContainer:i+Z,toolbarContainer:i+an,canvas:i+B},UI_ATTRS:[T,w],AUGMENTS:[ai.FieldSupport],prototype:{CONTENT_CONTAINER_TEMPLATE:'<div class="'+aj+'"></div>',DROP_CONTAINER_TEMPLATE:'<div class="'+G+'"></div>',TOOLBAR_CONTAINER_TEMPLATE:'<div class="'+an+'"></div>',FIELDS_CONTAINER_TEMPLATE:'<ul class="'+[Z,al].join(aI)+'"></ul>',CANVAS_TEMPLATE:'<div tabindex="1" class="'+B+'"></div>',fieldsNode:null,propertyList:null,settingsNode:null,tabView:null,toolbar:null,initializer:function(){var A=this;A.publish({cancel:{defaultFn:A._defCancelFn}});A.after({render:A._afterRender,"recordset:update":A._afterRecordsetUpdate});A.after(A._afterUiSetHeight,A,"_uiSetHeight");A.canvas=A.get(af);A.contentContainer=A.get(e);A.dropContainer=A.get(ab);A.fieldsContainer=A.get(q);A.toolbarContainer=A.get(m);},isAvailableFieldsDrag:function(aM){var A=this;var aL=A.availableFieldsDrag;return(aM===aL.dd);},plotFields:function(){var aL=this;var A=aL.get(w);A.each(function(aM){aL.plotField(aM);});},renderUI:function(){var A=this;A._renderTabs();A._renderCanvas();A._uiSetAvailableFields(A.get(T));},syncUI:function(){var A=this;var aL=A.get(y);A._setupDrop();A._setupAvailableFieldsDrag();aL.addClass(J);},_afterActiveTabChange:function(aM){var A=this;var aL=aM.newVal.get(S);if(A.get(aE)&&(aL===A.settingsNode)){A._renderSettings();}},_afterRecordsetUpdate:function(aL){var A=this;
A._handleSaveEvent();},_afterRender:function(aL){var A=this;A.plotFields();},_afterUiSetHeight:function(aL){var A=this;A.contentContainer.setStyle(av,O(aL)?aL+A.DEF_UNIT:aL);A.dropContainer.setStyle(av,O(aL)?aL+A.DEF_UNIT:aL);},_defCancelFn:function(aL){var A=this;A.tabView.selectTab(0);},_handleCancelEvent:function(){var A=this;A.fire(ac);},_handleSaveEvent:function(){var A=this;A.fire(at);},_renderCanvas:function(){var A=this;var aL=A.get(y);var aM=A.canvas;var aN=A.contentContainer;var aO=A.dropContainer;if(!aM.inDoc()){aN.appendChild(aM);}if(!aO.inDoc()){aM.appendChild(aO);}if(aN.inDoc()){aN.get(g).append(aN);}else{aL.appendChild(aN);}},_renderPropertyList:function(){var A=this;if(!A.propertyList){A.propertyList=new ai.PropertyList(A.get(ah)).render(A.settingsNode);A.propertyList.get(v).unselectable();}},_renderSettings:function(){var A=this;A._renderPropertyList();A._renderToolbar();},_renderTabs:function(){var A=this;if(!A.tabView){var aL=new ai.TabView(A.get(K));aL.get(v);A.tabView=aL;A.fieldsNode=aL.getTab(0).get(S);A.settingsNode=aL.getTab(1).get(S);}},_renderToolbar:function(){var A=this;if(!A.toolbar){A.toolbar=new ai.Toolbar(A.get(N)).render(A.settingsNode);}},_setupDrop:function(){var A=this;A.drop=new ai.DD.Drop(A.get(ar));},_setupAvailableFieldsDrag:function(){var A=this;A.availableFieldsDrag=new ai.DD.Delegate(A.get(aG));},_setAvailableFields:function(aM){var aL=this;var A=[];aK.each(aM,function(aO,aN){A.push(H(aO)?aO:new ai.AvailableField(aO));});return A;},_setDropConfig:function(aL){var A=this;return ai.merge({bubbleTargets:A,groups:[T],node:A.dropContainer},aL||{});},_setAvailableFieldsDragConfig:function(aL){var A=this;return ai.merge({bubbleTargets:A,container:A.get(v),dragConfig:{groups:[T],plugins:[{cfg:{moveOnEnd:false},fn:ai.Plugin.DDProxy}]},nodes:i+l},aL||{});},_setPropertyList:function(aL){var A=this;return ai.merge({bubbleTargets:A,width:250,scroll:{height:400,width:aJ}},aL);},_setTabView:function(aO){var aL=this;var aN=aL.get(v);var aP=aN.one(i+aH);var aM={after:{activeTabChange:ai.bind(aL._afterActiveTabChange,aL)},boundingBox:aN.one(i+au),contentBox:aN.one(i+U),bubbleTargets:aL,contentNode:aN.one(i+aC),cssClass:au,listNode:aP,render:aL.get(y)};if(!aP){var A=aL.getStrings();aM.items=[{cssClass:ak,label:A[o]},{cssClass:L,label:A[t]}];}return ai.merge(aM,aO);},_setToolbar:function(aM){var aL=this;var A=aL.getStrings();return ai.merge({activeState:false,bubbleTargets:aL,children:[{handler:ai.bind(aL._handleCancelEvent,aL),label:A[ac]}]},aM);},_uiSetAvailableFields:function(aN){var A=this;var aM=A.fieldsNode;if(aM){var aL=ai.getDoc().invoke(I);aK.each(aN,function(aO){aL.appendChild(aO.get(u));});aM.setContent(A.fieldsContainer.setContent(aL));}},_uiSetFields:function(aL){var A=this;if(A.get(aE)){A.plotFields();}}}});ai.DiagramBuilderBase=aA;},"@VERSION@",{requires:["aui-tabs","aui-property-list","collection","dd"],skinnable:true});AUI.add("aui-diagram-builder-impl",function(av){var ah=av.Lang,c=ah.isArray,J=ah.isObject,aW=ah.isString,aS=ah.isBoolean,a5=av.Array,aa=function(A){return(A instanceof av.DiagramBuilderBase);},aT=function(A){return(A instanceof av.DiagramNode);},ap=function(A){return(A instanceof av.Anchor);},aA=function(A,a8){var a7=c(a8)?a8:a8.getXY();var a9=c(A)?A:A.getXY();return a5.map(a9,function(bb,ba){return Math.max(0,bb-a7[ba]);});},af="activeElement",ay="addAnchor",aZ="addAnchorMessage",j="addNode",aC="anchor",aw="anchors",ao="anchorsDragConfig",V="availableField",z="backspace",ad="boolean",p="boundingBox",a1="builder",al="cancel",am="canvas",aK="click",aX="closeEvent",G="closeMessage",a0="condition",ar="content",P="controls",aI="controlsToolbar",aH="data",an="dblclick",Z="delete",aF="deleteConnectorsMessage",n="deleteNodesMessage",aO="description",H="diagram",aq="diagram-builder",aB="diagramNode",C="diagram-node",aP="dragNode",D="editEvent",M="editMessage",R="editing",aN="end",a="esc",aR="field",r="fields",az="fieldsDragConfig",au="fork",ab="graphic",aQ="height",q="hover",aJ="id",t="join",T="keydown",at="link",aj="max",W="maxFields",v="maxSources",s="mouseenter",ae="mouseleave",m="name",o="node",aE="p1",aD="p2",d="parentNode",l="pencil",ak="records",k="recordset",h="region",a2="rendered",L="required",aV="selected",K="shuffle",S="source",aU="sources",aG="start",ac="state",i="target",N="targets",E="task",Q="tmpConnector",e="type",O="width",aY="wrapper",y="xy",x="zIndex",a4="-",g=".",U="",f="#",I="_",w=av.getClassName,X=w(H,a1,aC,o,aj,N),ax=w(H,a1,aC,q),aM=w(H,a1,aC,o),F=w(H,a1,aC,o,aY),u=w(H,a1,P),ag=w(H,o),b=w(H,o,ar),aL=w(H,o,R),a3=w(H,o,aV);var ai=function(){var a7="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",A="<br/>";av.all(".aui-diagram-node").each(function(bd){var a8=U,ba=av.Widget.getByNode(bd),a9=ba.get("name"),bc=ba.get("boundingBox"),bb=bc.one(".log")||av.Node.create("<div class=log />").appendTo(bc);a8+=a9+A;ba.get(r).each(function(be){a8+=a7+"a: "+be.get("id")+A;be.get("targets").each(function(bf){var bg=bf.get(aB);bf.get("node").setContent(bf.get("id"));a8+=a7+a7+"t: "+bg.get("name")+" (s: "+bf.get("id")+")"+A;});be.get("sources").each(function(bg){var bf=bg.get(aB);bg.get("node").setContent(bg.get("id"));a8+=a7+a7+"s: "+bf.get("name")+" (t: "+bg.get("id")+")"+A;});});bb.setContent(a8);});};var B=av.Component.create({NAME:aq,ATTRS:{fieldsDragConfig:{value:null,setter:"_setFieldsDragConfig",validator:J},graphic:{valueFn:function(){return new av.Graphic();},validator:J},strings:{value:{addNode:"Add node",cancel:"Cancel",deleteConnectorsMessage:"Are you sure you want to delete the selected connector(s)?",propertyName:"Property Name",save:"Save",settings:"Settings",value:"Value"}},tmpConnector:{setter:"_setTmpConnector",value:{},validator:J}},EXTENDS:av.DiagramBuilderBase,FIELDS_TAB:0,SETTINGS_TAB:1,prototype:{selectedConnector:null,selectedNode:null,initializer:function(){var A=this;A.on({cancel:A._onCancel,"drag:drag":A._onDrag,"drag:end":A._onDragEnd,"drop:hit":A._onDropHit,save:A._onSave});A.handlerKeyDown=av.getDoc().on(T,av.bind(A._afterKeyEvent,A));
A.dropContainer.delegate(aK,av.bind(A._onNodeClick,A),g+ag);A.dropContainer.delegate(s,av.bind(A._onMouseenterAnchors,A),g+aM);A.dropContainer.delegate(ae,av.bind(A._onMouseleaveAnchors,A),g+aM);},renderUI:function(){var A=this;av.DiagramBuilder.superclass.renderUI.apply(this,arguments);A._renderGraphic();},syncUI:function(){var A=this;av.DiagramBuilder.superclass.syncUI.apply(this,arguments);A._setupFieldsDrag();A.tmpConnector=new av.Connector(A.get(Q));},clearFields:function(){var a7=this;var A=[];a7.get(r).each(function(a8){A.push(a8);});a5.each(A,function(a8){a8.destroy();});A=a7.editingConnector=a7.editingNode=a7.selectedNode=null;},closeEditProperties:function(){var A=this;var a7=A.editingNode;var a8=A.tabView;a8.selectTab(av.DiagramBuilder.FIELDS_TAB);a8.disableTab(av.DiagramBuilder.SETTINGS_TAB);if(a7){a7.get(p).removeClass(aL);}A.editingConnector=null;A.editingNode=null;},connect:function(a8,bb,ba){var a7=this;if(aW(a8)){a8=av.Widget.getByNode(f+av.DiagramNode.buildNodeId(a8));}if(aW(bb)){bb=av.Widget.getByNode(f+av.DiagramNode.buildNodeId(bb));}if(a8&&bb){var a9=a8.findAvailableAnchor();var A=bb.findAvailableAnchor();if(a9&&A){a9.connect(A,ba);}}return a7;},connectAll:function(a7){var A=this;a5.each(a7,function(a8){if(a8.hasOwnProperty(S)&&a8.hasOwnProperty(i)){A.connect(a8.source,a8.target,a8.connector);}});return A;},createField:function(a7){var A=this;if(!aT(a7)){a7.builder=A;a7=new (A.getFieldClass(a7.type||o))(a7);}a7.set(a1,A);return a7;},deleteSelectedConnectors:function(a8){var a7=this;var A=a7.getStrings();var a9=a7.getSelectedConnectors();if(a9.length&&confirm(A[aF])){a5.each(a9,function(ba){var bb=ba.get(aC);if(bb){var bc=bb.findConnectorTarget(ba);if(bc){bb.disconnect(bc);}}});}},deleteSelectedNode:function(){var A=this;var a7=A.selectedNode;if(a7){if(!a7.get(L)){a7.close();}}},eachConnetor:function(a8){var A=this;var a7=false;A.get(r).some(function(a9){a9.get(r).some(function(ba){av.some(ba.connectors,function(bb){a7=a8.call(A,bb,ba,a9);return a7;});return a7;});return a7;});},editConnector:function(a7){var A=this;if(a7){var a8=A.tabView;A.closeEditProperties();a8.enableTab(av.DiagramBuilder.SETTINGS_TAB);a8.selectTab(av.DiagramBuilder.SETTINGS_TAB);A.propertyList.set(k,a7.getProperties());A.editingConnector=A.selectedConnector=a7;}},editNode:function(a8){var A=this;if(a8){var a7=A.tabView;A.closeEditProperties();a7.enableTab(av.DiagramBuilder.SETTINGS_TAB);a7.selectTab(av.DiagramBuilder.SETTINGS_TAB);A.propertyList.set(k,a8.getProperties());a8.get(p).addClass(aL);A.editingNode=A.selectedNode=a8;}},getSelectedConnectors:function(){var A=this;var a7=[];A.eachConnetor(function(a8){if(a8.get(aV)){a7.push(a8);}});return a7;},getFieldClass:function(a8){var A=this;var a7=av.DiagramBuilder.types[a8];if(a7){return a7;}else{av.log("The field type: ["+a8+"] couldn't be found.");return null;}},isFieldsDrag:function(a8){var A=this;var a7=A.fieldsDrag;return(a8===a7.dd);},plotField:function(a7){var A=this;if(!a7.get(a2)){a7.render(A.dropContainer);}},unselectConnectors:function(){var A=this;a5.each(A.getSelectedConnectors(),function(a7){a7.set(aV,false);});},unselectNodes:function(){var A=this;var a7=A.selectedNode;if(a7){a7.set(aV,false);}A.selectedNode=null;},select:function(a7){var A=this;A.unselectNodes();A.selectedNode=a7.set(aV,true).focus();},stopEditing:function(){var A=this;A.unselectConnectors();A.unselectNodes();A.closeEditProperties();},toJSON:function(){var A=this;var a7={nodes:[]};A.get(r).each(function(a9){var ba=a9.get(m);var a8={transitions:[]};a5.each(a9.SERIALIZABLE_ATTRS,function(bb){a8[bb]=a9.get(bb);});a9.get(r).each(function(bb){bb.get(N).each(function(bc){a8.transitions.push({connector:bb.getConnector(bc).toJSON(),source:ba,target:bc.get(aB).get(m)});});});a7.nodes.push(a8);});return a7;},_afterKeyEvent:function(a7){var A=this;if(a7.hasModifier()||av.getDoc().get(af).test(":input,td")){return;}if(a7.isKey(a)){A._onEscKey(a7);}else{if(a7.isKey(z)||a7.isKey(Z)){A._onDeleteKey(a7);}}},_onCancel:function(a7){var A=this;A.closeEditProperties();},_onDrag:function(a8){var A=this;var a7=a8.target;if(A.isFieldsDrag(a7)){var a9=av.Widget.getByNode(a7.get(aP));a9.get(r).each(function(ba){ba.alignConnectors();});}},_onDragEnd:function(a8){var A=this;var a7=a8.target;if(A.isFieldsDrag(a7)){var a9=av.Widget.getByNode(a7.get(aP));a9.set(y,a9.getLeftTop());}},_onDropHit:function(a8){var A=this;var a7=a8.drag;if(A.isAvailableFieldsDrag(a7)){var ba=a7.get(o).getData(V);var a9=A.addField({xy:aA(a7.lastXY,A.dropContainer),type:ba.get(e),fields:[{}]});A.select(a9);}},_onDeleteKey:function(a7){var A=this;A.deleteSelectedConnectors();A.deleteSelectedNode();a7.halt();},_onEscKey:function(a7){var A=this;A.stopEditing();a7.halt();},_onMouseenterAnchors:function(a7){var A=this;a7.currentTarget.addClass(ax);},_onMouseleaveAnchors:function(a7){var A=this;a7.currentTarget.removeClass(ax);},_onNodeClick:function(a7){var A=this;var a8=av.Widget.getByNode(a7.currentTarget);A.select(a8);A._onNodeEdit(a7);},_onNodeEdit:function(a7){var A=this;if(!a7.target.ancestor(g+b,true)){return;}var a8=av.Widget.getByNode(a7.currentTarget);if(a8){A.editNode(a8);}},_onSave:function(a8){var A=this;var a7=A.editingNode;var a9=A.editingConnector;var ba=A.propertyList.get(k);if(a7){a5.each(ba.get(ak),function(bb){var bc=bb.get(aH);a7.set(bc.attributeName,bc.value);});}else{if(a9){a5.each(ba.get(ak),function(bb){var bc=bb.get(aH);a9.set(bc.attributeName,bc.value);});}}},_renderGraphic:function(){var A=this;A.get(ab).render(A.get(am));},_setTmpConnector:function(a8){var A=this;var a7=A.get(am).getXY();return av.merge({p1:a7,p2:a7,lazyDraw:true,graphic:A.get(ab)},a8);},_setFieldsDragConfig:function(a8){var A=this;var a7=A.dropContainer;return av.merge({bubbleTargets:A,container:a7,dragConfig:{plugins:[{cfg:{constrain:a7},fn:av.Plugin.DDConstrained},{cfg:{scrollDelay:150},fn:av.Plugin.DDWinScroll}]},nodes:g+ag},a8||{});},_setupFieldsDrag:function(){var A=this;A.fieldsDrag=new av.DD.Delegate(A.get(az));}}});av.DiagramBuilder=B;
av.DiagramBuilder.types={};var Y=av.Component.create({NAME:C,EXTENDS:av.Overlay,AUGMENTS:[av.FieldSupport]});var a6=av.Component.create({NAME:C,UI_ATTRS:[r,m,L,aV],ATTRS:{anchorsDragConfig:{value:null,setter:"_setAnchorsDragConfig",validator:J},builder:{validator:aa},required:{value:false,validator:aS},description:{value:U,validator:aW},height:{value:60},name:{valueFn:function(){var A=this;return A.get(e)+(++av.Env._uidx);},validator:aW},selected:{value:false,validator:aS},strings:{value:{addAnchorMessage:"Add Anchor",closeMessage:"Close",deleteNodesMessage:"Are you sure you want to delete the selected node(s)?",description:"Description",editMessage:"Edit",name:"Name",type:"Type"}},type:{value:o,validator:aW},controlsToolbar:{validator:J,valueFn:"_valueControlsToolbar"},width:{value:60},zIndex:{value:100},tabIndex:{value:1}},EXTENDS:Y,buildNodeId:function(A){return aB+I+aR+I+A.replace(/[^a-z0-9.:_-]/ig,"_");},prototype:{ANCHOR_WRAPPER_TEMPLATE:'<div class="'+F+'"></div>',CONTROLS_TEMPLATE:'<div class="'+u+'"></div>',SERIALIZABLE_ATTRS:[aO,m,L,e,O,aQ,x,y,W],initializer:function(){var A=this;A._renderNodes();A._setupAnchorsDrag();A.after({render:A._afterRender});A.on({"drag:drag":A._onAnchorDrag,"drag:end":A._onAnchorDragEnd,"drag:start":A._onAnchorDragStart,"drop:hit":A._onAnchorDropHit});A.get(p).addClass(ag+a4+A.get(e));},destructor:function(){var A=this;A.get(r).each(function(a7){a7.destroy();});A.get(a1).removeField(A);},alignAnchors:function(){var a7=this;var bb=a7.get(r);var a9=a7.get(p).get(h),ba=Math.floor(360/bb.size()),a8=a9.width/2,A=a9.height/2,bd=a9.left+a9.width/2,bc=a9.top+a9.height/2;bb.each(function(bh,bg){var bf=bh.get(o);var bi=bf.get(h);var be=a7._getEllipseXY(a8,A,bd,bc,bg*ba);bf.setXY([be[0]-bi.width/2,be[1]-bi.height/2]);bh.alignConnectors();});return a7;},close:function(){var a7=this;var A=a7.getStrings();if(confirm(A[n])){a7.destroy();}return a7;},createField:function(a8){var A=this;if(!ap(a8)){var a7=A.get(a1);a8.diagramNode=A;a8=new av.Anchor(a8);}return a8;},findAvailableAnchor:function(){var A=this;var a7=null;A.get(r).some(function(a8){if(!a8.hasConnection()){a7=a8;return true;}});if(!a7){a7=A.addField({});}return a7;},getConnectionNode:function(){var A=this;return new av.DiagramNode({xy:[100,100]});},getLeftTop:function(){var A=this;return aA(A.get(p),A._getContainer());},getProperties:function(){var A=this;var a7=A.getPropertyModel();a5.each(a7,function(ba){var a9=A.get(ba.attributeName),a8=ah.type(a9);if(a8===ad){a9=String(a9);}ba.value=a9;});return a7;},getPropertyModel:function(){var a7=this;var A=a7.getStrings();return[{attributeName:aO,editor:new av.TextAreaCellEditor(),name:A[aO]},{attributeName:m,editor:new av.TextCellEditor({validator:{rules:{value:{required:true}}}}),name:A[m]},{attributeName:e,editor:false,name:A[e]}];},syncDragTargets:function(){var A=this;A.anchorsDrag.syncTargets();},syncDropTargets:function(a7){var A=this;A.get(r).each(function(a9){var a8=av.DD.DDM.getDrop(a9.get(o));if(a8){if(a9.get(aU).size()===a9.get(v)){a8.removeFromGroup(aw);}else{a8.addToGroup(aw);}}});},_afterRender:function(a7){var A=this;A.alignAnchors();A._renderControls();},_getContainer:function(){var A=this;return(A.get(a1).dropContainer||A.get(p).get(d));},_getEllipseXY:function(a7,A,ba,a9,bb){var a8=bb*Math.PI/180;return[ba+a7*Math.cos(a8),a9-A*Math.sin(a8)];},_handleAddAnchorEvent:function(a7){var A=this;A.addField({});},_handleAddNodeEvent:function(a8){var A=this;var a7=A.get(a1);var a9=A.findAvailableAnchor();if(a9){var ba=A.getConnectionNode();a7.addField(ba);a9.connect(ba.addField({}));}},_handleEditEvent:function(a7){var A=this;A.get(a1).editNode(A);},_handleCloseEvent:function(a7){var A=this;if(!A.get(L)){A.close();}},_onAnchorDrag:function(a8){var A=this;var a7=A.get(a1);a7.tmpConnector.set(aD,a8.target.get(aP).getCenterXY());},_onAnchorDragEnd:function(a8){var A=this;var a7=A.get(a1).tmpConnector.shape;a7.clear();a7.end();},_onAnchorDragStart:function(a8){var A=this;var a7=A.get(a1);a7.tmpConnector.set(aE,a8.target.get(o).getCenterXY());},_onAnchorDropHit:function(a7){var A=this;var a8=av.Anchor.getAnchorByNode(a7.drag.get(o));var a9=av.Anchor.getAnchorByNode(a7.drop.get(o));a8.connect(a9);},_renderControls:function(){var A=this;var a7=A.get(p);A.controlsNode=av.Node.create(A.CONTROLS_TEMPLATE).appendTo(a7);},_renderNodes:function(){var A=this;var a7=A.get(p);A.anchorWrapper=av.Node.create(A.ANCHOR_WRAPPER_TEMPLATE).appendTo(a7);},_renderControlsToolbar:function(a7){var A=this;A.controlsToolbar=new av.Toolbar(A.get(aI)).render(A.controlsNode);A._uiSetRequired(A.get(L));},_setAnchorsDragConfig:function(a8){var A=this;var a7=A.get(a1);return av.merge({bubbleTargets:A,container:A.anchorWrapper,dragConfig:{groups:[aw],plugins:[{cfg:{constrain:(a7?a7.get(am):null)},fn:av.Plugin.DDConstrained},{cfg:{scrollDelay:150},fn:av.Plugin.DDWinScroll},{cfg:{moveOnEnd:false},fn:av.Plugin.DDProxy}]},nodes:g+aM,target:true},a8||{});},_setupAnchorsDrag:function(){var A=this;A.anchorsDrag=new av.DD.Delegate(A.get(ao));A.anchorsDrag.dd.addInvalid(g+X);},_uiSetFields:function(a7){var A=this;if(A.get(a2)){A.alignAnchors();A.syncDragTargets();A.syncDropTargets();}},_uiSetName:function(a8){var A=this;var a7=A.get(p);a7.set(aJ,av.DiagramNode.buildNodeId(a8));},_uiSetRequired:function(a9){var a8=this;var a7=a8.getStrings();var A=a8.controlsToolbar;if(A){if(a9){A.remove(aX);}else{A.add({handler:av.bind(a8._handleCloseEvent,a8),icon:al,id:aX,title:a7[G]});}}},_uiSetSelected:function(a7){var A=this;A.get(p).toggleClass(a3,a7);if(a7&&!A.controlsToolbar){A._renderControlsToolbar();}},_uiSetXY:function(a8){var A=this;var a7=A._getContainer().getXY();this._posNode.setXY([a8[0]+a7[0],a8[1]+a7[1]]);},_valueControlsToolbar:function(a8){var a7=this;var A=a7.getStrings();return{activeState:false,children:[{handler:av.bind(a7._handleEditEvent,a7),icon:l,id:D,title:A[M]},{handler:av.bind(a7._handleAddAnchorEvent,a7),icon:at,id:ay,title:A[aZ]},{handler:av.bind(a7._handleAddNodeEvent,a7),icon:K,id:j},{handler:av.bind(a7._handleCloseEvent,a7),icon:al,id:aX,title:A[G]}]};
}}});av.DiagramNode=a6;av.DiagramBuilder.types[o]=av.DiagramNode;av.DiagramNodeState=av.Component.create({NAME:C,ATTRS:{height:{value:40},type:{value:ac},width:{value:40}},EXTENDS:av.DiagramNode,});av.DiagramBuilder.types[ac]=av.DiagramNodeState;av.DiagramNodeCondition=av.Component.create({NAME:C,ATTRS:{height:{value:60},type:{value:a0},width:{value:60}},EXTENDS:av.DiagramNodeState,});av.DiagramBuilder.types[a0]=av.DiagramNodeCondition;av.DiagramNodeStart=av.Component.create({NAME:C,ATTRS:{type:{value:aG}},EXTENDS:av.DiagramNodeState,});av.DiagramBuilder.types[aG]=av.DiagramNodeStart;av.DiagramNodeEnd=av.Component.create({NAME:C,ATTRS:{type:{value:aN}},EXTENDS:av.DiagramNodeState,});av.DiagramBuilder.types[aN]=av.DiagramNodeEnd;av.DiagramNodeJoin=av.Component.create({NAME:C,ATTRS:{height:{value:60},type:{value:t},width:{value:60}},EXTENDS:av.DiagramNodeState,});av.DiagramBuilder.types[t]=av.DiagramNodeJoin;av.DiagramNodeFork=av.Component.create({NAME:C,ATTRS:{height:{value:60},type:{value:au},width:{value:60}},EXTENDS:av.DiagramNodeState,});av.DiagramBuilder.types[au]=av.DiagramNodeFork;av.DiagramNodeTask=av.Component.create({NAME:C,ATTRS:{height:{value:70},type:{value:E},width:{value:70}},EXTENDS:av.DiagramNodeState,});av.DiagramBuilder.types[E]=av.DiagramNodeTask;},"@VERSION@",{requires:["aui-diagram-builder-base","overlay"],skinnable:true});AUI.add("aui-diagram-builder-connector",function(p){var aa=p.Lang,C=aa.isArray,G=aa.isBoolean,Z=aa.isNumber,O=aa.isObject,m=aa.isString,u=p.Array,d=function(A){return(A instanceof p.Anchor);},R=function(A){return(A instanceof p.ArrayList);},v=function(A){return(A instanceof p.DiagramNode);},Q=function(A){return(A instanceof p.Graphic);},M="anchor",S="arrowPoints",T="boundingBox",ab="builder",P="click",I="color",x="connector",a="dataAnchor",b="description",L="diagram",D="diagramNode",K="fill",J="graphic",z="id",V="lazyDraw",W="max",o="maxSources",n="maxTargets",g="mouseenter",q="mouseleave",H="name",Y="node",t="p1",s="p2",h="path",F="selected",B="shape",N="shapeHover",r="shapeSelected",l="sources",i="stroke",j="targets",X="wrapper",y=".",w="",k="#",E=p.getClassName,c=E(L,ab,M,Y,W,j),f=E(L,ab,M,Y,W,l),e=E(L,ab,M,Y,X),U=E(L,ab,M,Y);p.PolygonUtil={ARROW_POINTS:[[-12,-6],[-8,0],[-12,6],[6,0]],drawLineArrow:function(ah,ac,aj,A,ai,af){var ak=this;ah.moveTo(ac,aj);ah.lineTo(A,ai);var ad=Math.atan2(ai-aj,A-ac),ag=(A+ac)/2,ae=(ai+aj)/2;A=A-15*Math.cos(ad);ai=ai-15*Math.sin(ad);ak.drawPolygon(ah,ak.translatePoints(ak.rotatePoints(af||ak.ARROW_POINTS,ad),A,ai));},drawPolygon:function(ac,ad){var A=this;ac.moveTo(ad[0][0],ad[0][1]);u.each(ad,function(af,ae){if(ae>0){ac.lineTo(ad[ae][0],ad[ae][1]);}});ac.lineTo(ad[0][0],ad[0][1]);},translatePoints:function(ad,ac,af){var A=this;var ae=[];u.each(ad,function(ah,ag){ae.push([ad[ag][0]+ac,ad[ag][1]+af]);});return ae;},rotatePoints:function(ac,ae){var A=this;var ad=[];u.each(ac,function(ag,af){ad.push(A.rotatePoint(ae,ac[af][0],ac[af][1]));});return ad;},rotatePoint:function(ac,A,ad){return[(A*Math.cos(ac))-(ad*Math.sin(ac)),(A*Math.sin(ac))+(ad*Math.cos(ac))];}};p.Connector=p.Base.create("line",p.Base,[],{SERIALIZABLE_ATTRS:[I,b,V,H,r,N,t,s],shape:null,initializer:function(ad){var A=this;var ac=A.get(V);A.after({p1Change:A.draw,p2Change:A.draw,selectedChange:A._afterSelectedChange});A._initShapes();if(!ac){A.draw();}A._uiSetSelected(A.get(F),!ac);},destroy:function(){var A=this;A.get(J).removeShape(A.shape);},draw:function(){var A=this;var ac=A.shape;var ae=A.getCoordinate(A.get(t));var ad=A.getCoordinate(A.get(s));ac.clear();p.PolygonUtil.drawLineArrow(ac,ae[0],ae[1],ad[0],ad[1],A.get(S));ac.end();},getCoordinate:function(ad){var A=this;var ac=A.get(J).getXY();return[ad[0]-ac[0],ad[1]-ac[1]];},getProperties:function(){var A=this;var ac=A.getPropertyModel();u.each(ac,function(ad){ad.value=A.get(ad.attributeName);});return ac;},getPropertyModel:function(){var ac=this;var ad=ac.get(M);var A=ad?ad.get(D).getStrings():{};return[{attributeName:b,editor:new p.TextAreaCellEditor(),name:A[b]},{attributeName:H,editor:new p.TextCellEditor({validator:{rules:{value:{required:true}}}}),name:A[H]}];},toJSON:function(){var A=this;var ac={};u.each(A.SERIALIZABLE_ATTRS,function(ad){ac[ad]=A.get(ad);});return ac;},_afterSelectedChange:function(ac){var A=this;A._uiSetSelected(ac.newVal);},_initShapes:function(){var A=this;var ac=A.shape=A.get(J).addShape(A.get(B));ac.on(P,p.bind(A._onShapeClick,A));ac.on(g,p.bind(A._onShapeMouseEnter,A));ac.on(q,p.bind(A._onShapeMouseLeave,A));},_onShapeClick:function(af){var A=this;var ad=A.get(M);var ae=A.get(F);if(ad){var ac=ad.getBuilder();if(af.hasModifier()){ac.closeEditProperties();}else{ac.unselectConnectors();if(ae){ac.closeEditProperties();}else{ac.editConnector(A);}}}A.set(F,!ae);},_onShapeMouseEnter:function(ac){var A=this;if(!A.get(F)){A._updateShape(A.get(N));}},_onShapeMouseLeave:function(ac){var A=this;if(!A.get(F)){A._updateShape(A.get(B));}},_setShape:function(ac){var A=this;return p.merge({type:h,stroke:{color:A.get(I),weight:3},fill:{color:A.get(I)}},ac);},_updateShape:function(ae,ac){var A=this;var ad=A.shape;if(ae.hasOwnProperty(K)){ad.set(K,ae[K]);}if(ae.hasOwnProperty(i)){ad.set(i,ae[i]);}if(ac!==false){A.draw();}},_uiSetSelected:function(ad,ac){var A=this;A._updateShape(ad?A.get(r):A.get(B),ac);}},{ATTRS:{anchor:{},color:{value:"#27aae1",validator:m},description:{value:w,validator:m},lazyDraw:{value:false,validator:G},name:{valueFn:function(){var A=this;return x+(++p.Env._uidx);},validator:m},graphic:{validator:Q},shapeHover:{value:{fill:{color:"#666"},stroke:{color:"#666",weight:5}}},selected:{value:false,validator:G},shape:{value:null,setter:"_setShape"},shapeSelected:{value:{fill:{color:"#000"},stroke:{color:"#000",weight:5}}},arrowPoints:{value:p.PolygonUtil.ARROW_POINTS},p1:{value:[0,0],validator:C},p2:{value:[0,0],validator:C}}});p.Anchor=p.Base.create("anchor",p.Base,[],{ANCHOR_WRAPPER_TEMPLATE:'<div class="'+e+'"></div>',NODE_TEMPLATE:'<div class="'+U+'"></div>',connectors:null,initializer:function(){var A=this;
A.connectors={};A._renderNode();A.connectTargets();A.after({sourcesChange:A._afterSourcesChange,targetsChange:A._afterTargetsChange});A._uiSetMaxTargets(A.get(n));},addSource:function(ac){var A=this;if(A.get(l).size()<A.get(o)){A.set(l,A.get(l).remove(ac).add(ac));}return A;},addTarget:function(ac){var A=this;if(A.get(j).size()<A.get(n)){A.set(j,A.get(j).remove(ac).add(ac));}return A;},alignConnectors:function(){var A=this;A.get(j).each(function(ac){var ad=A.getConnector(ac);if(ad){ad.set(t,A.getCenterXY());ad.set(s,ac.getCenterXY());}});A.get(l).each(function(ac){var ad=ac.getConnector(A);if(ad){ad.set(t,ac.getCenterXY());ad.set(s,A.getCenterXY());}});return A;},destroy:function(){var A=this;A.disconnectTargets();A.disconnectSources();A.get(Y).remove();},connect:function(ad,ac){var A=this;if(v(ad)){ad=ad.findAvailableAnchor();}A.addTarget(ad);ad.addSource(A);if(!A.isConnected(ad)){var ae=p.merge(ad.get(x),ac);ae.anchor=A;ae.p1=A.getCenterXY();ae.p2=ad.getCenterXY();A.connectors[ad.get(z)]=new p.Connector(ae);}setTimeout(function(){ad.get(D).syncDropTargets();},50);return A;},connectTargets:function(){var A=this;A.get(j).each(p.bind(A.connect,A));return A;},disconnect:function(ac){var A=this;A.getConnector(ac).destroy();A.removeTarget(ac);ac.removeSource(A);setTimeout(function(){ac.get(D).syncDropTargets();},50);},disconnectTargets:function(){var A=this;A.get(j).each(function(ac){A.disconnect(ac);});return A;},disconnectSources:function(){var A=this;A.get(l).each(function(ac){ac.disconnect(A);});return A;},findConnectorTarget:function(ac){var A=this;var ad=null;p.some(A.connectors,function(af,ae){if(af===ac){ad=p.Anchor.getAnchorByNode(k+ae);return true;}});return ad;},getBuilder:function(){var A=this;return A.get(D).get(ab);},getCenterXY:function(){var A=this;return A.get(Y).getCenterXY();},getConnector:function(ac){var A=this;return A.connectors[ac.get(z)];},hasConnection:function(){var A=this;return((A.get(j).size()>0)||(A.get(l).size()>0));},isConnected:function(ac){var A=this;return A.connectors.hasOwnProperty(ac.get(z));},removeSource:function(ac){var A=this;A.set(l,A.get(l).remove(ac));return A;},removeTarget:function(ac){var A=this;A.set(j,A.get(j).remove(ac));delete A.connectors[ac.get(z)];return A;},_afterSourcesChange:function(ac){var A=this;A._uiSetSources(ac.newVal);},_afterTargetsChange:function(ac){var A=this;ac.prevVal.each(function(ad){ad.removeSource(A);});ac.newVal.each(function(ad){ad.addSource(A);});A._uiSetTargets(ac.newVal);},_renderNode:function(){var A=this;var ad=A.get(D);var ac=ad.get(T);A.wrapper=ac.one(y+e)||p.Node.create(A.ANCHOR_WRAPPER_TEMPLATE);A.wrapper.appendTo(ac).appendChild(A.get(Y));},_setConnector:function(ac){var A=this;return p.merge({graphic:A.getBuilder().get(J)},ac);},_setSources:function(ac){var A=this;return A._setAnchors(ac);},_setTargets:function(ac){var A=this;ac=A._setAnchors(ac,true);ac.each(function(ad){ad.addSource(A);});return ac;},_setAnchors:function(ae,ad){var A=this;if(!R(ae)){var ac=[];p.Array.some(ae,function(ag,af){if(af>=A.get(ag?n:o)){return true;}ac.push(d(ag)?ag:new p.Anchor(ag));});ae=new p.ArrayList(ac);}return ae;},_setMaxSources:function(ac){var A=this;A._uiSetMaxSources(A.get(o));return ac;},_setMaxTargets:function(ac){var A=this;A._uiSetMaxTargets(A.get(n));return ac;},_setNode:function(ac){var A=this;var ad=A.get(z);return p.one(ac).set(z,ad).setData(a,A);},_uiSetSources:function(ac){var A=this;A._uiSetMaxSources(A.get(o));},_uiSetMaxSources:function(ad){var A=this;var ac=A.get(Y);ac.toggleClass(f,(A.get(l).size()===ad));},_uiSetMaxTargets:function(ad){var A=this;var ac=A.get(Y);ac.toggleClass(c,(A.get(j).size()===ad));},_uiSetTargets:function(ac){var A=this;A._uiSetMaxTargets(A.get(n));}},{ATTRS:{diagramNode:{},connector:{setter:"_setConnector",value:{},validator:O},id:{readOnly:true,valueFn:function(){return p.guid();}},maxSources:{setter:"_setMaxSources",value:1,validator:Z},maxTargets:{setter:"_setMaxTargets",value:1,validator:Z},node:{setter:"_setNode",valueFn:function(){var A=this;return p.Node.create(A.NODE_TEMPLATE);}},sources:{value:[],setter:"_setSources",validator:function(A){return C(A)||R(A);}},targets:{value:[],setter:"_setTargets",validator:function(A){return C(A)||R(A);}}},getAnchorByNode:function(A){return d(A)?A:p.one(A).getData(a);}});},"@VERSION@",{requires:["aui-base","arraylist-add","arraylist-filter","json","graphics","dd"],skinnable:true});AUI.add("aui-diagram-builder",function(a){},"@VERSION@",{use:["aui-diagram-builder-base","aui-diagram-builder-impl","aui-diagram-builder-connector"],skinnable:true});