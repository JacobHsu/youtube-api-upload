const Youtube = require("./index.js")
, readJson = require("r-json");

const CREDENTIALS = readJson(`${__dirname}/client_secret.json`)

let oauth = Youtube.authenticate({
    type: "oauth"
  , client_id: CREDENTIALS.web.client_id
  , client_secret: CREDENTIALS.web.client_secret
  , redirect_url: CREDENTIALS.web.redirect_uris[0]
});

exports.oauth = oauth;


