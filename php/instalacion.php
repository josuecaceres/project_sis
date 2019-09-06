<?php
    $info=array(
        "equipo" => array("nombre_equipo"=>htmlspecialchars($_POST["nombre_equipo"])),
        "usuario_1" => array(
            "nombre_usuario" => htmlspecialchars($_POST["nombre_usu"]),
            "password" => htmlspecialchars($_POST["password"]),
            "password_indi" => htmlspecialchars($_POST["password_indi"]),
            "avatar" => "../media/user2.jpg",
            "fondo" => "../media/fondo0.jpg",
            "fondo_block" => "../media/fondo0.jpg"
        )
    );
    echo json_encode($info);

    //crear el archivo json
    $handler = fopen("../info/info.json","w+");
    fwrite($handler, json_encode($info));
    fclose($handler);

    
    /*$nombre_equipo = $_POST["nombre_equipo"];
    $nombre_usu = $_POST["nombre_usu"];
    $password = $_POST["password"];
    $password_indi = $_POST["password_indi"];
    echo $nombre_equipo."<br>";
    echo $nombre_usu."<br>";
    echo $password."<br>";
    echo $password_indi;*/
?>