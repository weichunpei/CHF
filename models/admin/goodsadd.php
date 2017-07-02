<?php
 require_once '../../common/comment/config.php';
$pid=$_POST['pid'];
$pname=$_POST['pname'];
$pnum=$_POST['pnum'];
$shop_price=$_POST['shop_price'];
$pdesc=$_POST['pdesc'];
$pdate=$_POST['pdate'];
$cid=$_POST['cid'];
$pimage=".jpg";
 $sql="insert into xcf_product(pid,pname,pnum,shop_price,pdesc,pdate,cid,pimage) values('$pid','$pname','$pnum','$shop_price','$pdesc','$pdate','$cid','$pimage')";
  $ret=mysql_query($sql,$link);
             if ($ret === false) {
    die("载入失败: " . mysql_error($link));
} else {
    echo "载入成功<script> </script>";
 
}
?>