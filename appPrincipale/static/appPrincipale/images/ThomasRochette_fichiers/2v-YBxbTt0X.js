if (self.CavalryLogger) { CavalryLogger.start_js(["98ENm"]); }

__d('MapPager',['ArbiterMixin','Event','mixin'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;function j(k,l){'use strict';i.constructor.call(this);c('Event').listen(k,'click',this.inform.bind(this,'previous'));c('Event').listen(l,'click',this.inform.bind(this,'next'));}f.exports=j;}),null);
__d('ReactComposerStickerComponent.react',['ix','cx','fbt','ReactComposerEvents','ReactComposerPrefillStore','ReactComposerTaggerActions','ReactComposerTaggerType','ReactComposerLoggingName','Arbiter','Image.react','ShimButton.react','Sticker.react','StickerAssetType','StickerConstants','StickerUtils','XStickerAssetController','React','fbglyph'],(function a(b,c,d,e,f,g,h,i,j){var k,l;k=babelHelpers.inherits(m,c('React').Component);l=k&&k.prototype;function m(){var n,o;'use strict';for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=l.constructor).call.apply(n,[this].concat(q)),this.$ReactComposerStickerComponent3=function(){c('ReactComposerTaggerActions').setTaggerData(this.props.composerID,c('ReactComposerLoggingName').STICKER_SPROUT,c('ReactComposerTaggerType').STICKER,null);}.bind(this),this.$ReactComposerStickerComponent4=function(){var s=c('ReactComposerPrefillStore').getAndEraseNestedField(this.props.composerID,['taggersData',c('ReactComposerTaggerType').STICKER]);if(s)c('ReactComposerTaggerActions').setTaggerDataWithoutLogging(this.props.composerID,c('ReactComposerTaggerType').STICKER,s);}.bind(this),o;}m.prototype.render=function(){'use strict';if(!(this.props.sticker&&this.props.sticker.stickerID))return null;var n=c('StickerUtils').getScaledDimensions(c('StickerConstants').TRAY_SIZE,c('StickerConstants').TRAY_SIZE,c('StickerConstants').TRAY_SIZE),o=n.height,p=n.width,q=c('XStickerAssetController').getURIBuilder().setInt('sticker_id',this.props.sticker.stickerID),r=c('React').createElement(c('Sticker.react'),{animationTrigger:'load_and_hover',frameCount:1,frameRate:c('StickerConstants').DEFAULT_FRAME_RATE,framesPerCol:1,framesPerRow:1,sourceHeight:o,sourceURI:q.setEnum('image_type',c('StickerAssetType').IMAGE).getURI().toString(),sourceWidth:p,stickerID:this.props.sticker.stickerID.toString(),className:"_x85"});return c('React').createElement('div',{className:"_x88"},c('React').createElement('span',{className:"_x8a"},r,this.$ReactComposerStickerComponent2()));};m.prototype.$ReactComposerStickerComponent2=function(){'use strict';return c('React').createElement(c('ShimButton.react'),{className:"_x8b",onClick:this.$ReactComposerStickerComponent3},c('React').createElement(c('Image.react'),{alt:j._("Supprimer le sticker"),src:h("125920")}));};m.prototype.componentWillMount=function(){'use strict';this.$ReactComposerStickerComponent4();this.$ReactComposerStickerComponent1=c('Arbiter').subscribe(c('ReactComposerEvents').SET_PREFILL_DATA+this.context.composerID,this.$ReactComposerStickerComponent4);};m.prototype.componentWillUnmount=function(){'use strict';this.$ReactComposerStickerComponent1&&this.$ReactComposerStickerComponent1.unsubscribe();this.$ReactComposerStickerComponent1=null;};f.exports=m;}),null);