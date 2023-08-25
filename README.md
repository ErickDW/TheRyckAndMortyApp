# The Ryck And Morty App

<p align="center">
  <a href="https://angular.io/" target="blank"><img src="https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg" width="200" alt="Angular logo" /></a>
  <a href="https://rxjs.dev/" target="blank"><img src="https://cdn.worldvectorlogo.com/logos/rxjs-1.svg" width="200" alt="Rxjs logo" /></a>
</p>

<p align="center">
  Explore more about "Rick and Morty" and learn in the process, with "The Ryck And Morty App", a sample project showcasing how to consume an external API. This project allows you to view partial information about each character from the famous series and access additional details by clicking on individual items.
</p>

## Proposed Architecture

The proposed architecture to tackle the challenge is a variant of Clean Architecture that adapts to the project's characteristics. It's designed to separate responsibilities clearly and maintain a high level of modularity and testability. The project structure could look like the following:

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

### Used Technologies and Libraries

The UI presentation layer is developed using the following technologies and libraries:

- **Angular**: The Angular framework serves as the foundation of our presentation layer. It provides a robust structure for building components and handling user interface logic.

- **Angular Material**: To achieve a modern and consistent design, we utilize the Angular Material UI component library. Components are customized to align with the project's aesthetics.

- **Custom SCSS**: Custom styles using SCSS are employed to control the visual appearance of the application. The `assets/scss` folder contains themes and variables used to maintain a consistent style throughout the project.

### Components and Structure

The component structure is divided into:

- **Global Components**: Global components, located in `app/core/components`, are designed for reuse across various parts of the application. They are independent of page-specific style and logic.

- **Angular Material Components**: Angular Material components are found in `app/material`. They are customized to fit the project's style and ensure a seamless integration.

### Design and User Experience Practices

Our design focuses on usability and accessibility:

- **Responsive Design**: The interface smoothly adapts to various screen sizes and devices.

- **Accessibility**: Features are implemented to enhance accessibility, such as appropriate contrasts and keyboard navigation.

- **Visual Consistency**: Colors, typography, and visual elements remain consistent, creating a uniform experience.

The UI presentation layer is highly customizable and extensible. Styles are modular, and components are designed for reusability, facilitating the incorporation of new features and adaptation to future needs.

We hope this UI presentation layer provides an enjoyable user experience and offers flexibility for ongoing development.

### Pages and Routing Layer

- `Lazy loading` is employed with module loading.
- Modules' `-routing.module.ts` files contain the pages and route access of the project.
- Some pages have their own internal components and manage presentation logic.

### Data Layer

- Consumption of the **API:** [The Rick and Morty API](https://rickandmortyapi.com/) in its **REST** version is implemented.
- The `utils` folder contains general functions used throughout the project, provided they are useful for at least two pages.
- The `utils` folder also houses the `mocks` and `interfaces` folders.

### Configuration and Management

- The `.environment` file is provided to manage environment variables.

## How the Challenge was Addressed

1. **Clean Architecture and Modularity**: The architecture is based on the layered approach of Clean Architecture, making it easier to separate responsibilities and maintain independence between different parts of the project.
2. **Monorepo**: The project is organized as a monorepo to keep all parts and modules of the project unified.

3. **API Consumption**: The consumption of the "The Rick and Morty API" is implemented through services in the `api` folder.

4. **RxJS and State Services**: RxJS is used to handle reactivity, and state services (like `search.service.ts` and `theme.service.ts`) manage the global state of the application.

5. **Global Components and Material Design**: Global components are located in the `components` folder, while components based on Angular Material are in the `material` folder. These components are customized to match the project's style.

6. **Utility Functions and Mocks**: General utility functions are in `general-functions.ts`. Example mocks are stored in the `mocks` folder for testing.

7. **Interfaces and Types**: Interfaces and types are grouped in the `interfaces` folder for easy access and reuse.

8. **Themes and Styles**: The `scss` folder in the `assets` directory contains global themes and styles, and the `variables.scss` file manages global style variables.

9. **Lazy Loading and Routing**: Lazy loading is used with routing to load modules on demand and improve application performance.

10. **`auth` and `features` Folders**: The `auth` and `features` folders within the `layout` folder contain the authentication and main feature modules of the application.

11. **Environment Configuration**: Environment configuration files (`environment.ts` and `environment.prod.ts`) are included to manage environment variables.

12. **SOLID Principles**: SOLID principles are employed to achieve a modular, flexible, and maintainable design.

## Installation
```bash
npm install
# or
npm i
```

## Starting

Primero, ejecuta el servidor de desarrollo:

```bash
ng serve
# or
ng serve -o
```

Abre [http://localhost:4200](http://localhost:4200) en tu navegador para ver el resultado.

