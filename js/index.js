'use strict';

$(document).ready(function() {

    //settings for slider
    var width = 1280;
    var animationSpeed = 1000;
    //var pause = 3000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    $("#left").click(function(){
    	
        if(currentSlide === 1)
    	{
    		$slideContainer.animate({'margin-left': -1*($slides.length-1)*width}, animationSpeed,function() {
                currentSlide=$slides.length;
            });
    	}
        else
        {
            $slideContainer.animate({'margin-left': '+='+width}, animationSpeed,function() {
                --currentSlide;
            });
        }
        
    });
    $("#right").click(function(){
        if (currentSlide === $slides.length) 
        {
            $slideContainer.animate({'margin-left': 0}, animationSpeed,function() {
                currentSlide=1;
            });
        }
        else
        {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
               ++currentSlide; 
            });   
        }
    	
    });
    $("#page1").click(function(){
        $slideContainer.animate({'margin-left': 0}, animationSpeed, function(){
            currentSlide = 1;
        });

    });
    $("#page2").click(function(){
        $slideContainer.animate({'margin-left': -1*1*width}, animationSpeed, function(){
            currentSlide = 2;
        });

    });
     $("#page3").click(function(){
        $slideContainer.animate({'margin-left': -1*2*width}, animationSpeed, function(){
            currentSlide = 3;
        });

    });
    $("#page4").click(function(){
        $slideContainer.animate({'margin-left': -1*3*width}, animationSpeed, function(){
            currentSlide = 4;
        });

    });
    $("#page5").click(function(){
        $slideContainer.animate({'margin-left': -1*4*width}, animationSpeed, function(){
            currentSlide = 5;
        });

    });
    $("#page6").click(function(){
        $slideContainer.animate({'margin-left': -1*5*width}, animationSpeed, function(){
            currentSlide = 6;
        });

    });
    $("#page7").click(function(){
        $slideContainer.animate({'margin-left': -1*6*width}, animationSpeed, function(){
            currentSlide = 7;
        });

    });  


    /*function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);*/
    /*}
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();*/


});
