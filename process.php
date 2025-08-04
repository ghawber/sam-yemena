<?php
// التحقق من أن النموذج تم إرساله بطريقة POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // استقبال البيانات من النموذج
    $name    = $_POST['Name'];
    $email   = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // طباعة البيانات أو معالجتها
    echo "<h2>تم استلام البيانات:</h2>";
    echo "الاسم: $name <br>";
    echo "البريد الإلكتروني: $email <br>";
    echo "الموضوع: $subject <br>";
    echo "الرسالة: $message <br>";
    
    // يمكن هنا إرسال بريد أو حفظها في قاعدة بيانات
}
?>
