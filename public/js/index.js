let btcPriceElem = document.querySelector(".btc-price");

const cURL ='https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';

fetch(cURL)
.then(function(response) {
  return response.json();
})
.then((data) => {
  console.log(data.bitcoin.usd);
  btcPriceElem.textContent = data.bitcoin.usd;
})