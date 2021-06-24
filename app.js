//https://nodejs.org/api/
const http = require("http");
const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hello, World!");
};

//Parse query string
const querystring = require("querystring");
let siteUrl = "foo=bar&abc=xyz&abc=123&def=456";
let parsedUrl = querystring.parse(siteUrl);
console.log(`Parsed URL : ${JSON.stringify(parsedUrl)}`);
console.log(`Print value of foo : ${parsedUrl.foo}`);
console.log("Print value of foo : " + parsedUrl.foo);

//https://nodejs.org/api/url.html
//Parse Url
const url = require("url");
const myURL = url.parse("https://nodejs.org:8080/p/a/t/h?query=string#hash");
console.log(myURL.hostname);
console.log(myURL.port);

//Files system read/create/write
const fs = require("fs");
try {
  let data = fs.readFileSync("./files/sample.txt", "utf8");
  console.log(data.toString());
} catch (e) {
  console.log("Error:", e.stack);
}

//Path is used to specify path of directory/files
let path = require("path");
let readStream = fs.createReadStream(
  path.join(__dirname, "/sample.txt"),
  "utf8"
);
let data = "";
readStream
  .on("data", function (chunk) {
    data += chunk;
  })
  .on("end", function () {
    console.log(data);
  });

// OS realted info
const os = require("os");
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.hostname());

//Multi threading concept.
const crypto = require("crypto");
const start = Date.now();
crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
  console.log("1:", Date.now() - start);
});
crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
  console.log("2:", Date.now() - start);
});
crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
  console.log("3:", Date.now() - start);
});
crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
  console.log("4:", Date.now() - start);
});
crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
  console.log("5:", Date.now() - start);
});

const server = http.createServer(requestListener);
server.listen(5050);
