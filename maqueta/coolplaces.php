<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Coolplaces</title>
<!-- Google fonts -->
<link href='http://fonts.googleapis.com/css?family=Ubuntu:400,300,300italic,400italic,500,500italic,700,700italic' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Tienne:400,700,900' rel='stylesheet' type='text/css'>
<link rel='stylesheet' href='css/style.css'>

<script type='text/javascript' src='js/jquery.scroll.min.js'></script>
<script type='text/javascript' src='js/script.js'></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="jquery.smooth-scroll.min.js"></script>
    <script src="waypoints.min.js"></script>
    
    <script type="text/javascript">    
    $(function(){
        $('a.smoothScroll').smoothScroll({
          offset: -10,		  
		  scrollTarget: $(this).val()
	   });
       
       // Waypoints
       $('.post_article').waypoint(  
        function(direction) {
        if (direction ==='down') {            
            var wayID = $(this).attr('id');            
        } else {
            var previous = $(this).prev();
            var wayID = $(previous).attr('id');                    
        }
            $('.current').removeClass('current');
            $('#main_nav a[href=#'+wayID+']').addClass('current');
        }, { offset: '20%' });
       
       
       
       /// StickNav  
       var stickyNavTop = $('.nav').offset().top;  
  
        var stickyNav = function(){  
        var scrollTop = $(window).scrollTop();  
       
        if (scrollTop > stickyNavTop) {   
            $('.nav').addClass('isStuck');  
        } else {  
            $('.nav').removeClass('isStuck');   
        }  
    };       
    stickyNav(); 
       $(window).scroll(function() {
            stickyNav();  
        });  
    });
    

    </script>
    
    <style>
        * {
            padding: 0px;
            margin: 0px;
        }
        .container {
            width: 300px;
            margin: auto;
        }
        header#head {            
            padding: 60px 20px;
            background-color: #28C3AB;
        }
        nav#topnav {
			font-family: 'Ubuntu', sans-serif;
			margin-top:0px;
            padding: 10px 0px 0px 85px;
            background-color: #28C3AF;
			z-index: 100;
        }
            nav#topnav ul {
                list-style: none;
            }
            nav#topnav ul li{
                display: inline-block;
            }
            nav#topnav ul li a{
				font-family: 'Ubuntu', sans-serif;
                color:#FFF;
                padding: 5px 7px;
                display: block;
                text-decoration: none;
            }            
        .isStuck {
            width: 100%;
            position: fixed;
            top:0px;
        }
        a.current {
            background-color: #28C3AB;            
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

</head>

<body>

<div class="tiraverde">
<div class="donation">
COOLPLACES
</div>
<div class="support">
Have fun with Mr. Bitcoin at Brazil 
</div>

<div class="downgetyourqr">
Also in Bitcoin bars in the following cities
</div>
<!-- Navigation -->
<nav id="topnav" class="nav">
    <div class="container">
    <ul id="main_nav"> 
        <li><a class="smoothScroll" href="#brazil">Sao Paulo</a></li>
        <li><a class="smoothScroll" href="#us">Miami</a></li>
        <li><a class="smoothScroll" href="#chile">Santiago</a></li>
        <li><a class="smoothScroll" href="#mexico">Mexico DF</a></li>
    </ul>
    </div>
</nav>
</div>



<article id="brazil" class="post_article">
<div id="separaciondelogocoolplaces"> </div>
<div id="logodecoolplaces"> 
<img src="logos/zegordo.png" width="200" height="150" /> 
</div>
<div id="titulodecoolplaces"> 
ZéGordo Bar
</div>
<div id="subtitulodecoolplaces">
Rua Clodomiro Amazonas, 321</br>
</div>
<div id="paisdecoolplaces">
Itaim Bibi - São Paulo</br>
Brasil 
</div>
<div id="telefonodecoolplaces"></br>(11) 3168-1826
</div> 
<div id="emaildecoolplaces">
<a href="mailto:zegordo@zegordo.com.br" target="_blank">zegordo@zegordo.com.br</a> </div> 
</div>
<div id="websitedecoolplaces">
<a href="http://zegordo.com.br/" target="_blank">zegordo.com.br</a> 
</div>
<div id="websitedecoolplaces">
<a href="https://www.google.com.ar/maps/place/Z%C3%A9+Gordo/@-23.587451,-46.679089,17z/data=!4m2!3m1!1s0x94ce575ca100b70b:0x9e0bb79c7b1a434c" target="_blank">view map</a> 
</div>
</article>


<article id="us" class="post_article">
<div id="contenedordecoolplaces">
<div id="logodecoolplaces"> 
  <img src="logos/cleverlander.png" width="200" height="150" /> </div>
<div id="titulodecoolplaces"> 
Clevelander South Beach Hotel and Bar
</div>
<div id="subtitulodecoolplaces">
1020 Ocean Drive, Miami Beach</br>
FL 33139
</div>
<div id="paisdecoolplaces">
U.S.
</div>
<div id="telefonodecoolplaces">+1 305-532-4006
</div>
</div>
<div id="websitedecoolplaces">
<a href="http://www.clevelander.com" target="_blank">clevelander.com</a> 
</div>
<div id="websitedecoolplaces">
<a href="https://www.google.com.ar/maps/place/Clevelander+Hotel/@25.780803,-80.130888,17z/data=!3m1!4b1!4m2!3m1!1s0x88d9b4921377ebd9:0x883c94218930eb60" target="_blank">view map</a> 
</div>
</article>

<article id="chile" class="post_article">
<div id="contenedordecoolplaces">
  <div id="logodecoolplaces"> 
  <img src="logos/california.png" width="200" height="150" /> </div>
<div id="titulodecoolplaces"> 
California Cantina y Restaurant
</div>
<div id="subtitulodecoolplaces">
44/56 Las Urbinas </br>
Providencia . Santiago </br>
Chile </br>
</div>
<div id="paisdecoolplaces">
U.S.
</div>
<div id="telefonodecoolplaces">
+1 305-532-4006
</div>
<div id="emaildecoolplaces">
<a href="mailto:reservas@californiacantina.cl" target="_blank">
reservas@californiacantina.cl</a>
</div> 
</div>
<div id="websitedecoolplaces">
<a href="http://www.californiacantina.net/" target="_blank">californiacantina.net</a> 
</div>
<div id="websitedecoolplaces">
<a href="https://www.google.com.ar/maps/place/California+Sports+Cantina/@-33.422406,-70.611974,17z/data=!3m1!4b1!4m2!3m1!1s0x9662cf6668ba3beb:0x1e6f5df6c278b93e" target="_blank">view map</a> 
</div>
</article>

<article id="mexico" class="post_article">
<div id="contenedordecoolplaces">
  <div id="logodecoolplaces"> 
  <img src="logos/startleyend.png" width="200" height="150" /> </div>
<div id="titulodecoolplaces"> 
Star &amp; Legends
</div>
<div id="subtitulodecoolplaces">
Plaza Naucalli </br>
</div>
<div id="paisdecoolplaces">
Boulevard Santa Cruz #166, store 9 (Floor)</br>
Naucalpan de Juárez, Mexico
</div>
<div id="telefonodecoolplaces">
(55) 4430-8898
</div>
</div>
<div id="websitedecoolplaces">
<a href="http://www.starsandlegends.com.mx/" target="_blank">starsandlegends.com.mx</a> 
</div>
<div id="websitedecoolplaces">
<a href="https://www.google.com.ar/maps/place/Stars+%26+Legends+Sat%C3%A9lite/@19.500006,-99.234316,16z/data=!4m5!1m2!2m1!1sStars+%26+Legends,+Naucalpan+de+Ju%C3%A1rez,+M%C3%A9xico!3m1!1s0x0:0xdc259bd4c2e059cb" target="_blank">view map</a> 
</div>
</article>
</section>




<div class="tiragris-coolplaces">
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
</body>
</html>