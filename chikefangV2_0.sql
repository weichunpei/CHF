-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 07 月 03 日 08:11
-- 服务器版本: 5.5.53
-- PHP 版本: 5.4.45

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `chikefang`
--

-- --------------------------------------------------------

--
-- 表的结构 `xcf_category`
--

CREATE TABLE IF NOT EXISTS `xcf_category` (
  `cid` varchar(32) NOT NULL,
  `cname` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `xcf_category`
--

INSERT INTO `xcf_category` (`cid`, `cname`) VALUES
('1', '速冻食品'),
('2', '电脑办公'),
('3', '家具家居'),
('4', '鞋靴箱包'),
('5', '图书音像'),
('6', '母婴孕婴'),
('7', '运动户外'),
('8', 'aaaa'),
('9', '汽车用品');

-- --------------------------------------------------------

--
-- 表的结构 `xcf_feedback`
--

CREATE TABLE IF NOT EXISTS `xcf_feedback` (
  `name` varchar(10) NOT NULL,
  `phone` int(11) NOT NULL,
  `content` text NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=24 ;

--
-- 转存表中的数据 `xcf_feedback`
--

INSERT INTO `xcf_feedback` (`name`, `phone`, `content`, `id`) VALUES
('测试', 111, '111', 1),
('测试', 111, '111', 2),
('11', 111, '111', 3),
('11', 111, '111', 4),
('11', 111, '111', 5),
('11', 111, '111', 6),
('11', 111, '111', 7),
('11', 111, '111', 8),
('11', 111, '111', 9),
('', 0, '', 10),
('11', 111, '111', 11),
('11', 111, '111', 12),
('11', 111, '111', 13),
('11', 111, '111', 14),
('11', 111, '111', 15),
('11', 111, '111', 16),
('', 0, '', 17),
('', 0, '', 18),
('', 0, '', 19),
('', 0, '', 20),
('', 0, '', 21),
('', 0, '', 22),
('', 0, '', 23);

-- --------------------------------------------------------

--
-- 表的结构 `xcf_orderitem`
--

CREATE TABLE IF NOT EXISTS `xcf_orderitem` (
  `itemid` varchar(32) NOT NULL,
  `count` int(11) DEFAULT NULL,
  `subtotal` double DEFAULT NULL,
  `pid` varchar(32) DEFAULT NULL,
  `oid` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`itemid`),
  KEY `fk_0001` (`pid`),
  KEY `fk_0002` (`oid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `xcf_orders`
--

CREATE TABLE IF NOT EXISTS `xcf_orders` (
  `oid` varchar(32) NOT NULL,
  `ordertime` datetime DEFAULT NULL,
  `total` double DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `address` varchar(30) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `telephone` varchar(20) DEFAULT NULL,
  `uid` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`oid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `xcf_product`
--

CREATE TABLE IF NOT EXISTS `xcf_product` (
  `pid` varchar(32) NOT NULL,
  `pname` varchar(50) DEFAULT NULL,
  `market_price` double DEFAULT NULL,
  `shop_price` double DEFAULT NULL,
  `pimage` varchar(200) DEFAULT NULL,
  `pdate` date DEFAULT NULL,
  `is_hot` int(11) DEFAULT NULL,
  `pdesc` varchar(255) DEFAULT NULL,
  `pflag` int(11) DEFAULT NULL,
  `cid` varchar(32) DEFAULT NULL,
  `pnum` int(11) NOT NULL,
  PRIMARY KEY (`pid`),
  UNIQUE KEY `pid` (`pid`),
  KEY `sfk_0001` (`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `xcf_product`
--

INSERT INTO `xcf_product` (`pid`, `pname`, `market_price`, `shop_price`, `pimage`, `pdate`, `is_hot`, `pdesc`, `pflag`, `cid`, `pnum`) VALUES
('01', '沈大成—虾仁小馄饨', NULL, 7.5, 'xrxhd.jpg', '2017-06-21', 1, '沈大成—虾仁小馄饨', NULL, '1', 10),
('02', '思念—葱香手抓饼', NULL, 14.5, 'cxszb.jpg', '2017-06-21', 1, '思念—葱香手抓饼', NULL, '1', 12),
('03', '湾仔码头—荠菜云吞', NULL, 28.5, 'jcyt.jpg', '2017-06-21', 1, '湾仔码头—荠菜云吞', NULL, '1', 10),
('04', '360港式大虾云吞皇', NULL, 10, '360gsdxyth.jpg', '2017-06-21', 0, '嫩滑可口的风味小吃', NULL, '2', 10),
('05', '荠菜大馄饨', NULL, 10, 'jcdhd.jpg', '2017-06-21', 0, '鲜美饱满', NULL, '2', 10),
('06', '荠菜云吞', NULL, 10, 'wjcyt.jpg', '2017-06-21', 0, '营养丰富', NULL, '2', 10),
('07', '青菜大馄饨', NULL, 10, 'qcdhd.jpg', '2017-06-21', 0, '爽滑清香', NULL, '2', 10),
('08', '三鲜云吞', NULL, 10, 'sxyt.jpg', '2017-06-21', 0, '爽滑清香', NULL, '2', 10),
('09', '虾皇云吞', NULL, 10, 'xhyt.jpg', '2017-06-21', 0, '妈妈的用心', NULL, '2', 10),
('10', '虾仁三鲜大馄饨', NULL, 10, 'xrsxdhd.jpg', '2017-06-21', 2, '营养丰富', NULL, '2', 10),
('11', '香菇云吞', NULL, 10, 'xhyt.jpg', '2017-06-21', 2, '爽滑清香', NULL, '2', 10),
('12', '韭菜虾仁饺子', NULL, 10, 'jcxrjz.jpg', '2017-06-21', 2, '鲜美饱满', NULL, '2', 10),
('13', '思念春卷', NULL, 10, 'sncj.jpg', '2017-06-21', 3, '皮薄馅足，口味纯正\r\n', NULL, '3', 10),
('14', '白菜煎饺', NULL, 10, 'bcjj.jpg', '2017-06-21', 3, '皮薄馅多，香醇味美', NULL, '3', 10),
('15', '小小玉珍珠汤圆', NULL, 10, 'xxyzzty.jpg', '2017-06-21', 3, '舌尖小吃', NULL, '3', 10),
('16', '葱油飞饼', NULL, 10, 'cyfb.jpg', '2017-06-21', 3, '薄如蝉翼，千层美味', NULL, '3', 10),
('17', '原味飞饼', NULL, 10, 'ywfb.jpg', '2017-06-21', 3, '薄出香感觉', NULL, '3', 10),
('18', '葱香手抓饼', NULL, 10, 'cxszb.jpg', '2017-06-21', 3, '思念放心手抓饼', NULL, '3', 10),
('19', '思念油条', NULL, 10, 'snyt.jpg', '2017-06-21', 4, '营养丰富，安心油条', NULL, '3', 10),
('20', '思念水饺', NULL, 10, 'snsj.jpg', '2017-06-21', 4, '鲜嫩浓香', NULL, '3', 10),
('21', '思念汤圆', NULL, 10, 'snty.jpg', '2017-06-21', 4, '醇香黑芝麻', NULL, '3', 10),
('22', '包心贡丸', NULL, 10, 'bxgw.jpg', '2017-06-21', 5, '独特配方', NULL, '4', 10),
('23', '香菇贡丸', NULL, 10, 'xggw.jpg', '2017-06-21', 5, '鲜美饱满', NULL, '4', 10),
('24', '桂冠鱼丸', NULL, 10, 'ggyw.jpg', '2017-06-21', 5, '营养丰富', NULL, '4', 10),
('25', '包馅小圆子', NULL, 10, 'bxxyz.jpg', '2017-06-21', 5, '爽滑清香', NULL, '4', 10),
('26', '香糯小圆子', NULL, 10, 'xnxyz.jpg', '2017-06-21', 5, '爽滑清香', NULL, '4', 10),
('27', '香菇素材包', NULL, 10, 'xgscb.jpg', '2017-06-21', 5, '妈妈的用心', NULL, '4', 10),
('28', '桂冠南瓜饼', NULL, 10, 'ggngb.jpg', '2017-06-21', 6, '营养丰富', NULL, '4', 10),
('29', '桂冠蛋饺', NULL, 10, 'ggdj.jpg', '2017-06-21', 6, '爽滑清香', NULL, '4', 10),
('30', '火锅香肠', NULL, 10, 'hgxc.jpg', '2017-06-21', 6, '鲜美饱满', NULL, '4', 10),
('31', '虾仁小馄饨', NULL, 7.5, 'xrxhdc.jpg', '2017-06-21', 7, '鲜美饱满', NULL, '5', 10),
('32', '香菇云吞', NULL, 28.5, 'xgytc.jpg', '2017-06-21', 7, '鲜美饱满', NULL, '5', 10),
('33', '虾仁三鲜大馄饨', NULL, 32, 'xrssdhdc.jpg', '2017-06-21', 7, '鲜美饱满', NULL, '5', 10),
('34', '虾皇云吞', NULL, 28.5, 'xhytc.jpg', '2017-06-21', 7, '鲜美饱满', NULL, '5', 10),
('35', '虾饺', NULL, 19.8, 'xj.jpg', '2017-06-21', 8, '鲜美饱满', NULL, '5', 10),
('36', '奶黄包', NULL, 15.5, 'nhb.jpg', '2017-06-21', 8, '鲜美饱满', NULL, '5', 10),
('37', '干炒牛河', NULL, 14.5, 'gcnh.jpg', '2017-06-21', 8, '鲜美饱满', NULL, '5', 10),
('38', '红豆包', NULL, 15, 'hdb.jpg', '2017-06-21', 8, '鲜美饱满', NULL, '5', 10),
('39', '虾仁小馄饨', NULL, 7.5, 'xrxhdc8.jpg', '2017-06-21', 8, '鲜美饱满', NULL, '5', 10),
('40', '芝麻汤圆', NULL, 7, 'zmty.jpg', '2017-06-21', 8, '鲜美饱满', NULL, '5', 10),
('41', '包馅小小芝麻汤圆', NULL, 7, 'bxxxzmty.jpg', '2017-06-21', 8, '鲜美饱满', NULL, '5', 10),
('42', '白菜猪肉水饺', NULL, 6.5, 'bczrsj.jpg', '2017-06-21', 8, '鲜美饱满', NULL, '5', 10);

-- --------------------------------------------------------

--
-- 表的结构 `xcf_user`
--

CREATE TABLE IF NOT EXISTS `xcf_user` (
  `uid` varchar(32) NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `telephone` varchar(20) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `sex` varchar(10) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `code` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `xcf_user`
--

INSERT INTO `xcf_user` (`uid`, `username`, `password`, `name`, `email`, `telephone`, `birthday`, `sex`, `state`, `code`) VALUES
('373eb242933b4f5ca3bd43503c34668b', 'ccc', 'ccc', 'aaa', 'bbb@store.com', '15723689921', '2015-11-04', '男', 0, '9782f3e837ff422b9aee8b6381ccf927bdd9d2ced10d48f4ba4b9f187edf7738'),
('3ca76a75e4f64db2bacd0974acc7c897', 'bb', 'bb', '张三', 'bbb@store.com', '15723689921', '1990-02-01', '男', 0, '1258e96181a9457987928954825189000bae305094a042d6bd9d2d35674684e6'),
('62145f6e66ea4f5cbe7b6f6b954917d3', 'cc', 'cc', '张三', 'bbb@store.com', '15723689921', '2015-11-03', '男', 0, '19f100aa81184c03951c4b840a725b6a98097aa1106a4a38ba1c29f1a496c231'),
('c95b15a864334adab3d5bb6604c6e1fc', 'bbb', 'bbb', '老王', 'bbb@store.com', '15712344823', '2000-02-01', '男', 0, '71a3a933353347a4bcacff699e6baa9c950a02f6b84e4f6fb8404ca06febfd6f'),
('f55b7d3a352a4f0782c910b2c70f1ea4', 'aaa', 'aaa', '小王', 'aaa@store.com', '15712344823', '2000-02-01', '男', 1, NULL);

--
-- 限制导出的表
--

--
-- 限制表 `xcf_orderitem`
--
ALTER TABLE `xcf_orderitem`
  ADD CONSTRAINT `fk_0001` FOREIGN KEY (`pid`) REFERENCES `xcf_product` (`pid`),
  ADD CONSTRAINT `fk_0002` FOREIGN KEY (`oid`) REFERENCES `xcf_orders` (`oid`);

--
-- 限制表 `xcf_product`
--
ALTER TABLE `xcf_product`
  ADD CONSTRAINT `sfk_0001` FOREIGN KEY (`cid`) REFERENCES `xcf_category` (`cid`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
