var render = function() {
	var canvas = document.getElementById('canvas'),
	context = canvas.getContext('2d'),
	canvasWidth = canvas.width = window.innerWidth,
	canvasHeight = canvas.height = window.innerHeight,  
	cellWidth = 40,
	cellHeight = 40,
	columns = Math.ceil(canvasWidth / cellWidth),
	rows = Math.ceil(canvasHeight / cellHeight),
	rand = function(min, max){
		return Math.floor( (Math.random() * (max - min + 1) ) + min);
	}, iCol, iRow;
	context.clearRect(0, 0, canvasWidth, canvasHeight);

	for(iCol = 0; iCol < columns; iCol++) {
		for(iRow = 0; iRow < rows; iRow++) {	      
		var pattern = rand(0, 3);
		var lightness = rand(92, 100);       
		context.beginPath();      
		if(pattern === 0){
			context.moveTo(iCol * cellWidth, iRow * cellHeight);      
			context.lineTo(iCol * cellWidth + cellWidth, iRow * cellHeight);
			context.lineTo(iCol * cellWidth, iRow * cellHeight + cellHeight);
		} else if(pattern === 1){
			context.moveTo(iCol * cellWidth + cellWidth, iRow * cellHeight);      
			context.lineTo(iCol * cellWidth + cellWidth, iRow * cellHeight + cellHeight);
			context.lineTo(iCol * cellWidth, iRow * cellHeight);
		} else if(pattern === 2){
			context.moveTo(iCol * cellWidth + cellWidth, iRow * cellHeight + cellHeight);      
			context.lineTo(iCol * cellWidth, iRow * cellHeight + cellHeight);
			context.lineTo(iCol * cellWidth + cellWidth, iRow * cellHeight);
		} else {
			context.moveTo(iCol * cellWidth, iRow * cellHeight + cellHeight);      
			context.lineTo(iCol * cellWidth, iRow * cellHeight);
			context.lineTo(iCol * cellWidth + cellWidth, iRow * cellHeight + cellHeight);
		}
		context.fillStyle = 'hsl(0, 0%, '+lightness+'%)';      
		context.closePath();		
			context.fill();
		};
	};
};

$(document).ready(function() {
    render();
    var $body = $("body");
    var $nav = $("#main");
    var $content = $(".content-wrapper");
    var $search = $("#search");
    var $overlay = $(".overlay");
    var $close = $("#btn-close");
    
    $nav.find("a").click(function(e) {
        e.preventDefault();
        $body.attr("class", "");
        $body.addClass("show-reading-nav");
        $body.addClass($(this).data("color"));
        $nav.addClass("slide-in");
        $content.addClass("show");
        $overlay.fadeOut(1000);
        
    });
    
    $("#btn-close").click(function(e) {
        e.preventDefault();
        $body.addClass("show-reading-nav");
        $search.addClass("slide-in");
        $content.addClass("show");
        $overlay.fadeOut(1000);
        $close.removeClass("show");
        
    });
    
    $("#btn-show-menu").click(function(e) {
        e.preventDefault();
        $body.attr("class", "");
        $nav.removeClass("slide-in");
        $content.removeClass("show");
        $overlay.fadeIn(1000);
    });
    
    $("#btn-search").click(function(e) {
        e.preventDefault();
        $body.removeClass("show-reading-nav");
        $search.removeClass("slide-in");
        $content.removeClass("show");
        $overlay.fadeIn(1000);
        $close.addClass("show");
    });
});