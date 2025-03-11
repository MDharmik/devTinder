# Dev Tinder APIs

## authRouter
- POST /signup
- POST /login
- POST /logout

## profileRouter
- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password

## connectionRequestRouter
- POST reuest/sent/interested/:userId
- POST reuest/sent/ignored/:userId
- POST reuest/received/accepted/:requestId
- POST reuest/received/rejected/:requestId

## userRouter
- GET /user/connections
- GET /user/requests
- GET /user/feed - Gets you the profiles of other users on platform

Status: ignore, interested, accepted, rejected