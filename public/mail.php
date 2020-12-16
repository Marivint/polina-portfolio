<?php

$message = $_POST["message"];

$to_email = $_POST["toEmail"];

$subject = 'Name :'.$_POST["name"];

$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: '.$_POST["name"].' <'.$_POST["email"].'>';

mail($to_email, $subject, $message, implode("\r\n", $headers));

?>