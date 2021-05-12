<?php

$id = $_POST['id'];
$newContent = $_POST['content'];

$server = 'localhost';
$user = 'root';
$pass = '';
$db = 'todoapp';

$link = new mysqli($server, $user, $pass, $db);
if (!$link) die("Error while opening the database");

$sql = "UPDATE todolist SET `ToDo` = '{$newContent}' WHERE `Id` = {$id};";

$result = $link->query($sql);

if ($result) echo "Succesfully edited your task";
else echo "Update Error: {$link->error}";

$link->close();

?>