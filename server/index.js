const http = require("http");
const { exec } = require('child_process');
const fs = require('fs').promises;

const host = 'localhost';
const port = 8086;

const requestListener = function (req, res) {
  fs.readFile(__dirname + "/assets" + "/player.html")
    .then(contents => {
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
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
    console.log(` Для выхода нажмите [CTRL + C]`);
    console.log(`\\======================================/`);
});
