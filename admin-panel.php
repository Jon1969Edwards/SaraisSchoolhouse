<?php
$title = $_POST['title'];
$post = $_POST['post'];
$authorId = $_POST['authorId'];

//connect to database
$connect = mysqli_connect('localhost','username', 'password', 'database');

//SQL query
$query = "INSERT INTO `blog_posts`(`title`, `post`, `author_id`) VALUES ('$title','$post','$authorId')";

//run the query
$run = mysqli_query($connect, $query);

    //testing to see if values came from HTML page
    echo $title;
    echo $post;
    echo $authorId;

    echo "<br/><a href='../index.html' title='Go Home'><--Go Home</a>";

?>
