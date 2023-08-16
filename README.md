# Poked-X - Angular Application 🕹️

## Descripción
Esta aplicación en Angular recrea la experiencia de una Pokedex, proporcionando información y detalles sobre una amplia variedad de Pokémon utilizando los datos suministrados por la API de PokeApi. La aplicación se basa en varios componentes esenciales y un servicio que maneja las solicitudes HTTP a la API. Aprovechando la programación reactiva de RxJS, la Poked-X ofrece una interacción fluida y eficiente con flujos de datos asincrónicos.

## Características Destacadas

### 1. Programación Reactiva con RxJS
La Poked-X utiliza la programación reactiva y la biblioteca RxJS para gestionar eficazmente flujos de datos asincrónicos. Los observables y los operadores de RxJS se emplean para manejar las interacciones con la API, procesar respuestas y manipular datos. Esto garantiza una exploración de Pokémon y detalles de usuario fluida y altamente reactiva.

### 2. PokeApiService para la Interacción con la API
El servicio PokeApiService es el núcleo de la aplicación, estableciendo la comunicación con la API de PokeApi a través del HttpClient de Angular. Proporciona métodos para obtener listas de Pokémon por página, detalles específicos por ID y descripciones.

### 3. Componentes para una Estructura Modular
La Poked-X se compone de una estructura de componentes diseñada para modularizar el código y mejorar la legibilidad. Aunque un componente particular se reutiliza en diversas instancias para optimizar la experiencia del usuario (PokemonCardComponent), otros componentes se han creado individualmente para cumplir funciones específicas. Este enfoque promueve un código claro y organizado, facilitando la comprensión y el mantenimiento del proyecto.

### 4. Diseño Responsivo
La aplicación se adapta a una variedad de tamaños de pantalla, brindando una experiencia de usuario óptima en dispositivos móviles, tabletas y computadoras de escritorio. La interfaz se ajusta dinámicamente según la resolución de pantalla, mejorando la usabilidad en diferentes dispositivos.

## Estructura del Código

### Service
El servicio PokeApiService gestiona las solicitudes HTTP a la API de PokeApi utilizando el HttpClient de Angular. Aplica la programación reactiva mediante observables y operadores RxJS para transformar y manipular datos según sea necesario.

### Home Component
El componente Home es el núcleo de la aplicación, permitiendo a los usuarios explorar y buscar Pokémon. Carga y presenta una lista de Pokémon según la página actual, además de facilitar la carga continua de más Pokémon al desplazarse hacia abajo. Al hacer clic en un Pokémon, se muestra una imagen animada del Pokémon seleccionado y se cargan sus detalles, que se revelan al presionar el botón "Detalles del Pokémon".
![Home-Component](./assets/images/Git-Description/home.jpg)

### Pokemon Details Component
Este componente muestra detalles específicos del Pokémon seleccionado, incluyendo una descripción detallada. Utiliza el servicio PokeApiService para obtener la descripción del Pokémon seleccionado, brindando así una experiencia informativa para el usuario.

### Pokemon Card Component
El componente PokemonCard muestra una tarjeta que representa a un Pokémon en la lista. Proporciona imagen, nombre e ID del Pokémon, resaltando visualmente si está seleccionado. El decorador @ViewChild se utiliza para acceder al elemento de audio y reproducirlo cuando se selecciona una tarjeta.

### Pokemon Image Component
El componente PokemonImage muestra la imagen animada (gif) del Pokémon, enriqueciendo la experiencia visual e interactiva. La interacción se amplía mediante el componente Stick, permitiendo mover y rotar la imagen del Pokémon.

### Stick Component
Este componente es fundamental al brindar una experiencia interactiva y lúdica al explorar y aprender sobre los Pokémon. Facilita la visualización de la imagen frontal y trasera del Pokémon, dando la ilusión de rotación. También permite mover la imagen en los ejes X e Y, con límites de movimiento que aseguran que la imagen permanezca en la pantalla. Los emisores de eventos (EventEmitter) comunican los cambios de rotación y posición a otros componentes, permitiendo respuestas y ajustes coordinados.

### Bttns Component
Otro componente que añade funcionalidades interactivas para mejorar la experiencia del usuario. Gestionando acciones y eventos a través de botones y controles visuales, este componente presenta cuatro botones con diversas funciones: reproducir audio, navegar entre imágenes de la Poked-X y mostrar/u ocultar la descripción del Pokémon seleccionado.
