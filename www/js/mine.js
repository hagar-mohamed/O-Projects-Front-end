$(document).ready(function() {
  $("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
});

var x=true;
$(".icondisplay").click(function(){
	
	
	if(x){
	$(".popurs").css("display","inline-block");
				x=false;
	}
	else{
		
			$(".popurs").css("display","none");   
		 x=true;
	}
})
$(".close").click(function(){
	
	
	$(".notify success").css("display","none");
		
})


var galleryOffset = $("#babycar").offset().top;

$(window).scroll(function(){
	
	var scrlTop = $(window).scrollTop();

	if(scrlTop > galleryOffset )
		{
		$(".change1").css("backgroundColor","#67a667")	
		}
	else
		{
		$(".change1").css("backgroundColor","transparent")	
			
		}
	

	if(scrlTop > 600 )
		{
		$("#scrllTop").fadeIn()	
		}
	else
		{
		$("#scrllTop").fadeOut()	
			
		}	
})



$("#scrllTop").click(function(){
	
	
	$("html,body").animate({scrollTop:'0'},1000)
})

//$('.body').slideAndswipe();

webgazer.setGazeListener(function(data, elapsedTime) {
  if (data == null) {
      return;
  }
  var xprediction = data.x; //these x coordinates are relative to the viewport
  var yprediction = data.y; //these y coordinates are relative to the viewport
  console.log(elapsedTime); //elapsed time is based on time since begin was called
}).begin();
 
var prediction = webgazer.getCurrentPrediction();
if (prediction) {
    var x = prediction.x;
    var y = prediction.y;
}
/*
$(document).ready(function(){
	
	
	$("#loading").fadeOut(3000 , function(){
		
		$("body").css("overflow","auto")
	})
})


*/
webgazer.begin() 
webgazer.setGazeListener(). webgazer.begin()
webgazer.getCurrentPrediction()

webgazer.setGazeListener(function(data, elapsedTime) {
  if (data == null) {
      return;
  }
  var xprediction = data.x; //these x coordinates are relative to the viewport
  var yprediction = data.y; //these y coordinates are relative to the viewport
  console.log(elapsedTime); //elapsed time is based on time since begin was called
}).begin();
var prediction = webgazer.getCurrentPrediction();
if (prediction) {
    var x = prediction.x;
    var y = prediction.y;
}
webgazer.setTracker("clmtrackr"); //set a tracker module
webgazer.addTrackerModule("newTracker", NewTrackerConstructor); //add a new tracker module
let surface = zuix.field('surface');
zuix.load('@lib/controllers/gesture_helper', {
  view: surface, // <- detect gestures over the given element
  on: {
    'gesture:touch': function(e, tp) {
      // handle gesture ...
    },
    'gesture:tap': function(e, tp) {
      // handle gesture ...
    },
    'gesture:pan': function(e, tp) {
      // handle gesture ...
    },
    'gesture:swipe': function(e, tp) {
      // handle gesture ...
    },
    'gesture:release': function(e, tp) {
      // handle gesture ...
    }
  }
});

webgazer.end()










