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

- error handling using app.use('/', (err, req, res, next)=> {})

- create a free cluster on mongodb atlas
- install mongoose library
- connect your application to the DB <connection-url>/devTinder
- call connectDB function and connect to database before starting the application on 7777 

- Create userSchema & user Model
- Create POST /signup API to add data to database
- Push some documents using API calls from postman
- Handle error using try and catch

- JS object vs json object
- Add the express.json middleware to your app
- make /signup API dynamic to recive data from end user  
- API - Get user by email
- API - Feed API - GET /feed - get all the users from database
- API - get user by id 
- API - delete user by id
- Difference between patch & put
- API - Update a user
- explore mongoose documentation for Model method
- What are the options in a Model.findOneAndUpdate method, explore about it.
- API - Update a user with email id

- Explore schematype options from documentation
- add a reuired unique, lowecase, min, minLength, trim, default
- Create a custom validation function for gender
- Improve the DB schema - put all appropriate validations on each field in schema
- Add timestamps to the userSchema
- Add API level validation on Patch request & Signup Post api
- Data Sanitization - Add API validation for each field.
- Install validator
- Explore validator library - email, password, photoUrl
