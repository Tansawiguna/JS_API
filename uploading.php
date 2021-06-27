<?php
$s = $_FILES['image']['tmp_name'];
$target_dir = getcwd() . DIRECTORY_SEPARATOR;
$target_file = $target_dir . '/image/' . basename($_FILES["image"]["name"]);
$uploadOk = 1;
move_uploaded_file($s, $target_file);
?>