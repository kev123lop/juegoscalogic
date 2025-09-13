<?php
session_start();
 
$dbHost = 'localhost';
$dbUser = 'root';  
$dbPass = '';     
$dbName = 'mi_proyecto_db';  
try {
    $conn = new PDO("mysql:host=$dbHost;dbname=$dbName;charset=utf8", $dbUser, $dbPass);
     
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error de conexión a la base de datos: " . $e->getMessage());
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $username = trim($_POST['username']);  
    $password = trim($_POST['password']);  

    $stmt = $conn->prepare("SELECT password FROM usuarios WHERE username = :username");
    $stmt->bindParam(':username', $username);
    $stmt->execute();

    $user = $stmt->fetch(PDO::FETCH_ASSOC);  

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['username'] = $username;
        header('Location: pagina_bienvenida.html');  
        exit();
    } else {
        header('Location: pagina_bienvenida.html?error=1');  
        exit();
    }
} else {
    header('Location: pagina_bienvenida.html');  
    exit();
}
?>