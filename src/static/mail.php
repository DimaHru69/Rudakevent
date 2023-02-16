<?php
define( "RECIPIENT_EMAIL", "chesgr69@gmail.com" );
$success = "";
// $name = var_dump($_GET['name']);
// $phone = var_dump($_GET['phone']);
$name = isset( $_GET["name"] ) ? $_GET["name"] : "noname";
$phone = isset($_GET["phone"]) ? $_GET["phone"] : "nophone";
$recipient = RECIPIENT_EMAIL;
$subject = "Заявка від: " . $name . " <" . $phone . ">";
$msgBody = "Ім'я: " .  $name . "\r\n" . "Phone: " . $phone . "\r\n";
$headers = "From: Rudakevent <info@rudakevent.com>";
// $headers = [
//   'From' => 'info <info@rudakevent.com>',
//   'Cc' => 'info <info@rudakevent.com>'
//   'X-Sender' => 'info <info@rudakevent.com>',
//   'X-Mailer' => 'PHP/' . phpversion(),
//   'X-Priority' => '1',
//   'Return-Path' => 'info <info@rudakevent.com>',
//   'MIME-Version' => '1.0',
//   'Content-Type' => 'text/html; charset=iso-8859-1'
// ];
// echo $recipient;
// echo $name;
// echo $phone;
// echo $subject;
// echo $msgBody;
if(mail( $recipient, $subject, $msgBody, $headers )) {
  $success = "ok";
} else {
  $success = "Something wrong...";
}
// echo $success;
// print_r($_POST);
// print_r($_GET);
header('Content-type: application/json');
echo json_encode($success);
?>