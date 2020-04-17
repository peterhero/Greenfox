$('#firstB').click(() => {
	console.log("Yeah, you clicked me");
});

$('#secondB').click(() => {
	$('#firstB').text("The text has changed");
});

$('#thirdB').click(() => {
	$('button').css('background-color', 'lightblue');
});