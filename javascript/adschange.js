
var index = 1;
changeImage = function () {
    var imgs = ['https://i01.appmifile.com/webfile/globalimg/0320/TO-B/webupdata/redmi-9c-banner.jpg', 'https://i02.appmifile.com/835_operator_sg/27/05/2021/1fa316c3507d00c046c80d3ef3014b96.jpg', 'https://image.sggp.org.vn/w800/Uploaded/2023/yfsgf/2022_01_26/nm_SOSF.JPG', 'https://ae01.alicdn.com/kf/H9060842f9fc24f1c9455aa8d11f543a3s.jpg', 'https://cdn.mykiot.vn/2021/05/1620374670b0f8256d523de5f6a6206b938251963c.jpg'];
    document.getElementById('img').src = imgs[index];
    document.getElementById('img').style.width = "100%";
    document.getElementById('img').style.height = "400px";
    index++;
    if (index == 5) {
        index = 0;
    }
}
setInterval(changeImage, 3000);