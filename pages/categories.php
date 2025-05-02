<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Categories</title>
    <link rel='stylesheet' type='text/css' media='screen' href='../css/categories.css'>
    <script src='../js/categories.js'></script>
</head>

<body>
    <h2>Categorías del usuario <?php echo $_SESSION['user_name']; ?></h2>
    <form id="category-form">
        <label for="name" class="field">
            <span>
                <span class="req-field">*</span>
                Nombre:
            </span>
            <input type="text" name="name" placeholder="name" id="name" required />
        </label>
        <input type="hidden" name="user_id" placeholder="user_id" id="user_id" required
            value="<?php echo $_SESSION['user_id']; ?>" />
        <button type="submit">Guardar</button>
    </form>
    <div id="message"></div>
    <hr>
    <h2>Listado de categorías</h2>
    <table>
        <thead>
            <th>Id</th>
            <th>Nombre</th>
            <th>Fecha creado</th>
        </thead>
        <tbody id="category-list">

        </tbody>
    </table>

</body>

</html>