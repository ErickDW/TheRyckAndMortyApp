<h1 align="center">The Ryck And Morty App</h1>
<p align="center">
  <a href="https://angular.io/" target="blank"><img src="https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg" width="200" alt="Angular logo" /></a>
  <a href="https://rxjs.dev/" target="blank"><img src="https://cdn.worldvectorlogo.com/logos/rxjs-1.svg" width="200" alt="Rxjs logo" /></a>
</p>

<p align="center">
  Conoce un poco mas de "Rick y Morty" y aprende en el proceso, con "The Ryck And Morty App", es un proyecto de ejemplo que demuestra cómo consumir una API externa. Este proyecto te permite ver información parcial sobre cada personaje de la famosa serie y acceder a detalles adicionales al hacer clic en los elementos de forma individual.
</p>

## Arquitectura Propuesta

La arquitectura propuesta para resolver el reto es una variante de la Arquitectura Limpia (Clean Architecture) que se adapta a las características del proyecto. Está diseñada para separar las responsabilidades de manera clara y mantener un alto grado de modularidad y testabilidad. La estructura del proyecto podría verse de la siguiente manera:

```bash

TheRyckAndMortyApp/
|-- src/
|   |-- app/
|   |   |-- core/
|   |   |   |-- components/
|   |   |   |   |-- global-component-1/
|   |   |   |   |-- global-component-2/
|   |   |   |-- core/material
|   |   |-- services/
|   |   |   |-- api/
|   |   |   |   |-- endpoint-1/
|   |   |   |   |-- endpoint-2/
|   |   |   |-- rxjs/
|   |   |   |   |-- search.service.ts
|   |   |   |   |-- theme.service.ts
|   |   |-- utils/
|   |   |   |-- general-functions.ts
|   |   |   |-- mocks/
|   |   |   |   |-- mock-data-1.ts
|   |   |   |   |-- mock-data-2.ts
|   |   |   |-- interfaces/
|   |   |   |   |-- interface-1.interface.ts
|   |   |   |   |-- interface-2.interface.ts
|   |   |-- layout/
|   |   |   |-- auth/
|   |   |   |   |-- auth.component.ts
|   |   |   |   |-- auth.component.html
|   |   |   |-- features/
|   |   |   |   |-- feature-1/
|   |   |   |   |-- feature-2/
|   |-- assets/
|   |   |-- scss/
|   |   |   |-- themes/
|   |   |   |   |-- theme-1.scss
|   |   |   |   |-- theme-2.scss
|   |   |   |-- theme-config.scss
|   |   |   |-- variables.scss
|   |-- environments/
|   |   |-- environment.ts
|   |   |-- environment.prod.ts
|-- ...
|-- README.md
|-- ...
```

### Tecnologías y Librerías Utilizadas
 La capa de presentación UI se desarrolla utilizando las siguientes tecnologías y librerías:

- **Angular**: El framework Angular es la base de nuestra capa de presentación. Proporciona una estructura robusta para construir componentes y manejar la lógica de la interfaz de usuario.

- **Angular Material:** Para lograr un diseño moderno y consistente, utilizamos la librería de componentes UI Angular Material. Los componentes se personalizan para cumplir con la estética del proyecto.

- **SCSS Personalizado:** Empleamos estilos personalizados con SCSS para controlar la apariencia visual de la aplicación. La carpeta assets/scss contiene temas y variables que se utilizan para mantener un estilo coherente en todo el proyecto.

### Componentes y Estructura

La estructura de componentes se divide en:

- **Componentes Globales**: Los componentes globales, en `app/core/components`, se diseñan para reutilizarse en varias partes de la aplicación. Son independientes del estilo y la lógica específica de la página.

- **Componentes de Angular Material**: Los componentes de Angular Material se encuentran en `app/material`. Están personalizados para ajustarse al estilo del proyecto y garantizar una integración uniforme.

### Prácticas de Diseño y Experiencia de Usuario

Nuestro diseño se enfoca en la usabilidad y la accesibilidad:

- **Diseño Responsivo**: La interfaz se adapta fluidamente a diferentes tamaños de pantalla y dispositivos.

- **Accesibilidad**: Implementamos características para mejorarla, como contrastes adecuados y navegación con teclado.

- **Consistencia Visual**: Colores, tipografías y elementos visuales se mantienen coherentes, creando una experiencia uniforme.

La capa de presentación UI es altamente personalizable y extensible. Los estilos son modulares y los componentes están diseñados para la reutilización, facilitando la incorporación de nuevas características y adaptación a futuras necesidades.

Esperamos que esta capa de presentación UI brinde una experiencia agradable a los usuarios y ofrezca flexibilidad para el desarrollo continuo.

### Capa de Páginas y Rutas
- Se emplea `lazy loading` con la carga de modulos. 
- Los modulos `-routing.module.ts` contienen las páginas y acceso a las rutas del proyecto.
- Algunas páginas tienen sus propios componentes internos y manejan la lógica de presentación.

### Capa de Datos

- Se implementa el consumo de la **API:** [The Rick and Morty API](https://rickandmortyapi.com/) en su version **REST**.
- La carpeta `utils` contiene funciones generales que son utilizadas en todo el proyecto, con la condición de que sean útiles para al menos dos páginas.
- Dentro de la carpeta `utils` también se encuentran las carpetas `mocks` e `interfaces`.

### Configuración y Gestión

- El archivo `.environment` se proporciona para gestionar las variables de entorno.

## Cómo se Resolvió el Reto

1. **Arquitectura Limpia y Modularidad:** La arquitectura se basa en la división en capas de la Arquitectura Limpia, lo que facilita la separación de las responsabilidades y la independencia entre las diferentes partes del proyecto.
2. **Monorepo:** El proyecto se organiza en un monorepo para mantener unificadas todas las partes y módulos del proyecto.

3. **Consumo de la API:** Se implementa el consumo de la API "The Rick and Morty API" a través de servicios dentro de la carpeta api.

4. **RxJS y Servicios de Estado:** Se emplea RxJS para manejar la reactividad y los servicios de estado (como search.service.ts y theme.service.ts) para manejar el estado global de la aplicación.

5. **Componentes Globales y Material Design:** Los componentes globales se encuentran en la carpeta components, mientras que los componentes basados en Angular Material se encuentran en la carpeta material. Estos componentes son personalizados para ajustarse al estilo del proyecto.

6. **Funciones Útiles y Mocks:** Las funciones de utilidad general se encuentran en general-functions.ts. Los mocks de ejemplo se almacenan en la carpeta mocks para su uso en pruebas.

7. **Interfaces y Tipos:** Las interfaces y tipos se agrupan en la carpeta interfaces para facilitar su acceso y reutilización.

8. **Temas y Estilos:** La carpeta scss en assets contiene temas y estilos globales, y se utiliza el archivo variables.scss para gestionar las variables globales de estilo.

9. **Lazy Loading y Enrutamiento:** Se utiliza el enrutamiento con lazy loading para cargar módulos bajo demanda y mejorar el rendimiento de la aplicación.

10. **Carpeta auth y features:** La carpeta auth y features dentro de layout contiene los módulos de autenticación y características principales de la aplicación.

11. **Configuración de Entorno:** Se incluyen archivos de configuración de entorno (environment.ts y environment.prod.ts) para gestionar variables de entorno.

12. **Principios SOLID:** Se emplean los principios SOLID para lograr un diseño modular, flexible y mantenible.

## Instalación

```bash
npm install
# or
npm i
```

## Comenzando

Primero, ejecuta el servidor de desarrollo:

```bash
ng serve
# or
ng serve -o
```

Abre [http://localhost:4200](http://localhost:4200) en tu navegador para ver el resultado.
