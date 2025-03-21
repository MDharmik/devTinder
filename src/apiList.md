# Dev Tinder APIs

## authRouter
- POST /signup
- POST /login
- POST /logout

## profileRouter
- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/edit/password

## connectionRequestRouter
- POST request/sent/:status/:userId
<!-- - POST request/sent/ignored/:userId -->

- POST request/review/:status/:requestId
<!-- - POST request/review/rejected/:requestId -->

## userRouter
- GET /user/requests/received
- GET /user/connections
- GET /user/feed - Gets you the profiles of other users on platform

Status: ignore, interested, accepted, rejected