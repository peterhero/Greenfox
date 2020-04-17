$('#firstB').click(() => {
	console.log("Yeah, you clicked me");
});

$('#secondB').click(() => {
	$('#firstB').text("The text has changed");
});

let color;

$('#thirdB').click(() => {
	color = $('input').val();
	$('button').css('background-color', `${color}`);
});