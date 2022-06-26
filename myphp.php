<?php
$servername = "localhost";
$username = "root";
$password = "petros";

// create a connection to the server
$conn = mysqli_connect($servername, $username, $password);
// check connection 
//if($conn->connect_error){
//    die("connection failed: ". $conn->connect_error);
//}
echo "The connection has been established!";
mysqli_close($conn);
?>

