<?php 
	$nome = $_POST['nome'];
	$sobrenome = $_POST['sobrenome'];
	$email = $_POST['email'];
	$celular = $_POST['celular'];
	$mensagem = $_POST['mensagem'];

	require 'PHPMailer/PHPMailerAutoload.php';

	$mail = new PHPMailer;
	$mail->isSMTP();

	// Mail Server config
	$mail->Host = "smtp.gmail.com";
	$mail->Port = "587";
	$mail->SMTPSecure = "tls";
	$mail->SMTPAuth = "true";
	$mail->Username = "username@email.com";
	$mail->Password = "password";

	// Message Config
	$mail->setFrom($mail->Username, "Silas"); // Remetente
	$mail->addAddress('username@email.com'); // Destinatário
	$mail->Subject = "Contato Portfolio"; //Assunto

	$conteudo_email = 
	" 
		Você recebeu uma mensagem de $nome $sobrenome ($email):
		<br><br>

		Celular: <br>
		$celular

		Mensagem: <br>
		$mensagem
	";

	$mail->IsHTML(true);
	$mail->Body = $conteudo_email;

	if ($mail->send()) {
		echo "Email enviado com sucesso";
	} else {
		echo "Falha no envio de e-mail " . $mail->ErrorInfo;
	}

