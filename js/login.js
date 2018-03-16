//api url
var url='http://192.168.2.133';
function login(){
    console.log('login...');
    var email=$("#email").val();
    var password=$("#password").val();
    var token=$.md5(email+password);
    console.log('token:',token);
    loginCode(email,token);
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
            console.log(rel);
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