var Triangle = function(x, y, width, height, pattern, lightness, background) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.pattern = pattern;
    this.lightness = lightness;
    this.background = background;
};

Triangle.prototype = {
    draw: function(context) {  
        if(this.pattern === 0) {
            context.beginPath();
            context.moveTo(this.x * this.width,              this.y * this.height);      
            context.lineTo(this.x * this.width + this.width, this.y * this.height);
            context.lineTo(this.x * this.width,              this.y * this.height + this.height);
            context.fillStyle = "hsl(0, 0%, " + this.lightness + "%)"; 
            context.closePath();		
            context.fill();
            
            context.beginPath();
            context.moveTo(this.x * this.width + this.width, this.y * this.height + this.height);      
            context.lineTo(this.x * this.width,              this.y * this.height + this.height);
            context.lineTo(this.x * this.width + this.width, this.y * this.height);
            context.fillStyle = "hsl(0, 0%, 98%)";
            context.closePath();		
            context.fill();
        } else if(this.pattern === 1) {
            context.beginPath();
            context.moveTo(this.x * this.width + this.width, this.y * this.height);      
            context.lineTo(this.x * this.width + this.width, this.y * this.height + this.height);
            context.lineTo(this.x * this.width,              this.y * this.height);
            context.fillStyle = "hsl(0, 0%, " + this.lightness + "%)";    
            context.closePath();		
            context.fill();
            
            context.beginPath();
            context.moveTo(this.x * this.width,              this.y * this.height + this.height);      
            context.lineTo(this.x * this.width,              this.y * this.height);
            context.lineTo(this.x * this.width + this.width, this.y * this.height + this.height);
            context.fillStyle = "hsl(0, 0%, 98%)";   
            context.closePath();		
            context.fill();
        } else if(this.pattern === 2) {
            context.beginPath();
            context.moveTo(this.x * this.width + this.width, this.y * this.height + this.height);      
            context.lineTo(this.x * this.width,              this.y * this.height + this.height);
            context.lineTo(this.x * this.width + this.width, this.y * this.height);
            context.fillStyle = "hsl(0, 0%, " + this.lightness + "%)";    
            context.closePath();		
            context.fill();
            
            context.beginPath();
            context.moveTo(this.x * this.width,              this.y * this.height);      
            context.lineTo(this.x * this.width + this.width, this.y * this.height);
            context.lineTo(this.x * this.width,              this.y * this.height + this.height);
            context.fillStyle = "hsl(0, 0%, 98%)"; 
            context.closePath();		
            context.fill();
        } else {
            context.beginPath();
            context.moveTo(this.x * this.width,              this.y * this.height + this.height);      
            context.lineTo(this.x * this.width,              this.y * this.height);
            context.lineTo(this.x * this.width + this.width, this.y * this.height + this.height);
            context.fillStyle = "hsl(0, 0%, " + this.lightness + "%)";    
            context.closePath();		
            context.fill();
            
            context.beginPath();
            context.moveTo(this.x * this.width + this.width, this.y * this.height);      
            context.lineTo(this.x * this.width + this.width, this.y * this.height + this.height);
            context.lineTo(this.x * this.width,              this.y * this.height);
            context.fillStyle = "hsl(0, 0%, 98%)";    
            context.closePath();		
            context.fill();
        }  
    }
};

var Triangles = function(el, background) {
    this.canvas = document.getElementById(el);
    this.context = this.canvas.getContext("2d");
    this.background = background;
    this.triangles = [];
};

Triangles.prototype = {
    createTriangles: function(size, brightness) {
        var canvasWidth = this.canvas.width = window.innerWidth;
        var canvasHeight = this.canvas.height = window.innerHeight;  
        var cellWidth = size[0];
        var cellHeight = size[1];
        var columns = Math.ceil(canvasWidth / cellWidth);
        var rows = Math.ceil(canvasHeight / cellHeight);
        
        var rand = function(min, max) { 
            return Math.floor((Math.random() * (max - min + 1) ) + min); 
        };

        for(var x = 0; x < columns; x++) {
            for(var y = 0; y < rows; y++) {
                var pattern = rand(0, 3);
                var lightness = rand(brightness[0], brightness[1]);
                this.triangles.push(new Triangle(x, y, cellWidth, cellHeight, pattern, lightness, this.background));
            }
        }
    },
    draw: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for(var i = 0; i < this.triangles.length; i++) {
            this.triangles[i].draw(this.context);
        }
    }
};


jQuery(document).ready(function ($) {
    var page = "";
    var triangles = new Triangles("background-canvas", "#fafafa");
    triangles.createTriangles([40, 40], [92, 100]);
    triangles.draw();
    
    var $body = $("body");
    var $nav = $("#main");
    var $content = $(".content-wrapper");
    var $search = $("#search");
    var $loading = $("#loading");
    var $overlay = $(".overlay");
    var $close = $("#btn-close");
    var $container = $("#container");
    
    $nav.find("a").click(function(e) {
        e.preventDefault();

        // Change the accent colors
        $body.attr("class", "");
        $body.addClass($(this).attr("title")); // TODO: make not suck

        var url = $(this).attr("href");
        if (page !== url) {
            // Hide menu, show loader
            $container.fadeOut("fast");
            $nav.addClass("slide-in");
            setTimeout(function () {
                var waitForLoader = false;
                var loaderDur = 500;
                var loaderingTimeout = setTimeout(function () {
                    $loading.removeClass("slide-in");
                    waitForLoader = true;
                    setTimeout(function () {
                        waitForLoader = false;
                    }, loaderDur);
                }, loaderDur);

                $.ajax({
                    url: url,
                    success: function (result) {
                        // Show content
                        page = url;
                        clearTimeout(loaderingTimeout);
                        setTimeout(function () {
                            $container.html(result);
                            $loading.addClass("slide-in");
                            $body.addClass("show-reading-nav");
                            $overlay.fadeOut(1000);
                            $container.fadeIn("fast");
                            $content.addClass("show");
                        }, waitForLoader ? loaderDur : 0)
                    },
                    error: function (xhr, status, error) {
                        console.log(status, error);
                    }
                });
            }, 200);
        } else {
            $nav.addClass("slide-in");
            $body.addClass("show-reading-nav");
            $overlay.fadeOut(1000);
            $content.addClass("show");
        }
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