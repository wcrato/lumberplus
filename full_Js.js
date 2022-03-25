<script>
	/*===========> Library to Home <============*/
	jQuery('.tme-posts-card-title a').text(function(_, oldText){
		if(oldText.length < 35){
			rest = 35 - oldText.length;
			oldText = oldText.padEnd(35, ' ');
    		return oldText;
		}else{
			return oldText.substr(0, 35) + '...';
		}
	});
	
	jQuery(".mobile-hamburger-toggle").on("click", function() { 
		jQuery("ul.sub-menu").css("display","block").addClass("show_sub_menu");	
		jQuery("span.button_switcher").addClass("is-active");
	});
	
	/* Working
	jQuery('.show-funnel-section').on("click touchstart",function(e){
		let placeFs = '.'+jQuery(this).data("place-section");
		jQuery(placeFs).slideToggle( "slow" );
		e.preventDefault();
	});
	*/
	
	jQuery('.show-funnel-section').on("click touchstart",function(e){
		let dataSection = jQuery(this).data("place-section");
		let placeFs = '.'+dataSection;
		/* Code for close all accordeon
		jQuery("section[class*='funnel-section'], div[class*='funnel-section']").each(function(){
			if( (jQuery(this).css('display') != 'none') && ( !jQuery(this).hasClass(dataSection) ) ) {
				jQuery(this).slideToggle();
			}
		});
		*/
		jQuery(placeFs).slideToggle( "slow" );
		jQuery('html, body').animate({scrollTop: jQuery(placeFs).offset().top -100 }, 'slow');
		e.preventDefault();
	});
	
	jQuery('.show-funnel-section-overlay').on("click touchstart",function(e){
		let dataSection = jQuery(this).data("place-section");
		let placeFs = '.'+dataSection;
		/* Code for close all accordeon
		jQuery("section[class*='funnel-section'], div[class*='funnel-section']").each(function(){
			if( (jQuery(this).css('display') != 'none') && ( !jQuery(this).hasClass(dataSection) ) ) {
				jQuery(this).slideToggle();
			}
		});
		*/
		jQuery(placeFs).slideToggle( "slow" );
		//jQuery('html, body').animate({scrollTop: jQuery(placeFs).offset().top -100 }, 'slow');
		e.preventDefault();
	});
	
 	jQuery('#show-hs-chat').on('click', function(e){
 		window.HubSpotConversations.widget.open();
 		e.preventDefault();
 	});
// 	
// 	
	/*
	jQuery(".eael-hot-spot-wrap").each(function(){
		jQuery(this).find('img').wrap("<a href='" + jQuery(this).data('link') + "' target='_blank'/>");
	});
	*/
	
	/*
	jQuery(window).scroll(function(){
		if( jQuery(document).scrollTop() > 50 ) {
			jQuery('.mega-sub-menu').hide();
		} else {
			jQuery('.mega-sub-menu').show();
		}
	});
	
	jQuery(window).scroll(function(){
		//jQuery('.mega-sub-menu').hide();
		jQuery('.mega-menu').data('maxmegamenu').hideAllPanels();
	});*/
	
	jQuery(window).scroll(function(){
		if (jQuery(this).scrollTop()>10){
			jQuery('#float-button-tel').show();
		}else{
			jQuery('#float-button-tel').hide();
		}
	});
	
	jQuery(window).scroll(function(){
		if (jQuery(this).scrollTop()>5){
			jQuery('#top-bar-mobile').css("margin-top", "40px");
		}else{
			jQuery('#top-bar-mobile').css("margin-top", "0");
		}
	});
	
	/*jQuery(function() {
		jQuery(`<a href="#" class="show-funnel-section hs-btn-exit"
			data-place-section="funnel-section-1"
			role="button">
				<span class="elementor-button-content-wrapper elementor-align-icon-">
					<span class="elementor-button-text">EXIT</span>
				</span>
			</a>`).insertBefore(jQuery(".hs-lumberplus input[type='submit']"));
	});
	*/
	
	
	jQuery('.btn-show-hs-form').on("click touchstart",function(e){		
		let dataSection = jQuery(this).data("place-section");
		let placeFs = '.'+dataSection;
		/*jQuery(`<a href="#" class="show-funnel-section hs-btn-exit"
			data-place-section="funnel-section-1"
			role="button">
				<span class="elementor-button-content-wrapper elementor-align-icon-">
					<span class="elementor-button-text">EXIT</span>
				</span>
			</a>`)*/
		let btnExit = jQuery('<a>',{
			text: 'EXIT',
			class: 'hs-btn-exit',
			role: 'button',
			id: dataSection,
			href: '#',
			click: function(event){
				jQuery(placeFs).hide();
				jQuery('a[data-place-section='+dataSection+']').show();
				jQuery(this).remove();
				event.preventDefault();
			}
		});
		jQuery(btnExit).insertBefore(jQuery(placeFs + ' .hs-lumberplus input[type=submit]'));
		jQuery(placeFs).show();
		jQuery(this).hide();
		jQuery('html, body').animate({scrollTop: jQuery(placeFs).offset().top -100 }, 'slow');
		e.preventDefault();
	});
	
	jQuery(".wgl-striped-services .service-item_subtitle").hover(function(){
		const w = jQuery(this).width();
		jQuery(this).css("width", w+"px");
	});

</script>
