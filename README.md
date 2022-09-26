# redis_bull_fibonacci

To start up with the project run the following command in terminal:

`docker-compose up -d`

This will start 2 containers running, after that you can execute requests in Postman application:

1. POST request to **localhost:5000/input**
with body

`{
   "number": "1000"
 }`

The answer will look like:

`{
   "ticket": "03856968349e445bb592e050f0f64ef0"
}`

2. GET request to **localhost:5000/output?ticket=03856968349e445bb592e050f0f64ef0**,
where ticket is equal to ticket number received as answer to first request.

To run the tests with **autocannon** execute command:

`node test.js`

