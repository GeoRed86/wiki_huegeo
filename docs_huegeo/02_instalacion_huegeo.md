# Instalación de Windows Server y Windows 10 Pro

### Requisitos básicos

- **Equipo de trabajo:** en lo posible, tener un equipo con al menos 8 GB de RAM y como mínimo unos 60 GB de disco duro libres.
- **Descargas:** VirtualBox, Windows Server y Windows 10 (ya las tenemos).

>Haremos un breve repaso de cómo montar las imágenes ISO de Windows Server y Windows 10 Pro en VirtualBox, los parámetros que usaremos para cada una de ellas y, finalmente, dejarlas listas para completar nuestro marco conceptual.

## Montar imágenes ISO en VirtualBox

<div align="center">
    <p>Buscamos VirtualBox en el inicio de Windows y lo ejecutamos.</p>
    <img src="./img_huegeo/img_install/install_01.png" alt="inicio" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Lo que se encuentra a continuación aplica tanto para Windows Server como para Windows 10. Le asignaremos un nombre a nuestras virtualizaciones; en este caso lo haré con Windows 10 y lo nombraré «PC01», ya que este será nuestro cliente. Para el caso del servidor (Windows Server) le asignaremos el nombre de «SRV-DC01». Una vez hecho esto, buscamos la imagen ISO y la seleccionamos como se muestra en la imagen.</p>
    <img src="./img_huegeo/img_install/install_02.png" alt="montar" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Ahora nos dirigimos a la pestaña de «Especificaciones del hardware virtual» y definimos la cantidad de memoria RAM, que en este caso le asignaré 4 GB aproximadamente, y con 4 núcleos (pueden asignarle hasta 2 núcleos y aun así funciona).</p>
    <img src="./img_huegeo/img_install/install_03.png" alt="ram_nucleos" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Ahora nos dirigimos a la pestaña donde dice «Especificaciones del disco duro virtual» y le asignamos unos 50 GB, y finalmente apretamos «Terminar».</p>
    <img src="./img_huegeo/img_install/install_04.png" alt="disco" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Ahora vamos a hacer que ambas máquinas virtuales estén en red. ¿Cómo lo logramos? Seleccionando cualquiera de las imágenes montadas y después haciendo clic en la ruedita amarilla. Posteriormente nos dirigimos a la pestaña que dice «Red», marcamos arriba en «Experto» y cambiamos en «Conectar a» por «Red interna». Abajo le asignamos un nombre, «redlab», y así finalmente apretamos «Aceptar».</p>
    <img src="./img_huegeo/img_install/install_05.png" alt="redlab" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Aquí una comparativa de ambas máquinas virtuales; tienen los mismos parámetros.</p>
    <img src="./img_huegeo/img_install/install_06.png" alt="comparar" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Y ya para finalizar, para ejecutar la emulación, solo debes apretar la flecha verde que dice «Inicio».</p>
    <img src="./img_huegeo/img_install/install_07.png" alt="iniciar" width="70%">
</div>

<br>
<br>

## Instalación Windows Server

<div align="center">
    <p>Después del paso anterior se ejecutará el sistema de instalación; lo primero es elegir el idioma del sistema y tu zona horaria.</p>
    <img src="./img_huegeo/img_install/install_08.png" alt="comienza" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Seleccionamos el idioma del teclado, en este caso español.</p>
    <img src="./img_huegeo/img_install/install_09.png" alt="idioma" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Seleccionamos el tipo de instalación, que en este caso es Windows Server (se sugiere marcar la línea de abajo).</p>
    <img src="./img_huegeo/img_install/install_10.png" alt="server" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Ya en este punto es importante seleccionar el adecuado, que en este caso será «Windows Server Standard Evaluation».</p>
    <img src="./img_huegeo/img_install/install_11.png" alt="tipo_de_server" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Ahora seleccionamos el disco donde vamos a instalar nuestra virtualización (todo esto es un lugar aislado de tu PC real, no afectará de ninguna forma).</p>
    <img src="./img_huegeo/img_install/install_12.png" alt="donde_instalar" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Ya estamos listos; solo queda presionar donde dice «Instalar» y esperar a que la instalación termine.</p>
    <img src="./img_huegeo/img_install/install_13.png" alt="instalar" width="70%">
</div>

<br>
<br>
<br>
<br>

### Configurar una IP fija

>El equipo se reiniciará varias veces; solo deja que termine la instalación.

<div align="center">
    <p>En este punto pedirá ingresar una contraseña; dicha contraseña consta de al menos una letra mayúscula, al menos un número y al menos un carácter.</p>
    <img src="./img_huegeo/img_install/install_.png" alt="contraseña" width="70%">
</div>

> [!WARNING]
> **NO OLVIDES LA CONTRASEÑA QUE INGRESASTE, YA QUE ESTA NO SE PUEDE RECUPERAR.**

<br>
<br>
<br>
<br>

<div align="center">
    <p>Como pantalla de inicio nos pedirá ingresar presionando Ctrl + Alt + Del; esto podría afectar a nuestro computador y arruinar todo, así que por este motivo nos dirigimos a la parte superior de la pantalla y seguimos la ruta que se muestra en la imagen.</p>
    <img src="./img_huegeo/img_install/install_18.png" alt="Instalar_win" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>A continuación ingresamos la contraseña que definimos anteriormente.</p>
    <img src="./img_huegeo/img_install/install__.png" alt="Ingresar" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Una vez iniciado Windows, se ejecuta automáticamente el «Administrador del servidor». En el costado izquierdo entramos en «Servidor local», luego en «Ethernet».</p>
    <img src="./img_huegeo/img_install/cambio_ip_fija.png" alt="cambio" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Una vez dentro, clic derecho y «Propiedades».</p>
    <img src="./img_huegeo/img_install/cambio_ip_fija_2.png" alt="ethernet" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Protocolo de Internet versión 4 y luego marcamos «Usar la siguiente IP».</p>
    <img src="./img_huegeo/img_install/cambio_ip_fija_3.png" alt="ethernet1" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Llenamos los parámetros como se muestra en la imagen y finalmente aceptamos; ya con esto dejamos fija la IP del servidor.</p>
    <img src="./img_huegeo/img_install/cambio_ip_fija_4.png" alt="ethernet2" width="50%">
</div>

<br>
<br>
<br>
<br>

### Cambiar nombre del servidor

<div align="center">
    <p>En «Administrador de Servidor» ingresamos a «Servidor local», clic en «Nombre de equipo», se despliega una ventana, vamos a «Cambiar» y ahí finalmente ingresamos el nombre que elijamos, en este caso será «SRV-DC01».</p>
    <img src="./img_huegeo/img_install/cambio_nombre.png" alt="nombre1" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Una vez hechos los cambios, el equipo nos pedirá reiniciar y lo hacemos.</p>
    <img src="./img_huegeo/img_install/cambio_nombre2.png" alt="nombre2" width="50%">
</div>

<br>
<br>
<br>
<br>

## Instalación Windows 10 Pro

>La instalación de Windows 10 es muy similar y comparte varios pasos en los que es igual a la instalación de Windows Server.

<div align="center">
    <p>Nos da la bienvenida el sistema de instalación con 3 configuraciones inmediatamente: el idioma del sistema, el país y el idioma del teclado.</p>
    <img src="./img_huegeo/img_install/install_14.png" alt="Instalar_win" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Aquí nos mostrará las posibles distribuciones de Windows 10 que podemos instalar; en este caso, instalaremos «Windows 10 Pro».</p>
    <img src="./img_huegeo/img_install/install_15.png" alt="win_10" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Seleccionamos la instalación personalizada.</p>
    <img src="./img_huegeo/img_install/install_16.png" alt="eleccion_disco" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Elegimos el disco donde se instalará nuestra virtualización. Posterior a esto, esperamos a que la instalación termine.</p>
    <img src="./img_huegeo/img_install/install_12.png" alt="install_win" width="70%">
</div>

<br>
<br>
<br>
<br>