/* 
implement the Strategy pattern to have different text formatting strategies, 
such as uppercase formatting, lowercase formatting, and title case formatting,
 encapsulated as separate classes. The TextFormatter class will take a formatting strategy object 
 and use it to format a given text string.

Your task is to implement this example using class syntax in JavaScript.
*/

class UpperCaseStrategy {
    format(text) {
        return text.toUpperCase();
    }
}

class LowerCaseStrategy {
    format(text) {
        return text.toLowerCase();
    }
}

class TitleCaseStrategy {
    format(text) {
        return text.split(' ').map(word => this.capitalizeFirstLetter(word)).join(' ');
    }

    capitalizeFirstLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
}

class TextFormatter {
    constructor(strategy) {
        this.strategy = strategy;
    }

    format(text) {
        switch (this.strategy) {
            case 'uppercase':
                const upperCaseStrategy = new UpperCaseStrategy();
                return upperCaseStrategy.format(text);
                break;
            case 'lowercase':
                const lowerCaseStrategy = new LowerCaseStrategy();
                return lowerCaseStrategy.format(text);
                break;
            case 'titlecase':
                const titleCaseStrategy = new TitleCaseStrategy();
                return titleCaseStrategy.format(text);
                break;
            default:
                break;
        }
    }
}

const title = 'some kind of TITLE needs to be formatted!';

const formatter = new TextFormatter('uppercase');
const bigTitleFormatter = formatter.format(title);

console.log('title: ', bigTitleFormatter);
