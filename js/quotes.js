let quotes = []

function getQuotes() {
  fetch('/js/quotes.json')
    .then(response => response.json())
    .then(data => {
      quotes = data;
      const quote = document.getElementById("quote");
      const author = document.getElementById("author");
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      quote.innerText = randomQuote.quote;
      author.innerText =`- ${randomQuote.author}`;
    })
    .catch(error => console.log(error));
}

getQuotes();
