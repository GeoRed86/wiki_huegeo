# Active Directory

>Su función principal es facilitar la administración de los recursos de una red informática empresarial. Sirve específicamente para:

- **Centralizar la autenticación (inicio de sesión único):** los usuarios no se autentican localmente en la computadora física; se autentican en la red de la empresa. Con una sola cuenta y contraseña, el empleado puede acceder a su computadora, a las carpetas compartidas de la red, a las impresoras y a los correos, según sus permisos.

- **Control de accesos y seguridad:** permite al administrador definir de manera estricta quién tiene derecho a ver o modificar qué cosas dentro de la organización.

- **Gestión de directivas (GPO):** permite aplicar reglas masivas a miles de computadoras a la vez desde el servidor. Por ejemplo: bloquear el uso de memorias USB, forzar un fondo de pantalla corporativo, exigir contraseñas seguras que cambien cada 30 días o instalar software automáticamente en todos los equipos.

<div align="center">
    <p>En «Administrador de servidor» nos dirigimos a «Administrar» y luego a «Agregar roles y características».</p>
    <img src="./img_huegeo/img_directory/active_directory_01.png" alt="directory1" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Una vez dentro, le damos a «Siguiente» hasta llegar a «Roles de servidor».</p>
    <img src="./img_huegeo/img_directory/active_directory_02.png" alt="directory2" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Aquí marcamos «Servicios de dominio de Active Directory» y le damos a «Siguiente».</p>
    <img src="./img_huegeo/img_directory/active_directory_03.png" alt="directory3" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Pasado esto, damos a «Siguiente» hasta que comience la instalación.</p>
    <img src="./img_huegeo/img_directory/active_directory_04.png" alt="directory4" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Una vez completada la barra de instalación, aparecerá una alerta en el banderín de la parte superior; la desplegamos y entramos a «Promover este servidor a controlador de dominio».</p>
    <img src="./img_huegeo/img_directory/active_directory_05.png" alt="directory5" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Luego marcamos «Agregar nuevo bosque» y anotamos «Nombre de dominio raíz».</p>
    <img src="./img_huegeo/img_directory/active_directory_06.png" alt="directory6" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>En «Opciones de controlador» dejamos todo tal cual la imagen y finalmente ingresamos nuestra contraseña de administrador.</p>
    <img src="./img_huegeo/img_directory/active_directory_07.png" alt="directory7" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Le damos a «Siguiente» hasta llegar a «Opciones adicionales» y agregamos el nombre de la NetBIOS de nuestra preferencia.</p>
    <img src="./img_huegeo/img_directory/active_directory_08.png" alt="directory8" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Una vez terminado, reiniciamos la máquina, y cuando lleguemos al momento de ingresar nuestra contraseña, veremos el resultado al crear el dominio.</p>
    <img src="./img_huegeo/img_directory/active_directory_09.png" alt="directory9" width="70%">
</div>

<br>
<br>
<br>
<br>