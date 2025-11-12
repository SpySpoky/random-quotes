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
}

export default RandomQuote;