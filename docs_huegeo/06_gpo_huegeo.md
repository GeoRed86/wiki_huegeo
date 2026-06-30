# GPO (Politicas De Grupo).

>Aca configuramos las reglas que defininmos en en el servidor y que se aplicaran de forma centralizada en los equipos de los usuarios. La iidea de centralizar es gestionar el resto de equipos desde un unico punto en lugar que equipo por equipo.

- ## GPO.

>En esta seccion, deshabilitaremos la posibilidad de que allgun usuario pueda cambiar los fondos de pantalla o hacer algun otro tipo de cambio en la configuracion.

<div align="center">
    <p>Entramos a Administracion de directivas de grupo.</p> 
    <img src="./img_huegeo/img_gpo/gpo_01.png" alt="gpo1" width="50%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Nos vamos a Ventas y click derecho, primera opcion.</p> 
    <img src="./img_huegeo/img_gpo/gpo_02.png" alt="gpo2" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Ingresamos un nombre.</p> 
    <img src="./img_huegeo/img_gpo/gpo_03.png" alt="gpo3" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Hace click derecho en el GPO recien agregado y seguimos la ruta mostrada en la imagen.</p> 
    <img src="./img_huegeo/img_gpo/gpo_04.png" alt="gpo4" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Habilitamos. aplicamos y aceptamos.</p> 
    <img src="./img_huegeo/img_gpo/gpo_05.png" alt="gpo5" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Para ver si lo que acabamos de hacer tiene algun resultado, entramos en la maquina de cliente, abrimos una consola y escribimos el siguiente comando: gpupdate /force... con esto forzamos a la maquina a actualizar y cualquier cambio hecho se vera reflejada.</p> 
    <img src="./img_huegeo/img_gpo/gpo_06.png" alt="gpo6" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Intentamos acceder al panel de control o alguna configuracion de pantalla, y nos arroja este mensaje o simplemente no se abre la aplicacion... Exito !! hemos bloqueado al usuario para realizar cambios.</p> 
    <img src="./img_huegeo/img_gpo/gpo_07.png" alt="gpo7" width="70%">
</div>

<br>
<br>
<br>
<br>

- ## Desafio.

>Pondremos como fondo de pantalla una imagen institucional, esto logrado de forma centralizada (desde nuestro servidor). 

<div align="center">
    <p>Crearemos la carpeta donde se guardara .</p> 
    <img src="./img_huegeo/img_gpo/desafio_01.png" alt="desafio1" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Verificamos la ruta y encontramos la carpeta.</p> 
    <img src="./img_huegeo/img_gpo/desafio_02.png" alt="desafio2" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Esta sera la imagen a establecer como fondo de pantalla.</p> 
    <img src="./img_huegeo/img_gpo/desafio_fondo.png" alt="fondo" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Copiamos la imagen en la carpeta que creamos.</p> 
    <img src="./img_huegeo/img_gpo/desafio_03.png" alt="desafio3" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Click derecho en la carpeta creada, vamos a propiedades, luego compratir y seguimos la ruta que se muestra en la imagen, finalizamos aceptando.</p> 
    <img src="./img_huegeo/img_gpo/desafio_04.png" alt="desafio4" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Copiamos la ruta de donde esta la imagen que usaremos.</p> 
    <img src="./img_huegeo/img_gpo/desafio_05.png" alt="desafio5" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Nos dirigimos a Administracion de directivas de grupo.</p> 
    <img src="./img_huegeo/img_gpo/desafio_06.png" alt="desafio6" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Creamos un Nuevo GPO.</p> 
    <img src="./img_huegeo/img_gpo/desafio_07.png" alt="desafio7" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Le damos un nombre descriptivo.</p> 
    <img src="./img_huegeo/img_gpo/desafio_08.png" alt="desafio8" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Click derecho para editar el GPO reciencreado.</p> 
    <img src="./img_huegeo/img_gpo/desafio_09.png" alt="desafio9" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Seguimos la ruta señalada en la iamgen.</p> 
    <img src="./img_huegeo/img_gpo/desafio_10.png" alt="desafio10" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Habilitamos, pegamos la ruta seguida por \nombre_fondo.jpg y aplicamos y listo.</p> 
    <img src="./img_huegeo/img_gpo/desafio_11.png" alt="desafio11" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Verificamos en la maquina de cliente si se genero el cambio.</p> 
    <img src="./img_huegeo/img_gpo/desafio_12.png" alt="desafio12" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Maravilloso!!! hemos centralizado el cambio desde nustra maquina servidor.</p> 
    <img src="./img_huegeo/img_gpo/desafio_13.png" alt="desafio13" width="70%">
</div>

<br>
<br>
<br>
<br>