# GPO (Políticas de grupo)

>Acá configuramos las reglas que definimos en el servidor y que se aplicarán de forma centralizada en los equipos de los usuarios. La idea de centralizar es gestionar el resto de equipos desde un único punto en lugar de hacerlo equipo por equipo.

## GPO

>En esta sección, deshabilitaremos la posibilidad de que algún usuario pueda cambiar los fondos de pantalla o hacer algún otro tipo de cambio en la configuración.

<div align="center">
    <p>Entramos a Administración de directivas de grupo.</p>
    <img src="./img_huegeo/img_gpo/gpo_01.png" alt="gpo1" width="50%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Nos vamos a «Ventas» y hacemos clic derecho en la primera opción.</p>
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
    <p>Hacemos clic derecho en el GPO recién agregado y seguimos la ruta mostrada en la imagen.</p>
    <img src="./img_huegeo/img_gpo/gpo_04.png" alt="gpo4" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Habilitamos, aplicamos y aceptamos.</p>
    <img src="./img_huegeo/img_gpo/gpo_05.png" alt="gpo5" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Para ver si lo que acabamos de hacer tiene algún resultado, entramos en la máquina de cliente, abrimos una consola y escribimos el siguiente comando: <code>gpupdate /force</code>. Con esto forzamos a la máquina a actualizar y cualquier cambio hecho se verá reflejado.</p>
    <img src="./img_huegeo/img_gpo/gpo_06.png" alt="gpo6" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Intentamos acceder al panel de control o alguna configuración de pantalla, y nos arroja este mensaje o simplemente no se abre la aplicación. ¡Éxito! Hemos bloqueado al usuario para realizar cambios.</p>
    <img src="./img_huegeo/img_gpo/gpo_07.png" alt="gpo7" width="70%">
</div>

<br>
<br>
<br>
<br>

## Desafío

> Pondremos como fondo de pantalla una imagen institucional, logrando esto de forma centralizada, desde nuestro servidor.

<div align="center">
    <p>Crearemos la carpeta donde se guardará.</p>
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
    <p>Esta será la imagen a establecer como fondo de pantalla.</p>
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
    <p>Hacemos clic derecho en la carpeta creada, vamos a «Propiedades», luego a «Compartir» y seguimos la ruta que se muestra en la imagen; finalizamos aceptando.</p>
    <img src="./img_huegeo/img_gpo/desafio_04.png" alt="desafio4" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Copiamos la ruta de donde está la imagen que usaremos.</p>
    <img src="./img_huegeo/img_gpo/desafio_05.png" alt="desafio5" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Nos dirigimos a Administración de directivas de grupo.</p>
    <img src="./img_huegeo/img_gpo/desafio_06.png" alt="desafio6" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Creamos un nuevo GPO.</p>
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
    <p>Hacemos clic derecho para editar el GPO recién creado.</p>
    <img src="./img_huegeo/img_gpo/desafio_09.png" alt="desafio9" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Seguimos la ruta señalada en la imagen.</p>
    <img src="./img_huegeo/img_gpo/desafio_10.png" alt="desafio10" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Habilitamos, pegamos la ruta seguida por <code>\nombre_fondo.jpg</code> y aplicamos; listo.</p>
    <img src="./img_huegeo/img_gpo/desafio_11.png" alt="desafio11" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Verificamos en la máquina de cliente si se generó el cambio.</p>
    <img src="./img_huegeo/img_gpo/desafio_12.png" alt="desafio12" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>¡Maravilloso! Hemos centralizado el cambio desde nuestra máquina servidor.</p>
    <img src="./img_huegeo/img_gpo/desafio_13.png" alt="desafio13" width="70%">
</div>

<br>
<br>
<br>
<br>