# Servicios de red

>En esta sección determinaremos lo que tiene que ver con la asignación de IPs y cuál será el rango que tendrá para asignar a los usuarios.

### Servicio DHCP

<div align="center">
    <p>Para empezar debemos levantar el «Servicio de DHCP», así que nos dirigimos a «Administrar» y luego a «Agregar roles y características».</p>
    <img src="./img_huegeo/img_servicios_red/dhcp_01.png" alt="dhcp1" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Luego, a «Servicio DHCP» y posterior a «Agregar características».</p>
    <img src="./img_huegeo/img_servicios_red/dhcp_02.png" alt="dhcp2" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>En este punto le damos a «Siguiente» hasta el punto de apretar «Instalar».</p>
    <img src="./img_huegeo/img_servicios_red/dhcp_03.png" alt="dhcp3" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Se nos repite lo mismo que en la instalación de «Active Directory»; una vez cargada la barra, nos fijamos en el banderín que está en la parte superior.</p>
    <img src="./img_huegeo/img_servicios_red/dhcp_04.png" alt="dhcp4" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Ahora sí completamos la instalación de DHCP.</p>
    <img src="./img_huegeo/img_servicios_red/dhcp_05.png" alt="dhcp5" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Ahora sí cerramos la instalación.</p>
    <img src="./img_huegeo/img_servicios_red/dhcp_06.png" alt="dhcp6" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Una vez instalado el servicio, nos dirigimos a «Herramientas» y buscamos «DHCP».</p>
    <img src="./img_huegeo/img_servicios_red/dhcp_07.png" alt="dhcp7" width="50%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Una vez dentro de «DHCP», nos dirigimos a IPv4 y hacemos clic derecho, luego en «Ámbito nuevo».</p>
    <img src="./img_huegeo/img_servicios_red/dhcp_08.png" alt="dhcp8" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Aquí asignaremos el rango donde queremos que las IPs de usuarios estén; en este caso serán 50 IPs, con rangos de 25 (llenar la tabla según la imagen).</p>
    <img src="./img_huegeo/img_servicios_red/dhcp_09.png" alt="dhcp9" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Le damos a «Siguiente» sin anotar nada más, hasta llegar a esta parte, en donde marcamos que queremos configurar las opciones ahora.</p>
    <img src="./img_huegeo/img_servicios_red/dhcp_11.png" alt="dhcp1" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>En este punto estamos determinando un enrutador, con el fin de que, si los otros usuarios que pertenezcan a esta red deben dirigirse a esta dirección IP para poder salir del entorno local.</p>
    <img src="./img_huegeo/img_servicios_red/dhcp_12.png" alt="dhcp12" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Escribimos nuestro dominio, siguiente, activamos el ámbito y siguiente; ya terminamos esta parte.</p>
    <img src="./img_huegeo/img_servicios_red/dhcp_13.png" alt="dhcp13" width="70%">
    <img src="./img_huegeo/img_servicios_red/dhcp_14.png" alt="dhcp14" width="70%">
</div>

<br>
<br>
<br>
<br>

### Integrar a un nuevo usuario

<div align="center">
    <p>Ahora cambiamos de máquina y trabajamos con la máquina usuario.</p>
    <img src="./img_huegeo/img_servicios_red/unir_usuario_01.png" alt="unir1" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Una vez dentro de la máquina, nos salta un mensaje de que estamos unidos a la red local (al preparar las máquinas virtuales, las enlazamos a través de una red interna).</p>
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
    <p>Una vez dentro de la consola escribimos: <code>ipconfig</code> y ejecutamos con Enter; nos muestra la información de que nos encontramos conectados a la red local y con una IP asignada. Después de esto escribimos: <code>ping 192.168.10.10</code>, esto nos conectará a la misma IP que el servidor.</p>
    <img src="./img_huegeo/img_servicios_red/unir_usuario_04.png" alt="unir4" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Abrimos una vez más la consola y anotamos el siguiente comando: <code>sysdm.cpl</code>; gracias a esto entraremos al dominio que habíamos establecido anteriormente.</p>
    <img src="./img_huegeo/img_servicios_red/unir_usuario_05.png" alt="unir5" width="40%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Hacemos clic en «Cambiar», como se muestra en la imagen.</p>
    <img src="./img_huegeo/img_servicios_red/unir_usuario_06.png" alt="unir6" width="50%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Nos dirigimos al apartado «Miembro de», seleccionamos «Dominio» y escribimos el nombre del dominio. A continuación nos pedirá autorización del administrador del dominio; por esto y más, es muy importante no olvidar la contraseña.</p>
    <img src="./img_huegeo/img_servicios_red/unir_usuario_07.png" alt="unir7" width="70%">
    <img src="./img_huegeo/img_servicios_red/unir_usuario_08.png" alt="unir8" width="40%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Al reiniciar la máquina, seguirá igual todo aparentemente, así que nos dirigimos a «Otro usuario» para que cambie la pantalla de inicio.</p>
    <img src="./img_huegeo/img_servicios_red/unir_usuario_01.png" alt="unir1" width="40%">
    <img src="./img_huegeo/img_servicios_red/unir_usuario_09.png" alt="unir9" width="40%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Una vez dentro, abrimos una consola y, para tener la certeza de que hemos hecho bien todo, anotamos el siguiente comando: <code>whoami</code>. «INACAP\jperez» es la respuesta; con esto confirmamos que estamos dentro del dominio que queríamos.</p>
    <img src="./img_huegeo/img_servicios_red/unir_usuario_10.png" alt="unir10" width="70%">
    <img src="./img_huegeo/img_servicios_red/unir_usuario_11.png" alt="unir11" width="70%">
</div>

<br>
<br>
<br>
<br>
