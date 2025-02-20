- create a repository
- initialize a repo
- install express
- create a server
- listen to port 7777
- write request handlers for /test, /hello
- install nodemon and update inside package.json
- differerence between ~ and ^
==================================

- Initialize git
- add .gitignore
- create remote repo on github
- push all code to remote origine
- play with routes and route extension ex.- /hello, /hello/2, /test
- order of the routes matter a lot
- install postman and make a workspace/collection > test API call
- Write logic to handle GET, POST, DELETE, PATCH api calla and test them on Postman

- explore routing and use of ?, +, (), *, in the routes
- use of regex in routes /a/, /.*fly$/
- reading the query params in the routes
- reading the dynamic routes 

- Multiple route handler - play with the code
- next()
- next() function and errors along with res.send()
- app.use('/route', rH1, [rH2, rH3], rH4, rH5);

- what is middleware 
- how express handles requests behind the scene

- write a dummy auth middleware for admin route
- write a dummy user middleware for user route except /user/login