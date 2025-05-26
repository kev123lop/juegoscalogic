<?php
session_start();

// --- CONFIGURACIÓN DE LA BASE DE DATOS ---
$dbHost = 'localhost';
$dbUser = 'root'; // ¡Casi siempre es 'root' en XAMPP!
$dbPass = '';     // ¡Casi siempre es vacío '' en XAMPP!
$dbName = 'mi_proyecto_db'; // Asegúrate de que este sea el nombre EXACTO de tu base de datos
try {
    $conn = new PDO("mysql:host=$dbHost;dbname=$dbName;charset=utf8", $dbUser, $dbPass);
     
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error de conexión a la base de datos: " . $e->getMessage());
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
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