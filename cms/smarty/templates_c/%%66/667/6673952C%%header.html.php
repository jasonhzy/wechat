<?php /* Smarty version 2.6.18, created on 2013-12-19 22:42:52
         compiled from tpls/v16/header.html */ ?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
<meta content="yes" name="apple-mobile-web-app-capable" />
<meta content="telephone=no" name="format-detection" />
<link rel="Shortcut Icon" href="favicon.ico" />
<link rel="Bookmark Icon" href="favicon.ico" />
<link href="logo.png" sizes="114x114" rel="apple-touch-icon">
<meta name="Author" content="024" />

<meta name="keywords" content="<?php echo $this->_tpl_vars['metaKeywords']; ?>
" />
<meta name="description" content="<?php echo $this->_tpl_vars['metaDescription']; ?>
"/>
<LINK href="templates/v14/jquery.mobile.structure-1.2.0.min.css?<?php echo $this->_tpl_vars['rand']; ?>
" tppabs="/3g/css/jquery.mobile.structure-1.2.0.min.css?<?php echo $this->_tpl_vars['rand']; ?>
" rel=stylesheet>
<LINK href="<?php echo $this->_tpl_vars['cssdir']; ?>
/style.css?<?php echo $this->_tpl_vars['rand']; ?>
" rel=stylesheet>
<script language="JavaScript" type="text/javascript" src="smarty/templates/tpls/<?php echo $this->_tpl_vars['site']['template']; ?>
/jquery-1.6.4.min.js" ></script>
<script language="JavaScript" type="text/javascript" src="smarty/templates/tpls/<?php echo $this->_tpl_vars['site']['template']; ?>
/nav.js" ></script>
<script language="JavaScript" type="text/javascript" src="smarty/templates/tpls/<?php echo $this->_tpl_vars['site']['template']; ?>
/search.js" ></script>
<script language="JavaScript" type="text/javascript" src="smarty/templates/tpls/tianlan/banner.js" ></script>
<title><?php echo $this->_tpl_vars['metaTitle']; ?>
</title>
</head>

<body>
<div class="topbg">
	<p class="searchbtn"><span></span></p>
	<a href="<?php echo $this->_tpl_vars['homeurl']; ?>
"  title="<?php echo $this->_tpl_vars['metaTitle']; ?>
" class="logo"><img src="<?php echo $this->_tpl_vars['site']['logourl']; ?>
"  alt="<?php echo $this->_tpl_vars['metaTitle']; ?>
" style="max-height:50px;"></a>
    <p class="navbtn"><span>导航</span></p>
</div>
<div class="searchbox">
    <form id="search" name="search" method="post" action="?m=site&c=home&a=search&token=<?php echo $this->_tpl_vars['token']; ?>
">
        <input type="text" class="text" name="SeaStr" id="SeaStr" placeholder="请输入搜索关键词"/>
        <input type="submit" class="button" title="搜索" value="">
    </form>
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