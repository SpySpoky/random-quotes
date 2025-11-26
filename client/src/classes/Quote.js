class Quote {
    constructor (id, text, author) {
        this.id = id;
        this.text = text;
        this.author = author;
        //this.isFavorite = false;
    }

    formatedText() {
        return `${this.text}`;
    }

    formatedAuthor() {
        return `© ${this.author}`;
    }
    
}



export default Quote;