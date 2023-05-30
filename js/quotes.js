let quotes = [];

function getQuotes() {
	const quote = document.getElementById("quote");
	const author = document.getElementById("author");
	// const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	fetch("/quotes.json")
		.then((response) => response.json())
		.then((data) => {
			const randomQuote = data[Math.floor(Math.random() * data.length)];
			quote.innerText = randomQuote.quote;
			author.innerText = `- ${randomQuote.author}`;
		});
}

document.querySelector("#new-quote").addEventListener("click", getQuotes);

getQuotes();
