let names = ["Jana", "Honza", "Máťa", "Petr", "Olinka"];

names.forEach((name) => {
	if (name === "Petr") {
		$('ul').append(`<li><strong>${name}</strong></li>`);
	} else {
		$('ul').append(`<li>${name}</li>`);
	}
});