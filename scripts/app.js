$(document).ready(function(){

// On click, mark list item as complete or incomplete

	$('span').click(function() {
		$(this).toggleClass('complete');
	});


// Clicking garbage can icon makes li invisible

	$('.delete').click(function() {
		$(this).parent('li').hide();
		event.stopPropagation();
	});

	
// Make content of text input visible

    $('#button').click(function(){

    	var new_item = $('#additem').val();
    	$('#list_items').prepend('<li class="item"><img class="delete" src="images/trash.png" alt="delete"><span>'+new_item+'</span></li>');
    	return false;

    });


});