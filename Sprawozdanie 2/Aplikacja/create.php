<?php

$server = 'localhost';
$user = 'root';
$pass = '';
$db = 'todoapp';

// connect to the server
$link = new mysqli($server, $user, $pass);

// if needed create a database
$sql = "CREATE DATABASE IF NOT EXISTS $db;";
$result = $link->query($sql);
$link->select_db($db);
$sql = <<<EOT
CREATE TABLE IF NOT EXISTS todolist(
    Id int NOT NULL AUTO_INCREMENT,
	Nr int NOT NULL,
	ToDo TEXT,
    M_Date datetime,
	PRIMARY KEY (Id)
);
EOT;
$result = $link->query($sql);

if($result) echo "The database/ table has been created";
else echo "Error: {$link->error}";

// close the connection
$link->close();

?>