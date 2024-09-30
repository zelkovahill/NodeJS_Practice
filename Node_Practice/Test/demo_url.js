const url = require('url');
const adr = 'http://localhost:8080/default.htm?year=2017&month=february';
const q = url.parse(adr, true);

console.log(q.host);        // return 'localhost:8080'
console.log(q.pathname);    // returns '/default.htm'
console.log(q.search);      // returns '?year=2017&month=february'

const qdata = q.query;      // returns an object: { year: 2017, month: 'february'}
console.log(qdata.month);   // return 'february'