/*
 *  jQuery SimpleImageHover - v0.1
 *  A minimalistic image hover jquery plugin.
 *  http://abasys.hu/hoverImage
 *
 *  Made by Robert Pragai
 *  Under MIT License
 */
;(function ( $, window, document, undefined ) {

    $.fn.SimpleImageHover = function(options) {
		var defaults = {
		    originalpane: "hoverimage_pane",
		    ratio: 2,
		    placement: "outside",
		},
		options = options || {};

	    var pluginName = "SimpleImageHover",
	    opts = $.extend( {}, defaults, options );

		if (opts.placement == "outside" && $("#"+opts.originalpane).length ==0)
			$("body").append("<div id='"+opts.originalpane+" style='display:none; z-index:100;''><img /></div>");

	    if (opts.placement == "outside") {

	    	return this.each(function() {
	    		var el = $(this);
		 	
		 		var origpane = $("#"+opts.originalpane);
				var img = $("#"+opts.originalpane+" img");

		 		el.mousemove(function(e){
					var elem = $(this);
					origpane.offset({ left:e.pageX+5, top:e.pageY+5 });
				});

				el.hover(function(e){
					img.attr("src",el.attr("src"));
					img.height(el.height()*opts.ratio).width(el.width()*opts.ratio);
					origpane.height(el.height()*opts.ratio).width(el.width()*opts.ratio);
					origpane.show();
				},function(e){
					origpane.hide();
				});
			});
		}
		else if (opts.placement == "inside") {
	    	return this.each(function(index) {
	    		var el = $(this);
	    		el.data({width:el.width(),height:el.height()});
				el.hover(function() {
						el.css("z-index", 1);
						el.animate({
							height: el.height()*opts.ratio,
							width: el.width()*opts.ratio,
							left: "-="+(opts.width-el.data("width"))/2,
							top: "-="+(opts.height-el.data("height"))/2
		            	}, "fast");
			        }, function() {
						el.css("z-index", 0);
						el.animate({
							height: el.data("height"),
							width: el.data("width"),
							left: "+="+(opts.width-el.data("width"))/2,
							top: "+="+(opts.height-el.data("height"))/2
			            }, "slow");
				    });
			});
		}
    }

})( jQuery, window, document );
