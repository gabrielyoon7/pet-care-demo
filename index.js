const express = require("express");
const app = express();

console.log(
  " _____         _            _        _  __   __                     "
);
console.log(
  "|  __ \\       | |          (_)      | | \\ \\ / /                     "
);
console.log(
  "| |  \\/  __ _ | |__   _ __  _   ___ | |  \\ V /   ___    ___   _ __  "
);
console.log(
  "| | __  / _` || '_ \\ | '__|| | / _ \\| |   \\ /   / _ \\  / _ \\ | '_ \\ "
);
console.log(
  "| |_\\ \\| (_| || |_) || |   | ||  __/| |   | |  | (_) || (_) || | | |"
);
console.log(
  " \\____/ \\__,_||_.__/ |_|   |_| \\___||_|   \\_/   \\___/  \\___/ |_| |_|"
);

//8080포트가 아닌 다른 포트를 원하는 경우 여기에서 수정
app.listen(8080, function () {
  console.log();
  console.log("listening on 8080");
  const open = require("open");
  open("http://localhost:8080");
  console.log(
    "기본 브라우저를 사용하여 http://localhost:8080 페이지를 자동으로 열었습니다."
  );
  let ip = require("ip");
  console.log();
  console.dir("현재 사용중인 내부 ip로 접속하는 방법은 다음과 같습니다...");
  console.log("http://" + ip.address() + ":8080");
  console.dir(
    "네트워크 설정이 기본 값이라면 동일 공유기 내의 다른 디바이스로도 위 주소로 접속이 가능합니다."
  );
  console.log();
  console.log(
    "(서버의 hot reloading을 원하시면 nodemon index.js로 실행해주세요)"
  );
});

//src 내부의 파일만 접근이 가능하게 함
app.use(express.static("src"));

// 여기에서 URL을 등록
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// 이 페이지 수정 시 서버를 껐다 켜야 합니다.
// 이게 싫으면 nodemon 설치해서 hot reloading 기능을 사용하세요

app.get("/home", function (req, res) {
  res.sendFile(__dirname + "/src/page/home.html");
});

app.get("/my-page", function (req, res) {
  res.sendFile(__dirname + "/src/page/common/my-page.html");
});

app.get("/notification", function (req, res) {
  res.sendFile(__dirname + "/src/page/common/notification.html");
});

app.get("/test", function (req, res) {
  res.sendFile(__dirname + "/src/page/test/test.html");
});

app.get("/voice", function (req, res) {
  res.sendFile(__dirname + "/src/page/pet-care/voiceRecognition.html");
});


app.get("/ball", function (req, res){
  res.sendFile(__dirname + "/src/page/pet-toy/ball.html")
})
app.get("/water", function (req, res) {
  res.sendFile(__dirname + "/src/page/auto-feed/auto-water.html");
});
