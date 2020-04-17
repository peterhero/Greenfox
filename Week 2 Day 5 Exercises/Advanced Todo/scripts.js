$('button').click(() => {
	$('ul').append(`<li><span>${$('input').val()}</span></li>`);
	$('ul').on('click', 'li', (event) => {
		 $(event.target).css('text-decoration', 'line-through');
	});
});

// <i class="fas fa-trash"></i>
// <i class="far fa-check-circle"></i>