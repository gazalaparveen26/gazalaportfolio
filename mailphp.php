<!-- ========================= -->
<!-- mail.php -->
<!-- ========================= -->

<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "gazalad123@gmail.com"; // YOUR EMAIL

    $subject = "New Portfolio Contact Message";

    $body = "
    Name: $name
    
    Email: $email
    
    Message:
    $message
    ";

    $headers = "From: $email";

    if(mail($to, $subject, $body, $headers)){

        echo "
        <script>
            alert('Message Sent Successfully!');
            window.location.href='index.html';
        </script>
        ";

    } else {

        echo "
        <script>
            alert('Failed To Send Message');
            window.location.href='index.html';
        </script>
        ";

    }

}

?>