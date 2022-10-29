<?php
   define('DB_SERVER', 'mariadb:3306');
   define('DB_USERNAME', 'db_user');
   define('DB_PASSWORD', 'db_password');
   define('DB_DATABASE', 'db_name');
   $db = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);
?>