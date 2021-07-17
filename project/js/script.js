/*** 
 * Array of Quotes from Famous People
***/
var quotes = [
  { quote: "People may hate you for being different and not living by societies standards, but deep down, they wish they had the courage to do the same.",
    source: "Kevin Hart",
    occupation: "Comedian"   }, 
  
  { quote: "You want something, go get it. Period.",
    source: "Will Smith",
    citation: "Pursuit of Happyness",
    year: 2006,  
    occupation: "Actor"   },
  
  { quote: "FOCUS!",
    source: "Dwayne 'The Rock' Johnson",  
    occupation: "Actor"     },
  
  { quote: "I have nothing in common with lazy people who blame others for their lack of success.",
    source: "Kobe Bryant",  
    occupation: "NBA Legend"     },
  
  { quote: "Great things come from hard work and perseverance. No Excuses!",
    source: "Kobe Bryant",  
    occupation: "NBA Legend"     },
  
  { quote: "Everybody wants to be famous, but nobody wants to do the work.",
    source: "Kevin Hart",  
    occupation: "Comedian"      },
   
  { quote: "Mirror on the wall, through my rise and fall, you’ve been my only friend.",
    source: "Lil Wayne",
    citation: "Mirror on the Wall, Tha Carter IV",
    year: 2011,  
    occupation: "Musician"      }
]


/***
 *  This function will create a random rgb color.
***/
function getRanColor() {
  var counter = 0;
  var rgbNumbers = []; 
  var ranColor;
  
  while (counter < 3) {
    rgbNumbers.push(Math.floor((Math.random() * 257))); // this code creates a line 
    counter += 1;
  }
  
  ranColor = "rgb(" + rgbNumbers.join(', ') + ")";
  return document.body.style.backgroundColor = ranColor
}


/***
 * A function to grab a random object literal from an array.
***/
function getRandomQuote(arr) {
  var ranNum = Math.floor((Math.random() * arr.length));
  var ran_Quote = arr[ranNum];
  return ran_Quote
}


/***
 * A function that will format a random quote and its data from the quotes array.
***/
function printQuote() {
  var ranQuote = getRandomQuote(quotes); 
  //This variable contains the html for how the quote will be displayed. (Closed p tag can be found after if statements.)
  var ranHtml = '<p class="quote">' + ranQuote.quote + '</p><p class="source">' + ranQuote.source;
  
  
  //Extra Credit (#1) - This if statement checks if occupation exists and contains html to display to browser, if neccessary.
  if (ranQuote.occupation) {
    ranHtml += '<span class="occupation">' + ranQuote.occupation + '</span>';
  }
  if (ranQuote.citation) {
    ranHtml += '<span class="citation">' + ranQuote.citation + '</span>';
  }
  if (ranQuote.year) {
    ranHtml += '<span class="year">' + ranQuote.year + '</span>';
  }
  
  // The closing p tag to display quote correctly in browser.
  ranHtml += '</p>';
  return document.getElementById('quote-box').innerHTML = ranHtml
}


/***
This is function will change quote and background color every 10 seconds 
***/

function changeQuoteItem() {
  var quoteFunc = function quoteFunc(){document.getElementById('load-quote').onload = printQuote();}
  var colorFunc = function colorFunc(){document.body.onload = getRanColor();}
  var quoteTimer = setInterval(quoteFunc, 10000);
  var colorTimer = setInterval(colorFunc, 10000); 

}


printQuote();  //This clears out default quote.
getRanColor(); //This clears out default background-color.
changeQuoteItem();

/***
 * This will print the quote to the browser
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

//this code is needed to have color change with every click.
document.body.addEventListener("click", getRanColor, false);
