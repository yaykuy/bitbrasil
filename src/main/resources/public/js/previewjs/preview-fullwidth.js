jQuery(document).ready(function() {	
					
					
				jQuery('.accordion').click(function() {
						var acc=jQuery(this);
						if (acc.hasClass("selected")) {
							acc.removeClass("selected");
							acc.parent().find('.accordioncontent').slideUp(200);
						} else {
							acc.addClass("selected");
							acc.parent().find('.accordioncontent').slideDown(200);
						}
					});
					
					jQuery('.transition').each(function() {
						var tr=jQuery(this);
						tr.click(function() {
							jQuery('.transition').each(function() {
								jQuery(this).removeClass('selected');
							});
							tr.addClass('selected');
							
							var curtrans = tr.data('value');
							var curslot = jQuery('.select_slots .dragger').data('value');
							
							
							jQuery('.fullwidthbanner ul:first li').each(function() {								
									var li = jQuery(this);
									if (li.data('oldtransition')==undefined) {
										li.data('oldtransition',li.data('transition'));
										li.data('oldslotamount',li.data('slotamount'));
									}
									if (curtrans!="Demo") {
										li.data('transition',curtrans);
										li.data('slotamount',curslot) 
									} else {
										li.data('transition',li.data('oldtransition'));
										li.data('slotamount',li.data('oldslotamount'));
									}							
							});
						});
					});
					jQuery('.radios').each(function() {
						var radios=jQuery(this);
						radios.find('.radio').each(function() {
							var radio=jQuery(this);
							radio.click(function() {
								var radio=jQuery(this);
								if (!radio.hasClass("nonclickable")) {
										radios.find('.radio').each(function() {	jQuery(this).removeClass('selected'); });
										radio.addClass('selected');
										if (radio.data('value')=="square" || radio.data('value')=="round" || radio.data('value')=="navbar" ) {
											var bul = jQuery('.tp-bullets.simplebullets');
											var arrws = jQuery('.tparrows');
											arrws.removeClass('navbar');
											arrws.removeClass('round');
											arrws.removeClass('square');
											bul.removeClass('navbar');
											bul.removeClass('round');
											bul.removeClass('square');
											
											bul.addClass(radio.data('value'));
											arrws.addClass(radio.data('value'));
											
											if (radio.data('value')=="square" || radio.data('value')=="round") jQuery('.select_bvposition .dragger').css({'left':"60%"});
											if (radio.data('value')=="navbar") jQuery('.select_bvposition .dragger').css({'left':"52%"});
										}
										
										if (radio.data('value')=="thumb" || radio.data('valueextra')=="none") {
											jQuery('.vcentered').click();
											jQuery('.nbullet').addClass("nonclickable");
											
											jQuery('.select_bvposition .dragger').css({'left':"90%"});											
										}
										
										
										
										if (radio.data('value')=="bullet") {
											jQuery('.nbullet').removeClass("nonclickable");
											jQuery('.select_bvposition .dragger').css({'left':"60%"});
										}
										
										if (radio.data('value')=="shadow") {
											jQuery('.tp-bannershadow').removeClass('tp-shadow1');
											jQuery('.tp-bannershadow').removeClass('tp-shadow2');
											jQuery('.tp-bannershadow').removeClass('tp-shadow3');
											jQuery('.tp-bannershadow').addClass(radio.data('valueextra'));
										}
										
										
										if (radio.data('value')=="showtimer") jQuery('.tp-bannertimer').show();
										if (radio.data('value')=="hidetimer") jQuery('.tp-bannertimer').hide();
										
										if (radio.data('value')=="999999999") {
											try{
												var bullets = jQuery('.tp-bullets');
												var ca = jQuery('.tparrows');
												bullets.animate({'opacity':1},{duration:200,queue:false});
												ca.animate({'opacity':1},{duration:200,queue:false});	
											} catch(e) {}
										}
										
										if (radio.data('value')=="200") {
											try{
												var bullets = jQuery('.tp-bullets');
												var ca = jQuery('.tparrows');
												bullets.animate({'opacity':0},{duration:200,queue:false});
												ca.animate({'opacity':0},{duration:200,queue:false});	
											} catch(e) {}
										}
										
										
										
										draggers();										
										jQuery('#unvisible_button').click();
																				
								}										
							});
						});
						
					});
					
					
					
					var draggers=function() {
										jQuery('.select_slots .dragger').each(function() {
												var drag=jQuery('.select_slots .dragger');
												drag.data('value',Math.round((drag.position().left / 410) * 25));
												var curslot = drag.data('value');														
												jQuery('.tbcs').html('Transition Box Columns / Slots ('+curslot+')');
												jQuery('.fullwidthbanner ul:first li').each(function() {								
														var li = jQuery(this);
														if (li.data('oldtransition')==undefined) {
															li.data('oldtransition',li.data('transition'));
															li.data('oldslotamount',li.data('slotamount'));
														}
														
														li.data('slotamount',curslot);
																					
												});
										});
										
										jQuery('.select_slidetime .dragger').each(function() {
												var drag=jQuery('.select_slidetime .dragger');
												drag.data('value',Math.round(((drag.position().left / 410) * 120)+30)/10);							
												jQuery('.select_slidetime .optiontitle').html('Slide Time ('+drag.data('value')+')');							
										});
										
										jQuery('.select_bhposition .dragger').each(function() {
												var drag=jQuery('.select_bhposition .dragger');
												drag.data('value',Math.round((drag.position().left / 410) * 400)-200);							
												jQuery('.select_bhposition .optiontitle').html('Bullet Horizontal Offset ('+drag.data('value')+'px)');							
										});
										
										jQuery('.select_bvposition .dragger').each(function() {
												var drag=jQuery('.select_bvposition .dragger');
												drag.data('value',Math.round((drag.position().left / 410) * 200)-100);							
												jQuery('.select_bvposition .optiontitle').html('Bullet Vertical Offset ('+drag.data('value')+'px)');							
										});
										
										var newtext = '<pre>jQuery("YOURBANNER").revolution(<br>{<br>		delay:'+(jQuery('.select_slidetime .dragger').data('value')*1000)+',<br>		startheight:450,<br>		startwidth:890,<br><br>		thumbWidth:100,<br>		thumbHeight:50,<br>		thumbAmount:5,<br><br>		onHoverStop:"'+jQuery('.select_hovers .selected').data('value')+'",<br>		hideThumbs:200,<br>		navigationType:"'+jQuery('.select_navigationtype .selected').data('value')+'",<br>		navigationStyle:"'+jQuery('.select_bulletstyle .selected').data('value')+'",<br>		navigationArrows:"'+jQuery('.select_navarrows .selected').data('value')+'",<br><br>		touchenabled:"on",<br><br>		navOffsetHorizontal:'+jQuery('.select_bhposition .dragger').data('value')+',<br>		navOffsetVertical:'+jQuery('.select_bvposition .dragger').data('value')+'<br>		shadow:'+jQuery('.select_shadow .selected').data('value2')+'<br>		fullWidth:"off"<br>});</pre>';
										jQuery('.plugoptions').html(newtext);
					}
					
					jQuery('.dragger').draggable(
							{ 
								containment: "parent" ,
								axis: "x",
								stop: function() { 
										jQuery('#unvisible_button').click();
										draggers();
										
										
									}
							});
						
			});
