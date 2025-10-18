const finnhub = require('finnhub');

const secretKey = process.env.FINNHUB_API_KEY;

if (!secretKey) {
    console.error('FINNHUB_API_KEY is missing in environment variables.');
    throw new Error('API Key missing'); 
}

const finnhubClient = new finnhub.DefaultApi(secretKey) 


export async function fetchMarketNews() {
    return new Promise((resolve, reject) => {
        // Use the callback pattern but wrap it in a Promise
        finnhubClient.marketNews("general", {}, (error, data, response) => {
            if (error) {
                console.error('Error fetching market news:', error);
                return resolve([]); // Reject the promise on error
            }
            // Check for success status, though Finnhub's client might handle 
            // some errors before the callback.
            if (response && response.status === 200) {
                // console.log('data length: ',data.length)
                return resolve(data); // Resolve with the news data
            } else {
                return resolve([]);
            }
        });
    });
}