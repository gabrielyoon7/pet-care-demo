function setStatusBar() {
    // // 모바일이랑 PC에 따라서 상태바 보일지 말지 결정
    // const filter = "win16|win32|win64|mac|macintel";
    // if (navigator.platform) {
    //     if (filter.indexOf(navigator.platform.toLowerCase()) < 0) { //mobile 
    //         // alert('mobile 접속!');
    //     } else { //pc 
    //         // alert('pc 접속!');
    //         document.getElementById("status-bar").style.visibility = "visible";
    //     }
    // }
    document.getElementById("status-bar").style.visibility = "visible";
}