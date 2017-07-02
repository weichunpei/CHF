$(function() {
	var data = [
		['5_sx28.jpg', '虾饺', '19.80'],
		['5_sx28.jpg', '芝麻汤圆', '7.70'],
		['5_sx28.jpg', '火锅香肠', '9.90'],
		['5_sx28.jpg', '香菇素菜包', '11.50'],
		['5_sx28.jpg', '鱼丸', '9.5'],
		['5_sx28.jpg', '包心贡丸', '9.50'],
		['5_sx28.jpg', '原味飞饼', '10.50'],
		['5_sx28.jpg', '白菜煎饺', '7.50'],
		['5_sx28.jpg', '虾仁三鲜大混沌', '32.00'],
		['5_sx28.jpg', '鲜美虾皇云吞', '32.00'],
		['5_sx28.jpg', '芝麻汤圆', '7.50'],
		['5_sx28.jpg', '南翔小笼包', '19.80'],
		['5_sx28.jpg', '南翔春卷皮', '5.20'],
	],
		lowPrice,
		heighPrice,
		productQuery;
	//价格排序
	$(".goods-order tr>td:nth-of-type(2)").on('click', function() {
		$(".goods-show ul").html('');
		if($(this).find('img').attr('src') == 'images/down.gif') {
			$(this).find('img').attr('src', 'images/up.gif');
			orderUp();

		} else {
			$(this).find('img').attr('src', 'images/down.gif');
			orderDown();
		}
		render(data);
	});
	//价格筛选
	$("#price-filter").on('click',function(){
		lowPrice=$("#low-price").val();
		heighPrice=$("#heigh-price").val();
		if(lowPrice&&heighPrice){
			$(".goods-show ul").html('');
			var res=priceFilter(lowPrice,heighPrice);
			render(res);
		}else{
			alert('请输入价格区间')
		}
	})
	//查询具体商品
	$("#query-box").on('click',function(){
		productQuery=$("#product-query").val();
		if(productQuery){
			$(".goods-show ul").html('');
			var res=queryProduct(productQuery);
			console.log(res);
			if(res){
				render(res);
			}else{
				console.log(111);
//				$(".goods-show ul").text('暂无此商品记录');
				alert('暂无此商品记录');
			}
		}else{
			alert('请输入商品名');
		}
		
	})
	//页面渲染函数
	function render(data) {
		for(var i = 0; i < data.length; i++) {
			var str = '<li>' +
				'<div class="goods-img">' +
				'<a href="#">' +
				'<img src="images/' + data[i][0] + '"/>' +
				'</a>' +
				'</div>' +
				'<p class="goods-name"><a href="#">' + data[i][1] + '</a></p>' +
				'<p class="goods-price"><span>价格</span><span>&yen;' + data[i][2] + '</span></p>' +
				'</li>'
			$(".goods-show ul").append($(str));
		}
	}
	render(data);

	//数据排序 从小到大
	function orderUp() {
		for(var i = 0; i < data.length - 1; i++) {
			for(var j = 0; j < data.length - i - 1; j++) {
				//			console.log(data[j][2]);
				if(parseFloat(data[j][2]) > parseFloat(data[j + 1][2])) {
					var tmp = data[j];
					data[j] = data[j + 1];
					data[j + 1] = tmp;
				}
			}
		}
	}
	//数据排序 从大到小
	function orderDown(){
		for(var i = 0; i < data.length - 1; i++) {
			for(var j = 0; j < data.length - i - 1; j++) {
				//			console.log(data[j][2]);
				if(parseFloat(data[j][2]) < parseFloat(data[j + 1][2])) {
					var tmp = data[j];
					data[j] = data[j + 1];
					data[j + 1] = tmp;
				}
			}
		}
	}
	//数据筛选
	function priceFilter(arg1,arg2){
		var res=[];
		for(var i=0;i<data.length;i++){
			if(arg1<=data[i][2]&&data[i][2]<=arg2){
				res.push(data[i]);
			}
		}
		return res;
	}
	
	function queryProduct(arg){
		console.log(arg);
	var res=[];
		for(var i=0;i<data.length;i++){
			if(arg==data[i][1]){
				res.push(data[i]);
			}
		}
		return res;
}
})

