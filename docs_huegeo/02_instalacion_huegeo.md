# Instalacion de Windows server y Windows 10 pro.



### Requisitos Basicos:

- **Equipo de trabajo:** En lo posible tener un equipo con almenos 8GB de RAM y como minimo unos 60GB de disco duro libres.
- **Descargas:** Virtualbox, Windows Server y Windows 10 (Ya las tenemos).

>Haremos un breve repaso de como montar las imagenes.iso de Windows Server y Windows 10 pro en virtualbox, los parametros que usaremos para cada una de ellas y finalmente, dejarlas listas para completar nuestro marco conceptual.

- ## Montar Imagenes.iso en Virtualbox.

<div align="center">
    <p>Buscamos Virtualbox en el inicio de Windows y lo ejecutamos.</p> 
    <img src="./img_huegeo/img_install/install_01.png" alt="inicio" width="70%">
</div>

<br>
<br>
<br>
<br>


<div align="center">
    <p>Lo que se encuentra a continuacion, aplica tanto para Windows Server como para windows 10. Le asignaremos un nombre a nuestras virtualizaciones, en este caso lo haré con Windows 10, y lo nombrare "PC01", ya que este será nuestro cliente, para el caso del servidor(Windows server) le asignaremos el nombre de "SRV-DC01". Una vez hecho esto, buscamos la imagen.iso y la sellecionamos como se muestra en la imagen.</p> 
    <img src="./img_huegeo/img_install/install_02.png" alt="montar" width="70%">
</div>

<br>
<br>
<br>
<br>


<div align="center">
    <p>Ahora nos dirigimos a la pestaña de "especificaciones del hardware virtual" y definimos la cantidad de memoria RAM, que en este caso le asignaré 4GB aproximadamente, y con 4 nucleos (pueden asignarle hasta 2 nucles y aun asi funciona).</p> 
    <img src="./img_huegeo/img_install/install_03.png" alt="ram_nucleos" width="70%">
</div>

<br>
<br>
<br>
<br>


<div align="center">
    <p>Ahora nos dirigimos a la pestaña donde dice "especificaciones del disco duro virtual" y le asignamos unos 50GB y finalmente apretamos terminar.</p> 
    <img src="./img_huegeo/img_install/install_04.png" alt="disco" width="70%">
</div>

<br>
<br>
<br>
<br>


<div align="center">
    <p>Ahora vamos a hacer que ambas maquinas virtuales esten en red, y como lo logramos? seleccionando cualquiera de las imagenes montadas y despues hacemos click en la ruedita amarilla, posteriormente nos dirigimos a la pestaña que dice "Red", marcamos arriba en experto y cambiamos en conectar a "red interna" y abajo le asignamos un nombre "redlab" y asi finalmente apretamos en aceptar.</p> 
    <img src="./img_huegeo/img_install/install_05.png" alt="redlab" width="70%">
</div>

<br>
<br>
<br>
<br>


<div align="center">
    <p>Aca una comparativa de ambas maquinas virtuales, tienen los mismos parametros.</p> 
    <img src="./img_huegeo/img_install/install_06.png" alt="comparar" width="70%">
</div>

<br>
<br>
<br>
<br>


<div align="center">
    <p>Y ya para finalizar, para ejecutar la emulacion, solo debes apretar la flecha verde que dice inicio.</p> 
    <img src="./img_huegeo/img_install/install_07.png" alt="iniciar" width="70%">
</div>

<br>
<br>


- ## Instalacion Windows Server.

<div align="center">
    <p>Despues del paso anterior se ejecutará el sistema de instalación, lo primero es elegir el idioma del sistema de instalacion y tu sistema horario.</p> 
    <img src="./img_huegeo/img_install/install_08.png" alt="comienza" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>seleccionamos el idioma del teclado, en este caso español.</p> 
    <img src="./img_huegeo/img_install/install_09.png" alt="idioma" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Seleccionamos el tipo de instalacion, que en este caso es Windows Server (se sugiere marcar la linea de abajo).</p> 
    <img src="./img_huegeo/img_install/install_10.png" alt="server" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Ya en este punto es importante selecionar el adecuado, que en este caso será "Windows Server Standar Evaluation".</p> 
    <img src="./img_huegeo/img_install/install_11.png" alt="tipo_de_server" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Ahora selecionamos en disco donde vamos a instalar nuestra virtualizacion (todo esto es un lugar aislado de tu PC real, no afectara de nunguna forma).</p> 
    <img src="./img_huegeo/img_install/install_12.png" alt="donde_instalar" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Ya estamos listos, solo queda presionar donde dice Instalar y esperar que la instalacion termine.</p> 
    <img src="./img_huegeo/img_install/install_13.png" alt="instalar" width="70%">
</div>

<br>
<br>
<br>
<br>

- ### Configurar Una IP Fija.

> El equipo se reiniciara varias veces, solo deja que termine la instalacion.

<div align="center">
    <p>En este punto pedira ingresar una contraseña, dicha contraseña consta de al menos una letra mayuscula, al menos un numero y al menos un caracter.</p> 
    <img src="./img_huegeo/img_install/install_.png" alt="contraseña" width="70%">
</div>

> [!WARNING]
> **NO OLVIDES LA CONTRASEÑA QUE INGRESASTE, YA QUE ESTA NO SE PUEDE RECUPERAR.**

<br>
<br>
<br>
<br>

<div align="center">
    <p>Como pantalla de inicio nos pedira ingresar presionando Ctrl+Alt+Del, esto podria afectar a nuestro computador y arruinar todo, asi que por este motivo nos dirigimos a la parte superior de la pantalla y seguimos la ruta que se  muestra en la imagen.</p> 
    <img src="./img_huegeo/img_install/install_18.png" alt="Instalar_win" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Acontinuacion ingresamos la contraseña que definimos anteriormente.</p> 
    <img src="./img_huegeo/img_install/install__.png" alt="Ingresar" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Una vez iniciado Windows se ejecuta automaticamente el "Administrador del servidor", al costado izquierdo entramos en "servidor local", luego en "ethernet".</p> 
    <img src="./img_huegeo/img_install/cambio_ip_fija.png" alt="cambio" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Una vez dentro, click derecho y propiedades.</p> 
    <img src="./img_huegeo/img_install/cambio_ip_fija_2.png" alt="ethernet" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Protoloco de internet version 4 y luego marcamos "usar la siguiente IP".</p> 
    <img src="./img_huegeo/img_install/cambio_ip_fija_3.png" alt="ethernet1" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Llenamos los parametros como se muestra en la imagen y finalmente aceptamos, ya con esto dejamos fijo la IP del servidor.</p> 
    <img src="./img_huegeo/img_install/cambio_ip_fija_4.png" alt="ethernet2" width="50%">
</div>

<br>
<br>
<br>
<br>

- ### Cambiar Nombre Del Servidor.

<div align="center">
    <p>En "Administrador de Servidor" ingresamos a "servidor local", click en "nombre de Equipo", se despliega una ventana, vamos a "cambiar" y ahi finalmente ingresamos el nombre que elijamos, en este caso será "SRV-DC01".</p> 
    <img src="./img_huegeo/img_install/cambio_nombre.png" alt="nombre1" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Una vez hechos los cambios, el equipo nos pedira Reiniciar el equipo y lo hacemos.</p> 
    <img src="./img_huegeo/img_install/cambio_nombre2.png" alt="nombre2" width="50%">
</div>

<br>
<br>
<br>
<br>


- ## Instalacion Windows 10 Pro.

>La instalacion de Windows 10 es muy similar y comparte varios pasos en donde es igual a la instalacoion de Windows Server.

<div align="center">
    <p>Nos da la bienvenida el sistema de instalacion con 3 configuraciones inmediatamente, el idioma de del sistema, el pais y el idioma del teclado.</p> 
    <img src="./img_huegeo/img_install/install_14.png" alt="Instalar_win" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Aca nos mostrará las posibles distribuciones de Windows 10 que podemos instalar, en este caso, instalaremos "Windows 10 Pro".</p> 
    <img src="./img_huegeo/img_install/install_15.png" alt="win_10" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Selecionamos la instalacion personalizada.</p> 
    <img src="./img_huegeo/img_install/install_16.png" alt="eleccion_disco" width="70%">
</div>

<br>
<br>
<br>
<br>

<div align="center">
    <p>Elegimos el disco donde se instalará nuestra virtualización. Posterior a esto esperar a que la instalacion termine.</p> 
    <img src="./img_huegeo/img_install/install_12.png" alt="install_win" width="70%">
</div>

<br>
<br>
<br>
<br>