# Control de Gastos y Presupuestos

## Descripción

Este proyecto es una aplicación para el control de gastos y presupuestos, desarrollada con **TypeScript**. Utiliza **useReducer** y **Context API** para gestionar un estado global sin dependencias, lo que permite evitar el paso de props a través de múltiples componentes. La aplicación incluye funcionalidades como el filtrado de gastos por categoría, un calendario para registrar fechas de gastos, gráficos para visualizar datos y mucho más.

## Tecnologías Utilizadas

- **TypeScript**: Un superconjunto de JavaScript que agrega tipos estáticos.
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **useReducer**: Hook de React para manejar el estado complejo.
- **Context API**: Proporciona una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente a cada nivel.

### Librerías Adicionales

- [react-circular-progressbar](https://www.npmjs.com/package/react-circular-progressbar): Para mostrar el progreso de los gastos de manera visual.
- [react-date-picker](https://www.npmjs.com/package/react-date-picker): Para seleccionar fechas de gastos fácilmente.
- [react-swipeable-list](https://www.npmjs.com/package/react-swipeable-list): Para manejar listas de gastos que se pueden deslizar para acciones adicionales.

## Funcionalidades

- **Filtrado de gastos por categoría**: Organiza y visualiza tus gastos por distintas categorías.
- **Calendario de fechas de gastos**: Registra y consulta tus gastos en un calendario.
- **Gráficas**: Visualiza tus gastos y presupuestos de forma gráfica.
- **Estado global**: Utiliza Context API para un manejo eficiente del estado en toda la aplicación.