<?php
    $internal_password = 1;
    // require_once('lib/recaptchalib.php');
    require_once('password.php');

function send($body, $from){
    include('Mail.php');

    $recipients = array('kazzmir@users.sf.net'); # Can be one or more emails
    $headers = array (
        'From' => 'paintown-message@paintown.sf.net',
        'Reply-To' => $from,
        'To' => join(', ', $recipients),
        'Subject' => '[paintown-web] Message',
    );

    $body = trim($body);
    if (strlen($body) > 0){
        $body = substr($body, 0, 5000);
        $mail_object =& Mail::factory('smtp',
            array(
                'host' => 'prwebmail',
                'auth' => true,
                'username' => 'paintown',
                'password' => paintownMailingListPassword(),
                #'debug' => true, # uncomment to enable debugging
            ));
        $mail_object->send($recipients, $headers, $body);
    }
}

    $captcha = $_POST['captcha'];
    if ($captcha == "human"){
        send($_POST['message'], $_POST['email']);
    }
    header('Location: index.php');

    /*
    $response = recaptcha_check_answer(recaptchaPrivate(),
                                       $_SERVER["REMOTE_ADDR"],
                                       $_POST["recaptcha_challenge_field"],
                                       $_POST["recaptcha_response_field"]);

    if (!$response->is_valid) {
        die("reCAPTCHA was entered incorrectly. Please try it again :)");
    } else {
    }
    */
?>
