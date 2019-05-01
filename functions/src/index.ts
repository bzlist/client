import * as functions from "firebase-functions";
const universal = require(`${process.cwd()}/dist/server`).app;

// export const ssr = functions.https.onRequest(universal);
export const ssr = functions.https.onRequest((req, res) => {
  console.log(`Url: ${req.url}`);

  if(!req.path){
    req.url = `/${req.url}`;
  }

  return universal(req, res);
});