document.querySelector("#registro").addEventListener('click', crear)

function crear(){
    let N_E = document.querySelector("#equipo").value
        N_U = document.querySelector("#nombre").value
        C_U = document.querySelector("#password").value
        IC_U = document.querySelector("#password_indi").value
        
        if(N_E != '' && N_U != '' && C_U != '' && IC_U != ''){
            var xhttp = new XMLHttpRequest()
            xhttp.open("POST","../../../php/instalacion.php",true)
            xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded")
    
            xhttp.send("nombre_equipo="+N_E+"&nombre_usu="+N_U+"&password="+C_U+"&password_indi="+IC_U)
            //console.log(("nombre_equipo="+N_E+"&nombre_usu="+N_U+"&password="+C_U+"&password_indi="+IC_U))
            document.querySelector(".spinner-grow").style.display = "inline-block"
            setTimeout("alert(Accion realizada con exito)", 3000);
        }else{
            document.getElementById('alert').style.display = "block"
        }
}
