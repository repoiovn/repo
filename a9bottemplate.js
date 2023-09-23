var content = document.getElementById('content').innerHTML;
var template = ' \
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> \
<html> \
<head> \
<meta http-equiv="content-type" content="text/html" charset="utf-8"/> \
<meta charset="utf-8"> \
<link rel="shortcut icon" href="https://a9bot.net/favicon.ico"> \
<meta name="robots" content="index,follow"> \
<!--<meta http-equiv="cache-control" content="no-cache">--> \
<title>A9Bot Repo</title> \
</head> \
<body text="#000000" link="#404040" alink="#3c3c3c" vlink="#3c3c3c" style="background:none;"> \
 \
<div align="center" style="background-color:#536482; color:#ffffff"> \
<h1>A9Bot Repo</h1> \
</div> \
 \
<div align="center" style="background-color:#ffffff;"> \
<table> \
<tr style="width:100%"> \
<td> \
<div style="text-align: justify; font-size:110%; background-color:#ffffff; min-width: 300px; max-width: 700px; vertical-align: top;"><br> \
' + content + '\
</div> \
<hr> \
<h3><a href="https://a9bot.net" target="_blank">Homepage</a><br> \
<a href="https://www.facebook.com/a9bot.net" target="_blank">Facebook</a></h3> \
</td> \
\
</tr> \
</table> \
';
document.documentElement.innerHTML = template;
