# Active Directory.

>Su función principal es facilitar la administración de los recursos de una red informática empresarial. Sirve específicamente para:

- **Centralizar la Autenticación (Inicio de Sesión único):** Los usuarios no se loguean localmente en la computadora física; se loguean en la red de la empresa. Con una sola cuenta y contraseña, el empleado puede acceder a su computadora, a las carpetas compartidas de la red, a las impresoras y a los correos, según sus permisos.

- **Control de Accesos y Seguridad:** Permite al administrador definir de manera estricta quién tiene derecho a ver o modificar qué cosas dentro de la organización.

- **Gestión de Directivas (GPO):** Permite aplicar reglas masivas a miles de computadoras a la vez desde el servidor. Por ejemplo: bloquear el uso de memorias USB, forzar un fondo de pantalla corporativo, exigir contraseñas seguras que cambien cada 30 días, o instalar un software automáticamente en todos los equipos.

<div align="center">
    <p>En "Administrador de servidor" nos dirigimos a "Administrar" y luego a "Agregar roles y caracteristicas".</p> 
    <img src="./img_huegeo/img_directory/active_directory_01.png" alt="directory1" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Una vez dentro, le damos a siguiente hasta llegar a "Roles de servidor".</p> 
    <img src="./img_huegeo/img_directory/active_directory_02.png" alt="directory2" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Acá marcamos "Servivios de dominio de Active Directory" y le damos a siguiente.</p> 
    <img src="./img_huegeo/img_directory/active_directory_03.png" alt="directory3" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Pasado esto, dar a siguiente hasta que comience la instalacion.</p> 
    <img src="./img_huegeo/img_directory/active_directory_04.png" alt="directory4" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Una vez completada la barra de instalacion, aparecera una alerta en el banderin de la parte superior, desplegamos y entyramos a "Promover este servidor a controlador de dominio".</p> 
    <img src="./img_huegeo/img_directory/active_directory_05.png" alt="directory5" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Luego marcamos "Agregar nuevo bosque" y anotamos "Nombre de dominio raiz".</p> 
    <img src="./img_huegeo/img_directory/active_directory_06.png" alt="directory6" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>En "opciones de controlador" dejamos todo tal cual la imagen y finalmente ingresamos nuestra contraseña de Administrador.</p> 
    <img src="./img_huegeo/img_directory/active_directory_07.png" alt="directory7" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Le damos siguiente hasta llegar a "Opciones adicionales" y agragamos el nombre de la netBIOs de nuestra preferencia.</p> 
    <img src="./img_huegeo/img_directory/active_directory_08.png" alt="directory8" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Una vez terminado reiniciamos la maquina, y cuando lleguemos al momento de ingresar nuestra contraseña, veremos el resultado al crear el dominio.</p> 
    <img src="./img_huegeo/img_directory/active_directory_09.png" alt="directory9" width="70%">
</div>

<br>
<br>
<br>
<br>