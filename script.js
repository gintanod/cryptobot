document.getElementById('get-price').addEventListener('click', async () => {
    const symbol = document.getElementById('crypto-symbol').value.toUpperCase();
    const apiKey = '7896b2ab-3f57-4881-8b52-2490ec79da54'; // Replace with your CoinMarketCap API key
    const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${symbol}`;

    try {
        const response = await fetch(url, {
            headers: {
                'Accepts': 'application/json',
                'X-CMC_PRO_API_KEY': apiKey
            }
        });
        const data = await response.json();

        if (data.status.error_code === 0) {
            const price = data.data[symbol].quote.USD.price;
            document.getElementById('price-display').innerText = `Price: $${price.toFixed(2)}`;
        } else {
            document.getElementById('price-display').innerText = 'Error: Invalid symbol or API key.';
        }
    } catch (error) {
        document.getElementById('price-display').innerText = 'Error fetching data.';
    }
});
