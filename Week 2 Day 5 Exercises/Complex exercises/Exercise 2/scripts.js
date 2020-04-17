$('#firstB').click(() => {
	console.log("Yeah, you clicked me");
});

$('#secondB').click(() => {
	$('#firstB').text("The text has changed");
});

let color;
let colorized = false;

$('#thirdB').click(() => {
	if(!colorized){
		colorized = true;
		color = $('input').val();
		$('button').css('background-color', `${color}`);
	}
});