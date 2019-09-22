<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/fontawesome.css">
    <link rel="stylesheet" href="css/stilo.css">
</head>
<body>
    <?php
        if (empty($_GET["nomdir"])){
            $nomdir = "./";
        }else{
            $nomdir = $_GET["nomdir"] . "/";
        }

        $dir = opendir($nomdir);        
    ?>
    <div class="container-fluid">
        <div class="row">
            <div class="col-3 border-right border-dark p-2">
            <center>
            <a href="" class="btn btn-dark btn-sm"><i class="fas fa-arrow-left"></i></a>
            <a href="" class="btn btn-dark btn-sm"><i class="fas fa-arrow-right"></i></a>
            <?php
                while(($fichero = readdir($dir)) != false){
                    if($fichero != "."){
                        if ($fichero == ".."){
                            echo '<a class="btn btn-primary btn-sm mr-auto" href="?nomdir=' . urlencode($nomdir . $fichero) . '">';
                            echo "<i class='fas fa-arrow-up'></i></a>";
            ?>
            </center>
            </div>
            <div class="col-9 p-2">
                <?php echo "<p>: $nomdir</p>";?>
            </div>
        </div>
        <div class="row">
            <div class="col-2 pt-5 border-top border-dark bg-transparent">
                <ul class="carpetas">                    
                    <li><a href="http://localhost/proyecto_sis/public/apps/files/files2.php?nomdir=.%2F..%2F..%2F..%2F..%2F..%2F..%2FUsers%2FJosu%C3%A8+C%C3%A0ceres%2FDocuments">Documentos</a></li>
                    <li><a href="http://localhost/proyecto_sis/public/apps/files/files2.php?nomdir=.%2F..%2F..%2F..%2F..%2F..%2F..%2FUsers%2FJosu%C3%A8+C%C3%A0ceres%2FVideos">Videos</a></li>
                    <li><a href="http://localhost/proyecto_sis/public/apps/files/files2.php?nomdir=.%2F..%2F..%2F..%2F..%2F..%2F..%2FUsers%2FJosu%C3%A8+C%C3%A0ceres%2FMusic">Música</a></li>
                    <li><a href="http://localhost/proyecto_sis/public/apps/files/files2.php?nomdir=.%2F..%2F..%2F..%2F..%2F..%2F..%2FUsers%2FJosu%C3%A8+C%C3%A0ceres%2FPictures">Imágenes</a></li>
                    <li><a href="http://localhost/proyecto_sis/public/apps/files/files2.php?nomdir=.%2F..%2F..%2F..%2F..%2F..%2F..%2FUsers%2FJosu%C3%A8+C%C3%A0ceres%2FDownloads">Descargas</a></li>
                </ul>
            </div>
            <div class="col-10 bg-light border border-dark archivos">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col"><?php echo str_pad("Nombre", 40);?></th>
                            <th scope="col"><?php echo str_pad("Fecha ult. Mod", 20);?></th>
                            <th scope="col"><?php echo str_pad("Tamaño", 10);?></th>
                            <th scope="col"><?php echo str_pad("Tipo", 10);?></th>
                        </tr>
                    </thead>
                    <tbody>                        
                        <?php                           
                            echo "<tr>";
                                }else{
                                    if (is_dir($nomdir . $fichero)){
                                        echo "<td>";
                                            echo '<a href="?nomdir=' . urlencode($nomdir . $fichero) . '">';
                                            echo $fichero;
                                            echo "</a>";
                                            echo str_repeat(' ', 40 - strlen($fichero));
                                        echo "</td>";
                                        echo "<td>";
                                            echo str_pad(date("d/m/Y", filemtime($nomdir . $fichero)), 20);
                                        echo "</td>";
                                        echo "<td>";
                                            echo "-";
                                            echo str_repeat(' ', 10);
                                        echo "</td>";
                                        echo "<td>";                                        
                                            //echo str_pad(filetype($fichero),10);                                        
                                            echo filetype($nomdir . $fichero);                                      
                                        echo "</td>";
                                    }else{
                                        echo "<td>";
                                            echo str_pad($fichero, 40);
                                        echo "</td>";
                                        echo "<td>";
                                            echo str_pad(date("d/m/Y", filemtime($nomdir . $fichero)), 20);
                                        echo "</td>";
                                        echo "<td>";
                                            echo str_pad(filesize($nomdir . $fichero), 10)."bytes";
                                        echo "</td>";
                                        echo "<td>";                                        
                                            echo filetype($nomdir . $fichero); 
                                        echo "</td>";
                                    }
                                echo "</tr>";
                                }
                            }
                            }   
                            closedir($dir);                            
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row bg-light text-primary border border-dark">
            <?php
                $total_arch = count(glob("$nomdir/{*}",GLOB_BRACE));
                echo $total_arch. " Elementos";                
            ?>
        </div>
    </div>
    <script src="js/all.js"></script>
</body>
</html>