# JWT
Learning jsonwebtoken from very basics in node.js environment is easy from this repository,

# JWT Basics

This project is aimed at providing a basic understanding of JSON Web Tokens (JWT) for authentication in Node.js.

## Overview

The project includes a simple Node.js server using Express and JWT for user authentication. It demonstrates how to generate a JWT during user login and protect a route using a middleware to verify the token.

## Getting Started

Follow these steps to set up and run the project on your local machine:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/JWT.git

2  Install dependencies
    npm install
3  start the server
    npm start
    
## Explore the following endpoints:

GET   /         : Root endpoint providing information about the project.
POST  /login    : Endpoint for user login, which generates a JWT.
POST  /profile  : Protected endpoint that requires a valid JWT for access.

## 1. /login Endpoint:

# Purpose:
  This endpoint simulates user login and generates a JSON Web Token (JWT) for authentication.

# Request:
Method: POST
Endpoint: /login
# How to Use:
Send a POST request to the /login endpoint.
The request should include sample user credentials in the request body. For example:

{
    "id": 1,
    "username": "your_username",
    "email": "your_email"
}
## NOTE : in our case, I already provided credentials in the code of login api, You don't need to provide these credential in login post request's body. Just hit the send button and copy the generated token

## 2. /profile Endpoint:

# Purpose:
  This protected endpoint requires a valid JWT for access. It demonstrates how to secure routes using JWT.

# Request:
Method: POST
Endpoint: /profile
# How to Use:

Obtain a JWT by successfully logging in using the /login endpoint.
Include the obtained JWT in the Authorization header of your request.

Headers:
{
    "authorization": "bearer your_generated_jwt"
}



## NOTE : You should paste the copied token in header authorization value in profile post request with the keyword bearer. Now hit the send button and you can see the output. the token remains for 5 mins.



