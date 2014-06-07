<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Donation Tracking</title>
<!-- Google fonts -->
<link href='http://fonts.googleapis.com/css?family=Ubuntu:400,300,300italic,400italic,500,500italic,700,700italic' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Tienne:400,700,900' rel='stylesheet' type='text/css'>
<link rel='stylesheet' href='css/style.css'>
<link rel='stylesheet' href='css/stylemenu.css'>
<link rel="stylesheet" type="text/css" href="tabs.css" />

<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript">

$(document).ready(function() {

	$(".tab_content").hide();
	$(".tab_content:first").show(); 

	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content").hide();
		var activeTab = $(this).attr("rel"); 
		$("#"+activeTab).fadeIn(); 
	});
});

</script> 

<style type="text/css">

	ul.tabs {
		margin: 0;
		padding: 0;
		float: left;
		list-style: none;
		height: 32px;
		border-bottom: 1px solid #28C3AB;
		border-left: 1px solid #28C3AB;
		width: 100%;
	}
	ul.tabs li {
		font-family: 'Ubuntu', sans-serif;
		float: left;
		margin: 0;
		cursor: pointer;
		padding: 0px 21px ;
		height: 31px;
		line-height: 31px;
		border: 1px solid #28C3AB;
		border-left: 1px solid #28C3AB;
		font-weight: bold;
		background: #28C3AB;
		overflow: hidden;
		position: relative;
	}
	ul.tabs li:hover {
		background: #666;
		color:#28C3AB;
	}	
	ul.tabs li.active{
		background: #FFFFFF;
		border-bottom: 1px solid #28C3AB;
		color:#666;
	}
	.tab_container {
		border: 1px solid #28C3AB;
		border-right: none;
		border-top: none;
		border-left:none;
		clear: both;
		float: left; 
		width: 100%;
		height:640px;
		background: #fff;
		margin-top:0px;
	}
	.tab_content {
		padding-top: 20px;
		display: none;
	}
	#container {
		width: 900px;
		margin: 0 auto;
		margin-top:590px;	
	}
</style>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-50183509-1', 'bitcoinbrasil2014.com');
  ga('send', 'pageview');

</script>

<style type="text/css">  
  /* al DIV contenedor lo centramos centramos y dimensionamos */
  #imagen5 {
    cursor: pointer;  
    width: 330px; 
	height:110px;
	margin: 0 auto; 
	text-align:center;
	margin-top:0px;
	position:relative;
	float:left;
	margin-right:10px;
	padding-bottom:10px;  
    /* y acá, colocamos la segunda imagen como fondo */
    background: transparent url(bitcoiner-hover.png) no-repeat left top;
  }  
  /* a la etiqueta IMG interna, le agregamos el efecto y la transición */
  #imagen5 img {
    -moz-transition: opacity 1s;
    -webkit-transition: opacity 1s;
    -o-transition: opacity 1s;
    transition: opacity 1s;
    opacity: 1;
    /* agreamos el filtro para que en IE8 funcione aunque no sea animado */
    filter:alpha(opacity=100);
  }
  /* al poner el cursor encima, la imagen se oculta así que lo que veremos es el fondo de la segunda imagen */
  #imagen5:hover img {
    opacity:0;
    filter:alpha(opacity=0);
  }
</style>

<style type="text/css">  
  /* al DIV contenedor lo centramos centramos y dimensionamos */
  #imagen6 {
    cursor: pointer;  
    width: 330px; 
	height:110px;
	margin: 0 auto; 
	text-align:center;
	margin-top:0px;
	position:relative;
	float:left;
	margin-right:10px;
	padding-bottom:10px;  
    /* y acá, colocamos la segunda imagen como fondo */
    background: transparent url(github-hover.png) no-repeat left top;
  }  
  /* a la etiqueta IMG interna, le agregamos el efecto y la transición */
  #imagen6 img {
    -moz-transition: opacity 1s;
    -webkit-transition: opacity 1s;
    -o-transition: opacity 1s;
    transition: opacity 1s;
    opacity: 1;
    /* agreamos el filtro para que en IE8 funcione aunque no sea animado */
    filter:alpha(opacity=100);
  }
  /* al poner el cursor encima, la imagen se oculta así que lo que veremos es el fondo de la segunda imagen */
  #imagen6:hover img {
    opacity:0;
    filter:alpha(opacity=0);
  }
</style>

<style type="text/css">  
  /* al DIV contenedor lo centramos centramos y dimensionamos */
  #imagen7 {
    cursor: pointer;  
    width: 330px; 
	height:110px;
	margin: 0 auto; 
	text-align:center;
	margin-top:0px;
	position:relative;
	float:left;
	margin-right:10px;
	padding-bottom:10px;  
    /* y acá, colocamos la segunda imagen como fondo */
    background: transparent url(company-hover.png) no-repeat left top;
  }  
  /* a la etiqueta IMG interna, le agregamos el efecto y la transición */
  #imagen7 img {
    -moz-transition: opacity 1s;
    -webkit-transition: opacity 1s;
    -o-transition: opacity 1s;
    transition: opacity 1s;
    opacity: 1;
    /* agreamos el filtro para que en IE8 funcione aunque no sea animado */
    filter:alpha(opacity=100);
  }
  /* al poner el cursor encima, la imagen se oculta así que lo que veremos es el fondo de la segunda imagen */
  #imagen7:hover img {
    opacity:0;
    filter:alpha(opacity=0);
  }
</style>

</head>

<body>

<div class="tiraverde">
<div class="QR">
<img src="codigo QR_tecnofields.png" width="122" height="122" /> 
</div>
<div class="donation">
TRACK YOUR DONATION</div>
<div class="support">
DONATE TO A CHARITY
</div>
<div class="downsupport">
And follow Real-Time.
</div>
        
<div id="titulobox">
Scan the Charity QR code, track your donation.</div>
</div>

<div id="container">

  <ul class="tabs"> 
        <li class="active" rel="tab1"> BitGive</li>
        <li rel="tab2"> Mr Bitcoin</li>
    </ul>

<div class="tab_container"> 

     <div id="tab1" class="tab_content"> 
 <iframe src="https://blockchain.info/address/1PEoUKNxTZsc5rFSQvQjeTVwDE9vEDCRWm?show_adv=true frameborder="0" width=100% height=600></iframe>
     </div>
     <!-- #tab1 -->
     
     <div id="tab2" class="tab_content"> 
<iframe src="https://blockchain.info/address/1PEoUKNxTZsc5rFSQvQjeTVwDE9vEDCRWm?show_adv=true frameborder="0" width=100% height=600></iframe>
     </div><!-- #tab2 -->
     <div id="tab3" class="tab_content"> 

       <p><img src="images/halo.jpg"> <br />
      	<strong>
      	Halo: Reach is the culmination of the superlative combat, sensational
      	multiplayer, and seamless online integration that are the hallmarks
      	of this superb series.
      	</strong>
       </p>

 </div> <!-- .tab_container --> 

</div> <!-- #container -->
</div>

</body>
</html>