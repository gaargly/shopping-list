$(document).ready(function(){


// Make content of text input visible

    $('#button').click(function(){

    	var new_item = $('#additem').val();
    	$('#list_items').prepend('<li class="item"><img class="delete" src="images/trash.png" alt="delete"><span>'+new_item+'</span></li>');
    	return false;

    });

// On click, mark list item as complete or incomplete

	$('ul').on('click', 'span', function() {
		$(this).toggleClass('complete');
	});

// Clicking garbage can icon makes li invisible

		$('ul').on('click', '.delete', function() {
		$(this).closest('li').hide();
	});

});