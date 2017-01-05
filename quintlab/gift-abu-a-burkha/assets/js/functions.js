
$(document).ready(function(){
    $(".social-back").click(function(e){
      $(".social-icons").slideToggle(400);
      return false;
   });
   $("body").click(function(){
      $(".social-icons").slideUp();
   });
}); 

$(document).ready(function() {
	
    $('.credits').click(function() {
        $('.creditsModal').show().addClass('zoomIn');
    });

    $('.modalClose').click(function() {
        $('.creditsModal').fadeOut();
    });
	
	
//	var window_h = $(window.parent).height();
//	
//	alert(window_h);
	
});









// step 1


counts = {};

        function format_number(text){ 
            return text.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        };
        
        function magic_number(element_name, value) {
            var elem = $(element_name);
            var current = counts[element_name] || 0;
            $({count: current}).animate({count: value}, {
                                        duration: 500,
                                        step: function() {
                                            elem.text(format_number(String(parseInt(this.count))));
                                        }});
            							counts[element_name] = value;
        };

        function update() {
            var jqxhr = $.getJSON("number.php?jsonp=?", function(data) {
								
                               // magic_number("#number1", data[0]['n1']);
								
                       });
        };

        setInterval(update, 3000);
        update();


// step 3

$(document).ready(function(){
	$('#number1').html($('#previous_counter').html());	
	var count =  parseInt($('#previous_counter').text()); 
   
   
	$(".cursor_face").click(function(){
		
		setTimeout(function(){ 
			jQuery('.pow').show();
		}, 200);
		
		var jqxhr = $.getJSON("ajax.php?count="+count, function(data) {
			count = parseInt(count) + 1;
			$('#number1').html(data.count);	
			setTimeout(function(){ 
				jQuery('.pow').fadeOut();
			}, 500);
		});
		face_audio.play();
	});
});