<?php

$id_to_delete = $_POST['id'];

$server = 'localhost';
$user = 'root';
$pass = '';
$db = 'todoapp';

$link = new mysqli($server, $user, $pass, $db);
if (!$link) die("Error while opening the database");

$sql = "DELETE FROM todolist WHERE Id={$id_to_delete}";

$result = $link->query($sql);

if (!$result) {
    echo "Select error: {$link->error}";
    $link->close();
    die("Finishing");
}

if ($result) echo "Succesfully deleted the task";
else echo "Delete Error: {$link->error}";

$link->close();



?>