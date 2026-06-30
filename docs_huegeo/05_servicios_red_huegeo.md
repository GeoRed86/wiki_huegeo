# Servicios De Red.

>En esta sección determinaremos lo que tenga que ver con la asignacion de IPs, cual sera el rango kque tendra para asignar a los usuarios.

- ### Servicio DHCP.

<div align="center">
    <p>Para empezar debemos Levantar el "Servicio de DHPC", asi que nos dirigimos a "Administrar" y luego a "agregar rolos y caracteristicas".</p> 
    <img src="./img_huegeo/img_servicios_red/dhcp_01.png" alt="dhcp1" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Luego a Servicio DHCP y posterior a Agregar caracteristicas.</p> 
    <img src="./img_huegeo/img_servicios_red/dhcp_02.png" alt="dhcp2" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>En este punto le da,os siguiente hasta el punto de aptretar "instalar".</p> 
    <img src="./img_huegeo/img_servicios_red/dhcp_03.png" alt="dhcp3" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Se nos repite lo mismo que en la instalacion de "Active directory", una vez cargada la barra, nos fijamos en el banderin que esta en la parte superior.</p> 
    <img src="./img_huegeo/img_servicios_red/dhcp_04.png" alt="dhcp4" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Ahora si completamos la instalacion DHCP.</p> 
    <img src="./img_huegeo/img_servicios_red/dhcp_05.png" alt="dhcp5" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Ahora si cerramos la instalacion.</p> 
    <img src="./img_huegeo/img_servicios_red/dhcp_06.png" alt="dhcp6" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Una vez instalado el servicio, nos dirigimos a herramientas y buscxamos "DHCP".</p> 
    <img src="./img_huegeo/img_servicios_red/dhcp_07.png" alt="dhcp7" width="50%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Una vez dentro de "DHCP" nos dirigimos a IPv4 y hacemos click derecho, luego en "Ambito nuevo".</p> 
    <img src="./img_huegeo/img_servicios_red/dhcp_08.png" alt="dhcp8" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Aca asignaremos el rango dionde queremos que las IPs de usuarios esten, en este caso seran 50 IPs, con rangos de 25 (llenar la tabla segun imagen).</p> 
    <img src="./img_huegeo/img_servicios_red/dhcp_09.png" alt="dhcp9" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Le da,mos a siguiente sin anotar nada mas, hasta llegar a esta parte, en donde marcamos que queremos configurar las opciones ahora.</p> 
    <img src="./img_huegeo/img_servicios_red/dhcp_11.png" alt="dhcp1" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>En este punto estamos deter,minando un enrutador, con el fin de que si los otros usuarios que pertenezcan a esta red, deban dirigirse a esta direccion IP para poder salir del entorno local.</p> 
    <img src="./img_huegeo/img_servicios_red/dhcp_12.png" alt="dhcp12" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Escribimos nuestro dominio, siguinte, activamos el ambito y siguiente, ya terminamos esta parte.</p> 
    <img src="./img_huegeo/img_servicios_red/dhcp_13.png" alt="dhcp13" width="70%">
    <img src="./img_huegeo/img_servicios_red/dhcp_14.png" alt="dhcp14" width="70%">
</div>

<br>
<br>
<br>
<br>

- ### Integrar A Nuevo Usuario.

<div align="center">
    <p>Ahora ca,mbiamos de maquina y trabaja,os con la maquina usuario.</p> 
    <img src="./img_huegeo/img_servicios_red/unir_usuario_01.png" alt="unir1" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Una vez dentro de la maquina, nos salta un mensaje de que estamos unidosa la red local (al preparar las maquinas virtuales, las enlazamos atravez de una red interna).</p> 
    <img src="./img_huegeo/img_servicios_red/unir_usuario_02.png" alt="unir2" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Buscamos la consola y la ejecutamos como administrador.</p> 
    <img src="./img_huegeo/img_servicios_red/unir_usuario_03.png" alt="unir3" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Una vez dentro de la consola escribimos: ipconfig y ejecutamos con "enter", nos muestra la informacion de que nos encontramos conectados a la red local y con una Ip asignada... despues de esto escribimos: ping 192.168.10.10, esto hara conectarnos a la misma IP que el servidor .</p> 
    <img src="./img_huegeo/img_servicios_red/unir_usuario_04.png" alt="unir4" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Abrimos una vez mas la consola y anotamos el siguiente comando: sysdm.cpl, gracias a esto entraremos al dominio que habiamos establecido anteriormente.</p> 
    <img src="./img_huegeo/img_servicios_red/unir_usuario_05.png" alt="unir5" width="40%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>hacemos click en "cambiar" como se muestra en la imagen.</p> 
    <img src="./img_huegeo/img_servicios_red/unir_usuario_06.png" alt="unir6" width="50%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Nos dirigimos al apartado "miembro de" selecionamos dominio y escribimos el nombre del dominio.
    Acontinuacionm nos pedira autorizacion del ad,ministrador del dominio, por esto y mas, es muy importante no olvidar la contraseña.</p> 
    <img src="./img_huegeo/img_servicios_red/unir_usuario_07.png" alt="unir7" width="70%">
    <img src="./img_huegeo/img_servicios_red/unir_usuario_08.png" alt="unir8" width="40%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Al reiniciar la maquina, seguira igual todo aparentemente, asi que nos dirigimos a "otro usuario" asi se cambiara la pantalla de inicio.</p> 
    <img src="./img_huegeo/img_servicios_red/unir_usuario_01.png" alt="unir1" width="40%">
    <img src="./img_huegeo/img_servicios_red/unir_usuario_09.png" alt="unir9" width="40%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Una vez dentro abrimos una consola y para tener la certeza que hemos hecho bien todo anotamos el siguinete comando: whoami, Inacap\jperez es la respuesta, con esto confirmamos que ezsstamios dentro del domnio que queriamos.</p> 
    <img src="./img_huegeo/img_servicios_red/unir_usuario_10.png" alt="unir10" width="70%">
    <img src="./img_huegeo/img_servicios_red/unir_usuario_11.png" alt="unir11" width="70%">
</div>

<br>
<br>
<br>
<br>




