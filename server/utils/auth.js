const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '24h';

// change the expiration back to 2h when deploying
// change the expiration back to 2h when deploying
// change the expiration back to 2h when deploying
// change the expiration back to 2h when deploying
// change the expiration back to 2h when deploying


module.exports = {
  authMiddleware: function({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token
        .split(' ')
        .pop()
        .trim();
    }

    if (!token) {
      (req.body.operationName === 'IntrospectionQuery')
        ? console.log('GraphQL Sandbox: Ping! -- no token')
        : console.log('No token provided');
      return req;
    }

    try {
      // Attempt to decode JWT for payload data
      const {data, exp} = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;

      (req.body.operationName === 'IntrospectionQuery')
        ? console.log('GraphQL Sandbox: Ping! -- valid token') 
        : console.log('^^ USER:  "', data.username, '" accessed the server with a token verified until:', formatDate(exp));
    }
    
    // Error logging for invalid tokens
    catch {
      console.log(req.body.operationName);
      (req.body.operationName === 'IntrospectionQuery')
        ? console.log('GraphQL Sandbox: Ping! No verifiable token Error')
        : console.log('Token could not be verified Error');
    }
          // Returns the request object with or without verified user data
          return req;
  },
  signToken: function({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  }
};
