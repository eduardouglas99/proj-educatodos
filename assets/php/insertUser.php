<?php 
include_once('dbConnect.php');


$nome = $_POST["nome"];
$email = $_POST["email"];
$cpf = $_POST["cpf"];
$numcel = $_POST["numcel"];
$cep = $_POST["cep"];
$datanasc = $_POST["datanasc"];
$salario = $_POST["salario"];
$termoUso = $_POST["termoUso"];

$random = array('Aprovado', 'Aprovado','Aprovado','Aprovado','Reprovado');
$aleatorio = rand(0, 4);

$situacao = $random[$aleatorio];


try {
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $stmt = $pdo->prepare('INSERT INTO user (id,cpf,nome,email,numcel,salario,cep,datanasc,termoUso,situacao) VALUES(:id,:cpf,:nome,:email,:numcel,:salario,:cep,:datanasc,:termoUso,:situacao)');
  $stmt->execute(array(
    ':id' => null,
    ':cpf' => $cpf,
    ':nome' => $nome,
    ':email' => $email,
    ':numcel' => $numcel,
    ':salario' => $salario,
    ':cep' => $cep,
    ':datanasc' => $datanasc,
    ':termoUso' => $termoUso,
    ':situacao' => $situacao
  ));

  echo 'Usuário cadastrado com sucesso';
} catch(PDOException $e) {
  // echo 'Ocorreu um erro ao inserir os dados: <br> Erro -> ' . $e->getMessage();
  $erro = $e->errorInfo[0];
    switch ($erro) {
    case '23000':
    	echo 'email e/ou cpf já cadastrado';
    default: 'Ocorreu um erro ao inserir os dados';
    }
}


?>