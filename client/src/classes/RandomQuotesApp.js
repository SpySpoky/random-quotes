import Quote from "./Quote.js";
import RandomQuote from './RandomQuote.js';


class RandomQuotesApp {
    constructor () {
        this.randomQuoteBtn = document.querySelector('#random-quote-btn');
        this.randomQuoteBtnViaApi = document.querySelector('#random-quote-public-api-btn');
        this.quoteTextElement = document.getElementById('quote-text');
        this.quoteAuthorElement = document.getElementById('quote-author');
        this.currentQuote = null;

        this.init();

    }

    displayCurrentQuote() {
        //const {text, author} = this.currentQuote;
        this.quoteTextElement.textContent = this.currentQuote.formatedText();
        this.quoteAuthorElement.textContent = this.currentQuote.formatedAuthor();
    }

    getRandomQuote() {
        const randomQuote = RandomQuote.getRandomQuote();
        this.currentQuote = randomQuote;
        this.displayCurrentQuote();
    }

   async getRandomQuoteViaApi() {
        const randomQuoteViaApi = await RandomQuote.getRandomQuoteViaAPI();
        this.currentQuote = randomQuoteViaApi;
        this.displayCurrentQuote();
    }

    init() {
        this.randomQuoteBtn.addEventListener('click', () => {
            this.getRandomQuote();
        });
        this.randomQuoteBtnViaApi.addEventListener('click', () => {
            this.getRandomQuoteViaApi();
        })
    }
}

export default RandomQuotesApp;