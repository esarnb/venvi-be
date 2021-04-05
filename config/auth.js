require("dotenv").config();

module.exports = {

  'googleAuth' : {
      'clientID'      : process.env.GOOGLE_CLIENT_ID,
      'clientSecret'  : process.env.GOOGLE_CLIENT_SECRET,
      'callbackURL'   : 'https://venvi-be-sr.herokuapp.com/auth/google/callback'
  }

};
