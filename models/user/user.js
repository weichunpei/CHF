$(function() {
	//导航栏的切换
	$(".u-tab li").on('click', function() {
		$(this).siblings().removeClass('active');
		$(this).addClass("active");
	});
	//会员中心 选项切换
	$('.u-tab li').on('click', function() {
		$('.u-content').css('display', 'none');
		var k = $(this).attr('data');
		$('.u-content').each(function(i, v) {
			if(i == k) {
				$('.u-content').get(i).style.display = 'block';
			}
		})
	})

	//订单选项卡切换
	$(".order-header li").on('click', function() {
		$(this).siblings().removeClass('active');
		$(this).addClass("active");
	});
	//添加地址显示隐藏
	$('#add-site').on('click', function() {
		console.log(111);
		$('.add-site-bg').css('display', 'block');
	})
	$('#close').on('click', function() {
		$('.add-site-bg').css('display', 'none');
	})
	//省 市 县 三级联动
	// 公用方法
	function queryData(obj, callback) {
		$.ajax({
			type: 'get',
			url: 'select.php',
			data: obj,
			dataType: 'json',
			success: function(data) {
				callback(data);
			}
		});
	}
	// 加载省级数据
	queryData({
		flag: 1
	}, function(data) {
		var option = '';
		$.each(data, function(i, e) {
			option += '<option value="' + e.id + '">' + e.province + '</option>';
		});
		$("#province").append(option);
	});

	$('#province').change(function() {
		// $("#city").find('option:gt(0)').remove();
		$("#city option:gt(0)").remove();
		queryData({
			flag: 2,
			pId: $(this).val()
		}, function(data) {
			var option = '';
			$.each(data, function(i, e) {
				option += '<option value="' + e.id + '">' + e.city + '</option>';
			});
			$("#city").append(option);
		});
	});

	$('#city').change(function() {
		// $("#city").find('option:gt(0)').remove();
		$("#county option:gt(0)").remove();
		queryData({
			flag: 3,
			cId: $(this).val()
		}, function(data) {
			var option = '';
			$.each(data, function(i, e) {
				option += '<option value="' + e.id + '">' + e.county + '</option>';
			});
			$("#county").append(option);
		});
	});
	//添加数据
	$("#submit").on('click',function(){
		
	})
	//显示会员名称
	var username = sessionStorage.getItem('username');
	console.log(username);
	if(username){
		$(".member-name").text(username);
	}
	//钱包详情的显示隐藏
	$('.h-option li:eq(0)').on('mouseover',function(){
		$(this).find('ul').css({
			'height':'130px',
			' transition':'height 1s linear'
		})
	}).on('mouseout',function(){
		$(this).find('ul').css({
			'height':'0px',
			' transition':'height 0.5s linear'
		})
	})
});