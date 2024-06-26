const { error } = require("console");
const http = require("http");

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>Hello Node!</h1>");
    res.write("<p>Hello server</p>");
    res.write("<p>Hello seoyeon</p>");
  })
  .listen(8080);
server.on("listening", () => {
  console.log("8080번 포트에서 서버 대기 중입니다.");
});
server.on("error", (error) => {
  console.error(error);
});

// 동시에 서버 2개 실행 가능
// const server1 = http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//     res.write("<h1>Hello Node!</h1>");
//     res.write("<p>Hello server</p>");
//     res.write("<p>Hello seoyeon</p>");
//   })
//   .listen(8081);
