<?php

class Entry
{
    private $id;
    private $number;
    private $content;
    private $m_date;

    function getId(){
        return $this->id;
    }

    function getNumber(){
        return $this->number;
    }

    function getContent(){
        return $this->content;
    }

    function getMdate()
    {
        return $this->m_date;   
    }

    function setId($id){
        $this->id = $id;
    }

    function setNumber($number){
        $this->number = $number;
    }

    function setContent($content){
        $this->content = $content;
    }

    function setMdate($m_date){
        $this->m_date = $m_date;
    }

}

$server = 'localhost';
$user = 'root';
$pass = '';
$db = 'todoapp';

$link = new mysqli($server, $user, $pass, $db);
if (!$link) die("Error while opening the database");

$sql = "SELECT Id, Nr, ToDo, M_Date FROM todolist ORDER BY Nr;";

$result = $link->query($sql);

if (!$result) {
    echo "Select error: {$link->error}";
    $link->close();
    die("Finishing");
}

$data = "";

$i = 0;
$tasks = new Entry;

while ($record = $result->fetch_assoc()){
    $tasks->setId($record['Id']);
    $tasks->setNumber($record['Nr']);
    $tasks->setContent($record['ToDo']);
    $tasks->setMdate($record['M_Date']);
    $data .= "<tr><td><input type=\"checkbox\" id=\"ch\"></td><td>{$tasks->getNumber()}</td><td>{$tasks->getContent()}</td><td>{$tasks->getMdate()}</td><td><i class=\"icon-pencil\" onclick=\"editR('{$tasks->getId()}','{$tasks->getContent()}');\"></i></td><td><i class=\"icon-trash-empty\" onclick=deleteR({$tasks->getId()})></i></td></tr>";
    $i++;
}


echo $data;

$link->close();

?>
