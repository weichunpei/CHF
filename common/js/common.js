$(function () {
	//导航栏的切换
	$(".nav-list li").on('click', function () {
		$(this).siblings().removeClass('active');
		$(this).addClass("active");
	})

	//动态生成导航栏
	var nav_data = [
		['水饺系列', '云吞系列', '汤圆系列', '混沌系列'],
		['云吞系列', '包点系列', '干炒系列'],
		['水饺系列', '汤圆系列'],
		['混沌系列'],
		['小吃系列', '汤圆系列', '包点系列'],
		['包点系列', '小吃系列'],
		['汤圆系列', '包点系列', '水饺系列'],
		['包点系列', '火锅系列', '汤圆系列'],
		['汤圆系列', '包点系列'],
		['小吃系列', '八宝饭系列'],
	];
	$(".detail-classify>ul>li").each(function (i, v) {
		var ul = document.createElement('ul'),
			li;
		$.each(nav_data[i], function (k, val) {
			li = document.createElement('li'),
				a = document.createElement('a');
			a.innerHTML = val;
			li.appendChild(a);
			ul.appendChild(li);
		})

		$(".detail-classify>ul>li").get(i).appendChild(ul);
	})
	var flag = true;
	//加载登录页面
	console.log($(".h-login"));
	$(".h-login").on('click', function () {
		console.log(flag);
		if (flag) {
			$('.mask').css('display', 'block');
			$('.mask').load('models/login/login.html');
		}
		if (!flag) {
			console.log(111);
//			$('.mask').load('models/user/user.html');
//			 window.location.href='models/user/user.html'
			 window.open('models/user/user.html')
		}
	});
	$(".h-register").on('click', function () {
		$('.mask').css('display', 'block');
		if (flag) {
			$('.mask').load('models/register/register.html');
		}
		if (!flag) {
			sessionStorage.removeItem('sessionToken');
			sessionStorage.removeItem('username');
			window.location.href='index.html';
		}
	})

	var sessionToken = sessionStorage.getItem('sessionToken');
	var username = sessionStorage.getItem('username');
	if (sessionToken && username) {
		$('.h-login').html('您好, ' + username + '<span style="color: blue;margin-left:10px">用户中心</span>');
		$('.h-register').html('退出');
		flag = false;
	}
})