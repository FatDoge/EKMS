//url传参
function GetRequest() {
    var url = location.search; // 获取 url 中 "?" 符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
//根据url中参数选择路径
function getFilePath(fileType){
    var filePath;
    switch (fileType){
        case 'ppt':
            filePath='./web/pptViewer.html';
            break;
        case 'word':
            filePath='./web/fileViewer.html';
            break;
        case 'pdf':
            filePath='./web/viewer.html';
            break;
        case 'video':
            filePath='./web/videoViewer.html';
            break;
        case 'audio':
            filePath='./web/musicViewer.html';
            break;
        default:
            filePath='';
            break;
    }
    return filePath;
}
//更改iframe路径
function changeIframe(filePath){
    document.getElementById('myIframe').src=filePath;
}
//等待页面元素加载完毕
$(document).ready(function(){
    changeIframe(getFilePath(GetRequest().type));
})
