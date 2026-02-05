<?php
setcookie("nombre1", "Pepe Perez", strtotime('+30 days'));
setcookie("nombre2", "Luis Gil", strtotime('+2 years'));
setcookie("nombre3", "Pedro Ruiz", time() + 3600);
echo "Cookies creadas";
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        console.log(document.cookie);
        const cookieArray = document.cookie.split(";");
        for (let i = 0; i < cookieArray.length; i++) {
            const cookiePar = cookieArray[i].split("=");
            console.log(`${cookiePar[0].trim()}->${decodeURIComponent(cookiePar[1])}`);
        }
    </script>
</body>

</html>