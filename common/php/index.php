<?php
require_once 'functions/mysql.func.php';
require_once 'functions/common.func.php';
    header("content-type:text/html;charset=utf-8");
    $config=array(
        'host'=>'localhost',
        'user'=>'root',
        'password'=>'root',
        'charset'=>'utf8',
        'dbName'=>'CHF'
    );
    $link=connect2($config);
    
    echo print_r($link);
    mysql_select_db("CHF", $link);
    
