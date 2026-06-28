# Introducción.

>"Simularemos la infraestructura de dominio de una empresa mediante el despliegue de dos máquinas virtuales en VirtualBox: un servidor Windows Server para la administración centralizada de la red y un cliente Windows 10 Pro que actuará como la nueva estación de trabajo a integrar en el dominio."

>Para lograr nuestro objetivo, necesitaremos 3 elementos: 

- Windows Server.
- Windows 10 Pro.
- VirtualBox.

## Marco Conceptual.

>Reproduciremos en un entorno virtualizado(virtualbox), la infraestuctura de dominio que utiliza una organización. Para esto levantaremos 2 maquinas virtuales en v,irtualbox.

- Un servidor (Windows Server), que centralizará la administracion de la red.
- Un cliente (Windows 10 Pro), que representará una estacion de trabajo de un usuario que se incorpora al dominio.

### Conceptos Fundamentales: 

- **Servidor:** Equipo que provee servicios a otros (cuentas de usuario, permisos, servicios de red).
- **Dominio:** Repositorio central de identidades (usuarios y equipos).
- **Active directory:** Servicio que administra el dominio y almacena sus objetos.
- **DNS:** Servicio de resolucion de nombres; traduce nombres (**SRV-DC01**) a direcciones IP (**192.168.10.10**).
- **DHCP:** Servicio que asigna direcciones IP de forma automatica a los equipos de la red.
- **GPO (politicas de grupo):** Regla de configuración que se le define en el servidor y se aplica de forma centralizada a usuarios y equipos.



## Descargar Windows Server.

<div align="center">
    <p>La descarga de Windows Server es bastante directa, asi que ingresamos al Link que esta bajo la imagen y buscamos la archivo .iso con el idioma que elijamos, en este caso es en español. Una vez hecho click en la seccion "edicion de 64 bit", comenzara la descarga.</p> 
    <img src="./img_huegeo/img_inicio/descarga_server.png" alt="windows_server" width="70%">
</div>

- Link Windows Server: [Windows Server](https://www.microsoft.com/es-mx/evalcenter/download-windows-server-2025). 

## Descargar Windows 10.

<div align="center">
    <p>Para la descarga de Windows 10, ingresaremos al link que está bajo la imagen y haremos click en donde dice "descargar ahora".</p> 
    <img src="./img_huegeo/img_inicio/descarga_win10_1.png" alt="windows_10" width="70%">
</div>

- Link Windows 10: [Windows 10](https://www.microsoft.com/en-us/software-download/windows10). 

>Una vez apretes para descargar.

<div align="center">
    <p>Empezará la descarga de "MediaCreationTool", con esto podremos descargar Windows 10.</p> 
    <img src="./img_huegeo/img_inicio/descarga_win10_2.png" alt="mediacreation" width="70%">
</div>

>Ejecutamos la Descarga.

<div align="center">
    <p>Una vez terminada la descarga, buscamos la aplicación en la carpeta donde se guardo y ejecutamos como administrador.</p> 
    <img src="./img_huegeo/img_inicio/descarga_win10_3.png" alt="ejecutar" width="70%">
</div>

>Seguimos los pasos.

<div align="center">
    <p>Una vez dentro, seguimos los pasos que se muestran en las siguientes imagenes. Aceptar los terminos y condiciones, elegimos lo que queremos hacer, seleccionamos el idioma y la arquitectura de Windows y por último marcamos que queremos una iso de windows 10.</p> 
    <img src="./img_huegeo/img_inicio/descarga_win10_4.png" alt="terminos" width="70%">
    <img src="./img_huegeo/img_inicio/descarga_win10_5.png" alt="creacion" width="70%">
    <img src="./img_huegeo/img_inicio/descarga_win10_6.png" alt="arquitectura" width="70%">
    <img src="./img_huegeo/img_inicio/descarga_win10_7.png" alt="iso" width="70%">
</div>

>Comienza la descarga de Windows 10.

<div align="center">
    <p>Finalmente comenzara la descarga de Windows 10, solo falta decidir donde guardaras la iso.</p> 
    <img src="./img_huegeo/img_inicio/descarga_win10_8.png" alt="listo" width="70%">
</div>

## Descargar Virtualbox.

<div align="center">
    <p>Y por último pero muy importe, descargarmos virtualbox, link de descaga bajo la imagen, luego de entrar a la pagina, solo falta elegir la plataforma en la cual lo usarás, en este caso Windows.</p> 
    <img src="./img_huegeo/img_inicio/virtualbox_1.png" alt="virtualbox" width="70%">
</div>

- Link Virtualbox: [Virtualbox](https://www.virtualbox.org/wiki/Downloads). 

<div align="center">
    <p>Al ingresar en la instalacion de virtualbox solo hay que mantener todo lo que viene por defecto, una pequeña ayuda es dejar todo tal cual se muestra en las imagenes.</p> 
    <img src="./img_huegeo/img_inicio/virtualbox_2.png" alt="welcome" width="70%">
    <img src="./img_huegeo/img_inicio/virtualbox_3.png" alt="acepto" width="70%">
    <img src="./img_huegeo/img_inicio/virtualbox_4.png" alt="next" width="70%">
    <img src="./img_huegeo/img_inicio/virtualbox_5.png" alt="next2" width="70%">
    <img src="./img_huegeo/img_inicio/virtualbox_6.png" alt="next3" width="70%">
    <img src="./img_huegeo/img_inicio/virtualbox_7.png" alt="instalar" width="70%">
</div>

<!-- - [x] Tarea completada
- [ ] Tarea pendiente

*texto de tipo cursivo* o **texto en negritas**

| columna 1 | columna 2 | columna 3 |
| :--- | :---: | ---: |
| geovanni | quinteros | huerta |

<div align="center">
    <p>.</p> 
    <img src="./img_huegeo/" alt="" width="70%">
</div> -->