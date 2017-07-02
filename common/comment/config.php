<?php
$host="localhost";
$db_user="root";
$db_pass="root";
$db_name="chikefang";
$link=mysql_connect($host,$db_user,$db_pass);
mysql_select_db($db_name,$link);
header("Content-Type: text/html; charset=utf-8");
?>