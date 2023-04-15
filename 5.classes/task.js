class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state *= 1.5;
    }
        set state (newCondition) {
        if(newCondition < 0) {
            this._state = 0;
        } 
        if(newCondition >= 100) {
            this._state = 100;
        } 
        if(newCondition >= 0 && newCondition < 100) {
            this._state = newCondition;
        }
    }
     get state () {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
    }
}

//2 задача

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state >= 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const book = this.books.find(item => item[type] === value);
        return book || null;
    }

    giveBookByName(bookName) {
        const book = this.books.find(item => item['name'] === bookName);
        if(this.books.indexOf(book) !== -1) {
            this.books.splice(this.books.indexOf(book), 1);
        } 
        return book || null;
    }
}