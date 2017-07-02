var inpMobile = document.querySelector(".id");
			var passWrap = document.querySelector(".idm");
			var regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
			var regMobile = /^(13[0-9]|14[57]|15[0-9]|17[1456789]|18[0-9])\d{8}$/;
			var regpassWrap = /^(\w)*$/;
			// check(inpMobile, regMobile || regEmail);
			check(passWrap, regpassWrap)

			function check(inp, regEx) {
				inp.onblur = function() {
					if(regEx.test(this.value)) {
						this.nextElementSibling.innerHTML = "正确";
						this.nextElementSibling.className = "right"; //
					} else {
						this.nextElementSibling.innerHTML = "重新输入";
						this.nextElementSibling.className = "wrong";
					}
					if(inp.value === "") {
						this.nextElementSibling.innerHTML = "重新输入";
						this.nextElementSibling.className = "wrong";
					}
				};
			}
			 $('.closebtn').click(function() {
			 	console.log($(this));
			 	window.location.href = 'index.html'
			 })
			//实现登录
 			$(".submitbtn").on('click', function() {
 				var username = $(".id").val();
 				var password = $(".idm").val();
 				console.log(username + '----------' + password);
 				$.ajax({
 					type: "get",
 					url: "https://api.leancloud.cn/1.1/login",
 					data: {
 						'username': username,
 						'password': password
 					},
 					//  	dataType:'jsonp',
 					async: true,
 					headers: {
 						"X-LC-Id": "u7fgLS1Gn227M5g1GmyxmD0a-gzGzoHsz",
 						"X-LC-Key": "YcupbpcwnPyWSzUjCIoe4UoK"
 					},
 					success: function(data) {
 						console.log(data);
 						alert('登录成功');
 						sessionStorage.setItem('sessionToken',data.sessionToken);
 			sessionStorage.setItem('username',data.username);
 						 window.location.href = 'index.html';
						
 					},
 					error: function(error) {
 //						console.log('账号或者密码错误！')
 						if(error.code == 210) {
 							alert('用户名和密码不匹配');
 						} else if(error.code == 211) {
 							alert('用户不存在');
 						}

 						//			 * {"code":210,"error":"The username and password mismatch."}
 						//			 * {"code":211,"error":"Could not find user"}

 					}
 				});
 			})