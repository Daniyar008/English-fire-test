<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $score = $_POST['score'];
    $name = $_POST['name'];
    $email = "daniyarsyltangereev@gmail.com"; // Ваш email адрес

    // Создание темы и сообщения
    $subject = "Ответы на квиз о пожарах в Казахстане от $name";
    $message = "Результат квиза: " . $score;

    // Отправка email
    mail($email, $subject, $message);

    echo "Ваш результат отправлен!";
}
?>
