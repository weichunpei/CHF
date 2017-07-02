
<!DOCTYPE html>
<html>
	<head>
		<head>
		<meta charset="UTF-8">
		<title></title>
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />

		<link rel="stylesheet" type="text/css" href="../../common/css/reset.css" />
		<script src="../../common/js/jquery-2.2.0.min.js" type="text/javascript" charset="utf-8"></script>
		
		<link rel="stylesheet" type="text/css" href="feedback.css" />
		<script src="feedback.js" type="text/javascript" charset="utf-8"></script>
		<link rel="stylesheet/less" href="../../common/css/com-header.less" />
		<link rel="stylesheet/less" href="../../common/css/com-footer.less" />
		<script src="../../common/js/less.js" type="text/javascript" charset="utf-8"></script>
		<script src="../../common/js/common.js" type="text/javascript" charset="utf-8"></script>
	</head>
	</head>
	<style type="text/css">
		h1{
			text-align: center;
			line-height: 100px;
		}
		h2{
			text-align: center;
			
		}
	</style>
	<body>
		<div class="tHeade">
			<header>
				<div class="banxin h-content">
					<div class="h-left fl">
						<a href="#" class="h-login">登录</a>
						|
						<a href="#" class="h-register">注册</a>
					</div>
					<div class="h-right fr">
						<div class="h-car fl">
							<i class="h-car-icon"></i>
							<a href="#" class="h-car-message">购物车<span class="colorRed">0</span>商品</a>
							<div class="h-online fr">
								<img src="../../common/img/offline_qq_42.png" />
							</div>
						</div>
					</div>
				</div>
			</header>
			<div class="logo banxin">
				<div class="logo-img fl">
					<img src="../../common/img/logo.png" />
				</div>
				<div class="logo-mess fl">
					<img src="../../common/img/5f0n.png" />
				</div>
				<div class="tel">
					<em>400&nbsp; 6188&nbsp; 527</em>
				</div>
				<div class="logo-search fr clearfix">
					<button>搜索</button>
					<input type="search" name="" id="" value="" />
					<div class="hot-search">
						<span>热门搜索:</span>
						<a href="#">芝麻汤圆</a>
						<a href="#">水饺</a>
						<a href="#">鲜肉馄饨</a>
					</div>
				</div>
			</div>
			<nav>
				<div class="banxin nav-content">
					<div class="nav-classify fl">
						<h3>全部商品分类</h3>
						<img src="../../common/img/classify.png" />
					</div>
					<div class="nav-list fl">
						<ul>
							<li>
								<a href="../../index.html">首页</a>
							</li>
							<li>
								<a href="#">新品上架</a>
							</li>
							<li>
								<a href="#">促销活动</a>
							</li>
							<li class="active">
								<a href="#">反馈信息</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

		</div>
		
		<!--<?php
 require_once '../../common/comment/config.php';

$name=$_POST['name'];
$phone=$_POST['phone'];
$inputContent=$_POST['inputContent'];
$sql="insert into feedback(name,phone,content) values('$name','$phone','$inputContent')";
$ret=mysql_query($sql,$link);
             if ($ret === false) {
    die("载入失败: " . mysql_error($link));
} else {
    echo "<h1>载入成功</h1>";
 
}

?>-->
<h1>您的反馈，我们已经记录在案。谢谢您的支持</h1>
<h2>还有几秒钟返回</h2>

<script type="text/javascript">
	
</script>
	</body>
</html>
