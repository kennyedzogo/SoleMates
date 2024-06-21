<?php

// Include the connection file
require 'connect.php';

// Error handling (consider using a dedicated error handler)
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Handle sign-up form submission
if (isset($_POST['signUp'])) {
    $firstName = mysqli_real_escape_string($conn, $_POST['fName']); // Sanitize input
    $lastName = mysqli_real_escape_string($conn, $_POST['lName']);  // Sanitize input
    $email = mysqli_real_escape_string($conn, $_POST['email']);    // Sanitize input
    $password = md5($_POST['pass']);

    // Check for existing email
    $checkEmail = "SELECT email FROM users WHERE email='$email'";
    $result = mysqli_query($conn, $checkEmail);
    if (mysqli_num_rows($result) > 0) {
        echo "Email Address Already Exists!";
    } else {
        // Prepare and execute the insert query
        $insertQuery = "INSERT INTO users (firstName, lastName, email, pass) VALUES (?, ?, ?, ?)";
        $stmt = mysqli_prepare($conn, $insertQuery);
        if ($stmt) {
            mysqli_stmt_bind_param($stmt, "ssss", $firstName, $lastName, $email, $password);
            if (mysqli_stmt_execute($stmt)) {
                header("Location: homepage.php");
                exit();
            } else {
                echo "Error executing query: " . mysqli_stmt_error($stmt);
            }
            mysqli_stmt_close($stmt);
        } else {
            echo "Error preparing statement: " . mysqli_error($conn);
        }
    }
    mysqli_free_result($result); // Free result memory
}

// Handle sign-in form submission
if (isset($_POST['signIn'])) {
    $email = mysqli_real_escape_string($conn, $_POST['email']);    // Sanitize input
    $password = md5($_POST['pass']);

    $sql = "SELECT * FROM users WHERE email='$email' AND pass='$password'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        session_start();
        $row = mysqli_fetch_assoc($result);
        $_SESSION['email'] = $row['email'];
        header("Location: homepage.php");
        exit();
    } else {
        echo "Not Found, Incorrect Email or Password";
    }
    mysqli_free_result($result); // Free result memory
}

// Close the connection (optional - consider connection pooling)
mysqli_close($conn);  // Uncomment if not using connection pooling
