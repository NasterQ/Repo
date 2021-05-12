<?php

class Entry
{
    private $content;
    private $nr;

    function __construct($num, $con){
        $this->nr = $num;
        $this->content = $con;
    }

    function getContent(){
        return $this->content;
    }

    function getNumber(){
        return $this->nr;
    }

}

$task = new Entry($_POST['nr'], $_POST['content']);

$server = 'localhost';
$user = 'root';
$pass = '';
$db = 'todoapp';

$link = new mysqli($server, $user, $pass, $db);
if (!$link) die("Error while opening the database");

$sql = "INSERT INTO `todolist` (Nr, ToDo, M_Date) VALUES ({$task->getNumber()}, '{$task->getContent()}' , now());";

$result = $link->query($sql);

if ($result) echo "Succesfully addded your task";
else echo "Insert Error: {$link->error}";

$link->close();

?>