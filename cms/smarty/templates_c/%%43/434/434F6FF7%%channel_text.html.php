<?php /* Smarty version 2.6.18, created on 2014-05-11 22:17:07
         compiled from 2/sihetx1399802872/channel_text.html */ ?>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => $this->_tpl_vars['header'], 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
<div class="sub">
	<div class="subsearchbox">
    	<div class="search">
            <form id="search" name="search" method="post" action="?m=site&c=home&a=search&token=<?php echo $this->_tpl_vars['token']; ?>
">
                <input type="text" class="text" name="SeaStr" id="SeaStr" placeholder="请输入搜索关键词"/>
                <input type="submit" class="button" title="搜索" value="">
            </form>
        </div>
        <div class="subnav"><p>全部分类</p></div>
    </div>
    <div class="clear"></div>
	    <ul class="subnavbg">
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
    	    <ul class="newsul">
			<?php if ($this->_tpl_vars['contents']): ?>
			<?php $_from = $this->_tpl_vars['contents']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['c']):
?>
		        <li><a href="<?php echo $this->_tpl_vars['c']['link']; ?>
" title="<?php echo $this->_tpl_vars['c']['title']; ?>
"><?php echo $this->_tpl_vars['c']['title']; ?>
</a></li>
			<?php endforeach; endif; unset($_from); ?>
			<?php endif; ?>
		    </ul>
    <p class="clear"></p>
	<?php if ($this->_tpl_vars['currentPage'] && $this->_tpl_vars['totalPage']): ?>
    <div class="pages">
			<a class="pre-left" href="<?php echo $this->_tpl_vars['previousPageLink']; ?>
">&lt;</a>
		<span><?php echo $this->_tpl_vars['currentPage']; ?>
/<?php echo $this->_tpl_vars['totalPage']; ?>
</span>
		<a class="next-left" href="<?php echo $this->_tpl_vars['nextPageLink']; ?>
">&gt;</a>
	        <div class="clear"></div>
    </div>
	<?php endif; ?>
	</div>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => $this->_tpl_vars['footer'], 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>