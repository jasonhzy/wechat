<?php /* Smarty version 2.6.18, created on 2014-02-20 19:07:37
         compiled from tpls/v15/content.html */ ?>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => $this->_tpl_vars['header'], 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
<?php echo '
<style>
#content img{max-width:92%;}
</style>
'; ?>
<?php if ($this->_tpl_vars['ismap']): ?>
<?php echo $this->_tpl_vars['mapstr']; ?>

<?php else: ?>
<div class="clear"></div>    
<div class="viewtitle"><?php echo $this->_tpl_vars['channel']['name']; ?>
</div>
    <div id="content" class="content">
      <div class="padding20">
        <div class="view_title"><?php echo $this->_tpl_vars['content']['title']; ?>
</div>
				        <p id=""><center><?php echo $this->_tpl_vars['content']['content']; ?>
</center></p>
        <div class="clear"></div>
        <div class="viewpage">
       <?php if ($this->_tpl_vars['previousContent']): ?><a href="<?php echo $this->_tpl_vars['previousContent']->link; ?>
" class="prevpage">上一条：<span><?php echo $this->_tpl_vars['previousContent']->title; ?>
</span></a><?php endif; ?>
        <?php if ($this->_tpl_vars['nextContent']): ?><a href="<?php echo $this->_tpl_vars['nextContent']->link; ?>
" class="nextpage">下一条：<span><?php echo $this->_tpl_vars['nextContent']->title; ?>
</span></a><?php endif; ?>
        </div>
        <div class="viewback"> <a href="<?php echo $this->_tpl_vars['channel']['link']; ?>
" title="返回列表" class="backlist"><span>返回列表</span></a></div>
      </div>
    </div>
    <div class="clear"></div>
	<?php endif; ?>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => $this->_tpl_vars['footer'], 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>