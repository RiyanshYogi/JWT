function gettingTokenInRequest(req,res,next) {
    const bearerHeader = req.headers['authorization']; //getting value of header authorization
    if(typeof bearerHeader != 'undefined')
    {
        const bearer = bearerHeader.split(" "); // creating an array of 2 elements consisting bearer and token
        const token = bearer[1]; // copying token from the array bearer to the token literal
        req.token = token; // loading token to the request
        next();
    }   
    else console.log("Token is not found"); 
}


module.exports = gettingTokenInRequest;