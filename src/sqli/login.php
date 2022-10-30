  <?php
   include("config.php");

   $url = " /var/www/html/what-this-code-do/index.html";

   if($_SERVER["REQUEST_METHOD"] == "POST") {
      // username and password sent from form

       // No mysqli_real_escape_string check to allow SQL injection
      $myusername = $_POST['uname'];
      $mypassword = $_POST['psw'];

      $sql = "SELECT id FROM Users WHERE username = '$myusername' and password = '$mypassword'";
      $result = mysqli_query($db,$sql);

      $count = mysqli_num_rows($result);

      // If result matched $myusername and $mypassword, table row must be 1 row

      if($count == 1) {
        echo "<script type=\"text/javascript\"> alert(\"Well done you solved this challenge!!\");;</script>";
        echo "<script type=\"text/javascript\">window.location.href = '../what-this-code-do/index.html';</script>";
      }else {
        echo "<script type=\"text/javascript\"> alert(\"Username or Password wrong, please retry.\");;</script>";
        echo "<script type=\"text/javascript\">window.location.href = './index.html';</script>";
      }
   }
?>
