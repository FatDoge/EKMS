var index;
//普通用户收藏知识
function collectKnowledge(){
console.log("用户收藏知识");
    Materialize.toast('收藏成功',2000)
}
//普通用户关注
function followUser(){
    console.log('用户关注');
    Materialize.toast('关注成功',2000)
}
//普通用户上传知识
function openFileUploadPage(){
    //iframe层-禁滚动条
    layui.use('layer',function(){
        var layer=layui.layer;
        //iframe层-禁滚动条
        index = layer.open({
            type: 2,
            content: './userFileUpload.html',
            title: '知识上传',
            area:['400px','150px;'],
            maxmin: false
        });
        layer.full(index);
    })
}
//用户提交上传
function userUploadFile(){
    setTimeout(function(){
        Materialize.toast('上传成功', 2000)
    },1000);
}
//用户搜索跳转
function userSearch(){
    var qw=document.getElementById('search').value;
    qw.trim()?window.location=`./userSearch.html?qw=${qw}`:Materialize.toast('请输入关键字', 2000);
}
//用户修改账户
function settingAccount() {
    console.log("用户更改账户");
    document.getElementById('Password').value!=''&&document.getElementById('RePassword').value!=''&& document.getElementById('Password').value==document.getElementById('RePassword').value? Materialize.toast('更改成功',2000):Materialize.toast('错误 请重新填写',2000)
}
//用户:我的文档各类提示
function userDocTips(type){
    switch (type){
        case 1:
            Materialize.toast('公有文档对所有人可见',2000);
            break;
        case 2:
            Materialize.toast('私有文件仅对自己可见',2000);
            break;
        case 3:
            Materialize.toast('审核期为24小时',2000);
            break;
        case 4:
            Materialize.toast('驳回记录将自动删除',2000);
            break;
        default:
            return false;
    }
}
//用户管理文档时预览
function userView(type){
    const wordViewer='./web/fileViewer.html';
    const pdfViewer='./web/viewer.html';
    const excelViewer='./web/excelViewer.html';
    const pptViewer='./web/pptViewer.html';
    const videoViewer='./web/videoViewer.html';
    const musicViewer='./web/musicViewer.html';
    var temp;
    switch (type){
        case 'word':
            temp=wordViewer;
            break;
        case 'pdf':
            temp=pdfViewer;
            break;
        case 'excel':
            temp=excelViewer;
            break;
        case 'ppt':
            temp=pptViewer;
            break;
        case 'flv':
            temp=videoViewer;
            break;
        case 'mp3':
            temp=musicViewer;
            break;
        default:
            return false;
    }
    layui.use('layer',function(){
        var layer=layui.layer;
        var index = layer.open({
            type: 2,
            content: temp,
            title: '知识预览',
            area:['400px','150px;'],
            maxmin: false
        });
        if(temp!=musicViewer)
            layer.full(index);
    })

}
//用户删除文档
function userDelete(elem){
    console.log(elem.parentElement.parentElement)
    setTimeout(function(){
        elem.parentElement.parentElement.parentElement.remove();
        Materialize.toast('成功删除',2000)
    },1000)

}
//用户取消收藏
function userCancelCollect(elem){
    console.log(elem.parentElement.parentElement)
    setTimeout(function(){
        elem.parentElement.parentElement.parentElement.remove();
        Materialize.toast('已取消收藏',2000)
    },1000)
}