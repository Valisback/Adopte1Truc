if (self.CavalryLogger) { CavalryLogger.start_js(["0smMA"]); }

__d('ReactComposerFormattedTextActionType',['keyMirrorRecursive'],(function a(b,c,d,e,f,g){'use strict';f.exports=c('keyMirrorRecursive')({SET_SELECTED_INDEX:null,SET_SELECTED_INDEX_BUT_NOT_PREV_SELECTED_INDEX:null,SET_SHOULD_AUTO_OPEN_WHEN_USER_STARTS_TYPING:null,SET_SHOULD_FADE_IN_PICKER:null,TOGGLE_COLLAPSED:null},'ReactComposerFormattedTextActionType');}),null);
__d('ReactComposerFormattedTextStore',['ReactComposerFormattedTextActionType','ReactComposerStoreBase'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('ReactComposerStoreBase'));i=h&&h.prototype;function j(){i.constructor.call(this,function(){return {formattedTextPickerCollapsed:false,selectedIndex:-1,prevSelectedIndex:-1,shouldAutoOpenWhenUserStartsTyping:false,shouldFadeInPicker:false};},function(k){switch(k.type){case c('ReactComposerFormattedTextActionType').SET_SELECTED_INDEX:this&&this.$ReactComposerFormattedTextStore1(k);break;case c('ReactComposerFormattedTextActionType').SET_SELECTED_INDEX_BUT_NOT_PREV_SELECTED_INDEX:this&&this.$ReactComposerFormattedTextStore2(k);break;case c('ReactComposerFormattedTextActionType').SET_SHOULD_AUTO_OPEN_WHEN_USER_STARTS_TYPING:this&&this.$ReactComposerFormattedTextStore3(k);break;case c('ReactComposerFormattedTextActionType').SET_SHOULD_FADE_IN_PICKER:this&&this.$ReactComposerFormattedTextStore4(k);break;case c('ReactComposerFormattedTextActionType').TOGGLE_COLLAPSED:this&&this.$ReactComposerFormattedTextStore5(k);break;}}.bind(this));}j.prototype.getTextFormatPresetID=function(k){return this.getComposerData(k).textFormatPresetID;};j.prototype.getSelectedIndex=function(k){return this.getComposerData(k).selectedIndex;};j.prototype.getPrevSelectedIndex=function(k){return this.getComposerData(k).prevSelectedIndex;};j.prototype.getShouldAutoOpenWhenUserStartsTyping=function(k){return this.getComposerData(k).shouldAutoOpenWhenUserStartsTyping;};j.prototype.getShouldFadeInPicker=function(k){return this.getComposerData(k).shouldFadeInPicker;};j.prototype.getCollapsed=function(k){return this.getComposerData(k).formattedTextPickerCollapsed;};j.prototype.$ReactComposerFormattedTextStore1=function(k){var l=this.validateAction(k,['composerID','selectedIndex','textFormats']),m=l[0],n=l[1],o=l[2],p=this.getComposerData(m);p.textFormatPresetID=this.$ReactComposerFormattedTextStore6(n,o);p.selectedIndex=n;p.prevSelectedIndex=n;this.emitChange(m);};j.prototype.$ReactComposerFormattedTextStore2=function(k){var l=this.validateAction(k,['composerID','selectedIndex','textFormats']),m=l[0],n=l[1],o=l[2],p=this.getComposerData(m);p.textFormatPresetID=this.$ReactComposerFormattedTextStore6(n,o);p.selectedIndex=n;this.emitChange(m);};j.prototype.$ReactComposerFormattedTextStore3=function(k){var l=this.validateAction(k,['composerID','shouldAutoOpenWhenUserStartsTyping']),m=l[0],n=l[1],o=this.getComposerData(m);o.shouldAutoOpenWhenUserStartsTyping=n;this.emitChange(m);};j.prototype.$ReactComposerFormattedTextStore4=function(k){var l=this.validateAction(k,['composerID','shouldFadeInPicker']),m=l[0],n=l[1],o=this.getComposerData(m);o.shouldFadeInPicker=n;this.emitChange(m);};j.prototype.$ReactComposerFormattedTextStore5=function(k){var l=this.validateAction(k,'composerID'),m=this.getComposerData(l);m.formattedTextPickerCollapsed=!m.formattedTextPickerCollapsed;this.emitChange(l);};j.prototype.$ReactComposerFormattedTextStore6=function(k,l){var m=null;if(k!=null&&k!==-1){var n=l&&Object.prototype.hasOwnProperty.call(l,k)?l[k]:null;if(n&&n.presetID)m=n.presetID;}return m;};f.exports=new j();}),null);
__d('ReactComposerFormattedTextActions',['ReactComposerDispatcher','ReactComposerFormattedTextActionType','ReactComposerFormattedTextStore'],(function a(b,c,d,e,f,g){'use strict';c('ReactComposerFormattedTextStore');h.prototype.setSelectedIndex=function(i,j,k){c('ReactComposerDispatcher').dispatch({composerID:i,type:c('ReactComposerFormattedTextActionType').SET_SELECTED_INDEX,selectedIndex:j,textFormats:k});};h.prototype.setSelectedIndexButNotPrevSelectedIndex=function(i,j,k){c('ReactComposerDispatcher').dispatch({composerID:i,type:c('ReactComposerFormattedTextActionType').SET_SELECTED_INDEX_BUT_NOT_PREV_SELECTED_INDEX,selectedIndex:j,textFormats:k});};h.prototype.setShouldAutoOpenWhenUserStartsTyping=function(i,j){c('ReactComposerDispatcher').dispatch({composerID:i,type:c('ReactComposerFormattedTextActionType').SET_SHOULD_AUTO_OPEN_WHEN_USER_STARTS_TYPING,shouldAutoOpenWhenUserStartsTyping:j});};h.prototype.setShouldFadeInPicker=function(i,j){c('ReactComposerDispatcher').dispatch({composerID:i,type:c('ReactComposerFormattedTextActionType').SET_SHOULD_FADE_IN_PICKER,shouldFadeInPicker:j});};h.prototype.toggleCollapsed=function(i){c('ReactComposerDispatcher').dispatch({composerID:i,type:c('ReactComposerFormattedTextActionType').TOGGLE_COLLAPSED});};function h(){}f.exports=new h();}),null);
__d('ReactComposerFormattedTextPickerComponent.react',['cx','Grid.react','Link.react','React'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('Grid.react').GridItem,l=c('React').PropTypes;i=babelHelpers.inherits(m,c('React').Component);j=i&&i.prototype;m.prototype.$ReactComposerFormattedTextPickerComponent1=function(n){this.props.onSelect&&this.props.onSelect(n);};m.prototype.$ReactComposerFormattedTextPickerComponent2=function(){var n=[];for(var o=m.NO_BG_COLOR;o<this.props.textFormats.length;o++){var p=c('React').createElement(k,{key:o},c('React').createElement('div',{className:o===this.props.selectedIndex?"_9sg":''},c('React').createElement(c('Link.react'),{href:'#',onClick:o===this.props.selectedIndex?null:this.$ReactComposerFormattedTextPickerComponent1.bind(this,o)},c('React').createElement('div',{className:"_23jq"+(' '+"_2j78")+(o===this.props.selectedIndex?' '+"_23jt":'')+(o===m.NO_BG_COLOR?' '+"_23ju":''),style:o===m.NO_BG_COLOR?null:this.props.textFormats[o].pickerCircleStyle}))));n.push(p);}return n;};m.prototype.$ReactComposerFormattedTextPickerComponent3=function(){return c('React').createElement(k,null,c('React').createElement(c('Link.react'),{href:'#',onClick:this.props.onToggle},c('React').createElement('div',{className:"_23jq"+(!this.props.collapsed?' '+"_2j79":'')+(this.props.collapsed?' '+"_2j7a":'')},c('React').createElement('div',{className:!this.props.collapsed?"_2j7b":''}))));};m.prototype.render=function(){var n=this.props.noSproutDesign&&this.$ReactComposerFormattedTextPickerComponent3(),o=null,p=1;if(!this.props.collapsed){o=this.$ReactComposerFormattedTextPickerComponent2();p+=o.length;}return c('React').createElement(c('Grid.react'),{cols:p,role:'presentation',className:"_23jv"+(this.props.suppressTransition?' '+"_3oia":'')+(this.props.hidden?' '+"_akr":'')+(this.props.noSproutDesign?' '+"_2j7c":'')},n,o);};function m(){i.apply(this,arguments);}m.NO_BG_COLOR=-1;m.propTypes={collapsed:l.bool,hidden:l.bool,noSproutDesign:l.bool,onSelect:l.func.isRequired,onToggle:l.func,selectedIndex:l.number,suppressTransition:l.bool,textFormats:l.arrayOf(l.object).isRequired};f.exports=m;}),null);
__d("XStickyFormattedTextController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/sticky_formatted_text\/",{preset_id:{type:"Int"},is_set:{type:"Bool",defaultValue:false}});}),null);
__d('ReactComposerFormattedTextPickerContainerMixin',['invariant','ReactComposerAttachmentStore','ReactComposerEvents','ReactComposerFormattedTextActions','ReactComposerFormattedTextStore','ReactComposerFormattedTextPickerComponent.react','ReactComposerMediaUploadStore','ReactComposerMinutiaeAttachmentStore','ReactComposerPostToGroupStore','ReactComposerPrefillStore','ReactComposerPropsAndStoreBasedStateMixin','ReactComposerScrapedAttachmentStore','ReactComposerStatusStore','ReactComposerTaggerActions','ReactComposerTaggerStore','ReactComposerTaggerType','Arbiter','AsyncRequest','XStickyFormattedTextController','bind'],(function a(b,c,d,e,f,g,h){'use strict';var i=true,j={_prefillSubscription:undefined,mixins:[c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerAttachmentStore'),c('ReactComposerFormattedTextStore'),c('ReactComposerMediaUploadStore'),c('ReactComposerMinutiaeAttachmentStore'),c('ReactComposerPostToGroupStore'),c('ReactComposerScrapedAttachmentStore'),c('ReactComposerStatusStore'),c('ReactComposerTaggerStore'))],statics:{beforeCalculateInitialState:function k(l,m){if(i){c('ReactComposerFormattedTextActions').setSelectedIndex(l,m.defaultFormat!=null?m.defaultFormat:c('ReactComposerFormattedTextPickerComponent.react').NO_BG_COLOR,m.textFormats);if(m.shouldAutoOpenWhenUserStartsTyping)c('ReactComposerFormattedTextActions').setShouldAutoOpenWhenUserStartsTyping(l,m.shouldAutoOpenWhenUserStartsTyping);}if(m.stickyStylesEnabled&&!i){var n=c('XStickyFormattedTextController').getURIBuilder().setBool('is_set',false).getURI();new (c('AsyncRequest'))().setURI(n).setHandler(c('bind')(this,function(o){if(o&&o.payload&&o.payload.index!=null){var p=o.payload.index;if(p===c('ReactComposerFormattedTextPickerComponent.react').NO_BG_COLOR&&!o.payload.hasUserUnformattedText)p=m.defaultFormat!=null?m.defaultFormat:c('ReactComposerFormattedTextPickerComponent.react').NO_BG_COLOR;c('ReactComposerFormattedTextActions').setSelectedIndex(l,p,m.textFormats);}})).send();}},calculateState:function k(l,m){var n=c('ReactComposerStatusStore').getMessageText(l).match(/\n/g),o=n?n.length>m.maxNewlines:false,p=c('ReactComposerTaggerStore').getTaggerData(l,c('ReactComposerTaggerType').STICKER),q=true;if(c('ReactComposerScrapedAttachmentStore').hasAttachment(l)||c('ReactComposerMediaUploadStore').getUploadsCount(l)!==0||c('ReactComposerTaggerStore').hasExplicitLocation(l)||c('ReactComposerTaggerStore').hasMarkdown(l)||p&&p.stickerID||c('ReactComposerMinutiaeAttachmentStore').getMarkup(l)!=null||c('ReactComposerStatusStore').getTextLength(l)>m.textLengthLimit||o||c('ReactComposerPostToGroupStore').getIsTabSelected(l))q=false;var r=c('ReactComposerTaggerStore').getSelectedTagger(l)===this.taggerID;return {isSelected:r,canUseFormattedText:q,collapsed:c('ReactComposerFormattedTextStore').getCollapsed(l),fadingInPicker:c('ReactComposerFormattedTextStore').getShouldFadeInPicker(l),prevSelectedIndex:c('ReactComposerFormattedTextStore').getPrevSelectedIndex(l),selectedIndex:c('ReactComposerFormattedTextStore').getSelectedIndex(l),shouldAutoOpenWhenUserStartsTyping:c('ReactComposerFormattedTextStore').getShouldAutoOpenWhenUserStartsTyping(l),shouldDisplay:q&&(m.noSproutDesign||r),taggerData:c('ReactComposerTaggerStore').getTaggerData(l,this.taggerID),taggerSource:c('ReactComposerTaggerStore').getTaggerSource(l,this.taggerID)};}},handleSaveStickyPreset:function k(l){if(!this.props.stickyStylesEnabled)return;var m=c('XStickyFormattedTextController').getURIBuilder().setInt('preset_id',l===c('ReactComposerFormattedTextPickerComponent.react').NO_BG_COLOR?0:c('ReactComposerFormattedTextStore').getTextFormatPresetID(this.context.composerID)).setBool('is_set',true).getURI();new (c('AsyncRequest'))().setMethod('POST').setURI(m).send();},componentWillMount:function k(){this._prefillSubscription=c('Arbiter').subscribe(c('ReactComposerEvents').SET_PREFILL_DATA+this.context.composerID,this._handlePrefill);this.constructor.taggerID||h(0);},componentDidMount:function k(){if(i){if(this.props.autoOpen)setTimeout(function(){c('ReactComposerFormattedTextActions').setShouldFadeInPicker(this.context.composerID,true);if(c('ReactComposerTaggerStore').getSelectedTagger(this.context.composerID)===null)c('ReactComposerTaggerActions').selectTagger(this.context.composerID,this.constructor.loggingName,this.constructor.taggerID);}.bind(this),0);i=false;}},componentWillUnmount:function k(){this._prefillSubscription&&this._prefillSubscription.unsubscribe();this._prefillSubscription=null;},_handlePrefill:function k(){var l=c('ReactComposerPrefillStore').getAndEraseNestedField(this.context.composerID,['taggersData',this.constructor.taggerID]);if(l)c('ReactComposerTaggerActions').setTaggerDataWithoutLogging(this.context.composerID,this.constructor.taggerID,l);}};f.exports=j;}),null);
__d('ReactComposerFormattedTextPickerButton.react',['cx','fbt','ReactComposerLoggingName','ReactComposerTaggerButtonMixin','ReactComposerTaggerType','React'],(function a(b,c,d,e,f,g,h,i){'use strict';var j=c('React').createClass({displayName:'ReactComposerFormattedTextPickerButton',mixins:[c('ReactComposerTaggerButtonMixin')],statics:{taggerID:c('ReactComposerTaggerType').FORMATTED_TEXT,loggingName:c('ReactComposerLoggingName').FORMATTED_TEXT_BUTTON},getTitle:function k(){return i._("Ajoutez une couleur d\u2019arri\u00e8re-plan \u00e0 votre publication");},getTooltip:function k(){return i._("Ajoutez une couleur d\u2019arri\u00e8re-plan \u00e0 votre publication");},getClassName:function k(){return "_cod";}});f.exports=j;}),null);
__d('ReactComposerFormattedTextPickerContainer.react',['cx','csx','ReactComposerEvents','ReactComposerFormattedTextPickerComponent.react','ReactComposerFormattedTextPickerContainerMixin','ReactComposerLoggingName','ReactComposerTaggerActions','ReactComposerTaggerType','ReactComposerFormattedTextActions','Arbiter','CSS','DOM','DOMQuery','React'],(function a(b,c,d,e,f,g,h,i){'use strict';var j=c('React').PropTypes,k=c('React').createClass({displayName:'ReactComposerFormattedTextPickerContainer',_suppressTransition:false,_memoizedComposerID:null,_memoizedComposerRoot:null,_memoizedComposerBody:null,_memoizedComposerOverlay:null,_memoizedComposerWrapper:null,_memoizedComposerTextInput:null,_memoizedComposerTaggerDiv:null,mixins:[c('ReactComposerFormattedTextPickerContainerMixin')],propTypes:{autoOpen:j.bool,composerFocused:j.bool,defaultFormat:j.number,maxNewlines:j.number,noSproutDesign:j.bool,stickyStylesEnabled:j.bool,textFormats:j.arrayOf(j.object).isRequired,textLengthLimit:j.number},statics:{taggerID:c('ReactComposerTaggerType').FORMATTED_TEXT,loggingName:c('ReactComposerLoggingName').FORMATTED_TEXT_TAGGER},render:function l(){this._updateBackground(this.state.selectedIndex);if(!this.state.shouldDisplay||this.props.noSproutDesign&&!this.props.composerFocused)return null;return c('React').createElement(c('ReactComposerFormattedTextPickerComponent.react'),{collapsed:this.state.collapsed,hidden:this.state.fadingInPicker,noSproutDesign:this.props.noSproutDesign,onSelect:this._onSelect,onToggle:this._onToggle,selectedIndex:this.state.selectedIndex,suppressTransition:this._suppressTransition,textFormats:this.props.textFormats});},componentWillMount:function l(){if(!this.state.canUseFormattedText){c('ReactComposerTaggerActions').setShouldHideTaggerButton(this.context.composerID,c('ReactComposerTaggerType').FORMATTED_TEXT,true);}else c('ReactComposerTaggerActions').setShouldHideTaggerButton(this.context.composerID,c('ReactComposerTaggerType').FORMATTED_TEXT,false);},componentDidMount:function l(){if(this.props.noSproutDesign){var m=this._getComposerBody();if(m)c('CSS').addClass(m,"_2j7c");}},componentWillUpdate:function l(m,n){if(this.state.selectedIndex!==n.selectedIndex&&(this.state.selectedIndex===c('ReactComposerFormattedTextPickerComponent.react').NO_BG_COLOR||n.selectedIndex===c('ReactComposerFormattedTextPickerComponent.react').NO_BG_COLOR))this._suppressTransition=true;if(n.selectedIndex!==c('ReactComposerFormattedTextPickerComponent.react').NO_BG_COLOR&&this.state.selectedIndex!==n.selectedIndex)this._updateOverlay();},componentDidUpdate:function l(m,n){if(!n.isSelected&&this.state.isSelected){this._onPickerOpened();}else if(n.isSelected&&!this.state.isSelected){this._onPickerClosed();}else if(!n.canUseFormattedText&&this.state.canUseFormattedText){this._onBecameEligible();}else if(n.canUseFormattedText&&!this.state.canUseFormattedText)this._onBecameIneligible();if(n.selectedIndex!==this.state.selectedIndex)this._onSelectedIndexChanged();if(n.shouldAutoOpenWhenUserStartsTyping&&this.state.shouldDisplay)c('ReactComposerFormattedTextActions').setShouldAutoOpenWhenUserStartsTyping(this.context.composerID,false);if(this.state.fadingInPicker&&this.state.shouldDisplay)c('ReactComposerFormattedTextActions').setShouldFadeInPicker(this.context.composerID,false);},_onPickerOpened:function l(){this._focusComposerTextInput();var m=this._getComposerRoot();if(m)c('CSS').removeClass(m,"_10m_");var n=this.state.selectedIndex!==c('ReactComposerFormattedTextPickerComponent.react').NO_BG_COLOR;this._setShouldHideTaggersDiv(n);},_focusComposerTextInput:function l(){c('Arbiter').inform(c('ReactComposerEvents').ACTIVATE_ATTACHMENT+this.context.composerID);},_onPickerClosed:function l(){var m=this._getComposerRoot();if(m)c('CSS').addClass(m,"_10m_");this._setShouldHideTaggersDiv(false);},_setShouldHideTaggersDiv:function l(m){var n=this._getComposerTaggerDiv();if(!n)return;if(m){c('CSS').addClass(n,"_10n0");}else c('CSS').removeClass(n,"_10n0");},_getComposerRoot:function l(){if(this._memoizedComposerRoot&&this.context.composerID===this._memoizedComposerID)return this._memoizedComposerRoot;this._memoizedComposerID=this.context.composerID;this._memoizedComposerRoot=this._domScry(c('DOM').getRootElement(),"._36bx");return this._memoizedComposerRoot;},_getComposerBody:function l(){if(this._memoizedComposerBody&&this.context.composerID===this._memoizedComposerID)return this._memoizedComposerBody;var m=this._getComposerRoot();if(!m)return null;this._memoizedComposerBody=this._domScry(m,"._i-o");return this._memoizedComposerBody;},_getComposerOverlay:function l(){if(this._memoizedComposerOverlay&&this.context.composerID===this._memoizedComposerID)return this._memoizedComposerOverlay;var m=this._getComposerRoot();if(!m)return null;this._memoizedComposerOverlay=this._domScry(m,"._3enz");return this._memoizedComposerOverlay;},_getComposerWrapper:function l(){if(this._memoizedComposerWrapper&&this.context.composerID===this._memoizedComposerID)return this._memoizedComposerWrapper;var m=this._getComposerRoot();if(!m)return null;this._memoizedComposerWrapper=this._domScry(m,"._3eny");return this._memoizedComposerWrapper;},_getComposerTextInput:function l(){if(this._memoizedComposerTextInput&&this.context.composerID===this._memoizedComposerID)return this._memoizedComposerTextInput;var m=this._getComposerBody();if(!m)return null;this._memoizedComposerTextInput=this._domScry(m,"._395");return this._memoizedComposerTextInput;},_getComposerTaggerDiv:function l(){if(this._memoizedComposerTaggerDiv&&this.context.composerID===this._memoizedComposerID)return this._memoizedComposerTaggerDiv;var m=this._getComposerRoot();if(!m)return null;this._memoizedComposerTaggerDiv=this._domScry(m,"._1idc");return this._memoizedComposerTaggerDiv;},_domScry:function l(m,n){var o=c('DOMQuery').scry(m,n);if(!o||o.length===0)return null;return o[o.length-1];},_onBecameEligible:function l(){c('ReactComposerTaggerActions').setShouldHideTaggerButton(this.context.composerID,c('ReactComposerTaggerType').FORMATTED_TEXT,false);if(this.state.prevSelectedIndex!=null)c('ReactComposerFormattedTextActions').setSelectedIndex(this.context.composerID,this.state.prevSelectedIndex,this.props.textFormats);},_onBecameIneligible:function l(){c('ReactComposerTaggerActions').setShouldHideTaggerButton(this.context.composerID,c('ReactComposerTaggerType').FORMATTED_TEXT,true);var m=this.state.selectedIndex!==c('ReactComposerFormattedTextPickerComponent.react').NO_BG_COLOR;if(m)c('ReactComposerFormattedTextActions').setSelectedIndexButNotPrevSelectedIndex(this.context.composerID,c('ReactComposerFormattedTextPickerComponent.react').NO_BG_COLOR,this.props.textFormats);},_onSelectedIndexChanged:function l(){var m=this.state.selectedIndex!==c('ReactComposerFormattedTextPickerComponent.react').NO_BG_COLOR;if(!this.props.noSproutDesign)this._setShouldHideTaggersDiv(m);c('ReactComposerTaggerActions').setTaggerData(this.context.composerID,this.constructor.loggingName,c('ReactComposerTaggerType').FORMATTED_TEXT,{formatActive:m});},_updateBackground:function l(m){var n=this._getComposerRoot();if(!n)return;var o=this._getComposerBody();if(!o)return;var p=this._getComposerOverlay();if(!p)return;var q=this._getComposerWrapper();if(!q)return;var r=this._getStyles(m);c('DOM').setAttributes(o,{style:r.bodyStyle});if(m!==c('ReactComposerFormattedTextPickerComponent.react').NO_BG_COLOR){c('CSS').addClass(n,"_5zno");c('CSS').addClass(n,"_1mjk");c('CSS').addClass(o,"_2ihx");c('CSS').addClass(q,"_2ihx");c('CSS').addClass(p,"_2ihx");c('CSS').addClass(p,"_4xe1");}else{c('CSS').removeClass(n,"_5zno");c('CSS').removeClass(n,"_1mjk");c('CSS').removeClass(o,"_2ihx");c('CSS').removeClass(q,"_2ihx");c('CSS').removeClass(p,"_2ihx");c('CSS').removeClass(p,"_4xe1");}var s=this._getComposerTextInput();if(!s)return;c('DOM').setAttributes(s,{style:r.textInputStyle});},_updateOverlay:function l(){var m=this._getComposerRoot();if(!m)return;var n=this._getComposerBody();if(!n)return;var o=this._getComposerOverlay();if(!o)return;var p=this._getStyles(this.state.selectedIndex);c('DOM').setAttributes(o,{style:p.bodyStyle});var q=function r(s){c('CSS').removeClass(o,"_1wnq");c('CSS').addClass(o,"_1wnr");c('CSS').addClass(o,"_3eo2");o.removeEventListener('transitionend',r,false);};c('CSS').removeClass(o,"_3eo2");o.addEventListener('transitionend',q,false);c('CSS').addClass(o,"_1wnq");c('CSS').removeClass(o,"_1wnr");},_onSelect:function l(m){if(this.state.canUseFormattedText){c('ReactComposerFormattedTextActions').setSelectedIndex(this.context.composerID,m,this.props.textFormats);this.handleSaveStickyPreset(m);c('Arbiter').inform(c('ReactComposerEvents').ACTIVATE_ATTACHMENT+this.context.composerID);}},_onToggle:function l(){c('ReactComposerFormattedTextActions').toggleCollapsed(this.context.composerID);},_getStyles:function l(m){var n='',o='';if(m!=null&&m!==c('ReactComposerFormattedTextPickerComponent.react').NO_BG_COLOR){var p=this.props.textFormats&&Object.prototype.hasOwnProperty.call(this.props.textFormats,m)?this.props.textFormats[m]:null;if(p&&p.bodyStyle&&p.textInputStyle){n=p.bodyStyle;o=p.textInputStyle;}}return {bodyStyle:n,textInputStyle:o};}});f.exports=k;}),null);