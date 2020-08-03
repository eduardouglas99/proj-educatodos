<?php 
include_once('dbConnect.php');

$consulta = $pdo->prepare('SELECT nome, cpf, situacao FROM user WHERE cpf="'.$_POST['cpf'].'";');
$consulta->execute();

$result = $consulta->fetchAll(PDO::FETCH_OBJ);

if ( count($result) ) {
    foreach($result as $linha) {
        echo "Nome: {$linha->nome } - CPF: {$linha->cpf} - Situação: {$linha->situacao}<br/>";
    }
} else {
    echo "Nenhum resultado retornado.";
}


?>