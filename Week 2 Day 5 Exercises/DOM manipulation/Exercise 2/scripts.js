let names = ["Jana", "Honza", "Máťa", "Petr", "Olinka"];

names.forEach((name) => {
	if (name === "Petr") {
		$('ul').append(`<li><strong>${name}</strong></li>`);
	} else {
		$('ul').append(`<li>${name}</li>`);
	}
});

let additionalBlock = {
  title: "Added with javascript",
  text: "This block was added using JavaScript's jQuery library. How awesome!"
};

$('body').append(
	`<h3>${additionalBlock.title}</h3>
	 <p>${additionalBlock.text}</p>`);