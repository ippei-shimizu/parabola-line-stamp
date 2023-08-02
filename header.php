<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- <link rel="icon" href="<?php echo get_template_directory_uri(); ?>/assets/images/favicon.ico"> -->
  <title>スタンプ村 - LINEスタンプ作成 Parabola</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/destyle.css@1.0.15/destyle.css"/>
  <?php wp_head(); ?>
</head>
<body>
<header class="header">
  <div class="btn">
  <input class="container_toggle" type="checkbox" id="switch" name="mode">
  <label for="switch">Toggle</label>
  <div class="btn__char">
    <img class="fuki" src="<?php echo get_template_directory_uri(); ?>/assets/images/fuki.png" alt="吹き出し" width="76px" height="65px">
    <img class="para__char__dark" src="<?php echo get_template_directory_uri(); ?>/assets/images/parabbit-ura_tab.png" alt="吹き出し" width="41px" height="51px">
  </div>
  </div>
</header>