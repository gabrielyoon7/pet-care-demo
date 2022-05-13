const express = require('express');
const app = express();

console.log(' _____         _            _        _  __   __                     ') 
console.log('|  __ \\       | |          (_)      | | \\ \\ / /                     ') 
console.log('| |  \\/  __ _ | |__   _ __  _   ___ | |  \\ V /   ___    ___   _ __  ') 
console.log('| | __  / _` || \'_ \\ | \'__|| | / _ \\| |   \\ /   / _ \\  / _ \\ | \'_ \\ ') 
console.log('| |_\\ \\| (_| || |_) || |   | ||  __/| |   | |  | (_) || (_) || | | |') 
console.log(' \\____/ \\__,_||_.__/ |_|   |_| \\___||_|   \\_/   \\___/  \\___/ |_| |_|') 

//8080포트가 아닌 다른 포트를 원하는 경우 여기에서 수정
app.listen(8080,function(){
    console.log('listening on 8080');
    const open = require('open');
    open('http://localhost:8080');
    console.log('http://localhost:8080 페이지를 자동으로 열었습니다.')
    console.log('(서버의 hot reloading을 원하시면 nodemon index.js로 실행해주세요)')
});

//src 내부의 파일만 접근이 가능하게 함
app.use(express.static('src'));

// 여기에서 URL을 등록
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// 이 페이지 수정 시 서버를 껐다 켜야 합니다.
// 이게 싫으면 nodemon 설치해서 hot reloading 기능을 사용하세요

app.get('/home', function(req, res){
    res.sendFile(__dirname + '/src/home.html');
});

app.get('/test', function(req, res){
    res.sendFile(__dirname + '/src/test/test.html');
});

