// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
//document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Array with 5 quotes and sources etc


var quotes = [
  {
    quote: 'All that is gold does not glitter, Not all those who wander are lost.',
    source: 'J.R.R. Tolkien',
    citation: 'The Fellowship of the Ring',
    year: 'July 29, 1954',
  },
  {
    quote: "There's something about arriving in new cities, wandering empty streets with no destination. I will never lose the lover for the arriving, but I'm born to leave.",
    source: "Charlotte Erikson",
    citation: 'Empty Roads & Broken Bottles',
    year: 'April 22, 2013',
    tags: 'wanderlust'
  },
  {
    quote: 'He found himself wondering at times, especially in the autumn, about the wild lands, and strange visions of mountains that he had never seen came into his dreams.',
    source: 'J.R.R. Tolkien,',
    citation: 'The Fellowship of the Ring',
    year: 'July 29, 1954',
  },
  {
    quote: "You don't even know where I'm going. <p> I don't care. I'd like to go anywhere. </p>",
    source: 'John Steinbeck,',
    citation: ' Travels with Charley: In Search of America',
    year: 'February 5, 2002',
  },

  {
    quote: 'Travel far enough, you meet yourself.',
    source: 'David Mitchelle,',
   citation: 'Cloud Atlas',
    year: 'August 17, 2004',
  }

];

// Variables - no repeat and timer restart
var quotesArray =[];
var timeRestart = window.setTimeout(printQuote, 3000);

// getRandomquote function to get random object from quotes array
function getRandomQuote () {
    if (quotesArray.length === 0) {
        quotesArray = quotes.slice ();
    }

// Code below returns randomly selected quote oobject
var randomStart = Math.floor(Math.random() * quotesArray.length);
var quote = quotesArray[randomStart];

// return and remove selected quotesArray
quotesArray.splice(randomStart, 1);
return quote;
}

function getRandomColor () {
  var colors = "#";
  var hexColor ="0123456789ABCDEF";
  
}
// Function named printQuote to call getRandomQuote and stores returned quote in a Variable
function printQuote() {
    var toPrint = getRandomQuote();
    var randomColor = getRandomColor();

    var quotekeys = Object.keys(toPrint);
    var textInHTML = '<p class="quote">' + toPrint['quote'] +  '<p class="source">' + toPrint['source'];

    //to print on div 'quote-box
    document.getElementById('quote-box').innerHTML = textInHTML;
    // change background color everytime new quote is loaded
    document.body.style.backgroundColor = randomColor;
    document.getElementById('loadQuote').style.backgroundColor = randomColor;

}

// Analyze if quote has source, tag, etc

/*if (quotekeys.includes('citation')) {
    textInHTML += '<span class="citation">'+ quoteToPrint['citation'] + '</span>';
}*/
