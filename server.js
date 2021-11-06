// Express
const express = require('express');
const app = express();

// Request promise
function getBitcoinPrice() {
    let cURL = "https://pro-api.coinmarketcap.com/v1/tools/price-conversion?amount=1&id=1&convert=USD";
    const rp = require('request-promise');
    const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/tools/price-conversion',
    qs: {
        'amount': '1',
        'id': '1',
        'convert': 'USD'
    },
    headers: {
        'X-CMC_PRO_API_KEY': '570b1d0a-8c91-494b-992f-438297051dc3'
    },
    json: true,
    gzip: true
    };

    rp(requestOptions).then(response => {
        console.log('API call response:', response);
        let bitcoinPrice = response.data.quote;
        console.log(bitcoinPrice);
    })
    .catch((err) => {
        console.log('API call error:', err.message);
    });
}

getBitcoinPrice();