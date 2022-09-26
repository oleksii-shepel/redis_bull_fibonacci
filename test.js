const autocannon = require('autocannon');
const instance = autocannon({
    url: 'http://localhost:5000',
    connections: 10,
    duration: 20, 
    requests: [{ 
        method: 'POST', 
        path: '/input', 
        body: JSON.stringify({ number: 1000 })}
    ]}, console.log);