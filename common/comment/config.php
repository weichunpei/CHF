<?php
$host="localhost";
$db_user="root";
$db_pass="root";
$db_name="chikefang";
$link=mysqli_connect($host,$db_user,$db_pass);
echo print_r($link);
mysqli_select_db($db_name,$link);
header("Content-Type: text/html; charset=utf-8");
?>