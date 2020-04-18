$('button').click(() => {
	$('.todos').append(`<div class="todos-container">${$('input').val()}<i class="fas fa-trash delete"></i><i class="far fa-check-circle check"></i></div>`);
	
	$('.todos').css('font-family', `'Manrope', sans-serif`);
	$('.todos').css('font-weight', 'bold');
	$('.todos').css('letter-spacing', '1px');

	$('.todos-container').css('position', 'relative');

	$('.check').css('position', 'absolute');
	$('.check').css('right', '0px');

	$('.delete').css('position', 'absolute');
	$('.delete').css('right', '20px');

	$('.todos-container').css('margin', '15px 0px');
});


/*$('button').click(() => {
	$('ul').append(`<li><span>${$('input').val()}</span></li>`);
	$('ul').on('click', 'li', (event) => {
		 $(event.target).css('text-decoration', 'line-through');
	});
});*/

// <i class="fas fa-trash"></i>
// <i class="far fa-check-circle"></i>