const quotes = document.querySelector("#quote");
const author = document.querySelector("#author");

const api_Url = "https://api.quotable.io/random";

async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();

  quotes.innerHTML = data.content;
  author.innerHTML = data.author;
}

getQuote(api_Url);

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" + quotes.innerHTML, +"----- by " + author.innerHTML, "Tweet Window", "width=600, height=300");
}
