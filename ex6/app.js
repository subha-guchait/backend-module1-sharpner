const http = require("http");

// function rqListner(req,res){
//     console.log(req);
// }

const server = http.createServer((req, res) => {
  //instead of passing normal function created in line no 3 we have passed annonomus function thats looks good
  //   console.log(req)
  console.log("subhankar");
});

server.listen(4000);
