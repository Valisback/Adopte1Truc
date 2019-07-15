if (self.CavalryLogger) { CavalryLogger.start_js(["cd9Tr"]); }

__d('MercuryJewelCountControl',['Arbiter','MercuryDispatcher','MercuryThreadInformer','MercuryUnseenState','UserActivity','isInFocusMode'],(function a(b,c,d,e,f,g){function h(i){'use strict';var j=c('MercuryDispatcher').get(),k=c('MercuryThreadInformer').get();this.$MercuryJewelCountControl2=c('MercuryUnseenState').get();this.render();j.subscribe('model-update-completed',function(l,m){this.$MercuryJewelCountControl3(false);}.bind(this));k.subscribe('unseen-updated',function(){return this.render();}.bind(this));this.$MercuryJewelCountControl1=i;this.$MercuryJewelCountControl1.subscribe('marked-seen',function(){this.$MercuryJewelCountControl3(true);}.bind(this));}h.prototype.render=function(){'use strict';var i=c('isInFocusMode')()?0:this.$MercuryJewelCountControl2.getUnseenCount();c('Arbiter').inform('jewel/count-updated',{jewel:'mercurymessages',count:i},c('Arbiter').BEHAVIOR_STATE);};h.prototype.$MercuryJewelCountControl3=function(i){'use strict';if(i||this.$MercuryJewelCountControl1.isOpen()&&c('UserActivity').isActive())this.$MercuryJewelCountControl2.markAsSeen();};h.constructStores=function(){'use strict';c('MercuryUnseenState').get();};f.exports=h;}),null);
__d('MercuryPresenceIndicator.react',['cx','fbt','Arbiter','AvailableListConstants','MercuryIDs','PresenceStatus','React','SubscriptionsHandler'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').PureComponent);k=j&&j.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.$MercuryPresenceIndicator2=function(){if(!c('MercuryIDs').isCanonical(this.props.threadID)){return null;}else{var s=c('MercuryIDs').getUserIDFromThreadID(this.props.threadID);return c('PresenceStatus').get(s);}}.bind(this),this.$MercuryPresenceIndicator3=function(s){return "presenceIndicator"+(c('MercuryIDs').isGroupChat(this.props.threadID)?' '+"groupThread":'')+(s==c('AvailableListConstants').ACTIVE?' '+"presenceActive":'');}.bind(this),this.$MercuryPresenceIndicator4=function(s){switch(s){case c('AvailableListConstants').ACTIVE:return i._("Actif");default:return null;}},o;}m.prototype.componentDidMount=function(){this.$MercuryPresenceIndicator1=new (c('SubscriptionsHandler'))();this.$MercuryPresenceIndicator1.addSubscriptions(c('Arbiter').subscribe(c('AvailableListConstants').ON_AVAILABILITY_CHANGED,function(){return this.forceUpdate();}.bind(this)));};m.prototype.componentWillUnmount=function(){this.$MercuryPresenceIndicator1&&this.$MercuryPresenceIndicator1.release();};m.prototype.render=function(){var n=this.$MercuryPresenceIndicator2();return c('React').createElement('span',{className:this.$MercuryPresenceIndicator3(n)},c('React').createElement('span',{className:'accessible_elem'},this.$MercuryPresenceIndicator4(n)));};m.propTypes={threadID:l.string.isRequired};f.exports=m;}),null);
__d('MercuryThreadPermalink.react',['Link.react','React','WebMessengerThreadPermalinks'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').PureComponent);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.state={permalinkURI:'#'},m;}k.prototype.componentDidMount=function(){this.$MercuryThreadPermalink1(this.props);};k.prototype.componentWillReceiveProps=function(l){if(l.threadID!==this.props.threadID||l.folder!==this.props.folder)this.$MercuryThreadPermalink1(l);};k.prototype.render=function(){return c('React').createElement(c('Link.react'),{className:this.props.className,href:this.state.permalinkURI,onClick:this.props.onClick,role:'button'},this.props.children);};k.prototype.$MercuryThreadPermalink1=function(l){this.setState({permalinkURI:'#'});c('WebMessengerThreadPermalinks').getThreadURI(l.threadID,function(m){return this.setState({permalinkURI:m});}.bind(this),l.folder);};k.propTypes={className:j.string,children:j.any,threadID:j.string.isRequired,viewer:j.string.isRequired,folder:j.string,onClick:j.func};f.exports=k;}),null);
__d('MercuryThreadReadToggle.react',['fbt','invariant','MercuryThreadActions','React','ReadToggle.react'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').PureComponent);k=j&&j.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.$MercuryThreadReadToggle1=function(s){if(s){s.preventDefault();s.stopPropagation();}var t=c('MercuryThreadActions').getForFBID(this.props.viewer);this.props.unreadCount>0?t.markRead(this.props.threadID):t.markUnread(this.props.threadID);}.bind(this),o;}m.prototype.render=function(){this.props.unreadCount>=0||i(0);return c('React').createElement(c('ReadToggle.react'),{isRead:this.props.unreadCount===0,onClick:this.$MercuryThreadReadToggle1,readLabel:h._("Marquer comme non lu"),unreadLabel:h._("Marquer comme lu(s)")});};m.propTypes={threadID:l.string.isRequired,viewer:l.string.isRequired,unreadCount:l.number.isRequired};f.exports=m;}),null);
__d('MessagesJewelInlineThumbnail.react',['cx','MercuryAttachmentType','React'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.$MessagesJewelInlineThumbnail1=function(){var r=this.props.thread;if(!r.snippet_attachments)return [];return r.snippet_attachments.filter(function(s){return s.attach_type===c('MercuryAttachmentType').PHOTO;});}.bind(this),n;}l.prototype.render=function(){var m=this.$MessagesJewelInlineThumbnail1();if(m.length===0)return c('React').createElement('span',null);var n=m[0].thumbnail_url;if(!n)return c('React').createElement('span',null);var o=c('React').createElement('span',{className:"_56hv"},c('React').createElement('i',{style:{backgroundImage:'url('+n+')'}}));if(m.length>1)o=c('React').createElement('span',null,c('React').createElement('span',{className:"_56hy"}),o);return o;};l.propTypes={thread:k.object.isRequired};f.exports=l;}),null);
__d('MessagesJewelThreadListRow.react',['cx','fbt','FBRTCCore','ImageBlock.react','immutable','ImmutableObject','MercuryPresenceIndicator.react','MercurySeenIndicator.react','MercuryThreadImage.react','MercuryThreadPermalink.react','MercuryThreadReadToggle.react','MercuryThreadSnippet.react','MercuryThreadTimestamp.react','MercuryThreadTitle.react','MercuryTimestamp','MessagesJewelInlineThumbnail.react','MNAdsMessageUtils','React','RTCConfig','FBRTCLogger','UserAgent','XUIButton.react'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('FBRTCLogger').Trigger,m=c('React').PropTypes;j=babelHelpers.inherits(n,c('React').PureComponent);k=j&&j.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=k.constructor).call.apply(o,[this].concat(r)),this.$MessagesJewelThreadListRow9=function(t){t.preventDefault();t.stopPropagation();var u=this.props.thread,v=u.rtc_call_data,w=u.thread_fbid;c('FBRTCCore').startGroupCall({conferenceName:'GROUP:'+w,hasVideo:true,serverInfoData:v.server_info_data,trigger:l.MULTIWAY_THREAD_LIST_JOIN_CALL_BUTTON});}.bind(this),p;}n.prototype.render=function(){var o=c('UserAgent').isBrowser('Chrome')&&!c('UserAgent').isPlatform('Windows')?c('React').createElement('div',{className:'author fixemoji'},this.$MessagesJewelThreadListRow1(),this.$MessagesJewelThreadListRow2()):c('React').createElement('div',{className:'author'},c('React').createElement('strong',null,this.$MessagesJewelThreadListRow1()),this.$MessagesJewelThreadListRow2()),p=c('React').createElement(c('ImageBlock.react'),{spacing:'medium'},c('React').createElement('div',{className:"MercuryThreadImage _4qeb"},this.$MessagesJewelThreadListRow3()),c('React').createElement('div',{className:'content'},o,c('React').createElement('div',{className:'snippet preview'},this.$MessagesJewelThreadListRow4(),this.$MessagesJewelThreadListRow5()),c('React').createElement('div',{className:'time'},c('MNAdsMessageUtils').isAdsMessageRequest(this.props.thread)?c('MNAdsMessageUtils').renderAdsMessageRequestStatus():this.$MessagesJewelThreadListRow6()),this.$MessagesJewelThreadListRow7()),c('React').createElement('div',null,c('React').createElement(c('MessagesJewelInlineThumbnail.react'),{thread:this.props.thread}),c('React').createElement('div',{className:'x_div'},this.$MessagesJewelThreadListRow8())));return c('React').createElement('li',{className:this.props.thread.unread_count>0?"jewelItemNew":''},c('React').createElement(c('MercuryThreadPermalink.react'),{className:'messagesContent',threadID:this.props.thread.thread_id,viewer:this.props.viewer,folder:this.props.thread.folder,onClick:this.props.onClick},p));};n.prototype.$MessagesJewelThreadListRow2=function(){if(!this.props.showPresence)return null;return c('React').createElement(c('MercuryPresenceIndicator.react'),{threadID:this.props.thread.thread_id});};n.prototype.$MessagesJewelThreadListRow3=function(o){return c('React').createElement(c('MercuryThreadImage.react'),{size:o,thread:this.props.thread,useBackground:true,viewer:this.props.viewer});};n.prototype.$MessagesJewelThreadListRow1=function(){return c('React').createElement(c('MercuryThreadTitle.react'),{thread:this.props.thread,viewer:this.props.viewer,showUnreadCount:true});};n.prototype.$MessagesJewelThreadListRow5=function(){return c('React').createElement(c('MercuryThreadSnippet.react'),{participants:this.props.participants,thread:this.props.thread,viewer:this.props.viewer});};n.prototype.$MessagesJewelThreadListRow6=function(){return c('React').createElement(c('MercuryThreadTimestamp.react'),{time:this.props.thread.timestamp,title:c('MercuryTimestamp').getAbsoluteTimestamp(this.props.thread.timestamp),text:c('MercuryTimestamp').getRelativeTimestamp(this.props.thread.timestamp)});};n.prototype.$MessagesJewelThreadListRow4=function(){return c('React').createElement(c('MercurySeenIndicator.react'),{thread:this.props.thread,viewer:this.props.viewer});};n.prototype.$MessagesJewelThreadListRow8=function(){return c('React').createElement(c('MercuryThreadReadToggle.react'),{threadID:this.props.thread.thread_id,viewer:this.props.viewer,unreadCount:this.props.thread.unread_count});};n.prototype.$MessagesJewelThreadListRow7=function(){if(!c('RTCConfig').RtcConferencingGK||!this.props.thread.rtc_call_data||this.props.thread.rtc_call_data.call_state==='NO_ONGOING_CALL')return null;return c('React').createElement(c('XUIButton.react'),{className:"_4oci",label:i._("Rejoindre l\u2019appel"),onClick:this.$MessagesJewelThreadListRow9});};n.propTypes={onClick:m.func,participants:m.instanceOf(c('immutable').Map).isRequired,showPresence:m.bool,thread:m.instanceOf(c('ImmutableObject')).isRequired,viewer:m.string.isRequired,wasSeenByAll:m.bool};f.exports=n;}),null);
__d('MessagesJewelThreadlistRowContainer.react',['ChatOpenTab','ChatOpenTabEventLogger','FantaTabActions','ImmutableObject','MercuryDelayedRoger','MercuryThreadlistRowContainer.react','MessagesJewelThreadListRow.react','ReactComponentWithPureRenderMixin','React','StoreAndPropBasedStateMixin'],(function a(b,c,d,e,f,g){'use strict';var h=c('MercuryDelayedRoger').get(),i=c('React').PropTypes,j=c('React').createClass({displayName:'MessagesJewelThreadlistRowContainer',mixins:[c('ReactComponentWithPureRenderMixin'),c('StoreAndPropBasedStateMixin')(h)],propTypes:{thread:i.instanceOf(c('ImmutableObject')).isRequired,viewer:i.string.isRequired},statics:{calculateState:function k(l){return {wasSeenByAll:h.wasSeenByAll(l.thread.thread_id)};}},render:function k(){return c('React').createElement(c('MercuryThreadlistRowContainer.react'),{ChildClass:c('MessagesJewelThreadListRow.react'),onClick:this._handleClick,showPresence:c('ChatOpenTab').canOpenTab(),thread:this.props.thread,viewer:this.props.viewer,wasSeenByAll:this.state.wasSeenByAll});},_handleClick:function k(l){if(l.button===1||l.altKey||l.ctrlKey||l.metaKey||l.shiftKey)return;if(!c('ChatOpenTab').canOpenTab())return;l.preventDefault();var m=this.props.thread.thread_id;c('FantaTabActions').openTab(m);c('ChatOpenTabEventLogger').log('jewel',m);}});f.exports=j;}),null);
__d('MessagesJewelThreadList.react',['cx','fbt','BootloadedComponent.react','ImmutableObject','JSResource','Link.react','MercuryMessageBlockingNuxContainer.react','MessageBlockNuxState','MessagesJewelThreadlistRowContainer.react','MessagingTag','React','ScrollableArea.react','XUISpinner.react','debounce','getViewportDimensions','throttle'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=160,m=600,n=c('React').PropTypes;j=babelHelpers.inherits(o,c('React').Component);k=j&&j.prototype;function o(){var p,q;for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=k.constructor).call.apply(p,[this].concat(s)),this.$MessagesJewelThreadList3=function(){if(this.props.isLoaded)return;var u=this.refs.scrollable.getArea();if(u.getScrollTop()+u.getClientHeight()>=u.getScrollHeight()-1)this.props.onLoadMoreRequest&&this.props.onLoadMoreRequest();}.bind(this),this.$MessagesJewelThreadList8=function(u){u.preventDefault();this.props.onLoadMoreRequest&&this.props.onLoadMoreRequest();}.bind(this),this.$MessagesJewelThreadList9=function(u){if(this.props.onMessageRequestsClick)this.props.onMessageRequestsClick(u);}.bind(this),this.$MessagesJewelThreadList7=function(u){if(this.props.onFilteredRequestsClick)this.props.onFilteredRequestsClick(u);}.bind(this),this.state={height:this.$MessagesJewelThreadList2()},q;}o.prototype.componentDidMount=function(){this.$MessagesJewelThreadList1=Event.listen(window,'resize',c('debounce')(function(){this.setState({height:this.$MessagesJewelThreadList2()});}.bind(this)));};o.prototype.componentDidUpdate=function(p){if(p.threads.length===0&&this.props.threads.length!==0)this.props.onRenderThreads&&this.props.onRenderThreads();};o.prototype.componentWillUnmount=function(){this.$MessagesJewelThreadList1.remove();};o.prototype.render=function(){return c('React').createElement(c('ScrollableArea.react'),{className:"_2q3u",height:this.state.height,onScroll:c('throttle')(this.$MessagesJewelThreadList3,50),ref:'scrollable'},c('React').createElement('ul',{className:'jewelContent'},this.props.p2pJewelBannerContainer?c('React').createElement('li',null,this.props.p2pJewelBannerContainer):null,this.$MessagesJewelThreadList4(),this.$MessagesJewelThreadList5(),c('MessageBlockNuxState').shouldShowMessageBlockingNuxInJewel?c('React').createElement(c('MercuryMessageBlockingNuxContainer.react'),{shouldShowImage:true,location:'jewel'}):null,this.props.threads.map(function(p){return c('React').createElement(c('MessagesJewelThreadlistRowContainer.react'),{key:p.thread_id,thread:p,viewer:this.props.viewer});}.bind(this))),this.$MessagesJewelThreadList6());};o.prototype.$MessagesJewelThreadList2=function(){return Math.min(m,c('getViewportDimensions')().height-l);};o.prototype.$MessagesJewelThreadList6=function(){if(this.props.isLoaded){if(this.props.folder===c('MessagingTag').PENDING)return c('React').createElement('div',{className:"_16bh _16bi"},c('React').createElement(c('Link.react'),{onClick:this.$MessagesJewelThreadList7},i._("Voir les invitations filtr\u00e9es")));return null;}if(this.props.isLoading)return c('React').createElement(c('XUISpinner.react'),{className:"jewelLoading"});return c('React').createElement('div',{className:"_v8y"},c('React').createElement(c('Link.react'),{href:'#',onClick:this.$MessagesJewelThreadList8},i._("Afficher les plus anciens")));};o.prototype.$MessagesJewelThreadList4=function(){var p=this.props.newMessageRequestThreads;if(!this.props.jewelRequestsUI||this.props.folder===c('MessagingTag').PENDING||!p||p.length===0)return null;return c('React').createElement(c('BootloadedComponent.react'),{bootloadPlaceholder:c('React').createElement('li',{style:{height:60}}),bootloadLoader:c('JSResource')('MessagesJewelMessageRequestsRow.react').__setRef('MessagesJewelThreadList.react'),onClick:this.$MessagesJewelThreadList9,threads:p,viewer:this.props.viewer});};o.prototype.$MessagesJewelThreadList5=function(){if(!this.props.jewelRequestsUI||this.props.folder!==c('MessagingTag').PENDING)return null;return c('React').createElement('li',{className:"_16bh _16bi"},i._("Ouvrez une demande pour obtenir plus d\u2019infos sur la personne qui vous envoie un message."),c('React').createElement('br',null),i._("Ils ne sauront pas que vous l\u2019avez vu tant que vous n\u2019aurez pas accept\u00e9."));};o.propTypes={isLoaded:n.bool,isLoading:n.bool,jewelRequestsUI:n.bool,onLoadMoreRequest:n.func,onRenderThreads:n.func,p2pJewelBannerContainer:n.element,threads:n.arrayOf(n.instanceOf(c('ImmutableObject'))).isRequired,viewer:n.string.isRequired};f.exports=o;}),null);
__d('MercuryJewelThreadlistControl',['csx','cx','fbt','ArbiterMixin','CurrentUser','CSS','DOM','Event','JSLogger','MercuryConfig','MercuryFilters','MercuryThreadlistConstants','MercuryThreadlistContainer.react','MessagesJewelThreadList.react','MessagingTag','MessengerURIConstants','React','ReactDOM','MercuryThreadInformer','MercuryUnreadState'],(function a(b,c,d,e,f,g,h,i,j){var k=c('MercuryThreadInformer').get(),l=c('MercuryUnreadState').get(),m=c('JSLogger').create('mercury_jewel'),n=c('MessagingTag').PENDING,o='back_to_inbox';function p(t){var u=t.getFlyout();this._jewelController=t;this._threadlistContainer=c('DOM').find(u,"._3v_l");this._currentFolder=c('MessagingTag').INBOX;this._currentFilter=c('MercuryFilters').ALL;this._jewelTabLinks={};this._jewelTabCounts={};this._jewelTabLinks[c('MessagingTag').INBOX]=c('DOM').find(u,"._1sde");this._jewelTabCounts[c('MessagingTag').INBOX]=c('DOM').find(u,"._1sdg");c('Event').listen(this._jewelTabLinks[c('MessagingTag').INBOX],'click',q.bind(this,c('MessagingTag').INBOX,c('MercuryFilters').ALL));if(!c('MercuryConfig').JewelRequestsUI){this._jewelTabLinks[n]=c('DOM').find(u,"._1sdf");this._jewelTabCounts[n]=c('DOM').find(u,"._1sdh");c('Event').listen(this._jewelTabLinks[n],'click',q.bind(this,n,c('MercuryFilters').ALL));}else{this._jewelTabLinks[o]=c('DOM').find(u,"._34zq");c('Event').listen(this._jewelTabLinks[o],'click',q.bind(this,c('MessagingTag').INBOX,c('MercuryFilters').ALL));}this._markAllReadLink=c('DOM').find(u,"._1c1m");this._seeAllLink=c('DOM').find(u,'.seeMore');c('Event').listen(this._markAllReadLink,'click',function(v){l.markFolderAsRead(this._currentFolder);v.kill();}.bind(this));k.subscribe('unread-updated',r.bind(this));r.bind(this)();this.render();m.bump('opened_threadlist_'+this._currentFolder);}Object.assign(p.prototype,c('ArbiterMixin'));Object.assign(p.prototype,{render:function t(){c('ReactDOM').render(c('React').createElement(c('MercuryThreadlistContainer.react'),{ChildClass:c('MessagesJewelThreadList.react'),viewer:c('CurrentUser').getID(),folder:this._currentFolder,filter:this._currentFilter,jewelRequestsUI:c('MercuryConfig').JewelRequestsUI,onMessageRequestsClick:this._handleMessageRequestsClick.bind(this),onFilteredRequestsClick:this._handleFilteredRequestsClick.bind(this)}),this._threadlistContainer);},_handleMessageRequestsClick:function t(u){u.preventDefault();q.call(this,c('MessagingTag').PENDING,c('MercuryFilters').ALL);},_handleFilteredRequestsClick:function t(u){u.preventDefault();q.call(this,c('MessagingTag').OTHER,c('MercuryFilters').ALL);}});function q(t,u){if(this._currentFolder!==t||this._currentFilter!==u){var v=this._currentFolder,w=t===c('MessagingTag').INBOX,x=t;m.bump('opened_threadlist_'+t);if(this._jewelTabLinks[x])c('CSS').addClass(this._jewelTabLinks[x],"_1sdd");if(this._jewelTabLinks[v])c('CSS').removeClass(this._jewelTabLinks[v],"_1sdd");this._currentFolder=t;this._currentFilter=u;if(w){this._seeAllLink.href=c('MessengerURIConstants').FACEBOOK_PREFIX;}else this._seeAllLink.href=c('MessengerURIConstants').FACEBOOK_PREFIX+c('MessengerURIConstants').MESSAGE_REQUESTS_PATH;if(c('MercuryConfig').JewelRequestsUI){c('CSS').conditionShow(this._jewelTabLinks[c('MessagingTag').INBOX],w);c('CSS').conditionShow(this._jewelTabLinks[o],!w);}this.render();}}function r(){s.call(this,c('MessagingTag').INBOX);if(!c('MercuryConfig').JewelRequestsUI)s.call(this,n);}function s(t){var u;if(l.exceedsMaxCount(t)){u=c('MercuryThreadlistConstants').MAX_UNREAD_COUNT;}else u=l.getUnreadCount(t);var v=this._jewelTabCounts[t];if(!v)return;if(u>0){if(u==c('MercuryThreadlistConstants').MAX_UNREAD_COUNT)u+='+';c('DOM').setContent(v,j._("({unread_count})",[j.param('unread_count',u)]));}else c('DOM').setContent(v,'');}f.exports=p;}),null);
__d('MercuryJewel',['Arbiter','MercuryJewelCountControl','MercuryServerPayloadPreprocessor'],(function a(b,c,d,e,f,g){var h=false;function i(j,k){'use strict';c('MercuryJewelCountControl').constructStores();c('MercuryServerPayloadPreprocessor').get().handleUpdate(k);this.$MercuryJewel1=new (c('MercuryJewelCountControl'))(j);if(j.getRoot()&&j.isOpen()){this.$MercuryJewel2(j);}else j.subscribeOnce('opened',this.$MercuryJewel2.bind(this,j));}i.prototype.$MercuryJewel2=function(j){'use strict';if(!h){e(['MercuryJewelThreadlistControl'],function(k){this.$MercuryJewel3=new k(j);}.bind(this));c('Arbiter').inform('mercury-jewel/opened',null,c('Arbiter').BEHAVIOR_STATE);h=true;}};f.exports=i;}),null);