$(document).ready(function(){


// Make content of text input visible

    $('#button').click(function(){

    	var new_item = $('#additem').val();
    	$('#list_items').prepend('<li class="item"><img class="delete" src="images/trash.png" alt="delete"><span>'+new_item+'</span></li>');
    	return false;

    });

// THIS IS INCOMPLETE -- need to toggle class off on click
//http://stackoverflow.com/questions/16360042/jquery-toggling-the-class-with-removeclass-and-addclass-not-working-proper
    $('li').click(function(){

    	$(this).addClass('complete');


    });


});