<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Form</title>
<!-- Google fonts -->
<link href='http://fonts.googleapis.com/css?family=Ubuntu:400,300,300italic,400italic,500,500italic,700,700italic' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Tienne:400,700,900' rel='stylesheet' type='text/css'>
<link rel='stylesheet' href='css/style.css'>
<link rel="stylesheet" type="text/css" href="css/styleform.css" />

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
		<img src="codigo QR_tecnofields.png" width="122" height="122" /> </div>
        <div class="donation">
		FILL THE FORM
        </div>
        <div class="support"><span id="result_box" lang="en" xml:lang="en">RECEIVE YOUR QR</span></div>
        <div class="downsupport"><span id="result_box2" lang="en" xml:lang="en">HELP AN NGO</span>.
        </div>
        
<div id="titulobox"> Form
</div>
</div>

<div id="imgQR">
<section class="formulario">
    <form action="contact.php" method="post">
 <label for="nombre">Name:</label>
 <input id="nombre" type="text" name="nombre" placeholder="Name" required="" />
 <label for="telefono">Telephone:</label>
 <input id="telefono" type="text" name="telefono" placeholder="Telephone" required="" />
 <label for="message">Message:</label>
 <input id="message" type="text" name="mensaje" placeholder="Message" required="" />
 <label for="email">Email:</label>
 <input id="email" type="email" name="email" placeholder="example@correo.com" required="" />
 <label><span id="result_box3" lang="en" xml:lang="en">Select a NGO</span>: </label>
 <select name="NGO" id="NGO">
         <option value="17">Bitgive - US</option>
        <option value="1">International Child Care Fund - HL</option>
        <option value="2">Liga contra el SIDA - US</option>
        <option value="3">Sri Lanka Campaign - UK</option>
        <option value="4">Generation Green - US</option>
        <option value="5">Asociación cultural para Ayudar a la Niñez Pan Perú - PE</option>
        <option value="6">Community Alliance & Action Network - US</option>
        <option value="7">Asi conserva Chile - CH</option>
        <option value="8">The water project - US</option>
        <option value="9">Junior achievement new york - US</option>
        <option value="10">Merendero del Corazon - AR</option>
        <option value="11">Ludoteca - AR</option>
        <option value="12">Apoyo escolar y merendero El Mana - AR</option>
        <option value="13">Apoyo escolar Las Palmeras - AR</option>
        <option value="14">Centro Comunitario El Duende Azul - AR</option>
        <option value="15">Club Social y Deportivo El Arco	- AR</option>
        <option value="16">Biblioteca Popular Ricardo Rojas - AR</option>
        <option value="18">Crece Camp Colina - MX</option>
        <option value="19">Cruz Blanca Neutral - MX</option>
        <option value="20">Esquina Tango - US</option>
    </select>
 <input id="submit" type="submit" name="submit" value="Enviar" />
</form>
</section>
</div>
<div class="tiragris-download">
  <div class="wraptiragris">
<div class="imgtiragris">
<img src="mr-bitcoin-banner.png" width="123" height="127" />
</div>
<div class="texttiragris">
Meet Mr. Bitcoin in Brazil.


<div class="bigtexttiragris"><strong>Help the world, have fun with me!</strong>
</div>
</div>
</div>
<div id="botondonatedown">
<a href="Mrbitcoin-QR.php" target="_blank">Donate now</a> 
</div>
</div>

<script type="text/javascript">
$(document).ready(function(){
    $('#NGO > option[value="17"]').attr('selected', 'selected');
});
</script>
</body>
</html>