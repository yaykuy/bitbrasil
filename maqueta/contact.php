<?php
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];
$email = $_POST['email'];
$para = 'satoshi@cesyt.net';
$titulo = 'Mensaje desde donationcup.org';
$header = 'From: ' . $email;
$msjCorreo = "Nombre: $nombre\n Teléfono: $telefono\n E-Mail: $email\n Mensaje:\n $mensaje";
  
if ($_POST['submit']) {
if (mail($para, $titulo, $msjCorreo, $header)) {
echo "<script language='javascript'>
alert('Message sent, thank you!');
window.location.href = 'http://www.donationcup.org';
</script>";
} else {
echo 'Error';
}
}
?>