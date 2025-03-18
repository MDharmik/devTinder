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
- POST request/sent/interested/:userId
- POST request/sent/ignored/:userId
- POST request/received/accepted/:requestId
- POST request/received/rejected/:requestId

## userRouter
- GET /user/connections
- GET /user/requests
- GET /user/feed - Gets you the profiles of other users on platform

Status: ignore, interested, accepted, rejected