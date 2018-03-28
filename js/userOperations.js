var index;
//普通用户收藏知识
function collectKnowledge(){
console.log("用户收藏知识");
    layui.use('layer',function(){
        var layer=layui.layer;
        layer.msg('收藏成功',{
            area:['150px',''],
            offset:['40%','40%'],
        });
    })
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
    },2000);
}