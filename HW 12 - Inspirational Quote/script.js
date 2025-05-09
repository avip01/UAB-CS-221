// This script will fetch quotes from the ZenQuotes API and display them on the page

// API endpoint for ZenQuotes
// Note: The API requires a proxy to bypass the same-origin policy when using LiveServer, so we're suing corsproxy.io
// Try removing the proxy and see what happens!
const API_URL = 'https://corsproxy.io/?url=https://zenquotes.io/api/random';
// Review the documentation for the API here: https://docs.zenquotes.io/zenquotes-documentation/#api-response

// DOM Elements
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');

// Function to fetch a new quote from the API
async function fetchQuote() {
    try {
        // TODO: Use the fetch API to get data from the API_URL
        // TODO: Convert the response to JSON
        // TODO: Extract the quote and author from the response
        // TODO: Update the DOM with the new quote and author
        const response  = await fetch(API_URL);

        if (!response.ok) { {/* https://developer.mozilla.org/en-US/docs/Web/API/Response/ok */}
            throw new Error("Cannot get API");
        }

        const [data] = await response.json(); {/* https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch */}
        displayQuote(data.q, data.a);

    } catch (error) {
        // TODO: Add error handling logic here
        // Display a user-friendly error message on the page
        console.error(error);
        displayQuote("Sorry about the error! We will fix it as soon as possible!");
    }
}

// Function to display the quote and author in the DOM
function displayQuote(quote, author) {
    // TODO: Update the DOM elements with the quote and author
    quoteText.textContent   = `${quote}`;
    quoteAuthor.textContent = `by ${author}`;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Load a quote when the page first loads
    fetchQuote();

    // TODO: Add event listener to the "New Quote" button
    // It should call fetchQuote() when clicked

    newQuoteBtn.addEventListener('click', fetchQuote);
});
