<?php
require '../commons/db.php';

var_dump($_SERVER['REQUEST_METHOD']);
var_dump($_POST);
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (
        trim($_POST['name']) != '' &&
        trim($_POST['user_id']) != ''
    ) {
        try {
            $q = "INSERT INTO task.category(name, user_id)";
            $q = $q . " VALUES (:name, :user_id);";
            $stmt = $db->prepare($q);
            $stmt->execute([
                "name" => $_POST["name"],
                "user_id" => $_POST["user_id"]
            ]);
        } catch (PDOException $e) {
            echo 'Error en la conexión ' . $e->getMessage();
            exit();
        }

        header("Location: /task-manager/pages/categories.php");

    } else {
        echo 'Nooooooooooo pasa';
    }
}

?>