$(function(){
			$.ajax({
					type: 'get',
					url: 'ishow.php',
					dataType: 'json',
					success: function(data) {							
						for(var k in data) {
							
							//热销商品模块is_hot为1
							if(data[k].is_hot==='1')
							{  var str1='';
								str1=
									'<div class="hotGoodsContent fr">'
									+'<div class="hotGoodsContentImg fl">'
									+'<img src="./models/goodsPic/'+data[k].pimage+'" alt="'+data[k].pname+'" /></div>'
									+'<div class="hotGoodsContentText fl ">'
									+'<p>'+data[k].pname+'</p>'
									+'<p><span>￥'+data[k].shop_price+'</span></p>'
									+'</div>'
									+'<a href="javascript:;" data-pId='+data[k].pid+'>立即购买</a></div>';
									$('.hotGoods').append(str1);
									
			
//									./models/admin/admin.html
							}
							//商品动态模块1 choose('0','.goodsList:nth-of-type(4) .goodsListTable .goodsListTableLeft',data[k]);
							choose('0','.goodsList:nth-of-type(4) .goodsListTable .goodsListTableLeft',data[k]);
							//商品动态模块2 choose('2','.goodsList:nth-of-type(4) .goodsListTable .goodsListTableRight',data[k]);
							choose('2','.goodsList:nth-of-type(4) .goodsListTable .goodsListTableRight',data[k]);
							//商品动态模块1 choose('0','.goodsList:nth-of-type(5) .goodsListTable .goodsListTableLeft',data[k]);
							choose('3','.goodsList:nth-of-type(5) .goodsListTable .goodsListTableLeft',data[k]);
							//商品动态模块2 choose('2','.goodsList:nth-of-type(5) .goodsListTable .goodsListTableRight',data[k]);
							choose('4','.goodsList:nth-of-type(5) .goodsListTable .goodsListTableRight',data[k]);
							//商品动态模块1 choose('0','.goodsList:nth-of-type(6) .goodsListTable .goodsListTableLeft',data[k]);
							choose('5','.goodsList:nth-of-type(6) .goodsListTable .goodsListTableLeft',data[k]);
							//商品动态模块2 choose('2','.goodsList:nth-of-type(6) .goodsListTable .goodsListTableRight',data[k]);
							choose('6','.goodsList:nth-of-type(6) .goodsListTable .goodsListTableRight',data[k]);
							//商品价格左页面
							if(data[k].is_hot==='7')
							{  var str1='';
								str1=
									'<li><a href="" class="fl"><img src="./models/goodsPic/'+data[k].pimage+'" alt="'+data[k].pname+'" /></a>'
									+'<div class="priceLIst fl"><p><a href="">'+data[k].pname+'</a></p>'
									+'价格<span>￥'+data[k].shop_price+'</span></div></li>';
									$('.priceLeft').append(str1);
							}	
							//商品价格右页面
							if(data[k].is_hot==='8')
							{  var str1='';
								str1=
									'<li><a href="" class="fl"><img src="./models/goodsPic/'+data[k].pimage+'" alt="'+data[k].pname+'" /></a>'
									+'<div class="priceLIst fl"><p><a href="">'+data[k].pname+'</a></p>'
									+'价格<span>￥'+data[k].shop_price+'</span></div></li>';
									$('.priceRight').append(str1);
						}}
						//给所有有pId的商品a标签添加点击事件
						var alist=document.querySelectorAll('a[data-pId]')
						for(var i=0;i<alist.length;i++){
							alist[i].addEventListener('click',function(){
								
								$.cookie('pid',this.getAttribute('data-pId'))
							})
						}
						
					
						
					}
					
					
					});
						//ajax完
						
						
						
						
						
						
						
			})
//商品动态模块函数模块 is_hot为num where为dom元素 data为数据
function choose(num,where,data){
	 if(data.is_hot===num)
							{
								var str2='';
								str2='<div><span>'+data.pname+'</span>'
									+'<p>'+data.pdesc+'</p>'
									+'<a href="javascript:;" data-pId='+data.pid+'><img src="./models/goodsPic/'+data.pimage+'" alt="'+data.pname+'" /></div></a>';
							$(where).append(str2);
							}
}




