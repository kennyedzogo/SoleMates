<?php

// Define database connection parameters
$host = "localhost"; // Hostname of the database server
$user = "root";      // Username for the database
$pass = "";          // Password for the database
$db = "login";       // Name of the database

class mysqli{}
// Create a new mysqli object for database connection
$conn = new mysqli($host, $user, $pass, $db);

// Check if the connection was successful
if($conn->connect_error){
    // If there is a connection error, display the error message
    echo "Failed to connect DB: " . $conn->connect_error;
} else {
    // Connection was successful, you can proceed with further operations
    echo "Connected to DB successfully";
}
?>