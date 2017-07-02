<?php
$dbname = 'geqAsBKIGLMWqJgAbmLn';
/*填入数据库连接信息*/
$host = 'sqld-gz.bcehost.com';
$port =  3306;
$user = '29358056178941d18ad9444549501ef8';//用户AK
$pwd = '8c45f56fe55647ef8b9af61df797ff82';//用户SK
/*以上信息都可以在数据库详情页查找到*/

/*接着调用mysql_connect()连接服务器*/
/*为了避免因MySQL数据库连接失败而导致程序异常中断，此处通过在mysql_connect()函数前添加@，来抑制错误信息，确保程序继续运行*/
/*有关mysql_connect()函数的详细介绍，可参看http://php.net/manual/zh/function.mysql-connect.php*/
$link = @mysql_connect("{$host}:{$port}",$user,$pwd,true);
if(!$link) {
    die("Connect Server Failed: " . mysql_error());
}
/*连接成功后立即调用mysql_select_db()选中需要连接的数据库*/
if(!mysql_select_db($dbname,$link)) {
    die("Select Database Failed: " . mysql_error($link));
   
}
?>