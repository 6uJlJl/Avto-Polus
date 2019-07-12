<?php
// Файлы phpmailer
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';
// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$text = $_POST['text'];
$phone = $_POST['phone'];
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера GMAIL
    $mail->Username   = 'avtopoluskamaz@gmail.com'; // Логин на почте
    $mail->Password   = 'Vb[fbk367'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom( 'avtopoluskamaz@gmail.com' , $name ); // Адрес самой почты и имя отправителя
    // Получатель письма
    $mail->addAddress('avtopoluskamaz@gmail.com');
    // Прикрипление файлов к письму
    // if (!empty($_FILES['myfile']['name'][0])) {
    //     for ($ct = 0; $ct < count($_FILES['myfile']['tmp_name']); $ct++) {
    //         $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['myfile']['name'][$ct]));
    //         $filename = $_FILES['myfile']['name'][$ct];
    //         if (move_uploaded_file($_FILES['myfile']['tmp_name'][$ct], $uploadfile)) {
    //             $mail->addAttachment($uploadfile, $filename);
    //         } else {
    //             $msg .= 'Неудалось прикрепить файл ' . $uploadfile;
    //         }
    //     }
    // }
        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);

        $mail->Subject = 'Заявка с сайта avtopolus-kamaz.ru';
        $mail->Body    = "<b>Имя:</b> $name <br>
        <b>Телефон: </b> $phone <br>
        <b>Текст сообщения: </b> $text<br>";
// Проверяем отравленность сообщения
if ($mail->send()) {
    echo "$msg";
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}
} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
