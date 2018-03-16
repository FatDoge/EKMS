//api url
var url='http://192.168.2.133';
function isEmail(str){
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    console.log(reg.test(str))
    return reg.test(str);
}
function msg(msg){
    layui.use('layer',function(){
        var layer=layui.layer;
        layer.msg(msg,{
            offset:['50%','auto'],
            shift: 6
        });
    })
}
function jumpUrl(roll){
    //roll 1:admin 0:user
    roll?window.location='./adminIndex.html':window.location='#user'
}
function login(){
    console.log('login...');
    var email=$("#email").val();
    var password=$("#password").val();
    if(isEmail(email)){
        var token=$.md5(email+password);
        console.log('token:',token);
        loginCode(email,token);
    }else{
        msg('用户名格式错误!');
    }

}
function loginCode(email,token){
    var newToken;
    $.ajax({
        url:url+'/login_init',
        success:function(rel){
            if(rel.code===200)
            console.log(rel);
            newToken=token+rel.data.token;
            console.log(email,newToken)
            ajaxLoginInfo(email,newToken);
        },
        error:function(err){
            console.log(err)
        },
        xhrFields: {
            withCredentials: true
         },
         crossDomain: true,

     
        
    })
    return newToken;
}
function ajaxLoginInfo(username,password){
    $.ajax({
        url:url+'/login_confirm',
        data:{
            username:username,
            password:password
        },
        success:function(rel){
            if(rel.code===200)
            jumpUrl(rel.data.role);
            else msg('登陆失败');
        },
        error:function(err){
            console.log(err);
        },
        xhrFields: {
            withCredentials: true
         },
         crossDomain: true,
         
     
        
    })
}
