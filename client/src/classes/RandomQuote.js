import quotes from '../data/quotes.js';
import MathUtils from '../utils/MathUtils.js';
import Quote from './Quote.js';

class RandomQuote {
   static getRandomQuote() {
        const randomIndex = MathUtils.generateRandomInt(quotes.length);
        // const randomQuotes = quotes[randomIndex];
        const {id, text, author} = quotes[randomIndex];
        return new Quote(id, text, author)
        // return {
        //     id: id,
        //     text: text,
        //     author: author
        // }
    }

    // static  getRandomQuoteViaAPI() { // without async and await
    //     const url = "https://quoteslate.vercel.app/api/quotes/random";

    //     return fetch(url)
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(data => {
    //             const {id, quote, author} = data;
    //             return new Quote(id, quote, author);
    //             // const id = data.id;
    //             // const text = data.quote;
    //             // const author = data.author;
    //             // return new Quote(id, text, author);    
    //         })
    //         .catch(error => {
    //             console.error(error);
    //             return null;
    //         })
    // }
    
    static async getRandomQuoteViaAPI() {
        const url = "https://quoteslate.vercel.app/api/quotes/random";
        try {
            const response = await fetch(url);
            const data = await response.json();
            const {id, quote, author} = data;
            return new Quote(id, quote, author);
        } catch (error) {
            console.error(error);
        }
        
    }
}

export default RandomQuote;