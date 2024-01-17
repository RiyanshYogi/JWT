// Importing necessary modules
const express = require('express'); // Express framework for building web applications
const jwt = require('jsonwebtoken'); // JSON Web Token library for authentication

// Secret key for signing and verifying JWTs
const secretKey = "secret_key_hai";

// Creating an Express application
const app = express();


// Route for the root endpoint
app.get("/", (req, res) => {
    // Sending a JSON response for the root endpoint with a status code 200 (OK)
    res.status(200).json({ message: "Let's Learn jsonwebtoken for authentication in nodeJS" });
});


// Route for user login to generate a JWT
app.post("/login", (req, res) => {
    // Sample user data for authentication
    const user = {
        "id": 287,
        "username": "Reyansh Yogi",
        "email": "reyance299@gmail.com"
    };

    // Creating and signing a JWT with user data and a set expiration time
    jwt.sign({ user }, secretKey, { expiresIn: '300s' }, (err, token) => {
        // Sending the generated token as a JSON response with a status code 200 (OK)
        res.status(200).json({ token });
    });
});




// Using a middleware for token verification
const gettingTokenInRequest = require('./middleware/verifyToken');
app.use(gettingTokenInRequest);




// Route for accessing a user profile with a verified token
app.post("/profile", (req, res) => {
    // Verifying the token extracted from the request
    jwt.verify(req.token, secretKey, (err, authData) => {
        // Handling token verification result
        if (err) {
            // Sending an error response with a status code 403 (Forbidden)
            res.status(403).send({ result: "Invalid token" });
        } else {
            // Sending a JSON response with a status code 200 (OK)
            res.status(200).json({ message: "Access Granted to the profile, here is the detail :-", authData });
        }
    });
});



// Setting the port for the server to listen on
const PORT = 8080;

// Starting the server and logging the port
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
