let num = 0;
$('#num').text(num);

$('#increase').click(() => {
	num++;
	$('#num').text(num);
});

$('#decrease').click(() => {
	num--;
	$('#num').text(num);
});