<?php
 require_once 'common/comment/config.php';
 $query=mysql_query("select * from xcf_product");
    $flag = false;
while ($row=mysql_fetch_array($query)) {
	$flag = true;
	$sayList[] = array(

	
		'pid'=>$row['pid'],
		'cid'=>$row['cid'],
		'pname'=>$row['pname'],
		'pnum'=>$row['pnum'],
		'shop_price'=>$row['shop_price'],
		'pimage'=>$row['pimage'],
		'pdesc'=>$row['pdesc'],
		'pdate'=>$row['pdate'],
		'is_hot'=>$row['is_hot']
		
      );
}
if($flag){
   echo json_encode($sayList);
}else{
	echo true;
}
?>