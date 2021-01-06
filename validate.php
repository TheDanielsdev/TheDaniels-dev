<?php

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $msg = $_POST['message'];


    $mailTo = "thedanielsdev@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have recieved an email from ".$name.".\n\n".$msg;

mail($mailTo, $subject, $txt, $headers);
header("location: index.html?messagesent");


}