<?php
$name = htmlspecialchars($_POST['name']);
tel = htmlspecialchars($_POST['tel']);

$to = "andreyi96@mail.ru";
$subject = "Test mail";
$message = "Сообщение.";
$from = "webmaster@kontur-grp.ru";
$headers = "From: $from";
mail($to,$subject,$message,"Имя:".$name.",Телефон:".$tel,$headers);
