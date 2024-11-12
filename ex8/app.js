const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/form") {
    res.write("<html>");
    res.write("<head><title>Form</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><label for="email">Enter Email address:</label><input name="email" type= "email" placeholder="example@gmail.com" /><button type= "submit" >Subscribe</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      console.log(body);
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      //   fs.writeFileSync("email.txt", message);
      //   res.statusCode = 302;
      //   res.setHeader("Location", "/form");
      //   return res.end();

      //if we use writeFileSync as it is synchronus it wiil block code execution until email.txt created so for handling large files it will create problem so we use writeFile method

      fs.writeFile("email.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/form");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Backend page</title></head>");
  res.write("<body><h1>Welcome to my node Js project</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(7000);
