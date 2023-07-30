<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- <link rel="icon" href="<?php echo get_template_directory_uri(); ?>/assets/images/favicon.ico"> -->
  <title>スタンプ村 - LINEスタンプ作成 Parabola</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/destyle.css@1.0.15/destyle.css"/>
  <script>
  (function(d) {
    var config = {
      kitId: 'ava1ngn',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
  </script>
  <?php wp_head(); ?>
</head>
<body>
<header class="header">
  <input class="container_toggle" type="checkbox" id="switch" name="mode">
  <label for="switch">Toggle</label>
</header>