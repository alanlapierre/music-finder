# MUSIC FINDER

El ejemplo es una app desarrollada en **Vue JS 2.X**. El objetivo fue crear una **Single Page App** para realizar búsqueda de canciones y poder reproducir un fragmento de muestra, además se puede ver el detalle con toda la información disponible.

### Dentro de las herramientas que se usaron para el desarrollo se encuentran las siguientes:

* **Bulma CSS** : Se utiliza tanto por el **sistema de grillas basado en Flex-box**, como para hacer uso de los distintos componentes que este framework nos entrega. Puede consultarse más [aquí](https://bulma.io).
* **API Spotify** : Se utiliza para conseguir el listado de canciones a mostrar. Pueden verse más detalles sobre el **API para desarrolladores** [aquí](https://developer.spotify.com/).
* **PUG**: Se utiliza para simplificar la escritura del HTML. Puede verse más información sobre esto [aquí](https://pugjs.org/api/getting-started.html).
* **Vuex**: Se utiliza para gestionar el estado de toda la app a nivel global, permitiendo interacciones entre componentes que no necesariamente tienen relación padre-hijo. Puede verse más información [aquí](https://vuex.vuejs.org).
* **Vue Router**: Se utiliza para gestionar el ruteo de componentes del lado del cliente. Es el "ruteador" oficial del equipo Vue JS. Puede verse más información [aquí](https://router.vuejs.org).
* **Vue i18n**: Se utiliza para realizar la internacionalización de la app y poder cambiar el idioma de la misma según nuestra preferencia. Puede verse más información [aquí](https://www.npmjs.com/package/vue-i18n).


### Para probar el código:

* Clonar el repo.
* Tener instalado **Node JS**.
* Ejecutar **npm install** en el raíz del proyecto.
* Ejecutar **npm run dev** para lanzar la app en el navegador.

[ENTRA AQUÍ PARA VER LA APP EN FUNCIONAMIENTO](https://alanlapierre.github.io/music-finder/)

### Captura de pantallas:

#### Página de Búsqueda:

Aqui podemos hacer nuestra búsqueda y listar las canciones tanto como tarjetas o en formato lista. 

![MusicFinder homepage](https://github.com/alanlapierre/music-finder/tree/master/src/assets/readme/readme1.png)


Listado de formato Tarjetas.

![MusicFinder homepage](https://github.com/alanlapierre/music-finder/tree/master/src/assets/readme/readme2.png)

Listado en formato de Lista.

![MusicFinder homepage](https://github.com/alanlapierre/music-finder/tree/master/src/assets/readme/readme2.1.png)


#### Reproductor:

El reproductor se muestra en forma de modal, por lo tanto, es necesario cerrarlo para volver al listado. También puede invocarse desde la página de detalle de la canción.  

![MusicFinder player](https://github.com/alanlapierre/music-finder/tree/master/src/assets/readme/readme3.png)


#### Detalle:

Puede reproducirse la canción o volver a la búsqueda previa. Conservando en este último caso el listado completo (gracias a Vuex).

![MusicFinder detail](https://github.com/alanlapierre/music-finder/tree/master/src/assets/readme/readme4.png)


Licencia MIT
----
**Para uso totalmente libre**.


