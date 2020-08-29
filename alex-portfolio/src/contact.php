<?php
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $email_from = 'hello@alexmiller.dev';

    $email_subject = "New Form Submission: [$subject]";

    $email_body = "Sent from: $email.\n".
                    "Subject: $subject.\n".
                    "\n".
                    "Message: $message.\n";

    $to = "alexvisionllc@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $email \r\n";

    mail($to,$email_subject,$email_body,$headers)

    header("Location: ./App.js")


?>