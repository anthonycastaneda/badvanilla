//const https = require('https');
const quotes = [
    'Break what must be broken, once for all, that\'s all, and take the suffering on oneself.',
    'We do not suffer by accident.',
    'Grief is forever. It doesn\'t go away; it becomes a part of you, step for step, breath for breath.',
    'Anyone who has lost something they thought was theirs forever finally comes to realise that nothing really belongs to them.',
    'Her absence is like the sky, spread over everything..',
    'Death is only the end if you assume the story is about you.',
    'It is possible for things to get worse without limit.',
    'The sadness will last forever.',
    'I\'m hoping he can save me, even though I realize he can\'t.',
    'She is never coming back.'
];
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const quotetext = quotes[Math.floor(Math.random() * quotes.length)];

    context.res.json = {
        text: {
            quotetext
        }
    };
};
//module.exports = async function (context, req) {
//    context.res.json({
//        text: "Hello from the API"
//    });
//};