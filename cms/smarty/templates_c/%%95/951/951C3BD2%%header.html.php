<?php /* Smarty version 2.6.18, created on 2013-11-03 20:34:17
         compiled from tpls/zongse/header.html */ ?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
<meta content="yes" name="apple-mobile-web-app-capable" />
<meta content="telephone=no" name="format-detection" />
<meta name="keywords" content="<?php echo $this->_tpl_vars['metaKeywords']; ?>
" />
<meta name="description" content="<?php echo $this->_tpl_vars['metaDescription']; ?>
"/>
<LINK href="<?php echo $this->_tpl_vars['cssdir']; ?>
/style.css?<?php echo $this->_tpl_vars['rand']; ?>
" rel=stylesheet>
<script language="JavaScript" type="text/javascript" src="smarty/templates/tpls/zongse/jquery-1.6.4.min.js" tppabs="/common/js/jquery-1.6.4.min.js"></script>
<script language="JavaScript" type="text/javascript" src="smarty/templates/tpls/zongse/nav.js" tppabs="/common/js/nav.js"></script>
<script language="JavaScript" type="text/javascript" src="smarty/templates/tpls/zongse/search.js" tppabs="/common/js/search.js"></script>
<script language="JavaScript" type="text/javascript" src="smarty/templates/tpls/zongse/banner.js" tppabs="/common/js/banner.js"></script>
<title><?php echo $this->_tpl_vars['metaTitle']; ?>
</title>
</head>

<body>
<div class="topbg">
    <?php if ($this->_tpl_vars['homepage']): ?>
	<img src="smarty/templates/tpls/zongse/searchbtn.png" tppabs="/images/searchbtn.png" alt="搜索按钮" class="searchbtn">
	<?php else: ?>
	<a href="<?php echo $this->_tpl_vars['homeUrl']; ?>
" title=""><img src="smarty/templates/tpls/zongse/homebtn.jpg" class="homebtn"></a>
	<?php endif; ?>
	<a href="<?php echo $this->_tpl_vars['homeUrl']; ?>
" title="<?php echo $this->_tpl_vars['site']['name']; ?>
" class="logo"><img src="<?php echo $this->_tpl_vars['site']['logourl']; ?>
" height="26" alt="<?php echo $this->_tpl_vars['site']['name']; ?>
"></a>
    <img src="smarty/templates/tpls/zongse/navbtn.png" alt="导航" class="navbtn">
</div>
<div class="searchbox">
<?php if ($this->_tpl_vars['homepage']): ?>
    <form method="post" action="?m=site&c=home&a=search&token=<?php echo $this->_tpl_vars['token']; ?>
">
        <input type="text" class="text" name="SeaStr" id="SeaStr" placeholder="请输入搜索关键词"/>
        <input type="submit" class="button" title="搜索" value="">
    </form>
	<?php endif; ?>
</div>
<ul class="navbg">
<?php if ($this->_tpl_vars['navChannels']): ?>
<?php $_from = $this->_tpl_vars['navChannels']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['n']):
?>
	<li><a href="<?php echo $this->_tpl_vars['n']['link']; ?>
" title="<?php echo $this->_tpl_vars['n']['name']; ?>
"><?php echo $this->_tpl_vars['n']['name']; ?>
</a></li>
	<?php endforeach; endif; unset($_from); ?>
	<?php endif; ?>
</ul>