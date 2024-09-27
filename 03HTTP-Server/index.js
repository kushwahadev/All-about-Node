import http from "http";
import fs from "fs";
import url from "url";
import { appendAsyncFile } from "../02files/file.js";

// we also use this function intead of fs.append directly
// appendAsyncFile("example.txt", `data inside file`, (err, data) => {
//   console.log("everything works fine");
//   return;
// });

// URL -> uniform resource locator
const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    return res.end();
  }
  const myUrl = url.parse(req.url, true);
  const data = `${Date.now()} : ${req.url} New Req Rec.. \n`;
  fs.appendFile("log.txt", data, (err, result) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("HOME PAGE");
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`Hi, ${username}`);
        break;
      case "/search":
        const search = myUrl.query.query_search;
        res.end(`here are results of ${search}`);
      default:
        break;
    }
  });
});

myServer.listen(8000, () => {
  console.log("sever running");
});
