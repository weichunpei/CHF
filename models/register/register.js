$(function(){
    var inpMobile = document.querySelector("#Mobile");
var Password = document.querySelector("#Password");
var inpEmail = document.querySelector("#register_Email");
var ConfirmPassword = document.querySelector("#ConfirmPassword");
var regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
var regMobile = /^(13[0-9]|14[57]|15[0-9]|17[1456789]|18[0-9])\d{8}$/;
var regpassWrap = /^(\w)*$/;
check(inpMobile, regMobile);
check(inpEmail, regEmail);
check(Password, regpassWrap);
check(ConfirmPassword, regpassWrap);

function check(inp, regEx) {
    inp.onblur = function () {
        if (regEx.test(this.value)) {
            this.nextElementSibling.innerHTML = "正确";
            this.nextElementSibling.className = "right"; //
        } else {
            this.nextElementSibling.innerHTML = "重新输入";
            this.nextElementSibling.className = "wrong";
        }
        if (inp.value === "") {
            this.nextElementSibling.innerHTML = "重新输入";
            this.nextElementSibling.className = "wrong";
        }
        if (ConfirmPassword.value !== Password.value) {
            ConfirmPassword.nextElementSibling.innerHTML = "重新输入";
            ConfirmPassword.nextElementSibling.className = "wrong";
        } else {
            ConfirmPassword.nextElementSibling.innerHTML = "正确";
            ConfirmPassword.nextElementSibling.className = "right"; //
        }
    }
};
$('.closebtn').click(function () {
    console.log($(this));
    window.location.href = 'index.html'
});
//实现注册
//初始化
var APP_ID = 'u7fgLS1Gn227M5g1GmyxmD0a-gzGzoHsz';
var APP_KEY = 'YcupbpcwnPyWSzUjCIoe4UoK';
var AV = require('leancloud-storage');  

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
$("#Registration").on('click',function(e){
    e.preventDefault();
    // 新建 AVUser 对象实例
    var user = new AV.User();
// 设置用户名
    user.setUsername(inpMobile.val());
// 设置密码
    user.setPassword(Password.val());
// 设置邮箱
    user.setEmail(inpEmail.val());
    user.signUp().then(function (loginedUser) {
        console.log(loginedUser);
    }, function (error) {
    });
})

})