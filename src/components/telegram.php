<?php

/* https://api.telegram.org/bot5278372052:AAHe_Xn2uncSTBIoIZj6vNpGKbCNDZo7U5U/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$message = $_POST['user_message'];
$token = "5278372052:AAHe_Xn2uncSTBIoIZj6vNpGKbCNDZo7U5U";
$chat_id = "-645514759";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Собшение:' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
    <script>alert("Спасибо! Ваша заявка принята.
    Наш менеджер скоро с вами свяжется")</script>
    header('Location: Contacts.jsx');
} else {
  echo "Error";
}

?>
