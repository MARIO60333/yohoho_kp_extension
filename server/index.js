const http = require("http");   //Require some modules
const { exec } = require('child_process');
const fs = require('fs').promises;

//Configure server
const host = 'localhost';
const port = 8086;

const requestListener = function (req, res) {
  fs.readFile(__dirname + "/assets" + "/player.html")
    .then(contents => {
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200); //OK
      res.end(contents);
    })
    .catch(err => {
      res.writeHead(500);
      res.end(err);
      return;
    });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  //There nothing useful, i try animate command prompt and i did it
    exec(`mode con:cols=40 lines=7&&color 1f`)
    let count = 0
    setInterval(() => { 
      switch (count) {
        case 0:
          process.stdout.write(`\x1b[2J\x1b[H>=========[ Kinopoisk Player ]=========<\n\\ Локальный сервер запущен. Порт: ${port} \n  Для выхода нажмите [CTRL + C] \n\n  Версия node.js: ${process.version} \n\\======================================/ \r`)
          count++
          break;
        case 1:
          process.stdout.write(`\x1b[2J\x1b[H>=========[ Kinopoisk Player ]=========<\n| Локальный сервер запущен. Порт: ${port} \n  Для выхода нажмите [CTRL + C] \n\n  Версия node.js: ${process.version} \n\\======================================/ \r`)
          count++
          break;
        case 2:
          process.stdout.write(`\x1b[2J\x1b[H>=========[ Kinopoisk Player ]=========<\n/ Локальный сервер запущен. Порт: ${port} \n  Для выхода нажмите [CTRL + C] \n\n  Версия node.js: ${process.version} \n\\======================================/ \r`)
          count++
          break;
        case 3:
          process.stdout.write(`\x1b[2J\x1b[H>=========[ Kinopoisk Player ]=========<\n- Локальный сервер запущен. Порт: ${port} \n  Для выхода нажмите [CTRL + C] \n\n  Версия node.js: ${process.version} \n\\======================================/ \r`)
          count++
          break;
        default:
          count = 0

      }
    }, 50)
});
