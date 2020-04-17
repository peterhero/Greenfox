$('#firstB').click(() => {
	console.log("Yeah, you clicked me");
});

$('#secondB').click(() => {
	$('#firstB').text("The text has changed");
});