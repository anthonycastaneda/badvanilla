//const https = require('https');
const quotes = [
    'Break what must be broken, once for all, that\'s all, and take the suffering on oneself.',
    'We do not suffer by accident.',
    'Grief is forever. It doesn\'t go away; it becomes a part of you, step for step, breath for breath.',
    'My body kills me, so I kill it.',
    'Her absence is like the sky, spread over everything..',
    'Death is only the end if you assume the story is about you.',
    'It is possible for things to get worse without limit.',
    'The sadness will last forever.',
    'I\'m hoping he can save me, even though I realize he can\'t.',
    'She is never coming back.'
];

//const text = quotes[Math.floor(Math.random() * quotes.length)];

function getRandomQuote(array){
let quoteIndex = [Math.floor(Math.random() * quotes.length)];

for (var i = 0; i < array.length; i++) {
    var randomQuote = array[quoteIndex];
    }
    return randomQuote;
};

module.exports = async function (context, req) {
    context.res.json({
        text: getRandomQuote(quotes)
    });
};