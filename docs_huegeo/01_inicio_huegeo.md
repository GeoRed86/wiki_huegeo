# Introducción

>Simularemos la infraestructura de dominio de una empresa mediante el despliegue de dos máquinas virtuales en VirtualBox: un servidor Windows Server para la administración centralizada de la red y un cliente Windows 10 Pro que actuará como la nueva estación de trabajo a integrar en el dominio.

>Para lograr nuestro objetivo, necesitaremos 3 elementos:

- Windows Server.
- Windows 10 Pro.
- VirtualBox.

## Marco conceptual

>Reproduciremos en un entorno virtualizado (VirtualBox) la infraestructura de dominio que utiliza una organización. Para ello, levantaremos 2 máquinas virtuales en VirtualBox.

- Un servidor (Windows Server), que centralizará la administración de la red.
- Un cliente (Windows 10 Pro), que representará una estación de trabajo de un usuario que se incorpora al dominio.

### Conceptos fundamentales

- **Servidor:** equipo que provee servicios a otros (cuentas de usuario, permisos, servicios de red).
- **Dominio:** repositorio central de identidades (usuarios y equipos).
- **Active Directory:** servicio que administra el dominio y almacena sus objetos.
- **DNS:** servicio de resolución de nombres; traduce nombres (**SRV-DC01**) a direcciones IP (**192.168.10.10**).
- **DHCP:** servicio que asigna direcciones IP de forma automática a los equipos de la red.
- **GPO (políticas de grupo):** regla de configuración que se define en el servidor y se aplica de forma centralizada a usuarios y equipos.

## Descargar Windows Server

<div align="center">
    <p>La descarga de Windows Server es bastante directa, así que ingresamos al enlace que está bajo la imagen y buscamos el archivo .iso con el idioma que elijamos, en este caso en español. Una vez hecho clic en la sección «Edición de 64 bits», comenzará la descarga.</p>
    <img src="./img_huegeo/img_inicio/descarga_server.png" alt="windows_server" width="70%">
</div>

- Enlace Windows Server: [Windows Server](https://www.microsoft.com/es-mx/evalcenter/download-windows-server-2025).

## Descargar Windows 10

<div align="center">
    <p>Para la descarga de Windows 10, ingresaremos al enlace que está bajo la imagen y haremos clic en donde dice «Descargar ahora».</p>
    <img src="./img_huegeo/img_inicio/descarga_win10_1.png" alt="windows_10" width="70%">
</div>

- Enlace Windows 10: [Windows 10](https://www.microsoft.com/en-us/software-download/windows10).

>Una vez que pulses para descargar.

<div align="center">
    <p>Empezará la descarga de «MediaCreationTool», con esto podremos descargar Windows 10.</p>
    <img src="./img_huegeo/img_inicio/descarga_win10_2.png" alt="mediacreation" width="70%">
</div>

>Ejecutamos la descarga.

<div align="center">
    <p>Una vez terminada la descarga, buscamos la aplicación en la carpeta donde se guardó y la ejecutamos como administrador.</p>
    <img src="./img_huegeo/img_inicio/descarga_win10_3.png" alt="ejecutar" width="70%">
</div>

>Seguimos los pasos.

<div align="center">
    <p>Una vez dentro, seguimos los pasos que se muestran en las siguientes imágenes. Aceptamos los términos y condiciones, elegimos lo que queremos hacer, seleccionamos el idioma y la arquitectura de Windows y, por último, marcamos que queremos una ISO de Windows 10.</p>
    <img src="./img_huegeo/img_inicio/descarga_win10_4.png" alt="terminos" width="70%">
    <img src="./img_huegeo/img_inicio/descarga_win10_5.png" alt="creacion" width="70%">
    <img src="./img_huegeo/img_inicio/descarga_win10_6.png" alt="arquitectura" width="70%">
    <img src="./img_huegeo/img_inicio/descarga_win10_7.png" alt="iso" width="70%">
</div>

>Comienza la descarga de Windows 10.

<div align="center">
    <p>Finalmente comenzará la descarga de Windows 10; solo falta decidir dónde guardarás la ISO.</p>
    <img src="./img_huegeo/img_inicio/descarga_win10_8.png" alt="listo" width="70%">
</div>

## Descargar VirtualBox

<div align="center">
    <p>Y por último, pero muy importante, descargaremos VirtualBox. El enlace de descarga está bajo la imagen; luego de entrar en la página, solo falta elegir la plataforma en la cual lo usarás, en este caso Windows.</p>
    <img src="./img_huegeo/img_inicio/virtualbox_1.png" alt="virtualbox" width="70%">
</div>

- Enlace VirtualBox: [VirtualBox](https://www.virtualbox.org/wiki/Downloads).

<div align="center">
    <p>Al ingresar a la instalación de VirtualBox, solo hay que mantener todo lo que viene por defecto. Una pequeña ayuda es dejar todo tal cual se muestra en las imágenes.</p>
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