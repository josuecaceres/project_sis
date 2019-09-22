<?php
    $info=array(
        "ruta" => $_POST["ruta"];
    );
    echo json_encode($info);

    //crear el archivo json
    $handler = fopen("./lista.json","w+");
    fwrite($handler, json_encode($info));
    fclose($handler);
?>