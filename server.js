const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer((request, response) => {
    let addr = request.url,
      q = new URL(addr, "http://" + request.headers.host);
    filePath = "";

    fs.appendFile(
      "log.txt",
      "URL: " + addr + "\nTimeStamp: " + new Date() + "\n\n",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Added to log.");
        }
      }
    );

    if (q.pathname.includes("documentation")) {
      filePath = __dirname + "/documentation.html";
    } else {
      filePath = "index.html";
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        throw err;
      }

      response.writeHead(200, { "content-Type": "text/html" });
      response.write(data);
      response.end();
    });
  })
  .listen(5800);
console.log("my test server is running in port 5800");
