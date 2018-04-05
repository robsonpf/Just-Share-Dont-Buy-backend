var token = require('./query/token.js');

function getToken() {
  token.generateJWT({"email": "paulogpafilho@gmail.com", "phone":"6506499828", "name": "Paulo Albuquerque"}, function(tk, err) {
    if(err) {
      console.log("error: " + err);
    } else {
      console.log("Token: " + tk);
      token.validateJWT(tk, function(decoded, error) {
        if(err) {
          console.log("error: " + JSON.stringify(err));
        } else {
          console.log("Decoded: " + JSON.stringify(decoded));
        }
      });
    }
  });
}

getToken();
