const querystring = require('querystring');
const url = require('url');


let q = url.parse(const url = require('url');
const querystring = require('querystring');


function extractQueryParams(inputURL) {
    const parsedURL = new URL(inputURL);
    const queryParams = parse(parsedURL.search.slice(1));
    return queryParams;
}
const inputURL = 'http://www.company.com?user=Darsh&id=2023';


const extractedParams = extractQueryParams(inputURL);
console.log('Extracted Query Parameters:', extractedParams);
);
let qstring = querystring.parse(q.query);
console.log(qstring);
