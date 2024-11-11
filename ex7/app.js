const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method, req.headers);
  const url = req.url;
  if (url === "/home") {
    res.write("<html>");
    res.write("<head><title>home</title></head>");
    res.write("<body><h2>Welcome Home</h2></body>");
    res.write("</html>");
    return res.end();
  } else if (url === "/about") {
    res.write("<html>");
    res.write("<head><title>about</title></head>");
    res.write("<body><h2>Welcome to About Us page</h2></body>");
    res.write("</html>");
    return res.end();
  } else if (url === "/node") {
    res.write("<html>");
    res.write("<head><title>node js</title></head>");
    res.write("<body><h2>Welcome to my Node Js project</h2></body>");
    res.write("</html>");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Backend First page</title></head>");
  res.write("<body><h1>Welcome to my node Js project</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(4000);
