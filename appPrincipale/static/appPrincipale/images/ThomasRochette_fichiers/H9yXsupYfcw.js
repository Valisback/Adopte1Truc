if (self.CavalryLogger) { CavalryLogger.start_js(["BD36d"]); }

__d('VaultEditableGrid',['csx','Event','Arbiter','AsyncRequest','CSS','DOM','Scroll','$','ge','removeFromArray'],(function a(b,c,d,e,f,g,h){var i={};function j(k,l,m,n){i[k.id]=this;this._grid=k;this._gridID=k.id;this._dialogEndpoint=l;this._collapseWhenEmpty=m;this._attachmentCount=n;this._selectedVaultImageIDs=[];c('Arbiter').subscribe('multi-upload/image-removed/'+this._gridID,function(o,p){c('removeFromArray')(this._selectedVaultImageIDs,p);this.updateAttachmentCount(this._attachmentCount-1);}.bind(this));c('Arbiter').subscribe('multi-upload/composer-reset/'+this._gridID,function(o,p){this.removeImages();}.bind(this));c('Arbiter').subscribe(['multi-upload/images-upload-start/'+this._gridID,'multi-upload/video-added/'+this._gridID],function(){this.updateAttachmentCount(this._attachmentCount+1);}.bind(this));c('Arbiter').inform('fbVaultEditableGrid/created/'+k.id,this,c('Arbiter').BEHAVIOR_PERSISTENT);c('Arbiter').subscribe('multi-upload/images-upload-start/'+this._gridID,this._scrollToRight.bind(this));this.updateAttachmentCount(this._attachmentCount);}Object.assign(j,{VAULT_IMAGE:'vault_image',getInstance:function k(l){return i[l];},registerDialogWithGrid:function k(l,m,n){c('Arbiter').subscribe(['multi-upload/images-upload-start/'+l,'multi-upload/video-added/'+l],n.hide.bind(n));c('Arbiter').subscribe('fbVaultEditableGrid/created/'+l,function(o,p){p._registerDialogWithGrid(m,n);});},onImagesSelected:function k(l,m,n){i[l]._onImagesSelected(m,n);}});Object.assign(j.prototype,{getRoot:function k(){var l=c('ge')(this._gridID);if(l){return l;}else return this._grid;},_registerDialogWithGrid:function k(l,m){this._dialog=m;var n=this.getMoreLink();n&&c('Event').listen(n,'click',function(){m.show();return false;});m.subscribe('aftershow',function(){var o=[];c('DOM').scry(c('$')(this._gridID),'input[type="hidden"]').forEach(function(q){if(q.name.match('composer_vault_images')||q.name.match('composer_unpublished_photo'))o.push(q.value);});var p=l.getGrid();p.bulkChange(function(){var q=p.getSelectionSet();q.clear();q.addAll(o);});}.bind(this));},updateAttachmentCount:function k(l){this._attachmentCount=l;if(this._collapseWhenEmpty)c('CSS').conditionShow(this._grid,this._attachmentCount>0);},getID:function k(){return this._gridID;},_onImagesSelected:function k(l,m){var n=c('DOM').find(this.getRoot(),"._577");this.removeImages();this._selectedVaultImageIDs=m;l.forEach(function(o){c('DOM').insertBefore(n,o);});c('Arbiter').inform('multi-upload/images-added/'+this._gridID,{fbids:m});this._scrollToRight();},removeImages:function k(){c('DOM').scry(this.getRoot(),'.fbVaultGridItem').forEach(function(l){if(!c('CSS').hasClass(l,'fbVaultEditableGridMoreLink'))c('DOM').remove(l);});this._selectedVaultImageIDs=[];c('Arbiter').inform('multi-upload/all-images-removed/'+this._gridID);this.updateAttachmentCount(0);},_scrollToRight:function k(){var l=this.getRoot(),m=c('DOM').find(l,'.fbScrollableAreaWrap');c('Scroll').setLeft(m,Math.max(0,c('DOM').find(l,'.fbScrollableAreaBody').offsetWidth-m.offsetWidth));},showDialog:function k(l,m){if(this._dialog){this._dialog.show();}else c('AsyncRequest').bootstrap(this._dialogEndpoint,l);},getMoreLink:function k(){return c('DOM').scry(this.getRoot(),'.fbVaultEditableGridMoreLink')[0];}});f.exports=j;}),null);
__d('BasePhotoUploader',['Arbiter','ArbiterMixin','CSS','DOM','PhotosMultiUploadInput','VaultEditableGrid','TimelineMapScrollableArea','mixin','getObjectValues'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;function j(k,l){'use strict';i.constructor.call(this);new (c('TimelineMapScrollableArea'))(k,{verticalscroll:true});this.$BasePhotoUploader1=k;this.$BasePhotoUploader2=this.$BasePhotoUploader3();this.$BasePhotoUploader4=false;this.$BasePhotoUploader5=null;l.addSubscriptions(c('Arbiter').subscribe('multi-upload/images-added/'+this.$BasePhotoUploader1.id,function(m,n){var o=Object.assign({},n.fbids);Object.assign(this.$BasePhotoUploader2,o);this.$BasePhotoUploader6();this.inform('upload-completed',{fbids:c('getObjectValues')(o)});}.bind(this)),c('Arbiter').subscribe('multi-upload/image-removed/'+this.$BasePhotoUploader1.id,function(m,n){for(var o in this.$BasePhotoUploader2)if(this.$BasePhotoUploader2[o]===n){delete this.$BasePhotoUploader2[o];break;}this.$BasePhotoUploader6();}.bind(this)),c('Arbiter').subscribe('multi-upload/images-upload-start/'+this.$BasePhotoUploader1.id,function(m,n){c('CSS').show(this.$BasePhotoUploader1);this.$BasePhotoUploader4=true;this.inform('dom-updated');this.inform('upload-started',n);}.bind(this)),c('Arbiter').subscribe('multi-upload/composer-reset/'+this.$BasePhotoUploader1.id,this.clear.bind(this)),c('Arbiter').subscribe('multi-upload/all-images-removed/'+this.$BasePhotoUploader1.id,this.$BasePhotoUploader7.bind(this)),c('Arbiter').subscribe('multi-upload/images-upload-completed/'+this.$BasePhotoUploader1.id,function(m){this.$BasePhotoUploader4=false;this.inform('all-uploads-completed');this.$BasePhotoUploader6();}.bind(this)));c('CSS').conditionShow(this.$BasePhotoUploader1,Object.keys(this.$BasePhotoUploader2).length);}j.prototype.getSelectedFBIDs=function(){'use strict';var k=Object.keys(this.$BasePhotoUploader2).sort();return k.map(function(l){return this.$BasePhotoUploader2[l];}.bind(this));};j.prototype.isUploading=function(){'use strict';return this.$BasePhotoUploader4;};j.prototype.clear=function(){'use strict';var k=c('VaultEditableGrid').getInstance(this.$BasePhotoUploader1.id);k&&k.removeImages();};j.prototype.getWaterfallID=function(){'use strict';return c('PhotosMultiUploadInput').getWaterfallID(this.$BasePhotoUploader1.id);};j.prototype.$BasePhotoUploader7=function(){'use strict';this.$BasePhotoUploader2={};this.$BasePhotoUploader4=false;c('CSS').hide(this.$BasePhotoUploader1);this.inform('all-uploads-completed');this.inform('dom-updated');};j.prototype.$BasePhotoUploader3=function(){'use strict';var k={},l=-10000;c('DOM').scry(this.$BasePhotoUploader1,'input[type="hidden"]').forEach(function(m){if(m.name.match('composer_vault_images')){k[l]=m.value;l--;}});return k;};j.prototype.$BasePhotoUploader6=function(){'use strict';c('CSS').conditionShow(this.$BasePhotoUploader1,Object.keys(this.$BasePhotoUploader2).length>0);this.inform('dom-updated');};j.prototype.setCurrentMethod=function(k){'use strict';this.$BasePhotoUploader5=k;};j.prototype.getCurrentMethod=function(){'use strict';return this.$BasePhotoUploader5;};f.exports=j;}),null);
__d('MercuryPhotoUploader',['csx','cx','Arbiter','AsyncRequest','BasePhotoUploader','DOM','Event','FileInput','Focus','Parent','PhotosMultiUploadInput','PUWMethods','VaultEditableGrid'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits(l,c('BasePhotoUploader'));k=j&&j.prototype;function l(m,n,o,p){'use strict';k.constructor.call(this,m,o);this.$MercuryPhotoUploader1=m.id;this.$MercuryPhotoUploader2=false;c('Arbiter').subscribe('PhotosMultiUploadInput/loaded/'+m.id,function(){this.$MercuryPhotoUploader2=true;}.bind(this));c('Arbiter').subscribe('MercuryPhotoUploader/initUploadButton/'+m.id,function(){var q=c('DOM').scry(n,'input[type="file"]')[0];if(!q)q=c('DOM').create('input',{accept:'image/*',type:'file',className:"_n",name:'composer_unpublished_photo[]',multiple:1});var r=c('Parent').bySelector(n,"._9_h"),s=new (c('FileInput'))(r,c('DOM').find(r,"._214"),q);s.subscribe('change',c('PhotosMultiUploadInput').doFileUpload.bind(null,m.id,s));});c('Arbiter').subscribe('MercuryPhotoUploader/registerPhotoMenu/'+m.id,function(q,r){var s=r.menu.getRoot();r.menu.setContext(n);var t=c('DOM').scry(s,"._d2p"),u=t&&t[0];u&&c('Event').listen(u,'click',function(){c('VaultEditableGrid').getInstance(m.id).showDialog(u,c('VaultEditableGrid').VAULT_IMAGE);this.setCurrentMethod(c('PUWMethods').VAULT);this.inform('selection-start',{method:c('PUWMethods').VAULT});}.bind(this));c('Event').listen(n,'click',function(){if(!this.$MercuryPhotoUploader2)return;if(!r.menu.isShown()){var w=c('DOM').scry(r.menu.getContentRoot(),'li');this.inform('menu-show');r.menu.show();if(w)c('Focus').setWithoutOutline(w[0]);}else{this.inform('menu-hide');r.menu.hide();}}.bind(this));c('Event').listen(document.documentElement,'click',function(event){if(!c('DOM').contains(n,event.getTarget())&&!c('DOM').contains(u,event.getTarget())){if(r.menu.isShown())this.inform('menu-hide');r.menu.hide();}}.bind(this));var v=c('DOM').find(s,"._9_h");c('Event').listen(v,'click',function(){this.setCurrentMethod(c('PUWMethods').FILE_SELECTOR);this.inform('selection-start',{method:c('PUWMethods').FILE_SELECTOR});}.bind(this));}.bind(this));p&&c('PhotosMultiUploadInput').initDragDrop(m.id,p);}l.prototype.uploadPastedFile=function(m){'use strict';c('PhotosMultiUploadInput').onFilesDrop(this.$MercuryPhotoUploader1,[m]);};l.prototype.addCachedPhotos=function(m){'use strict';c('AsyncRequest').post('/ajax/vault/selected.php',{max_select:10,grid_id:this.$MercuryPhotoUploader1,source:'messenger',image_ids:m});};Object.assign(l,{initUploadButton:function m(n){c('Arbiter').inform('MercuryPhotoUploader/initUploadButton/'+n,{},c('Arbiter').BEHAVIOR_PERSISTENT);},registerPhotoMenu:function m(n,o){c('Arbiter').inform('MercuryPhotoUploader/registerPhotoMenu/'+n,{menu:o},c('Arbiter').BEHAVIOR_PERSISTENT);}});f.exports=l;}),null);
__d('MercuryDataSources',[],(function a(b,c,d,e,f,g){var h={},i={add:function j(k,l){h[k]=l;},get:function j(k){!h[k];return h[k];}};f.exports=i;}),null);
__d('MercuryTypeahead',['cx','Event','ArbiterMixin','DOM','DOMDimensions','Input','Keys','MercuryTypeaheadTemplates','Tokenizer','Typeahead','TypeaheadCore','WorkModeConfig'],(function a(b,c,d,e,f,g,h){var i=function j(k,l){this._domElement=null;this._typeahead=null;this._tokenizer=null;this._placeholder='';this._exclusions=[];this._viewNodeOrID=null;this._viewOptions={renderer:'compact',autoSelect:true};this._tokenizerBehaviors=[];this._heightPrev=null;this._dataSource=k;this._view=l;};Object.assign(i.prototype,c('ArbiterMixin'));Object.assign(i.prototype,{setPlaceholder:function j(k){this._placeholder=k;return this;},setExcludedParticipantsFromThreadMeta:function j(k){if(!k)return;this.setExcludedParticipants(k.participants);},setExcludedParticipants:function j(k){this._exclusions=[];k.forEach(function(l){var m=l.indexOf(':');if(l.substr(0,m)=='fbid')this._exclusions.push(l.substr(m+1));}.bind(this));return this;},setViewNodeID:function j(k){this._viewNodeOrID=k;},setViewNode:function j(k){this._viewNodeOrID=k;},setFullWidthView:function j(k){var l=c('DOM').create('div',{className:"_4ck uiTypeaheadView"});c('DOM').setContent(k,l);this.setViewNode(l);},setViewOption:function j(k,l){this._viewOptions[k]=l;},addTokenizerBehavior:function j(k){this._tokenizerBehaviors.push(k);},build:function j(k){if(this._domElement)return;var l=c('MercuryTypeaheadTemplates')[':fb:mercury:tokenizer'].build(),m=c('MercuryTypeaheadTemplates')[':fb:mercury:typeahead'].build();this._domElement=l.getRoot();c('DOM').appendContent(this._domElement,m.getRoot());var n=m.getNode('textfield');c('Input').setPlaceholder(n,this._placeholder);n.setAttribute('data-placeholder',this._placeholder);this._input=n;var o={node_id:this._viewNodeOrID,ctor:this._view,options:this._viewOptions},p={ctor:c('TypeaheadCore'),options:{setValueOnSelect:true}};this._typeahead=new (c('Typeahead'))(this._dataSource,o,p,m.getRoot());this._typeahead.init();var q={inline:true,behaviors:this._tokenizerBehaviors};this._tokenizer=new (c('Tokenizer'))(this._domElement,this._typeahead);this._tokenizer.init(l.getNode('tokenarea'),'participants',[],q);this._tokenizer.subscribe(['addToken','removeToken','removeAllTokens'],this._tokensChanged.bind(this));this._tokenizer.subscribe('resize',function(){this.inform('resize');}.bind(this));c('Event').listen(n,'focus',function(){this._resetDataSource();this._typeahead.init();}.bind(this));c('Event').listen(this._domElement,'click',this.focus.bind(this));c('Event').listen(n,'keydown',this.keydown.bind(this));this._heightPrev=c('DOMDimensions').getElementDimensions(this._domElement).height;},getElement:function j(){return this._domElement;},getSelectedParticipantIDs:function j(){var k=[];if(this._tokenizer)(this._tokenizer.getTokenValues()||[]).forEach(function(l){k.push('fbid:'+l);});return k;},getTokens:function j(){var k=[];if(this._tokenizer)k=this._tokenizer.getTokens();return k;},getTokenizer:function j(){return this._tokenizer;},keydown:function j(event){if(this._tokenizer.inline&&event.keyCode==c('Keys').ESC){if(c('Input').isEmpty(this._input)){var k=this._tokenizer.getLastToken();if(k&&k.isRemovable()){this._tokenizer.removeToken(k);event.stopPropagation();return;}}else{this._typeahead.getCore().reset();event.stopPropagation();return;}this.inform('esc-pressed');return;}if(c('Input').isEmpty(this._input)&&this._tokenizer.inline&&event.keyCode===c('Keys').RETURN){event.preventDefault();return this.inform('tokens-return');}},reset:function j(){this._tokenizer&&this._tokenizer.removeAllTokens();this._typeahead&&this._typeahead.getCore().reset();},focus:function j(){this._tokenizer&&this._tokenizer.focusInput();},getTypeahead:function j(){return this._typeahead;},_resetDataSource:function j(){this._dataSource.setExclusions(this._exclusions);},_tokensChanged:function j(){this.inform('tokens-changed');}});f.exports=i;}),null);
__d('MercuryTypeaheadRenderer',['cx','Event','Badge.react','CSS','DOM','Image.react','MercuryTypeaheadConstants','MercuryParticipantsConstants','React','ReactDOM','MercuryTypeaheadTemplates'],(function a(b,c,d,e,f,g,h){function i(k,l){var m;switch(k.type){case c('MercuryTypeaheadConstants').HEADER_TYPE:m=c('MercuryTypeaheadTemplates')[':fb:mercury:typeahead:header'].build();i.renderHeader(m,k);break;case c('MercuryTypeaheadConstants').USER_TYPE:case c('MercuryTypeaheadConstants').PAGE_TYPE:m=c('MercuryTypeaheadTemplates')[':fb:mercury:typeahead:result'].build();i.renderPerson(m,k);break;default:throw new Error('Unsupported result type: '+k.type);}return m.getRoot();}Object.assign(i,{renderHeader:function k(l,m){if(m.disabled){c('CSS').hide(l.getRoot());return;}var n=m.getLinkHandler&&m.getLinkHandler();if(n){var o=l.getNode('link');c('DOM').setContent(o,m.linkText);c('Event').listen(o,'click',n);}else c('CSS').hide(l.getNode('link'));l.setNodeContent('text',m.text);},renderPersonWithBigPhoto:function k(l,m){j(l,m,c('MercuryParticipantsConstants').BIG_IMAGE_SIZE);},renderPerson:function k(l,m){j(l,m,c('MercuryParticipantsConstants').IMAGE_SIZE);},renderPage:function k(l,m){j(l,m,c('MercuryParticipantsConstants').IMAGE_SIZE);}});function j(k,l,m){if(l.photo){var n=c('React').createElement(c('Image.react'),{width:m,height:m,src:l.photo});c('ReactDOM').render(n,k.getNode('image'));}if(l.text){c('DOM').setContent(k.getNode('name'),l.text);k.getRoot().setAttribute('aria-label',l.text);}var o=[];if(l.subtext||l.category){if(l.subtext)o.push(l.subtext);if(l.category)o.push(l.category);c('DOM').appendContent(k.getNode('snippet'),o.join(" \u00b7 "));}var p=null;if(l.is_verified){p=c('React').createElement(c('Badge.react'),{type:'verified',size:'xsmall'});c('ReactDOM').render(p,k.getNode('badge'));}else if(l.is_work_user){p=c('React').createElement(c('Badge.react'),{type:'work',size:'xsmall'});c('ReactDOM').render(p,k.getNode('badge'));}if(l.non_employee){if(o.length)c('DOM').prependContent(k.getNode('snippet')," \u00b7 ");var q=c('DOM').create('span',{className:"_52l8 highlight"},'(Non-Employee)');c('DOM').prependContent(k.getNode('snippet'),q);}if(l.render_type===c('MercuryTypeaheadConstants').MEETING_ROOM_PAGE_TYPE){var r={href:'/'+l.uid.toString(),target:'_blank',role:'link'};c('DOM').setAttributes(k.getNode('threadLink'),r);}}f.exports=i;}),null);
__d('TabIndexDelegator',['CSS','DOM','Event','Focus','JSXDOM'],(function a(b,c,d,e,f,g){function h(i,j){'use strict';this._placeholder=j||c('JSXDOM').button(null);this._placeholder.setAttribute('aria-hidden',true);c('CSS').addClass(this._placeholder,'accessible_elem');this._listener=c('Event').listen(this._placeholder,'click',function(){i.click();});c('Focus').relocate(this._placeholder,i);this.enable();}h.prototype.enable=function(){'use strict';c('CSS').show(this._placeholder);};h.prototype.disable=function(){'use strict';c('CSS').hide(this._placeholder);};h.prototype.getPlaceholder=function(){'use strict';return this._placeholder;};h.prototype.destroy=function(){'use strict';this._listener.remove();c('DOM').remove(this._placeholder);};f.exports=h;}),null);
__d('MercuryComposerDialogControl',['csx','fbt','Arbiter','Button','CSS','ContextualTypeaheadView','DOM','Dialog','DialogX','Event','Input','JSLogger','LayerHideOnTransition','MercuryActionStatus','MercuryDataSources','MercuryErrorInfo','MercuryFileUploader','MercuryIDs','MercuryPhotoUploader','MercuryShareLinkUploader','MercurySourceType','MercuryTypeahead','MercuryTypeaheadConstants','MercuryTypeaheadRenderer','MercuryMessages','MercuryMessageActions','MercuryMessageObject','PagesEventObserver','PagesEventType','Run','SiteData','SubscriptionsHandler','TabIndexDelegator','MercuryThreadInformer','Token','WorkFileUploadsGating'],(function a(b,c,d,e,f,g,h,i){var j=c('MercuryMessages').get(),k=c('MercuryMessageActions').get(),l=c('MercuryMessageObject').get(),m=c('MercuryThreadInformer').get(),n=c('JSLogger').create('mercury_composer_dialog');function o(fa,ga,ha,ia,ja,ka,la){this._dialog=fa;this._errorBox=c('DOM').find(fa.getRoot(),"._2oi");this._typeahead=p(this,c('DOM').find(fa.getRoot(),"._22i"),ha);this._textarea=c('DOM').find(fa.getRoot(),"._2oj");this._sendButton=c('DOM').find(fa.getRoot(),"._2ok");this._uploadWarning=c('DOM').find(fa.getRoot(),"._2wj");this._attachButtonForm=c('DOM').scry(fa.getRoot(),"._212")[0];this._photoButton=c('DOM').scry(fa.getRoot(),"._214")[0];this._confirmationDialogContent=ga;this._entryPoint=ka;this._autohide=ja;this._ref=la;this._delegator=new (c('TabIndexDelegator'))(this._sendButton);if(this._attachButtonForm){c('DOM').insertBefore(this._attachButtonForm,this._delegator.getPlaceholder());}else if(this._photoButton)c('DOM').insertBefore(this._photoButton,this._delegator.getPlaceholder());setTimeout(q.bind(this),0);r.call(this);this._subscriptionsHandler=new (c('SubscriptionsHandler'))();this._subscriptionsHandler.addSubscriptions(this._dialog.subscribe('confirm',function(){s(this);}.bind(this)),this._dialog.subscribe('hide',function(){this._subscriptionsHandler.release();}.bind(this)),m.subscribe('messages-updated',function(pa,qa){if(this._midWaitingConfirmation)for(var ra in qa)if(qa[ra][this._midWaitingConfirmation])x(this);}.bind(this)));var ma=function pa(){fa.disableBehavior(c('LayerHideOnTransition'));},na=function pa(){setTimeout(fa.enableBehavior.bind(fa,c('LayerHideOnTransition')),0);};this._subscriptionsHandler.addSubscriptions(c('Arbiter').subscribe('PhotoSnowlift.OPEN',ma),c('Arbiter').subscribe('PhotoSnowlift.CLOSE',na));var oa=c('DOM').scry(fa.getRoot(),'.fbVaultEditableGrid')[0];if(!oa)oa=c('DOM').find(fa.getRoot(),'.fbVaultGrid');if(!oa)n.error('Could not find an image grid in the "Send Message" dialog.');this._photoUploader=new (c('MercuryPhotoUploader'))(oa,this._photoButton,this._subscriptionsHandler,c('DOM').find(fa.getRoot(),"._2qi"));if(ia){c('Input').setValue(this._textarea,ia);this._shareLinkUploader.check();}c('Run').onBeforeUnload(function(){if(!this._dialog.isShown())return null;var pa=u(this);if(!v(this,pa))return null;return i._("Vous n\u2019avez pas encore fini votre message. Voulez-vous quitter sans le terminer\u00a0?");}.bind(this));}function p(fa,ga,ha){var ia={};ia[c('MercuryTypeaheadConstants').FRIEND_TYPE]={uid:c('MercuryTypeaheadConstants').FRIEND_TYPE,type:c('MercuryTypeaheadConstants').HEADER_TYPE,disabled:true};ia[c('MercuryTypeaheadConstants').NON_FRIEND_TYPE]={uid:c('MercuryTypeaheadConstants').NON_FRIEND_TYPE,text:i._("Autres personnes"),type:c('MercuryTypeaheadConstants').HEADER_TYPE};ia[c('MercuryTypeaheadConstants').PAGE_TYPE]={uid:c('MercuryTypeaheadConstants').PAGE_TYPE,text:i._("Pages"),type:c('MercuryTypeaheadConstants').HEADER_TYPE};var ja=new (c('MercuryTypeahead'))(c('MercuryDataSources').get('MercuryRecipientsDataSource'),c('ContextualTypeaheadView'));ja.setViewOption('renderer',c('MercuryTypeaheadRenderer'));ja.setViewOption('typeObjects',ia);fa._dialog.subscribe('aftershow',function(){ja.setFullWidthView(ga);ja.build();c('DOM').appendContent(ga,ja.getElement());if((ha||[]).length){ha.forEach(function(ka){ja.getTokenizer().addToken(new (c('Token'))(ka));if(ka.type==c('MercuryTypeaheadConstants').PAGE_TYPE)aa(fa,true);});fa._textarea.focus();}else ja.focus();ja.getTokenizer().setPlaceholder(i._("Nom"));});return ja;}function q(){if(c('WorkFileUploadsGating').canUploadFiles){this._fileUploader=new (c('MercuryFileUploader'))(c('DOM').find(this._dialog.getRoot(),"._2qc"),this._attachButtonForm,c('DOM').find(this._dialog.getRoot(),"._4q60 ._n"),c('DOM').find(this._dialog.getRoot(),"._2qd"));this._subscriptionsHandler.addSubscriptions(this._fileUploader.subscribe(['all-uploads-completed','upload-canceled'],z.bind(this)));}if(this._photoUploader)this._subscriptionsHandler.addSubscriptions(this._photoUploader.subscribe('all-uploads-completed',z.bind(this)));}function r(){this._shareLinkUploader=new (c('MercuryShareLinkUploader'))(c('DOM').find(this._dialog.getRoot(),"._2v0"),c('DOM').find(this._dialog.getRoot(),"._2v1"),c('DOM').find(this._dialog.getRoot(),"._2v2"),c('DOM').find(this._dialog.getRoot(),"._2v3"),this._textarea);}function s(fa){var ga=u(fa);if(ga.specific_to_list.length&&fa._fileUploader&&fa._fileUploader.isUploading()){y.call(fa);return;}if(this._midWaitingConfirmation||!v(fa,ga)||!ga.specific_to_list.length)return null;k.send(ga);w(fa,ga.message_id);t(fa,ga);}function t(fa,ga){fa._typeahead.getTokens().forEach(function(ha){if(ha.getInfo().type===c('MercuryTypeaheadConstants').PAGE_TYPE)c('PagesEventObserver').logData_DEPRECATED({page_id:ha.getValue(),event_name:c('PagesEventType').MESSAGES_SEND_ENTRY_POINT,entry_point:fa._entryPoint,message_id:ga.message_id,ref:fa._ref,thread_id:ga.thread_id},null);});}function u(fa){var ga=fa._typeahead.getTokens(),ha=ga.map(function(pa){return c('MercuryIDs').getParticipantIDFromUserID(pa.getValue());}),ia=l.constructUserGeneratedMessageObject(c('Input').getValue(fa._textarea),c('MercurySourceType').TITAN_WEB,null,ha);ia.ui_push_phase=c('SiteData').push_phase;if(ia.specific_to_list.length==1&&ia.author==ia.specific_to_list[0])ia.specific_to_list.push(ia.author);if(fa._fileUploader){var ja=fa._fileUploader.getAttachments();if(ja&&ja.length){ia.has_attachment=true;ia.raw_attachments=ja;}}if(fa._shareLinkUploader.getAttachData()){ia.has_attachment=true;ia.content_attachment=fa._shareLinkUploader.getAttachData();}if(fa._photoUploader){var ka=fa._photoUploader.getSelectedFBIDs();if(ka.length>0){ia.has_attachment=true;ia.photo_fbids=ka;}}if(fa._fileUploader){var la=fa._fileUploader.getImageFiles();if(la.length>0){ia.has_attachment=true;ia.image_ids=la;}var ma=fa._fileUploader.getVideoFiles();if(ma.length>0){ia.has_attachment=true;ia.video_ids=ma;}var na=fa._fileUploader.getAudioFiles();if(na.length>0){ia.has_attachment=true;ia.audio_ids=na;}var oa=fa._fileUploader.getFiles();if(oa.length>0){ia.has_attachment=true;ia.file_ids=oa;}}return ia;}function v(fa,ga){return !c('Input').isEmpty(fa._textarea)||ga.has_attachment;}function w(fa,ga){fa._midWaitingConfirmation=ga;c('CSS').hide(fa._errorBox);ca.bind(fa)();}function x(fa){var ga=fa._midWaitingConfirmation;delete fa._midWaitingConfirmation;var ha=j.getMessagesFromIDs([ga])[0];if(ha&&ha.status==c('MercuryActionStatus').SUCCESS){fa._dialog.hide();var ia=new (c('DialogX'))({width:c('Dialog').SIZE.STANDARD,autohide:fa._autohide,addedBehaviors:[c('LayerHideOnTransition')]},fa._confirmationDialogContent);ia.show();fa._dialog.inform('Messenger/message-sent',{confirmation_dialog:ia});}else{c('DOM').setContent(fa._errorBox,c('MercuryErrorInfo').getMessage(ha.error_data));c('CSS').show(fa._errorBox);da.call(fa);}}function y(){this._blocked=true;c('CSS').show(this._uploadWarning);ca.bind(this)();}function z(){if(this._blocked){if(this._fileUploader&&this._fileUploader.isUploading())return;this._blocked=false;c('CSS').hide(this._uploadWarning);s(this);}}function aa(fa,ga){if(ga)fa._typeaheadDisabled=true;var ha=fa._typeahead.getTypeahead().getCore();ha.getElement().setAttribute('disabled','disabled');}function ba(fa){if(!fa._typeaheadDisabled){var ga=fa._typeahead.getTypeahead().getCore();ga.getElement().removeAttribute('disabled');}}function ca(){aa(this,false);this._textarea.setAttribute('disabled','disabled');c('Button').setEnabled(this._sendButton,false);this._delegator.disable();}function da(){ba(this);this._textarea.removeAttribute('disabled');c('Button').setEnabled(this._sendButton,true);this._delegator.enable();}function ea(fa){var ga=fa._typeahead.getTokens();if(ga.length==1){var ha=ga[0].getInfo().type;return ha===c('MercuryTypeaheadConstants').USER_TYPE;}else return false;}f.exports=o;}),null);
__d('MercuryRecipientsDataSource',['DataSource','MercuryTypeaheadConstants'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('DataSource'));i=h&&h.prototype;function j(k){'use strict';k=k||{};k.kanaNormalization=true;i.constructor.call(this,k);}j.prototype.buildData=function(k){'use strict';var l=[],m=[];k.forEach(function(n){var o=i.getEntry.call(this,n);if(o.render_type==c('MercuryTypeaheadConstants').NON_FRIEND_TYPE){var p=c('MercuryTypeaheadConstants').COMPOSER_NON_FRIENDS_MAX;if(m.length<p)m.push(n);}else if(l.length<c('MercuryTypeaheadConstants').COMPOSER_FRIENDS_MAX){o.render_type=c('MercuryTypeaheadConstants').FRIEND_TYPE;l.push(n);}}.bind(this));return i.buildData.call(this,l.concat(m));};f.exports=j;}),null);